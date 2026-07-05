# Requirements to Tasks

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when a request is real, but still too vague for an engineer or AI assistant to start safely.

## What this solves

Most AI coding failures start before code. The request sounds clear in conversation, then the implementation drifts because nobody wrote down the behavior, boundaries, or acceptance criteria.

This scenario helps you turn loose intent into a small piece of work that can be reviewed.

## Use it when

- A request can be interpreted in several ways.
- Several people need to agree on what "done" means.
- The work may touch product behavior, design, data, permissions, or rollout.
- You want a task that an AI assistant can attempt without inventing missing context.

## Mini tutorial

1. Write the user-facing change in one sentence.
   Example: "Team admins can invite a teammate by email from the workspace settings page."

2. Name the boundaries.
   Say what is included and what is not included. This prevents the task from turning into a larger product project.

3. Write acceptance checks.
   Use observable language: "invitation email is sent", "pending invite appears in the member list", "duplicate invite shows an error".

4. Add implementation clues.
   Point to likely screens, APIs, data models, or commands. Do not over-specify the code, but give enough direction for a first pass.

5. Decide how it will be verified.
   A small manual check is fine. A smoke test is better if this path will change often.

## Example task brief

```md
Intent:
Workspace admins can invite a teammate by email.

Non-goals:
- No bulk invites.
- No role management changes.
- No billing changes.

Acceptance:
- Admin can submit one valid email.
- A pending invite appears in the members list.
- Duplicate invite shows a clear error.
- Non-admin users cannot access the invite action.

Verification:
- Run the existing unit tests for workspace members.
- Manually smoke test the invite flow in the browser.
```

## Common paths

- Loose idea to short spec.
- PRD or issue to implementation plan.
- Small request to AI-ready task.
- Design flow to engineering checklist.
- Brownfield change to impact notes.

## Tool fit

Plain Markdown is often enough. Use a heavier spec or planning tool only when the work spans several teams, needs repeated review, or must stay connected to a larger roadmap.

## Next scenarios

- If the assistant keeps missing repo context, go to [Project Context Memory](../project-context-memory/README.md).
- If the expected behavior needs proof, go to [Automated Verification](../automated-verification/README.md).
