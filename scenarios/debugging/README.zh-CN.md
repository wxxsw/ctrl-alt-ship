# 调试

[English](README.md) | 简体中文

当你有症状，但还没有被证明的原因，就看这个场景。

## 解决什么问题

AI 很容易在证明 bug 之前就开始修 bug。小问题有时能蒙对，但当故障跨过 UI、API、数据或基础设施边界时，这样很危险。

这个场景让调试继续围绕证据推进。

## 什么时候用

- 你有日志、trace、截图或失败测试。
- 故障跨过了前端、后端、基础设施或数据边界。
- AI 总是在证明哪里坏了之前就开始提修复方案。
- 团队需要证据，再决定怎么改代码。

## 小教程

1. 先写症状。
   一句话就够："用户应用 coupon 后切换 currency，checkout 失败。"

2. 收集最强证据。
   从失败测试、错误信息、trace、日志行或可复现操作开始。

3. 一次只写一个假设。
   好假设应该能预测你下一步会看到什么。

4. 做一个小实验。
   加一条 log、用更小输入复现、看 trace，或者 bisect 最近改动。

5. 最后才改代码。
   修复应该能直接连回证据。

## 示例调试笔记

```md
Symptom:
应用 coupon 后 checkout 返回 500。

Evidence:
- Server log 显示 currency_code 是 null。
- Browser request 里有 coupon_id 和 currency=EUR。

Hypothesis:
Coupon recalculation 路径在更新 payment intent 前丢了 currency_code。

Next check:
沿 applyCoupon 和 updatePaymentIntent 追一次 request。
```

## 常见路径

- 失败测试调查。
- 日志和 trace 审查。
- 最小复现。
- 回归 bisect。
- 生产问题 triage。

## 工具怎么选

AI 适合总结日志、对比 trace、提出假设。根因没证明前，代码修改仍然要谨慎 review。生产信号用 observability 工具，本地快速复现用测试。

## 下一步场景

- 如果预期行为不清楚，去看 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果修复需要保护线，去看 [自动化验证](../automated-verification/README.zh-CN.md)。
