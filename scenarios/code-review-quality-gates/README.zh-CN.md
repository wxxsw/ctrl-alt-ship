# 代码审查与质量门禁

[English](README.md) | 简体中文

当 AI-assisted work 需要在变成维护债之前 review，就看这个场景。

## 这个场景是什么

这个场景保护 merge 边界。AI 可以很快生成看起来合理的代码，所以 review 要先看意图、范围、风险和证据，再看风格。质量门禁负责自动化那些不应该靠 reviewer 记忆的检查。

目标不是让每个 PR 都变慢，而是把危险部分亮出来：范围漂移、缺测试、权限变化、新依赖、生成代码、数据迁移和安全敏感行为。

## 你应该拿到什么

- 一套先看任务匹配和风险的 review 顺序。
- 一组能抓重复问题的自动化 gates。
- AI-assisted work 的 PR 标准：意图、diff、证据、已知限制。

## 什么时候用

- AI 生成或 AI 辅助的工作已经准备 review。
- diff 大到人不能一眼信任。
- 团队总是在很晚才抓到同一类问题。
- 你需要 branch protection、required checks 或 security scanning。
- reviewer 需要更清楚知道 PR 里应该带什么证据。

## 什么时候别从这里开始

- 任务本身不清楚。先看需求到任务。
- 代码还跑不起来。先看自动化验证。
- 团队用 gate 逃避 ownership 决策。
- 某个 gate 太吵，大家已经习惯绕过。

## 决策地图

- 如果风险是主观或架构判断，用人工 review 和明确问题。
- 如果风险是重复性的，用 lint、typecheck、tests 或 security scanning 自动化。
- 如果风险是 ownership，用 CODEOWNERS 或 required review rules。
- 如果风险是运行时行为，PR 里要求验证证据。
- 如果风险来自生成代码体积，要求拆小 PR 或写 generated-code note。

## 主流解决路径

### 人工 review checklist

推荐在: 行为、范围、架构、可读性、产品匹配和风险判断。

避免在: 先纠结风格，却漏掉任务漂移和缺证据。

常见工具和做法: GitHub/GitLab PR review、review template、CODEOWNERS、pair review。

### 静态和语义检查

推荐在: 可重复的代码质量、类型、格式、安全和依赖问题。

避免在: 加工具之前没决定哪些失败应该阻止 merge。

常见工具和做法: ESLint、TypeScript、Ruff、go vet、CodeQL、Semgrep、SonarQube、Dependabot、Renovate。

### 测试和 build gates

推荐在: merge 前可以自动检查的行为。

避免在: 慢且 flaky 的 pipeline，把真实信号藏起来。

常见工具和做法: GitHub Actions、GitLab CI、Buildkite、CircleCI、required status checks。

### AI 辅助 review

推荐在: 总结大 diff、指出风险区域、检查 PR 是否匹配任务卡。

避免在: 把 AI review 当作批准。它只是 reviewer signal，不是 ownership。

常见工具和做法: code review assistant、repo-aware chat、自定义 review prompt、CI comments。

## 实操流程

1. 先读任务卡，再看 diff。
2. 检查 diff 是否匹配任务，并遵守 non-goals。
3. 扫风险区域：auth、permissions、billing、data、migrations、external writes、secrets。
4. 看自动化证据：tests、typecheck、lint、CI、security scan、manual smoke notes。
5. 再 review 代码可维护性和本地约定。
6. 当 diff 混了多个目标，要求拆小 PR。
7. 把重复 review 评论沉淀成 gate 或 template。

## 示例

```md
AI-assisted PR review 顺序:

1. 任务匹配
- diff 是否实现已接受任务？
- non-goals 是否被尊重？

2. 风险
- 是否碰到 auth、permissions、billing、data、migrations 或 external writes？
- 是否新增依赖或生成代码？

3. 证据
- 测试跑了吗？
- 手动路径检查了吗？
- CI 链接了吗？

4. 可维护性
- 是否符合本地模式？
- 命名和边界是否合理？
- 有没有无关 cleanup？
```

## 验证清单

- reviewer 是否先读了任务，再看 diff？
- 高风险区域有没有被明确点出来？
- required checks 是否匹配改动风险？
- 有没有行为证据，而不只是 lint 通过？
- 重复 review feedback 能否变成自动 gate？

## 常见坑

- reviewer 扫一眼生成代码，然后相信 assistant summary。
- PR 混入无关 cleanup，掩盖真正行为变化。
- gate 只查格式，却漏掉权限、迁移或数据丢失风险。
- 安全工具加上了，但没人负责 triage。
- AI review 评论被当成人类 ownership 的替代品。

## 变成团队实践以后

团队实践要定义 PR evidence 标准。AI-assisted PR 至少带任务意图、验证方式和已知限制。高风险区域需要 owner review 和更强测试。

gate 要无聊但可信。一个经常因为错误原因失败的 gate，很快就会变成背景噪音。

## 相关场景

- [需求到任务](../requirements-to-tasks/README.zh-CN.md)
- [自动化验证](../automated-verification/README.zh-CN.md)
- [团队 AI 治理](../team-ai-governance/README.zh-CN.md)
