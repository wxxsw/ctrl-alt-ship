# Coding and Refactoring

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when AI can help write or move code, but you still need control over the change.

## What this solves

AI is useful for implementation speed, repetitive edits, and migration work. It is also good at making a change larger than it needs to be.

This scenario helps you keep AI-assisted coding reviewable.

## Use it when

- A change touches several related files.
- A refactor has mechanical edits and judgment calls.
- A migration or upgrade could break behavior.
- You want smaller checkpoints during AI-assisted coding.

## Mini tutorial

1. Start from a bounded task.
   If the task cannot fit in a short paragraph, split it before coding.

2. Ask for a plan before edits.
   The plan should name likely files, risky areas, and verification.

3. Work in checkpoints.
   A checkpoint should be small enough that a reviewer can understand what changed.

4. Verify after each meaningful step.
   Use existing tests, typechecks, lint, or a small smoke check.

5. Review the final diff against the original task.
   The most important question is not "does the code look nice?" It is "did it solve the intended problem without extra changes?"

## Example workflow

```md
Task:
Move notification preference logic from the React component into a small hook.

Plan:
- Identify current state and API calls.
- Extract hook without changing behavior.
- Update component to use the hook.
- Run existing notification tests.
- Manually smoke test the settings page.
```

## Common paths

- Feature implementation.
- Mechanical refactor.
- Framework migration.
- Dependency upgrade.
- Code generation with human review.

## Tool fit

Use a repo-aware coding assistant when the change needs file navigation and edits. Use editor-native help for smaller local changes. Use scripts or codemods for large mechanical changes where deterministic transformation is safer than free-form generation.

## Next scenarios

- If the request is unclear, go to [Requirements to Tasks](../requirements-to-tasks/README.md).
- If behavior needs proof, go to [Automated Verification](../automated-verification/README.md).
