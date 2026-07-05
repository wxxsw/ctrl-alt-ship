# 编码与重构

[English](README.md) | 简体中文

当 AI 可以帮你写代码或搬代码，但你仍然需要控制改动，就看这个场景。

## 你现在遇到的其实是什么

这个场景覆盖 AI 参与下的实现、迁移、清理和重构。目标不是让 AI 写尽可能多的代码，而是让改动保持可理解、可 review、可验证。

AI 在任务边界清楚、项目上下文可见、验证方式靠近代码时很强。它最容易翻车的情况，是一个 prompt 里同时塞了产品决策、架构重设计和大范围代码编辑。

## 做完以后应该留下什么

- 开工前有一个有边界的实现计划。
- 改动被拆成可以 review 和测试的小检查点。
- 最终 diff 匹配原始任务，而不是顺手做一堆无关 cleanup。

## 什么时候从这里开始

- 你需要 AI 帮忙实现一个清楚任务。
- 重构有明确的行为边界。
- 迁移可以拆成可重复的机械步骤。
- 你想更快做代码搜索、编辑规划或测试补充。
- 你能在过程中跑有意义的测试或检查。

## 什么时候先别看这一页

- 任务还很模糊。先看需求到任务。
- assistant 不理解 repo 约定。先看项目上下文记忆。
- 改动牵涉安全、钱、数据丢失或 migrations，但没有回滚计划。
- 你完全不能运行或检查系统。先建立验证路径。

## 怎么选路线

可以先按这条线读：

```mermaid
flowchart LR
  A["现在卡在哪"] --> B["选一条路线"]
  B --> C["先做一小步"]
  C --> D["拿到证据"]
  D --> E["review 或沉淀"]
```


- 如果工作局部且风险低，用 AI 做编辑计划和小 patch。
- 如果工作重复，优先用 codemod、类型系统或编译器支持的重构。
- 如果会改变行为，把 AI 编辑和测试或手动冒烟检查绑定。
- 如果牵涉架构，先让 AI 给选项和取舍，再写代码。
- 如果 diff 已经大到不好 review，停下来拆任务。

## 常见路线

### 结对式 assistant

适合: 有边界的编辑、代码搜索、小 bug 修复和测试草稿。

不适合: 没有检查点的大范围自动重写。

常见工具和做法: IDE assistant、带 repo 上下文的聊天助手、terminal coding agent。

### Agentic implementation loop

适合: 需要多文件编辑，并且能通过命令行验证的任务。

不适合: 未经批准就运行影响生产、写外部系统或处理 secrets 的命令。

常见工具和做法: coding agent、本地 sandbox、branch workflow、CI feedback。

### Codemod 或编译器支持的迁移

适合: rename、API 迁移、框架升级和重复模式改造。

不适合: 语义变化太多，语法转换无法表达真实意图。

常见工具和做法: jscodeshift、ts-morph、OpenRewrite、Rector、gofmt/go vet、language server refactor。

### 先补行为保护再重构

适合: 老代码区域，行为不能变。

不适合: 用脆弱 snapshot test 锁死偶然行为。

常见工具和做法: 单测、集成测试、golden tests、approval tests、Playwright/Cypress UI 冒烟。

## 跟着做一遍

1. 从任务卡开始，写清行为边界。
2. 让 AI 先给计划，点出文件、风险区域和验证方式。
3. 批准计划，或者在编辑前缩小范围。
4. 按检查点改。每个检查点都应该能单独理解。
5. 每完成一个有意义步骤，就跑最便宜的相关检查。
6. 用原始任务来 review diff，不用 assistant 临时扩展出来的目标来 review。
7. PR summary 里写验证证据和已知限制。

## 示例

```md
任务:
把 notification preference 逻辑从 SettingsPage 移到可复用 hook。

行为边界:
UI 行为、API shape 和持久化行为都不能变。

计划:
1. 找到当前 state 和 API calls。
2. 抽出 useNotificationPreferences。
3. 更新 SettingsPage 调用 hook。
4. 跑 notification tests 和 typecheck。
5. 手动冒烟检查 settings page。

停止条件:
如果重构需要改 API，或者改变 loading/error 行为，先停下来确认。
```

## 检查一下自己

- 任务是否小到一个 PR 可以 review？
- assistant 编辑前有没有点出可能文件和风险区域？
- 每个检查点是否让系统保持可运行？
- 有没有跑测试、typecheck、lint 或冒烟检查？
- 最终 diff 有没有避开无关 cleanup？

## 最容易踩的坑

- 任务没有 non-goals，assistant 顺手做大范围 cleanup。
- 重构悄悄改变行为，测试只覆盖 happy path。
- diff 太大，review 失去意义。
- agent 新增依赖，而不是使用项目已有 helper。
- 本该用可重复 transform 的迁移，被手工一处处改。

## 变成团队习惯以后

团队应该定义哪些 AI 编辑可以正常走 PR，哪些区域需要额外人工批准。Auth、billing、migrations、data deletion 和外部集成通常需要更强 review。

重复迁移要沉淀 prompt、codemod、命令序列和验证证据。第二次迁移应该比第一次更便宜、更安全。

## 相关场景

- [需求到任务](../requirements-to-tasks/README.zh-CN.md)
- [自动化验证](../automated-verification/README.zh-CN.md)
- [代码审查与质量门禁](../code-review-quality-gates/README.zh-CN.md)
