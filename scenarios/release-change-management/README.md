# Release and Change Management

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when a change needs release notes, rollout steps, or rollback thinking.

## What this solves

AI can summarize commits quickly, but release work is more than summarization. A good release note tells users what changed. A good rollout plan tells the team what to watch. A good rollback note tells everyone how to recover.

This scenario helps connect code changes to shipping decisions.

## Use it when

- A change affects users, data, billing, permissions, or infrastructure.
- Release notes need to be pulled from commits or PRs.
- Migration or rollback would be painful if planned late.
- A feature needs staged rollout or communication.

## Mini tutorial

1. Identify the audience.
   Users, support, sales, operators, and engineers need different levels of detail.

2. Summarize the change from merged work.
   Start from PRs and commits, then verify every claim against the actual diff.

3. Name the rollout path.
   Is it instant, behind a flag, staged by account, or tied to a migration?

4. Write the rollback path.
   Even a simple "revert this PR" is better than discovering the path during an incident.

5. Add watch signals.
   Name logs, dashboards, support tickets, or metrics that would show trouble.

## Example release note

```md
User-facing change:
Workspace admins can invite teammates from settings.

Rollout:
Enabled for internal workspaces first, then all workspaces after 24 hours.

Watch:
- Invite creation errors
- Email delivery failures
- Support tickets mentioning missing invites

Rollback:
Disable workspace_invites flag.
```

## Common paths

- Release notes.
- Migration planning.
- Feature flags.
- Rollout checklist.
- Rollback planning.

## Tool fit

Use AI to draft summaries from PRs and commits. Use humans to verify claims, customer impact, and rollback risk. Use feature flag and deployment tools when the release needs staged exposure.

## Next scenarios

- If the change is not verified yet, go to [Automated Verification](../automated-verification/README.md).
- If the change needs review first, go to [Code Review and Quality Gates](../code-review-quality-gates/README.md).
