# Incident Response

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when logs, alerts, dashboards, and chats need to become a shared incident picture.

## What this scenario is

This scenario is for active or recent incidents. AI can summarize timelines, cluster logs, draft status updates, and propose hypotheses. It should not replace incident command, ownership, or direct system evidence.

During an incident, clarity beats cleverness. The team needs one shared picture: what is happening, who is affected, what changed, what has been tried, what decision is next, and who owns it.

## What you should end with

- A live incident timeline with facts, actions, owners, and open questions.
- A separation between mitigation, root-cause investigation, and communication.
- A post-incident note that produces follow-up tasks instead of blame.

## Use it when

- Alerts, logs, customer reports, and chats are arriving at the same time.
- Several people are investigating and context is fragmenting.
- You need status updates, timelines, or handoff notes.
- A mitigation is needed before full root cause is known.
- An incident should produce durable follow-up work.

## Avoid starting here

- The issue is a local bug with no active customer impact. Start with Debugging.
- The expected behavior is unclear. Start with Requirements to Tasks.
- Sensitive customer data would need to be pasted into an unsafe tool.
- The team has no incident owner. Pick an incident commander before optimizing tooling.

## Decision map

- If customers are currently affected, assign incident command and mitigation owner first.
- If evidence is scattered, create a timeline before debating root cause.
- If the blast radius is unclear, identify affected users, regions, services, and time window.
- If communication is needed, draft status updates from confirmed facts only.
- If the incident is resolved, turn lessons into follow-up tasks, tests, runbooks, or alerts.

## Mainstream solution paths

### Incident command and coordination

Recommended when: active incidents with multiple responders or customer impact.

Avoid when: letting every responder chase their own theory without ownership.

Common tools and practices: PagerDuty, Opsgenie, Slack/Teams incident channels, Zoom/Meet bridges, incident roles.

### Observability triage

Recommended when: alerts, errors, latency, traffic drops, queue growth, and partial outages.

Avoid when: jumping from a graph spike to root cause without checking deployments and logs.

Common tools and practices: Datadog, Grafana, New Relic, Sentry, OpenTelemetry, cloud provider logs.

### Customer and stakeholder communication

Recommended when: user-facing outages, degraded performance, data concerns, or support volume spikes.

Avoid when: overexplaining unconfirmed causes in public updates.

Common tools and practices: Statuspage, incident comms templates, support macros, customer success notes.

### Post-incident learning

Recommended when: after mitigation, when the team needs follow-up tasks and prevention work.

Avoid when: turning the postmortem into blame or a long essay nobody acts on.

Common tools and practices: postmortem templates, action item trackers, runbooks, test and alert backlogs.

## Practical workflow

1. Name incident commander, technical lead, scribe, and communication owner if needed.
2. Create a timeline with timestamps, facts, actions, and links to evidence.
3. State current impact and confidence level.
4. Separate mitigation options from root-cause hypotheses.
5. Update stakeholders from confirmed facts, not speculation.
6. After mitigation, write root cause and contributing factors with evidence.
7. Turn prevention into tracked work: tests, alerts, runbooks, dashboards, cleanup, or product changes.

## Example

```md
Incident timeline:

09:12 Alert: checkout 500 rate above 5 percent.
09:14 Support reports EU checkout failures.
09:18 Release 2026.07.05 identified as recent change.
09:22 Mitigation: disable checkout_coupon_v2 for EU traffic.
09:27 500 rate returns to baseline.

Current impact:
EU checkout with coupon only. No evidence of payment capture errors.

Open questions:
- Why did coupon recalculation drop currency_code?
- Did any users retry successfully?

Follow-up:
- Add regression test for coupon plus non-default currency.
- Add dashboard panel for checkout errors by currency.
```

## Verification checklist

- Is there a single incident owner?
- Does the timeline distinguish facts from hypotheses?
- Is customer impact stated with confidence level?
- Are mitigation and root-cause work separated?
- Did the incident produce tracked follow-up tasks?

## Common failure modes

- AI summarizes a thread and accidentally treats guesses as facts.
- Everyone debugs while nobody owns coordination or communication.
- The team debates root cause while mitigation is available.
- Status updates include unconfirmed technical theories.
- Postmortem action items are vague and never tracked.

## When this becomes team practice

Team practice should define incident roles and a timeline format before an incident happens. AI can help the scribe summarize, but the incident commander owns decisions.

Use post-incident follow-up to strengthen other scenarios: better verification, better release checks, better docs, and better alerts.

## Related scenarios

- [Debugging](../debugging/README.md)
- [Release and Change Management](../release-change-management/README.md)
- [Documentation and Knowledge](../documentation-knowledge/README.md)
