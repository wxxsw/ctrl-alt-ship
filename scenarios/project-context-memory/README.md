# Project Context Memory

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when AI keeps missing how your project works.

## What this solves

AI assistants are usually good at reading files, but bad at knowing which facts matter. If every session starts with the same setup explanation, the project needs a small amount of durable context.

The goal is not to document everything. The goal is to give the next session enough orientation to avoid obvious mistakes.

## Use it when

- Every new session needs the same setup explanation.
- AI misses local style, architecture, or review expectations.
- Project knowledge is scattered across chats, tickets, docs, and people's heads.
- New contributors need a quicker way to understand the repo.

## Mini tutorial

1. List repeated explanations.
   Write down the last five things you had to tell an assistant or new teammate.

2. Keep only stable context.
   Setup commands, test commands, project layout, naming conventions, and risky areas are usually stable. One-off task details belong in the task brief.

3. Put the short guide near the repo.
   It can be a README section, a project guide, or a linked doc. Keep it short enough that someone will actually read it.

4. Link deeper material.
   Do not copy every architecture note into the guide. Link to the source of truth.

5. Update it after repeated mistakes.
   If the same mistake happens twice, either the guide is missing something or the task brief is unclear.

## Example project guide

```md
Local commands:
- Install: pnpm install
- Test: pnpm test
- Typecheck: pnpm typecheck

Project map:
- app/: product screens
- api/: server routes
- db/: schema and migrations

Conventions:
- Keep UI state in page-level hooks.
- Add tests for permission changes.

Careful:
- Billing and workspace membership need extra review.
```

## Common paths

- Repo guide for AI-assisted work.
- Lightweight codebase map.
- Architecture decision notes.
- Contributor onboarding notes.
- Personal notes that later become team docs.

## Tool fit

Use the simplest place that future readers will check. A repo guide works for shared conventions. Personal notes work for research. Architecture decisions deserve durable docs with review history.

## Next scenarios

- If the task itself is unclear, go to [Requirements to Tasks](../requirements-to-tasks/README.md).
- If decisions need to be preserved for humans too, go to [Documentation and Knowledge](../documentation-knowledge/README.md).
