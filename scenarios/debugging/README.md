# Debugging

[English](README.md) | [简体中文](README.zh-CN.md)

Use this when you have symptoms, but not a proven cause.

## What this solves

AI often wants to fix a bug before it has proved the bug. That can work for small mistakes, but it is risky when the failure crosses UI, API, data, or infrastructure boundaries.

This scenario keeps debugging evidence-led.

## Use it when

- You have logs, traces, screenshots, or failing tests.
- The failure crosses frontend, backend, infrastructure, or data boundaries.
- AI keeps proposing fixes before proving what is broken.
- The team needs evidence before changing code.

## Mini tutorial

1. State the symptom.
   Use one sentence: "Checkout fails when the user applies a coupon and changes currency."

2. Collect the strongest evidence.
   Start with the failing test, error message, trace, log line, or user action that reproduces the issue.

3. Write one hypothesis at a time.
   A good hypothesis predicts what you will see next.

4. Run a small experiment.
   Add a log, reproduce with a smaller input, inspect a trace, or bisect a recent change.

5. Only then change code.
   The fix should connect directly to the evidence.

## Example debugging note

```md
Symptom:
Checkout returns 500 after coupon is applied.

Evidence:
- Server log shows currency_code is null.
- Browser request includes coupon_id and currency=EUR.

Hypothesis:
The coupon recalculation path drops currency_code before payment intent update.

Next check:
Trace the request through applyCoupon and updatePaymentIntent.
```

## Common paths

- Failing test investigation.
- Log and trace review.
- Minimal reproduction.
- Regression bisect.
- Production issue triage.

## Tool fit

Use AI for summarizing logs, comparing traces, and proposing hypotheses. Keep code changes human-reviewed until the cause is proven. Use observability tools for production signals and local tests for fast reproduction.

## Next scenarios

- If the expected behavior is unclear, go to [Requirements to Tasks](../requirements-to-tasks/README.md).
- If the fix needs a guard, go to [Automated Verification](../automated-verification/README.md).
