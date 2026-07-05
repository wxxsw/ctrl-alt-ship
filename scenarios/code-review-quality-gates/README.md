# Code Review and Quality Gates

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when AI-generated work needs review before it becomes maintenance debt.

## What this solves

AI can produce a large diff that looks plausible. Reviewers need a way to check whether the change matches the task, preserves behavior, and includes enough evidence.

This scenario helps turn review from "read every line and hope" into a more structured pass.

## Use it when

- AI-generated diffs are large or touch shared code.
- Reviewers need a clearer merge bar.
- Security, dependency, or architecture risk is involved.
- The plan, code, and tests need to be checked together.

## Mini tutorial

1. Compare the diff with the original task.
   Start with intent. Did the change solve the right problem?

2. Look for unexpected scope.
   New dependencies, broad rewrites, unrelated formatting, and hidden behavior changes deserve attention.

3. Check tests and evidence.
   A generated diff without verification is still unfinished work.

4. Review risky areas manually.
   Permissions, billing, auth, data migrations, and shared abstractions should not be rubber-stamped.

5. Leave review notes tied to behavior.
   "This breaks non-admin users" is more useful than "this looks suspicious".

## Example review checklist

```md
Task match:
- Does the diff implement the accepted task?
- Are non-goals respected?

Risk:
- Auth, permissions, billing, data, or migrations touched?
- New dependency added?

Evidence:
- Tests run?
- Manual path checked?
- Screenshots, logs, trace, or CI linked?
```

## Common paths

- AI-assisted PR review.
- Security and dependency review.
- Test coverage review.
- Architecture review.
- Merge readiness checklist.

## Tool fit

AI review tools are useful for first-pass comments and missed patterns. They do not replace code ownership. Static analysis and CI are better for deterministic checks. Humans still need to review intent, product behavior, and risk.

## Next scenarios

- If the task is unclear, go to [Requirements to Tasks](../requirements-to-tasks/README.md).
- If the change needs proof, go to [Automated Verification](../automated-verification/README.md).
