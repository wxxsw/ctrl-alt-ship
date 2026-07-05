# 代码审查与质量门禁

[English](README.md) | 简体中文

当 AI 生成的工作需要先 review，免得变成维护债，就看这个场景。

## 解决什么问题

AI 可以生成一大段看起来很合理的 diff。Reviewer 需要判断它是否真的匹配任务、是否保留了行为、是否带了足够证据。

这个场景帮你把 review 从"逐行看完然后祈祷"变成更有结构的一轮检查。

## 什么时候用

- AI 生成的 diff 很大，或碰到了共享代码。
- Reviewer 需要更清楚的 merge 标准。
- 涉及安全、依赖或架构风险。
- 需要把计划、代码和测试放在一起检查。

## 小教程

1. 先拿 diff 对照原始任务。
   先看意图。这个改动解决的是不是正确的问题？

2. 找意外范围。
   新依赖、大范围重写、无关格式化、隐藏行为变化，都值得停下来。

3. 检查测试和证据。
   没有验证的生成 diff，还不算完成。

4. 手动 review 高风险区域。
   权限、计费、auth、数据迁移和共享抽象，不适合直接放过。

5. Review note 要指向行为。
   "这会破坏非 admin 用户" 比 "这里看着怪" 更有用。

## 示例 review checklist

```md
Task match:
- Diff 是否实现了已接受的任务？
- Non-goals 有没有被尊重？

Risk:
- 是否碰到 auth、权限、计费、数据或迁移？
- 是否新增依赖？

Evidence:
- 测试跑了吗？
- 手动路径查了吗？
- 是否有截图、日志、trace 或 CI 链接？
```

## 常见路径

- AI-assisted PR review。
- 安全和依赖审查。
- 测试覆盖审查。
- 架构审查。
- Merge readiness checklist。

## 工具怎么选

AI review 工具适合做第一轮评论和发现遗漏模式。它不能替代代码 ownership。确定性检查交给 static analysis 和 CI。意图、产品行为和风险仍然需要人 review。

## 下一步场景

- 如果任务不清楚，去看 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果改动需要证明，去看 [自动化验证](../automated-verification/README.zh-CN.md)。
