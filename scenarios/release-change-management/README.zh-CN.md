# 发布与变更管理

[English](README.md) | 简体中文

当一个改动需要 release notes、灰度步骤或回滚思考，就看这个场景。

## 什么时候看

- 改动影响用户、数据、计费、权限或基础设施。
- Release notes 需要从 commits 或 PRs 里整理。
- 迁移或回滚如果太晚规划，会很痛。
- 功能需要分阶段发布或沟通。

## 常见路径

- Release notes。
- Migration planning。
- Feature flags。
- Rollout checklist。
- Rollback planning。

## 第一步

发布前，先写清用户可见变化和回滚路径。

## 相关入口

- 如果改动还没验证，见 [自动化验证](../automated-verification/README.zh-CN.md)。
- 如果改动还需要 review，见 [代码审查与质量门禁](../code-review-quality-gates/README.zh-CN.md)。
