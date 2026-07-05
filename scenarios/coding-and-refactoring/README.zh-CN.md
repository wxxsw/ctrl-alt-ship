# 编码与重构

[English](README.md) | 简体中文

当 AI 能帮你写代码或移动代码，但你仍然需要掌控改动，就看这个场景。

## 解决什么问题

AI 很适合提速实现、处理重复编辑和做迁移。但它也很容易把一个改动做得比需要的大。

这个场景帮你把 AI-assisted coding 控制在可 review 的范围里。

## 什么时候用

- 一个改动会碰到多个相关文件。
- 重构既有机械修改，也有需要判断的地方。
- 迁移或升级可能破坏行为。
- 你希望 AI-assisted coding 有更小的检查点。

## 小教程

1. 从有边界的任务开始。
   如果任务没法用一小段话讲清，先拆开，再写代码。

2. 改代码前先要计划。
   计划应该点出可能相关的文件、风险区域和验证方式。

3. 按检查点推进。
   每个检查点都应该小到 reviewer 能看懂。

4. 每个有意义步骤后做验证。
   可以是现有测试、typecheck、lint，或者一个小 smoke check。

5. 最后拿 diff 对照原始任务。
   最重要的问题不是"代码好不好看"，而是"它有没有解决原本的问题，同时没有多改东西"。

## 示例 workflow

```md
Task:
把 notification preference 逻辑从 React component 移到一个小 hook 里。

Plan:
- 找出当前 state 和 API calls。
- 抽出 hook，不改变行为。
- 更新 component 使用这个 hook。
- 跑现有 notification tests。
- 手动 smoke test settings page。
```

## 常见路径

- 功能实现。
- 机械式重构。
- 框架迁移。
- 依赖升级。
- 带人工 review 的代码生成。

## 工具怎么选

需要跨文件导航和编辑时，用 repo-aware coding assistant。小范围本地改动，用编辑器内辅助就够。大规模机械修改优先考虑 script 或 codemod，因为确定性转换通常比自由生成更安全。

## 下一步场景

- 如果请求不清楚，去看 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果行为需要证明，去看 [自动化验证](../automated-verification/README.zh-CN.md)。
