import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const siteRoot = path.join(root, 'site');
const htmlFiles = [];
const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (entry.isFile() && entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}

function isExternal(value) {
  return /^(https?:|mailto:|tel:|data:|javascript:)/i.test(value);
}

function htmlIds(file) {
  const html = fs.readFileSync(file, 'utf8');
  const ids = new Set();
  for (const match of html.matchAll(/\s(?:id|name)="([^"]+)"/g)) {
    ids.add(match[1]);
  }
  return ids;
}

function resolveLocalTarget(fromFile, rawValue) {
  const [withoutHash, hash = ''] = rawValue.split('#');
  const withoutQuery = withoutHash.split('?')[0];
  let target = withoutQuery;

  if (!target) {
    return { file: fromFile, hash };
  }

  if (target.startsWith('/')) {
    target = target.slice(1);
    target = path.join(siteRoot, target);
  } else {
    target = path.resolve(path.dirname(fromFile), decodeURIComponent(target));
  }

  if (target.endsWith(path.sep) || rawValue.split('#')[0].endsWith('/')) {
    target = path.join(target, 'index.html');
  } else if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    target = path.join(target, 'index.html');
  }

  return { file: target, hash };
}

walk(siteRoot);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const values = [
    ...html.matchAll(/\s(?:href|src)="([^"]+)"/g),
  ].map((match) => match[1]);

  for (const value of values) {
    if (isExternal(value)) {
      continue;
    }
    const { file: targetFile, hash } = resolveLocalTarget(file, value);
    if (!targetFile.startsWith(siteRoot)) {
      failures.push(`${path.relative(root, file)} -> ${value} leaves site/`);
      continue;
    }
    if (!fs.existsSync(targetFile) || !fs.statSync(targetFile).isFile()) {
      failures.push(`${path.relative(root, file)} -> ${value} missing`);
      continue;
    }
    if (hash && targetFile.endsWith('.html')) {
      const ids = htmlIds(targetFile);
      if (!ids.has(hash)) {
        failures.push(`${path.relative(root, file)} -> ${value} missing #${hash}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files.`);
