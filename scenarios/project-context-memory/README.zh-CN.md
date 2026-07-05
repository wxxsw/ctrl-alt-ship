# 项目上下文记忆

[English](README.md) | 简体中文

当 AI 总是漏掉项目怎么工作，就看这个场景。

## 你现在遇到的其实是什么

这个场景是给人和 AI assistant 留一份持久项目上下文。目标不是把整个 repo 写成书，而是记录那些反复影响工作成败的少数事实：启动方式、命令、架构边界、代码约定、危险区域和 review 预期。

好的上下文记忆能减少重复解释，也能挡住一种常见 AI 失败：assistant 读了很多文件，却漏掉这个项目真正重要的本地规则。

## 做完以后应该留下什么

- 一份短项目指南，说明怎么在 repo 里工作。
- 一张代码库地图，告诉读者应该先看哪里。
- 一套把重复经验沉淀成长期文档的做法。

## 什么时候从这里开始

- 每个新会话都要重复解释本地启动方式。
- AI 漏掉本地风格、架构或 review 预期。
- 项目知识散在聊天、工单、文档和人的脑子里。
- 新贡献者需要更快理解 repo。
- 团队开始用 coding agent，希望它少犯同样的新手错误。

## 什么时候先别看这一页

- 知识还只是研究过程，没稳定下来。先放个人笔记。
- 团队还没有共识。那就记录分歧，不要假装它已经是规则。
- 内容包含密钥、个人本地配置或敏感信息。不要放进公开文档。
- 任务本身还不清楚。先看需求到任务。

## 怎么选路线

可以先按这条线读：

```mermaid
flowchart LR
  A["现在卡在哪"] --> B["选一条路线"]
  B --> C["先做一小步"]
  C --> D["拿到证据"]
  D --> E["review 或沉淀"]
```


- 如果这个事实影响大多数任务，放进 repo guide 或 contributor guide。
- 如果只影响某个子系统，放在子系统附近，或从子系统 README 链过去。
- 如果它解释的是一次取舍，写 ADR 或 decision note。
- 如果它是个人、临时或敏感信息，放进本地被 git ignore 的笔记。
- 如果它每周都变，链接到真正维护的原始文档，不要复制。

## 常见路线

### Repo 指南

适合: 启动命令、测试命令、项目结构、代码约定和 review 预期。

不适合: 写成没人会读的完整架构书。

常见工具和做法: README、CONTRIBUTING、docs 目录、团队批准的 assistant instructions。

### 代码库地图

适合: 大 repo、monorepo、陌生老系统或新人 onboarding。

不适合: 逐个列文件。地图应该说明决策在哪里发生。

常见工具和做法: 目录说明、Mermaid 图、架构概览页、依赖图。

### 决策记忆

适合: 以后还会被问到的架构、安全、数据和产品取舍。

不适合: 把历史写得过于漂亮，掩盖当时真实的取舍。

常见工具和做法: ADR、RFC archive、decision log、docs-as-code。

### Assistant 上下文层

适合: 团队反复在同一个 repo 里使用 coding agent 或 IDE assistant。

不适合: 提交个人 prompt、私密凭证或敏感本地 agent 配置。

常见工具和做法: 项目说明、IDE rule files、workspace memory、被 ignore 的本地笔记。

## 跟着做一遍

1. 列出最近五件你不得不告诉 assistant 或新队友的事。
2. 把稳定上下文和一次性任务上下文分开。
3. 把稳定上下文写在未来读者最可能看的地方。
4. 补一张 repo map，说明重要目录，以及哪些地方不要随手改。
5. 链接到更深文档，不要整段复制。
6. 加一条小规则：同一个错误出现两次，就更新上下文。
7. 本地、个人、敏感的 agent 笔记保持 git ignore。

## 示例

```md
本地命令:
- Install: pnpm install
- Test: pnpm test
- Typecheck: pnpm typecheck

项目地图:
- app/: 产品页面和 route-level state
- api/: server routes 和 request validation
- db/: schema 和 migrations

约定:
- UI state 放在 page-level hooks。
- 权限变化需要补测试。
- 优先使用已有 service helpers，不要新建 fetch wrapper。

小心:
- Billing 和 workspace membership 需要额外 review。
- 不要提交个人 agent notes 或本地凭证。
```

## 检查一下自己

- 新会话能不能不问基础问题就跑起项目和测试？
- 指南有没有说明重要目录是什么，以及为什么重要？
- 有没有点出 auth、billing、data migration、notification 这类危险区域？
- 有没有链接到深层文档，而不是复制一堆内容？
- 个人 agent notes 和本地 secrets 是否被 git ignore？

## 最容易踩的坑

- 项目指南变成所有观点的垃圾场。
- 文档只讲命令，不讲项目形状。
- 敏感本地 instructions 被提交到公开 repo。
- 团队写了一次上下文，以后重复犯错也不更新。
- 让 AI 只靠文件名猜架构。

## 变成团队习惯以后

团队实践要先有 ownership。谁能改项目指南？什么时候改？把它当代码一样维护：小改动，影响多人时 review，过期规则及时删。

AI-assisted 团队要分清公开项目指南和私有本地 agent 配置。公开指南服务所有贡献者，本地 ignore 笔记可以放个人工作流细节。

## 相关场景

- [需求到任务](../requirements-to-tasks/README.zh-CN.md)
- [文档与知识](../documentation-knowledge/README.zh-CN.md)
- [团队 AI 治理](../team-ai-governance/README.zh-CN.md)
