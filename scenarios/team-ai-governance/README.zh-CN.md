# 团队 AI 治理

[English](README.md) | 简体中文

当团队已经在用 AI 工具，并且需要统一边界，就看这个场景。

## 什么时候看

- 大家在用不同 AI 工具，而且用法不一致。
- AI 工具可以访问 repos、tickets、terminals、browsers 或敏感数据。
- Reviewer 不确定 AI-assisted work 应该带什么证据。
- 团队想提速，但不想引入不必要风险。

## 常见路径

- 数据和隐私边界。
- 工具权限级别。
- PR ownership。
- Approved integrations。
- Team playbooks。

## 第一步

先写清 AI 工具可以读什么、可以改什么、什么必须人工批准。

## 相关入口

- 如果问题是 repo 上下文，见 [项目上下文记忆](../project-context-memory/README.zh-CN.md)。
- 如果问题是 merge 信心，见 [代码审查与质量门禁](../code-review-quality-gates/README.zh-CN.md)。
