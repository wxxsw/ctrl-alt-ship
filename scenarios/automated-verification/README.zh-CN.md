# 自动化验证

[English](README.md) | 简体中文

当 AI 改了代码，而一句"看起来没问题"已经不够用，就看这个场景。

## 什么时候看

- AI 改了 UI、API、移动端或工作流逻辑。
- 手动检查拖慢了 review。
- 核心用户路径可能被破坏。
- Merge 或 release 前需要证据。

## 常见路径

- Web UI 检查。
- Mobile E2E 检查。
- API 回归检查。
- AI 输出评估。
- Merge 前的 CI 检查。

## 第一步

先选一个重要行为，让它可重复：

- 跑起 app 或 service。
- 完成最重要的路径。
- 检查一个可见结果或持久状态变化。
- 在相关 AI 工作开始前运行这个检查。

## 相关入口

- 如果预期行为还不清楚，见 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果改动已经失败，见 [调试](../debugging/README.zh-CN.md)。
