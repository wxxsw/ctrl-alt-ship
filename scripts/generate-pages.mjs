import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const scenarioRoot = path.join(root, 'scenarios');
const siteRoot = path.join(root, 'site');

const scenarioMeta = [
  {
    slug: 'requirements-to-tasks',
    en: {
      card: 'Turn a vague request into something an engineer can safely start.',
    },
    zh: {
      card: '把模糊需求收成工程师可以安全开工的一块任务。',
    },
  },
  {
    slug: 'project-context-memory',
    en: {
      card: 'Stop repeating the same setup, structure, and convention notes.',
    },
    zh: {
      card: '少一点重复解释，让 AI 和新人更快理解项目。',
    },
  },
  {
    slug: 'coding-and-refactoring',
    en: {
      card: 'Use AI for implementation and refactoring without losing control.',
    },
    zh: {
      card: '让 AI 帮忙写代码，但改动仍然能被人 review。',
    },
  },
  {
    slug: 'debugging',
    en: {
      card: 'Move from symptom to evidence before changing code.',
    },
    zh: {
      card: '先从现象走到证据，再动手修。',
    },
  },
  {
    slug: 'automated-verification',
    en: {
      card: 'Turn “seems fine” into repeatable proof.',
    },
    zh: {
      card: '把“看起来没问题”变成可重复证据。',
    },
  },
  {
    slug: 'code-review-quality-gates',
    en: {
      card: 'Review AI-assisted work before it becomes maintenance debt.',
    },
    zh: {
      card: '在 AI-assisted work 变成维护债之前先拦一下。',
    },
  },
  {
    slug: 'documentation-knowledge',
    en: {
      card: 'Rescue decisions and lessons from chat before they disappear.',
    },
    zh: {
      card: '别让决策和经验继续散落在聊天里。',
    },
  },
  {
    slug: 'release-change-management',
    en: {
      card: 'Ship changes with notes, rollout signals, and rollback thinking.',
    },
    zh: {
      card: '把发布、灰度、迁移和回滚想清楚。',
    },
  },
  {
    slug: 'incident-response',
    en: {
      card: 'Turn alerts, logs, dashboards, and chat into one shared picture.',
    },
    zh: {
      card: '把告警、日志、dashboard 和聊天整理成一张事故图景。',
    },
  },
  {
    slug: 'team-ai-governance',
    en: {
      card: 'Set practical boundaries for AI tools, data, review, and ownership.',
    },
    zh: {
      card: '给 AI 工具、数据、review 和 ownership 设清边界。',
    },
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function slugTitle(slug, lang) {
  const file = lang === 'zh'
    ? path.join(scenarioRoot, slug, 'README.zh-CN.md')
    : path.join(scenarioRoot, slug, 'README.md');
  const text = fs.readFileSync(file, 'utf8');
  const match = text.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : slug;
}

function readMarkdown(slug, lang) {
  const file = lang === 'zh'
    ? path.join(scenarioRoot, slug, 'README.zh-CN.md')
    : path.join(scenarioRoot, slug, 'README.md');
  return fs.readFileSync(file, 'utf8');
}

function readHomeMarkdown(lang) {
  const file = lang === 'zh'
    ? path.join(root, 'README.zh-CN.md')
    : path.join(root, 'README.md');
  return fs.readFileSync(file, 'utf8');
}

function splitMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const title = (lines.find((line) => line.startsWith('# ')) || '# Untitled').replace(/^#\s+/, '').trim();
  const bodyLines = [];
  let skippedTitle = false;
  for (const line of lines) {
    if (!skippedTitle && line.startsWith('# ')) {
      skippedTitle = true;
      continue;
    }
    if (/^\[English\]\(README\.md\)/.test(line) || /^\[English\]\(README\.md\) \|/.test(line)) {
      continue;
    }
    if (/^\[English\]\(README\.md\) \| 简体中文/.test(line)) {
      continue;
    }
    if (/^\[English\]\(README\.md\) \| \[简体中文\]\(README\.zh-CN\.md\)/.test(line)) {
      continue;
    }
    bodyLines.push(line);
  }
  const introIndex = bodyLines.findIndex((line) => line.trim() && !line.startsWith('#') && !line.startsWith('```'));
  const intro = introIndex >= 0 ? bodyLines[introIndex] : '';
  const body = bodyLines.filter((_, index) => index !== introIndex).join('\n').trim();
  return { title, intro, body };
}

function resolveScenarioHref(href, lang) {
  if (/^(https?:|mailto:|#)/.test(href)) {
    return href;
  }
  const match = href.match(/^\.\.\/([^/]+)\/README(\.zh-CN)?\.md(#[^)]+)?$/);
  if (match) {
    const targetSlug = match[1];
    const hash = match[3] || '';
    return lang === 'zh' ? `../${targetSlug}/zh-CN.html${hash}` : `../${targetSlug}/${hash}`;
  }
  if (href === 'README.md') {
    return lang === 'zh' ? './' : './';
  }
  if (href === 'README.zh-CN.md') {
    return 'zh-CN.html';
  }
  return href;
}

function resolveHomeHref(href, lang) {
  if (/^(https?:|mailto:|#)/.test(href)) {
    return href;
  }
  const scenarioMatch = href.match(/^scenarios\/([^/]+)\/README(\.zh-CN)?\.md(#[^)]+)?$/);
  if (scenarioMatch) {
    const targetSlug = scenarioMatch[1];
    const hash = scenarioMatch[3] || '';
    return lang === 'zh' ? `scenarios/${targetSlug}/zh-CN.html${hash}` : `scenarios/${targetSlug}/${hash}`;
  }
  if (href === 'README.md') {
    return lang === 'zh' ? 'index.html' : 'index.html';
  }
  if (href === 'README.zh-CN.md') {
    return 'zh-CN.html';
  }
  return href;
}

function inlineMarkdown(value, lang) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    return `<a href="${escapeHtml(resolveScenarioHref(href, lang))}">${label}</a>`;
  });
  return text;
}

function inlineHomeMarkdown(value, lang) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    return `<a href="${escapeHtml(resolveHomeHref(href, lang))}">${label}</a>`;
  });
  return text;
}

function closeLists(state, output) {
  if (state.listType) {
    output.push(`</${state.listType}>`);
    state.listType = null;
  }
}

function flushParagraph(state, output, lang) {
  if (state.paragraph.length) {
    output.push(`<p>${inlineMarkdown(state.paragraph.join(' '), lang)}</p>`);
    state.paragraph = [];
  }
}

function markdownToHtml(markdown, lang) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  const state = {
    paragraph: [],
    listType: null,
    fence: null,
    fenceLines: [],
  };

  function flushFence() {
    const raw = state.fenceLines.join('\n');
    if (state.fence === 'mermaid') {
      output.push(`<pre class="mermaid">${escapeHtml(raw)}</pre>`);
    } else {
      output.push(`<pre><code>${escapeHtml(raw)}</code></pre>`);
    }
    state.fence = null;
    state.fenceLines = [];
  }

  for (const line of lines) {
    const fence = line.match(/^```(\w+)?/);
    if (fence) {
      if (state.fence) {
        flushFence();
      } else {
        flushParagraph(state, output, lang);
        closeLists(state, output);
        state.fence = fence[1] || 'plain';
        state.fenceLines = [];
      }
      continue;
    }

    if (state.fence) {
      state.fenceLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph(state, output, lang);
      closeLists(state, output);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushParagraph(state, output, lang);
      closeLists(state, output);
      const level = Math.min(heading[1].length, 4);
      output.push(`<h${level}>${inlineMarkdown(heading[2].trim(), lang)}</h${level}>`);
      continue;
    }

    const unordered = line.match(/^\s*-\s+(.+)$/);
    if (unordered) {
      flushParagraph(state, output, lang);
      if (state.listType !== 'ul') {
        closeLists(state, output);
        output.push('<ul>');
        state.listType = 'ul';
      }
      output.push(`<li>${inlineMarkdown(unordered[1], lang)}</li>`);
      continue;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      flushParagraph(state, output, lang);
      if (state.listType !== 'ol') {
        closeLists(state, output);
        output.push('<ol>');
        state.listType = 'ol';
      }
      output.push(`<li>${inlineMarkdown(ordered[1], lang)}</li>`);
      continue;
    }

    closeLists(state, output);
    state.paragraph.push(line.trim());
  }

  flushParagraph(state, output, lang);
  closeLists(state, output);
  if (state.fence) {
    flushFence();
  }

  return output.join('\n');
}

function homeMarkdownToHtml(markdown, lang) {
  const lines = markdown.split(/\r?\n/);
  const output = [];
  const state = {
    paragraph: [],
    listType: null,
    fence: null,
    fenceLines: [],
  };

  function flushFence() {
    const raw = state.fenceLines.join('\n');
    output.push(`<pre><code>${escapeHtml(raw)}</code></pre>`);
    state.fence = null;
    state.fenceLines = [];
  }

  function flushHomeParagraph() {
    if (state.paragraph.length) {
      output.push(`<p>${inlineHomeMarkdown(state.paragraph.join(' '), lang)}</p>`);
      state.paragraph = [];
    }
  }

  for (const line of lines) {
    const fence = line.match(/^```(\w+)?/);
    if (fence) {
      if (state.fence) {
        flushFence();
      } else {
        flushHomeParagraph();
        closeLists(state, output);
        state.fence = fence[1] || 'plain';
        state.fenceLines = [];
      }
      continue;
    }

    if (state.fence) {
      state.fenceLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushHomeParagraph();
      closeLists(state, output);
      continue;
    }

    const heading = line.match(/^(#{2,4})\s+(.+)$/);
    if (heading) {
      flushHomeParagraph();
      closeLists(state, output);
      const level = Math.min(heading[1].length, 4);
      output.push(`<h${level}>${inlineHomeMarkdown(heading[2].trim(), lang)}</h${level}>`);
      continue;
    }

    const unordered = line.match(/^\s*-\s+(.+)$/);
    if (unordered) {
      flushHomeParagraph();
      if (state.listType !== 'ul') {
        closeLists(state, output);
        output.push('<ul>');
        state.listType = 'ul';
      }
      output.push(`<li>${inlineHomeMarkdown(unordered[1], lang)}</li>`);
      continue;
    }

    const ordered = line.match(/^\s*\d+\.\s+(.+)$/);
    if (ordered) {
      flushHomeParagraph();
      if (state.listType !== 'ol') {
        closeLists(state, output);
        output.push('<ol>');
        state.listType = 'ol';
      }
      output.push(`<li>${inlineHomeMarkdown(ordered[1], lang)}</li>`);
      continue;
    }

    closeLists(state, output);
    state.paragraph.push(line.trim());
  }

  flushHomeParagraph();
  closeLists(state, output);
  if (state.fence) {
    flushFence();
  }

  return output.join('\n');
}

function parseHomeReadme(lang) {
  const markdown = readHomeMarkdown(lang);
  const lines = markdown.split(/\r?\n/);
  const title = (lines.find((line) => line.startsWith('# ')) || '# Ctrl Alt Ship').replace(/^#\s+/, '').trim();
  const intro = [];
  const sections = [];
  let current = null;
  let inIntro = true;

  for (const line of lines) {
    if (line.startsWith('# ')) {
      continue;
    }
    if (line.startsWith('> ') || /^\[English\]\(README\.md\)/.test(line) || /^\[.*简体中文/.test(line)) {
      continue;
    }
    const heading = line.match(/^##\s+(.+)$/);
    if (heading) {
      inIntro = false;
      current = { title: heading[1].trim(), lines: [] };
      sections.push(current);
      continue;
    }
    if (inIntro) {
      if (line.trim()) {
        intro.push(line.trim());
      }
      continue;
    }
    if (current) {
      current.lines.push(line);
    }
  }

  const situationSection = sections.find((section) => {
    return /Start with your situation|从你的处境开始/.test(section.title);
  });
  const howSection = sections.find((section) => {
    return /How to use this repo|怎么用/.test(section.title);
  });
  const scenarioRows = [];

  for (const line of situationSection?.lines || []) {
    const row = line.match(/^\|\s*(.+?)\s*\|\s*\[([^\]]+)\]\(([^)]+)\)\s*\|$/);
    if (!row || /^-+$/.test(row[1].trim()) || /Situation|当前处境/.test(row[1])) {
      continue;
    }
    const slugMatch = row[3].match(/^scenarios\/([^/]+)\/README/);
    if (!slugMatch) {
      continue;
    }
    scenarioRows.push({
      situation: row[1].trim(),
      title: row[2].trim(),
      href: resolveHomeHref(row[3].trim(), lang),
      slug: slugMatch[1],
    });
  }

  return {
    title,
    intro,
    scenarios: scenarioRows,
    howTitle: howSection?.title || (lang === 'zh' ? '怎么用' : 'How to use it'),
    howHtml: homeMarkdownToHtml((howSection?.lines || []).join('\n').trim(), lang),
  };
}

function homePage(lang) {
  const isZh = lang === 'zh';
  const home = parseHomeReadme(lang);
  const otherHref = isZh ? 'index.html' : 'zh-CN.html';
  const introHtml = home.intro.map((line) => inlineHomeMarkdown(line, lang)).join(' ');
  const scenarioCards = home.scenarios.map((item) => {
    const title = escapeHtml(item.title);
    const situation = inlineHomeMarkdown(item.situation, lang);
    const href = escapeHtml(item.href);
    return `<a class="card" href="${href}">
              <h3>${title}</h3>
              <p>${situation}</p>
            </a>`;
  }).join('\n');

  return `<!doctype html>
<html lang="${isZh ? 'zh-CN' : 'en'}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(home.title)}</title>
    <meta name="description" content="${escapeHtml(home.intro.join(' '))}">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="page">
      <header class="topbar">
        <a class="brand" href="${isZh ? 'zh-CN.html' : 'index.html'}">Ctrl Alt Ship</a>
        <nav class="nav" aria-label="Primary">
          <a href="#scenarios">${isZh ? '场景' : 'Scenarios'}</a>
          <a href="#how">${isZh ? '怎么用' : 'How to use it'}</a>
          <a href="${otherHref}">${isZh ? 'English' : '简体中文'}</a>
        </nav>
      </header>

      <main>
        <section class="hero tutorial-hero">
          <div>
            <p class="eyebrow">${isZh ? '从真实工程工作出发' : 'AI engineering, from the work outward'}</p>
            <h1>Ctrl Alt Ship</h1>
            <p class="lede">${introHtml}</p>
            <div class="actions">
              <a class="button" href="#scenarios">${isZh ? '查看场景' : 'Browse scenarios'}</a>
              <a class="button secondary" href="${otherHref}">${isZh ? 'Read in English' : 'Read in Chinese'}</a>
            </div>
          </div>
          <img class="hero-map" src="assets/scenario-route-map.svg" alt="${isZh ? '场景路线图' : 'Scenario route map'}">
        </section>

        <section class="section" id="scenarios">
          <h2>${isZh ? '场景地图' : 'Scenario map'}</h2>
          <p>${isZh ? '选择最贴近当前工作的场景。每个场景都会打开成一份独立教程，而不是一个工具列表。' : 'Pick the situation that matches your current work. Each scenario opens as a standalone tutorial instead of a tool list.'}</p>
          <div class="grid">
            ${scenarioCards}
          </div>
        </section>

        <section class="section" id="how">
          <h2>${escapeHtml(home.howTitle)}</h2>
          <div class="home-copy">
            ${home.howHtml}
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>${isZh ? 'Ctrl Alt Ship 是一张面向 AI 辅助工程工作的开放场景地图。' : 'Ctrl Alt Ship is an open scenario map for practical AI-assisted engineering work.'}</p>
      </footer>
    </div>
  </body>
</html>
`;
}

function navLinks(lang, currentSlug) {
  return scenarioMeta.map((item) => {
    const title = slugTitle(item.slug, lang);
    const href = lang === 'zh' ? `../${item.slug}/zh-CN.html` : `../${item.slug}/`;
    const active = item.slug === currentSlug ? ' aria-current="page"' : '';
    return `<a href="${href}"${active}>${escapeHtml(title)}</a>`;
  }).join('\n');
}

function scenarioPage(slug, lang) {
  const markdown = readMarkdown(slug, lang);
  const { title, intro, body } = splitMarkdown(markdown);
  const isZh = lang === 'zh';
  const otherHref = isZh ? './' : 'zh-CN.html';
  const homeHref = isZh ? '../../zh-CN.html' : '../../index.html';
  const sourceHref = `https://github.com/wxxsw/ctrl-alt-ship/blob/main/scenarios/${slug}/${isZh ? 'README.zh-CN.md' : 'README.md'}`;
  const bodyHtml = markdownToHtml(body, lang);

  return `<!doctype html>
<html lang="${isZh ? 'zh-CN' : 'en'}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(title)} | Ctrl Alt Ship</title>
    <meta name="description" content="${escapeHtml(intro)}">
    <link rel="stylesheet" href="../../styles.css">
  </head>
  <body>
    <div class="page">
      <header class="topbar">
        <a class="brand" href="${homeHref}">Ctrl Alt Ship</a>
        <nav class="nav" aria-label="Primary">
          <a href="${homeHref}">${isZh ? '首页' : 'Home'}</a>
          <a href="${otherHref}">${isZh ? 'English' : '简体中文'}</a>
        </nav>
      </header>

      <main class="doc-layout">
        <aside class="side-nav" aria-label="${isZh ? '场景导航' : 'Scenario navigation'}">
          <strong>${isZh ? '场景' : 'Scenarios'}</strong>
          ${navLinks(lang, slug)}
        </aside>

        <article class="doc-body">
          <p class="eyebrow">${isZh ? '场景教程' : 'Scenario guide'}</p>
          <h1>${escapeHtml(title)}</h1>
          <p class="lede">${inlineMarkdown(intro, lang)}</p>
          <div class="doc-actions">
            <a class="button secondary" href="${sourceHref}">${isZh ? '查看源 README' : 'View source README'}</a>
          </div>
          ${bodyHtml}
        </article>
      </main>

      <footer class="footer">
        <p><a href="${homeHref}">${isZh ? '回到首页场景索引' : 'Back to scenario index'}</a></p>
      </footer>
    </div>
    <script type="module">
      import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
      mermaid.initialize({ startOnLoad: true, theme: 'neutral' });
    </script>
  </body>
</html>
`;
}

function redirectPage({ lang, title, target }) {
  return `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=${target}">
    <title>${escapeHtml(title)} | Ctrl Alt Ship</title>
    <link rel="canonical" href="${target}">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <main class="page redirect-page">
      <h1>${escapeHtml(title)}</h1>
      <p><a href="${target}">${lang === 'zh-CN' ? '如果没有自动跳转，点这里回到首页场景索引。' : 'If you are not redirected, return to the homepage scenario index.'}</a></p>
    </main>
  </body>
</html>
`;
}

fs.writeFileSync(path.join(siteRoot, 'index.html'), homePage('en'));
fs.writeFileSync(path.join(siteRoot, 'zh-CN.html'), homePage('zh'));

for (const item of scenarioMeta) {
  const outDir = path.join(siteRoot, 'scenarios', item.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), scenarioPage(item.slug, 'en'));
  fs.writeFileSync(path.join(outDir, 'zh-CN.html'), scenarioPage(item.slug, 'zh'));
}

fs.writeFileSync(path.join(siteRoot, 'scenarios.html'), redirectPage({
  lang: 'en',
  title: 'Scenario index moved',
  target: 'index.html#scenarios',
}));

fs.writeFileSync(path.join(siteRoot, 'scenarios-zh-CN.html'), redirectPage({
  lang: 'zh-CN',
  title: '场景索引已移到首页',
  target: 'zh-CN.html#scenarios',
}));

console.log(`Generated ${scenarioMeta.length * 2 + 2} pages from README files.`);
