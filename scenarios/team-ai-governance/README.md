# Team AI Governance

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when a team is already using AI tools and needs shared boundaries.

## What this scenario is

This scenario helps teams define practical AI usage boundaries without turning governance into theater. The risk is not simply that AI is used. The risk is that tools gain access to repos, tickets, terminals, browsers, logs, and customer data without shared expectations.

Good governance gives teams speed with clearer ownership. It says what tools can access, what humans must approve, what evidence belongs in AI-assisted work, and how the team learns from mistakes.

## What you should end with

- A short team AI usage guide with data, tool, write-access, and review rules.
- A lightweight approval path for higher-risk tools and workflows.
- A shared PR and incident standard for AI-assisted work.

## Use it when

- People use different AI tools in inconsistent ways.
- AI tools can access repos, tickets, terminals, browsers, logs, or sensitive data.
- Reviewers are unsure what evidence AI-assisted work should include.
- The team wants more speed but less accidental risk.
- A customer, security, legal, or compliance question has surfaced.

## Avoid starting here

- Nobody is using AI in real workflows yet. Start with small pilots instead of policy.
- The team wants a huge policy before understanding actual usage.
- The issue is one unclear task or PR. Use the relevant scenario instead.
- The policy would be impossible to enforce or audit.

## Decision map

- If the tool is read-only and uses public data, keep rules light.
- If the tool reads private code or tickets, define data boundaries and account ownership.
- If the tool can write code, run commands, create PRs, or call external systems, require review and approval rules.
- If the tool sees customer data, apply data classification, redaction, vendor review, and audit expectations.
- If AI output affects production or customers, require evidence and human ownership.

## Mainstream solution paths

### Usage policy and data classification

Recommended when: teams handling private code, customer data, regulated data, or vendor tools.

Avoid when: writing a policy nobody can remember or apply during real work.

Common tools and practices: team policy docs, data classification tables, vendor review checklists, security questionnaires.

### Tool access and permissions

Recommended when: coding agents, browser agents, repo integrations, ticket integrations, and terminal access.

Avoid when: granting broad write access because setup is easier.

Common tools and practices: SSO, role-based access, GitHub permissions, sandboxing, audit logs, branch protection.

### AI-assisted work standard

Recommended when: PRs, incident notes, docs, tests, and generated code that AI helped produce.

Avoid when: requiring people to disclose every autocomplete while ignoring high-risk agentic edits.

Common tools and practices: PR templates, review checklists, evidence requirements, CODEOWNERS.

### Learning loop

Recommended when: teams that want governance to improve from real usage rather than static policy.

Avoid when: treating governance as a one-time document.

Common tools and practices: retros, incident reviews, tool audits, prompt and workflow libraries, enablement sessions.

## Practical workflow

1. Inventory current AI tools, users, data access, write access, and external integrations.
2. Classify data: public, internal, confidential, customer, regulated, secrets.
3. Define read boundaries and write boundaries separately.
4. Set human approval rules for code changes, external writes, production settings, and customer data.
5. Define PR evidence for AI-assisted work: task intent, verification, known limits, and reviewer ownership.
6. Keep local personal agent notes and secrets out of committed public files.
7. Review rules after real incidents, near misses, or workflow changes.

## Example

```md
Team AI usage guide:

AI may:
- Read public docs and approved repository code.
- Draft task briefs, tests, documentation, and PR summaries.
- Suggest code changes on a branch.

AI needs human approval before:
- Pushing code.
- Running commands that affect external systems.
- Changing production settings.
- Using customer data or private logs.

Every AI-assisted PR should include:
- Task intent.
- Verification evidence.
- Known limitations.
- Human owner for the final diff.
```

## Verification checklist

- Do people know which data can and cannot go into AI tools?
- Are read access and write access treated differently?
- Are high-risk actions gated by human approval?
- Do AI-assisted PRs include evidence and ownership?
- Can the team update rules based on incidents or near misses?

## Common failure modes

- A policy bans or allows AI in the abstract but does not match real workflows.
- Personal agent instructions or secrets are committed to public repos.
- AI tools get broad repo or production access without auditability.
- Reviewers cannot tell which parts of a PR were generated or verified.
- Governance blocks low-risk work but misses high-risk data exposure.

## When this becomes team practice

Team practice should start small: document actual tools and workflows, then set boundaries around data and write access. Expand only when real usage demands it.

Governance should connect to other scenarios. Requirements define what AI should do, verification proves it worked, review protects merge, and release management controls production exposure.

## Related scenarios

- [Project Context Memory](../project-context-memory/README.md)
- [Code Review and Quality Gates](../code-review-quality-gates/README.md)
- [Release and Change Management](../release-change-management/README.md)
