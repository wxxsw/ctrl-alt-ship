# 团队 AI 治理

[English](README.md) | 简体中文

当团队已经在用 AI 工具，并且需要统一边界，就看这个场景。

## 解决什么问题

团队通常是一件工具一件工具地开始用 AI。有人用 coding agent，有人连 browser tool，有人把生产日志贴进聊天。风险不在于用了 AI，而在于没人知道边界在哪里。

这个场景帮团队定义刚刚够用的共同预期，让速度变快，同时少一点不必要的意外。

## 什么时候用

- 大家在用不同 AI 工具，而且用法不一致。
- AI 工具可以访问 repos、tickets、terminals、browsers 或敏感数据。
- Reviewer 不确定 AI-assisted work 应该带什么证据。
- 团队想提速，但不想引入不必要风险。

## 小教程

1. 盘点当前 AI 使用。
   列出工具、数据访问、写权限，以及谁在用。

2. 定义数据边界。
   写清什么可以粘贴，什么可以读取，什么必须留在外面。

3. 定义写入边界。
   区分只读辅助，以及能改代码、建 PR、跑命令或改变外部系统的工具。

4. 设定 review 预期。
   AI-assisted work 仍然应该带任务意图、diff 和验证证据。

5. 根据真实事故或漏网问题回看。
   治理应该跟着真实 workflow 走，而不是跟着想象中的政策走。

## 示例团队说明

```md
AI 可以:
- 读取公开文档和 repository code。
- 草拟 task briefs、tests 和 PR summaries。

AI 需要人工批准后才能:
- Push 代码。
- 改 production settings。
- 使用 customer data。

每个 AI-assisted PR 应该带上:
- 任务摘要。
- 验证证据。
- 已知限制。
```

## 常见路径

- 数据和隐私边界。
- 工具权限级别。
- PR ownership。
- Approved integrations。
- Team playbooks。

## 工具怎么选

治理通常先从一份短团队说明开始。只有当 workflow 真的有风险时，再加平台控制、权限和审计。

## 下一步场景

- 如果问题是 repo 上下文，去看 [项目上下文记忆](../project-context-memory/README.zh-CN.md)。
- 如果问题是 merge 信心，去看 [代码审查与质量门禁](../code-review-quality-gates/README.zh-CN.md)。
