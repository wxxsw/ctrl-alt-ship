# 事故响应

[English](README.md) | 简体中文

当分散的信号需要变成团队共享的事故图景，就看这个场景。

## 什么时候看

- 日志、告警、dashboard 和聊天记录需要放在一起读。
- 响应者需要快速拿到时间线。
- 需要总结客户影响。
- Postmortem 需要一个干净的起点。

## 常见路径

- Alert triage。
- Timeline reconstruction。
- Hypothesis tracking。
- Customer impact summary。
- Postmortem drafting。

## 第一步

先收集时间线、已知事实、开放问题和当前 owner。

## 相关入口

- 如果问题已经变成编码任务，见 [编码与重构](../coding-and-refactoring/README.zh-CN.md)。
- 如果修复需要证明，见 [自动化验证](../automated-verification/README.zh-CN.md)。
