# 项目上下文记忆

[English](README.md) | 简体中文

当 AI 总是漏掉项目怎么工作，就看这个场景。

## 解决什么问题

AI assistant 通常能读文件，但不一定知道哪些事实重要。如果每个新会话都要重复解释本地启动方式、测试命令、项目结构和危险区域，这个项目就需要一点持久上下文。

目标不是把所有东西都写进文档。目标是让下一次会话少犯明显错误。

## 什么时候用

- 每个新会话都要重复解释本地启动方式。
- AI 漏掉本地风格、架构或 review 预期。
- 项目知识散在聊天、工单、文档和人的脑子里。
- 新贡献者需要更快理解 repo。

## 小教程

1. 列出重复解释。
   写下最近五件你不得不告诉 assistant 或新队友的事。

2. 只保留稳定上下文。
   启动命令、测试命令、项目结构、命名约定和危险区域通常比较稳定。一次性任务细节应该放进任务卡。

3. 把短指南放在 repo 附近。
   可以是 README 的一节、项目指南，或链接出去的文档。要短到真的有人会读。

4. 链接到更深材料。
   不要把所有架构笔记都复制进指南。链接到真正维护的原始文档。

5. 在重复错误后更新。
   同一个错误出现两次，说明指南缺东西，或者任务卡没写清。

## 示例项目指南

```md
本地命令:
- Install: pnpm install
- Test: pnpm test
- Typecheck: pnpm typecheck

项目地图:
- app/: 产品页面
- api/: server routes
- db/: schema 和 migrations

约定:
- UI state 放在 page-level hooks。
- 权限变化需要补测试。

小心:
- Billing 和 workspace membership 需要额外 review。
```

## 常见路径

- AI-assisted work 的 repo 指南。
- 轻量 codebase map。
- 架构决策说明。
- 新贡献者 onboarding notes。
- 个人笔记，之后再沉淀成团队文档。

## 工具怎么选

放在未来读者自然会看的地方。共享约定适合放 repo 指南。研究过程可以先放个人笔记。架构决策最好进入有 review 记录的长期文档。

## 下一步场景

- 如果任务本身不清楚，去看 [需求到任务](../requirements-to-tasks/README.zh-CN.md)。
- 如果决策也需要长期保存给人看，去看 [文档与知识](../documentation-knowledge/README.zh-CN.md)。
