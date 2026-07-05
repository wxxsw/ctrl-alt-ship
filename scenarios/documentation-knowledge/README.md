# Documentation and Knowledge

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when decisions and project knowledge keep disappearing into chat.

## What this solves

Teams often make good decisions in pull requests, incident threads, and chat. Three months later, nobody remembers the tradeoff.

This scenario helps turn important decisions and lessons into lightweight knowledge that people can find again.

## Use it when

- Architecture or product decisions need to be remembered later.
- New teammates lack project background.
- Docs are stale, scattered, or too expensive to update.
- A lesson from recent work should become reusable.

## Mini tutorial

1. Capture the decision close to the work.
   Do it when the context is still fresh.

2. Write the tradeoff behind the conclusion.
   Future readers need to know why the team chose one path over another.

3. Put it where people will look.
   Repo docs work well for engineering decisions. Team knowledge bases work better for cross-functional context.

4. Keep the note small.
   One decision, one page. Long docs become easier to ignore.

5. Add a maintenance hint.
   Tell future readers when the decision should be revisited.

## Example decision note

```md
Decision:
Use server-side permission checks for workspace invite actions.

Why:
Client-side checks improve UX, but they cannot be trusted for authorization.

Tradeoff:
The UI still hides unavailable actions, but the server remains the source of truth.

Revisit when:
The workspace permission model changes.
```

## Common paths

- Decision records.
- Architecture notes.
- Runbooks.
- Onboarding docs.
- Personal knowledge systems.

## Tool fit

Use docs-as-code for decisions tied to the repository. Use a team wiki for operating notes and cross-functional context. Use personal notes for research that is not ready to become team guidance.

## Next scenarios

- If the missing knowledge is for AI work, go to [Project Context Memory](../project-context-memory/README.md).
- If the note affects release communication, go to [Release and Change Management](../release-change-management/README.md).
