# Content Model

Ctrl Alt Ship uses a small content model so the repo stays coherent as it grows.

## 1. Scenario

A scenario is a stable engineering situation.

Examples:

- Requirements to Tasks
- Project Context Memory
- Automated Verification
- Code Review and Quality Gates
- Team AI Governance

A scenario is the main navigation unit. Users should enter the repo through scenarios.

Good scenario pages include:

- The real problem
- Who it helps
- When it matters
- When not to start here
- Branches inside the scenario
- Decision rules
- Minimal useful practice
- Team practice
- Common mistakes
- Related tools
- Radar links

## 2. Branch

A branch is a more specific path inside a scenario.

Example under Automated Verification:

- Web UI verification
- Mobile E2E verification
- API regression
- AI application evals
- CI quality gates

Branches should explain selection logic. They should not become isolated blog posts.

## 3. Tool Note

A tool note explains where a tool fits, where it does not fit, and which scenarios should link to it.

Good tool notes include:

- Best-fit scenarios
- Recommended use cases
- Avoid-when cases
- Minimal setup
- Strengths
- Tradeoffs
- Alternatives
- Primary sources

Tool notes are supporting material. They are not the main product.

## 4. Pattern

A pattern is a reusable work method that can appear across multiple scenarios.

Examples:

- Spec before code
- Smoke test before agent work
- Review against plan
- Repo map before large refactor
- Human approval for write-capable tools

Patterns should be portable and practical.

## 5. Radar Item

A radar item is a time-sensitive update that may affect a scenario recommendation.

Examples:

- A testing tool adds a capability that changes the default recommendation.
- A coding agent changes its permission model.
- A vendor pricing change affects team adoption.
- A new open-source project becomes useful for a specific branch.

Radar items should be grouped by scenario and linked back to stable pages.

## Navigation Rule

Use this order:

```text
Scenario -> Branch -> Pattern -> Tool -> Radar
```

Avoid this order:

```text
Tool -> Feature -> Blog Post -> Maybe A Scenario
```

