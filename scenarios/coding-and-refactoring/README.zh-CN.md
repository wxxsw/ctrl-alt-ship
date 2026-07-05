# 编码与重构

[English](README.md) | 简体中文

当 AI 能帮你写代码或移动代码，但你仍然需要掌控改动，就看这个场景。

## 什么时候看

- 一个改动会碰到多个相关文件。
- 重构既有机械修改，也有需要判断的地方。
- 迁移或升级可能破坏行为。
- 你希望 AI-assisted coding 有更小的检查点。

## 常见路径

- 功能实现。
- 机械式重构。
- 框架迁移。
- 依赖升级。
- 带人工 review 的代码生成。

## 第一步

改代码前先要一份短计划。第一步保持足够小，方便 review。

## 相关入口

- 如果请求不清楚，见 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果行为需要证明，见 [自动化验证](../automated-verification/README.zh-CN.md)。
