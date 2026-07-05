# 发布与变更管理

[English](README.md) | 简体中文

当一个改动需要 release notes、灰度步骤或回滚思考，就看这个场景。

## 解决什么问题

AI 可以很快总结 commits，但发布不只是总结。好的 release note 要告诉用户发生了什么。好的 rollout plan 要告诉团队观察什么。好的 rollback note 要告诉大家怎么恢复。

这个场景帮你把代码改动连接到真正的发布决策。

## 什么时候用

- 改动影响用户、数据、计费、权限或基础设施。
- Release notes 需要从 commits 或 PRs 里整理。
- 迁移或回滚如果太晚规划，会很痛。
- 功能需要分阶段发布或沟通。

## 小教程

1. 先确认读者。
   用户、客服、销售、运维和工程师需要的细节不一样。

2. 从已合并工作总结变化。
   可以从 PRs 和 commits 开始，但每一句都要对照真实 diff。

3. 写清 rollout 路径。
   是立即发布、feature flag、按账号灰度，还是和 migration 绑定？

4. 写回滚路径。
   哪怕只是"revert this PR"，也比事故中临时找路好。

5. 加观察信号。
   写清哪些 logs、dashboards、support tickets 或 metrics 能说明出问题了。

## 示例 release note

```md
User-facing change:
Workspace admins 可以从 settings 邀请成员。

Rollout:
先对 internal workspaces 开启，24 小时后再全量。

Watch:
- Invite creation errors
- Email delivery failures
- 提到 missing invites 的 support tickets

Rollback:
关闭 workspace_invites flag。
```

## 常见路径

- Release notes。
- Migration planning。
- Feature flags。
- Rollout checklist。
- Rollback planning。

## 工具怎么选

AI 适合根据 PRs 和 commits 起草摘要。人需要验证每条说法、客户影响和回滚风险。需要分阶段发布时，再接入 feature flag 和部署工具。

## 下一步场景

- 如果改动还没验证，去看 [自动化验证](../automated-verification/README.zh-CN.md)。
- 如果改动还需要 review，去看 [代码审查与质量门禁](../code-review-quality-gates/README.zh-CN.md)。
