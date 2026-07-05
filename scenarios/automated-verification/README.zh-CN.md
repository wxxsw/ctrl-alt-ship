# 自动化验证

[English](README.md) | 简体中文

当 AI 改了代码，而一句"看起来没问题"已经不够用，就看这个场景。

## 解决什么问题

AI 改代码的速度，通常比人手动回归产品行为的速度快得多。没有可重复检查，每一次后续编辑都可能悄悄把同一条路径弄坏。

这个场景帮你在 review、merge 或 release 前拿到刚刚够用的证据。

## 什么时候用

- AI 改了 UI、API、移动端或工作流逻辑。
- 手动检查拖慢了 review。
- 核心用户路径可能被破坏。
- Merge 或 release 前需要证据。

## 小教程

1. 先选一个要保护的行为。
   选用户最先会注意到的那条路径。

2. 决定最便宜的验证层。
   风险在 UI 状态，就用 browser 或 mobile flow。风险在业务逻辑，API 或 unit-level check 可能更快。

3. 故意让检查失败一次。
   一个不会失败的测试，只是装饰。

4. 在 AI 工作前先跑。
   让 assistant 改相关代码前，先建立 baseline。

5. 留下结果。
   Trace、截图、日志或 CI run，都比"我本地试过"更容易 review。

## 示例 smoke check

```md
Behavior:
Workspace admin 可以邀请一位成员。

Check:
1. 打开 workspace settings。
2. 提交一个合法邮箱。
3. 确认 invite 以 pending 状态出现。
4. 确认重复邀请会显示错误。

Evidence:
- Playwright trace 或手动录屏。
- 测试命令输出。
```

## 常见路径

- Web UI 检查。
- Mobile E2E 检查。
- API 回归检查。
- AI 输出评估。
- Merge 前的 CI 检查。

## 工具怎么选

浏览器行为重要时用 Playwright。移动端流程用 Maestro。风险不在 UI 时，API check 更快。输出质量主观、或由 LLM 生成时，再考虑 eval 工具。

## 下一步场景

- 如果预期行为还不清楚，去看 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果改动已经失败，去看 [调试](../debugging/README.zh-CN.md)。
