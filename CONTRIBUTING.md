# Contributing

Thanks for helping make Ctrl Alt Ship useful.

This repo is scenario-first. Please do not submit generic tool listings. A tool belongs here only when it helps a real engineering scenario and the contribution explains the fit.

Before contributing, please read:

- [Project Charter](docs/PROJECT_CHARTER.md)
- [Content Model](docs/CONTENT_MODEL.md)
- [Editorial Guidelines](docs/EDITORIAL_GUIDELINES.md)

## What Makes A Good Contribution

A strong contribution answers:

- Which engineering scenario does this help?
- Who benefits from it?
- When should people avoid it?
- What is the smallest useful way to try it?
- What evidence shows it works?
- What can go wrong?

## Contribution Rule Of Thumb

If the contribution cannot point to a scenario, it probably does not belong here yet.

If the contribution is time-sensitive, it probably belongs in the weekly radar first.

If the contribution changes the recommended path for a scenario, update the scenario page too.

## Contribution Types

### Scenario Update

Use this when adding a branch under an existing scenario, such as Web UI verification under Automated Verification.

Template: [templates/scenario.md](templates/scenario.md)

### Tool Note

Use this when adding or updating a tool. Tool notes should be linked from scenarios.

Template: [templates/tool.md](templates/tool.md)

### Weekly Radar

Use this for time-sensitive updates: releases, pricing changes, new capabilities, deprecations, or notable workflow shifts.

Template: [templates/radar-item.md](templates/radar-item.md)

## Style

- Keep the practical path clear.
- Use plain language.
- Avoid vendor hype.
- Include links to primary sources when possible.
- Prefer "recommended when..." over absolute rankings.
- Include "avoid when..." for recommendations.
- Keep scenario pages skimmable for someone in the middle of work.

## Review Checklist

Before opening a PR, check:

- The change reinforces scenario-first navigation.
- Tools are linked to scenarios, not listed for their own sake.
- New recommendations include tradeoffs or avoid-when guidance.
- Time-sensitive updates are placed in `radar/`.
- Durable workflow changes are reflected in the relevant scenario page.
