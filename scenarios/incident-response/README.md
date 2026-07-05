# Incident Response

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when scattered signals need to become a shared incident picture.

## What this solves

During an incident, information arrives from alerts, dashboards, logs, customer reports, and chat. AI can help summarize that material, but it should not invent certainty.

This scenario helps teams use AI for synthesis while keeping decisions human-owned.

## Use it when

- Logs, alerts, dashboards, and chat threads need to be read together.
- Responders need a timeline quickly.
- Customer impact needs to be summarized.
- A postmortem needs a clean starting point.

## Mini tutorial

1. Build the timeline first.
   Start with timestamps, alerts, deploys, user reports, and mitigation actions.

2. Separate facts from hypotheses.
   "Errors increased at 10:42" is a fact. "The migration caused it" is a hypothesis until proven.

3. Track current owner and next action.
   During response, clarity matters more than polish.

4. Summarize customer impact.
   Who was affected, how many, for how long, and what they experienced.

5. Draft the postmortem after the incident is stable.
   Use AI to organize material, then have humans verify root cause and follow-ups.

## Example incident note

```md
Timeline:
- 10:42 error rate increases
- 10:45 alert fires
- 10:49 deploy rollback starts
- 10:55 error rate returns to normal

Known facts:
- Checkout POST /payment failed for EU users.
- Recent deploy changed currency handling.

Open questions:
- Why did tests miss this?
- Was any payment captured twice?
```

## Common paths

- Alert triage.
- Timeline reconstruction.
- Hypothesis tracking.
- Customer impact summary.
- Postmortem drafting.

## Tool fit

Use AI to summarize logs, chat threads, and timelines. Use observability tools for source data. Keep impact statements, root cause, and accountability in human review.

## Next scenarios

- If the issue is now a coding task, go to [Coding and Refactoring](../coding-and-refactoring/README.md).
- If the fix needs proof, go to [Automated Verification](../automated-verification/README.md).
