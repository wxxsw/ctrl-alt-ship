# Team AI Governance

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when a team is already using AI tools and needs shared boundaries.

## What this solves

Teams often adopt AI tool by tool. One person uses a coding agent, another connects a browser tool, another pastes production logs into a chat. The risk is not that AI exists. The risk is that nobody knows the boundary.

This scenario helps a team define enough shared expectations to move faster without avoidable surprises.

## Use it when

- People are using different AI tools in different ways.
- AI tools can access repos, tickets, terminals, browsers, or sensitive data.
- Reviewers are unsure what evidence AI-assisted work should include.
- The team needs speed without avoidable risk.

## Mini tutorial

1. Inventory current AI use.
   List tools, data access, write access, and who uses them.

2. Define data boundaries.
   Say what can be pasted, what can be read, and what must stay out.

3. Define write boundaries.
   Separate read-only assistance from tools that can edit code, create PRs, run commands, or change external systems.

4. Set review expectations.
   AI-assisted work should still show task intent, diff, and verification evidence.

5. Revisit after real incidents or misses.
   Governance should follow actual workflow, not imagined policy.

## Example team note

```md
AI may:
- Read public docs and repository code.
- Draft task briefs, tests, and PR summaries.

AI needs human approval before:
- Pushing code.
- Changing production settings.
- Using customer data.

Every AI-assisted PR should include:
- Task summary.
- Verification evidence.
- Known limitations.
```

## Common paths

- Data and privacy boundaries.
- Tool permission levels.
- PR ownership.
- Approved integrations.
- Team playbooks.

## Tool fit

Governance usually starts as a short team note. Add platform controls, permissions, and audit trails only where the workflow has real risk.

## Next scenarios

- If the problem is repo context, go to [Project Context Memory](../project-context-memory/README.md).
- If the issue is merge confidence, go to [Code Review and Quality Gates](../code-review-quality-gates/README.md).
