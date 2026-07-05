# 事故响应

[English](README.md) | 简体中文

当分散的信号需要变成团队共享的事故图景，就看这个场景。

## 解决什么问题

事故中，信息会从告警、dashboard、日志、客户反馈和聊天里同时涌进来。AI 可以帮忙总结，但不能替团队制造确定性。

这个场景帮团队用 AI 做信息综合，同时让决策仍然由人负责。

## 什么时候用

- 日志、告警、dashboard 和聊天记录需要放在一起读。
- 响应者需要快速拿到时间线。
- 需要总结客户影响。
- Postmortem 需要一个干净的起点。

## 小教程

1. 先建时间线。
   从时间戳、告警、deploy、用户反馈和缓解动作开始。

2. 把事实和假设分开。
   "10:42 error rate 上升"是事实。"migration 导致问题"在证明前只是猜测。

3. 追踪当前 owner 和下一步动作。
   响应过程中，清楚比漂亮更重要。

4. 总结客户影响。
   谁受影响，多少人，多久，他们看到什么。

5. 事故稳定后再写 postmortem。
   AI 可以整理材料，但 root cause 和 follow-ups 要由人确认。

## 示例事故笔记

```md
Timeline:
- 10:42 error rate 上升
- 10:45 alert 触发
- 10:49 开始 rollback deploy
- 10:55 error rate 回到正常

Known facts:
- EU 用户的 Checkout POST /payment 失败。
- 最近 deploy 改了 currency handling。

Open questions:
- 为什么测试没发现？
- 有没有 payment 被重复 capture？
```

## 常见路径

- Alert triage。
- Timeline reconstruction。
- Hypothesis tracking。
- Customer impact summary。
- Postmortem drafting。

## 工具怎么选

AI 适合总结日志、聊天和时间线。Observability 工具负责提供源数据。影响范围、根因和责任归属仍然需要人 review。

## 下一步场景

- 如果问题已经变成编码任务，去看 [编码与重构](../coding-and-refactoring/README.zh-CN.md)。
- 如果修复需要证明，去看 [自动化验证](../automated-verification/README.zh-CN.md)。
