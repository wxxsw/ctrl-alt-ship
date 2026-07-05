# 代码审查与质量门禁

[English](README.md) | 简体中文

当 AI 生成的工作需要先 review，免得变成维护债，就看这个场景。

## 什么时候看

- AI 生成的 diff 很大，或碰到了共享代码。
- Reviewer 需要更清楚的 merge 标准。
- 涉及安全、依赖或架构风险。
- 需要把计划、代码和测试放在一起检查。

## 常见路径

- AI-assisted PR review。
- 安全和依赖审查。
- 测试覆盖审查。
- 架构审查。
- Merge readiness checklist。

## 第一步

先拿 diff 对照原始任务和预期行为，再看风格细节。

## 相关入口

- 如果任务不清楚，见 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果改动需要证明，见 [自动化验证](../automated-verification/README.zh-CN.md)。
