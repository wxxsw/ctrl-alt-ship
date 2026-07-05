# 文档与知识

[English](README.md) | 简体中文

当决策和项目知识总是消失在聊天里，就看这个场景。

## 这个场景是什么

这个场景把有用的工作上下文变成长期知识。AI 可以总结、起草、重组，但真正重要的人类动作，是判断什么值得离开聊天，留下来给未来的人看。

好文档不是聊天记录。它是在维护一个未来问题的答案：我们为什么这么选？它怎么工作？后来的人该怎么做？什么时候需要重新看这个决定？

## 你应该拿到什么

- 一份未来读者能找到的 decision note、runbook、guide 或 reference page。
- 一条轻量规则：什么时候聊天或 PR 讨论应该变成文档。
- 一套把稳定 guidance 和易变 updates 分开的知识结构。

## 什么时候用

- 架构或产品决策以后还会被用到。
- 新队友缺少项目背景。
- 文档过期、分散，或者更新成本太高。
- 最近一次事故、迁移或发布里有可复用经验。
- AI summary 有用，但现在聊完就消失。

## 什么时候别从这里开始

- 内容还只是私人研究或未经 review 的猜测。
- 这份文档会复制另一个维护得更好的来源。
- 团队想要知识库，但没有维护 owner。
- 问题是缺少项目启动和本地约定。先看项目上下文记忆。

## 决策地图

- 如果解释的是一次选择，写 decision note 或 ADR。
- 如果解释怎么操作，写 runbook。
- 如果解释怎么贡献，更新 README 或 CONTRIBUTING。
- 如果解释产品或 API surface，发布 reference docs 或 examples。
- 如果内容经常变，链接到维护源，页面本身保持小。

## 主流解决路径

### Docs-as-code

推荐在: 需要和代码一起 review、version 的工程文档。

避免在: 非工程同事很难参与贡献的跨团队文档。

常见工具和做法: Markdown、MkDocs、Docusaurus、VitePress、GitHub Pages、PR review。

### 团队知识库

推荐在: 跨职能背景、onboarding、support playbooks 和产品决策。

避免在: 需要严格变更历史或代码 review 的关键运维步骤。

常见工具和做法: Notion、Confluence、Google Docs、Slab、Linear docs。

### 架构和决策记录

推荐在: 以后还会被质疑或追问的取舍。

避免在: 每个小实现选择都写 ADR。

常见工具和做法: ADR templates、RFCs、decision logs、Mermaid diagrams。

### AI 辅助总结

推荐在: 把长 PR 讨论、事故记录和会议记录变成第一稿。

避免在: 没核对事实、日期、owner 和开放问题就发布 summary。

常见工具和做法: 聊天助手、transcript summarizer、document assistant、内部搜索。

## 实操流程

1. 趁上下文还新鲜，记录决策或经验。
2. 先判断文档类型：decision、runbook、guide、reference 或 changelog。
3. 写结论背后的取舍。
4. 放到未来读者最先会找的地方。
5. 链接相关代码、PR、事故、dashboard 或 ticket。
6. 加维护提示：owner、review date 或 revisit condition。
7. 更新时删掉过期或重复材料。

## 示例

```md
决策:
Workspace invite actions 使用 server-side permission checks。

背景:
UI 已经会隐藏不可用操作，但用户仍然可以直接调用 API。

原因:
Client-side checks 可以改善 UX，但不能作为授权边界。

取舍:
UI 可能会为了 disabled states 重复一些 permission logic，但 server 仍然负责最终授权判断。

什么时候重看:
Workspace permission model 变化，或者 invite ownership 移到另一个 service。
```

## 验证清单

- 这份文档是否回答了未来真的会出现的问题？
- 它是否短到还能维护？
- 有没有写取舍，而不只是结论？
- 有没有 owner 或 revisit trigger？
- 有没有链接到源材料，而不是复制全部内容？

## 常见坑

- 直接发布 AI summary，事实和假设混在一起。
- 创建没人维护的 wiki page。
- 写很长的背景文档，把真正决策埋起来。
- 复制一个经常变化的来源，导致很快过期。
- 让聊天成为唯一存在决策的地方。

## 变成团队实践以后

团队实践需要一条 capture rule。例如：任何会影响未来 code review、on-call、onboarding 或客户行为的决策，都要留一份短 durable note。

AI 可以用来起草和重组，但事实准确性、ownership 和维护仍然要有人负责。

## 相关场景

- [项目上下文记忆](../project-context-memory/README.zh-CN.md)
- [事故响应](../incident-response/README.zh-CN.md)
- [发布与变更管理](../release-change-management/README.zh-CN.md)
