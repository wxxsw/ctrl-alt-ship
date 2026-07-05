# Automated Verification

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when AI changed the code and you need more than "it seems fine."

## Use it when

- AI changed UI, API, mobile, or workflow logic.
- Manual checking is slowing review down.
- A core user path could break.
- You need evidence before merge or release.

## Common paths

- Web UI checks.
- Mobile E2E checks.
- API regression checks.
- AI output evaluations.
- CI checks before merge.

## First move

Pick one important behavior and make it repeatable:

- Run the app or service.
- Complete the important path.
- Check for one visible result or durable state change.
- Run that check before related AI work.

## Related

- If the expected behavior is unclear, see [Requirements to Tasks](../requirements-to-tasks/README.md).
- If the change is already failing, see [Debugging](../debugging/README.md).
