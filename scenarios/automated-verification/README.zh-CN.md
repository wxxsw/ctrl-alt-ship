# 自动化验证

[English](README.md) | 简体中文

当 AI 改了代码，而你需要可重复的证据证明它仍然能工作，就看这个场景。

## 这个场景是什么

这个场景把“我感觉可以”变成证据。AI-assisted coding 会让团队产出更多改动，所以验证必须更便宜、更可重复。重点不是自动化一切，而是保护那些静悄悄坏掉会很痛的行为。

验证应该按行为和风险来选，不按工具热度来选。单测、API 回归、浏览器 E2E、移动端场景、CI gate、AI 应用 eval，在不同分支里都可能是正确答案。

## 你应该拿到什么

- 写清要保护的行为。
- 在最便宜且可靠的层级上放一个检查。
- 拿到能贴进 PR 或发布决策里的证据。

## 什么时候用

- AI 生成的改动需要在 merge 前证明。
- 关键路径经常被人或 agent 改动。
- 手动 QA 慢、不稳定，或者容易忘。
- 一个 bug 应该变成回归测试。
- AI 产品功能不能只靠一个 demo prompt 判断。

## 什么时候别从这里开始

- 没人对预期行为有共识。先看需求到任务。
- 系统无法运行或观察。先让它可运行、可观测或可脚本化。
- 一次性 prototype 丢掉比自动化更便宜。
- 这个检查会比它保护的行为更脆。

## 决策地图

- 如果逻辑接近纯函数，优先单测。
- 如果行为跨服务边界，用集成测试或 contract test。
- 如果用户流程重要，用浏览器或移动端 E2E。
- 如果 API 是产品边界，用 API 回归集合或 contract checks。
- 如果 AI 系统输出有波动，用 eval、golden dataset、trace 和失败样本 review。
- 如果检查必须挡住危险改动，把它接进 CI，并保证失败输出清楚。

## 主流解决路径

### 单测和组件测试

推荐在: 业务规则、解析、权限检查、UI component、bug 回归。

避免在: mock 太多，最后测试已经不像真实行为。

常见工具和做法: Jest、Vitest、pytest、JUnit、XCTest、React Testing Library、Flutter widget tests。

### Web UI E2E

推荐在: signup、checkout、invite、settings、admin action 等关键浏览器流程。

避免在: 用 E2E 测每个视觉细节。E2E 更适合流程，不适合所有组件状态。

常见工具和做法: Playwright、Cypress、Selenium、Storybook interaction tests。

### 移动端 E2E

推荐在: 原生 app 流程、onboarding、支付、权限和设备相关行为。

避免在: widget 或 integration test 能抓住风险时，一上来就做全设备测试。

常见工具和做法: Maestro、Detox、Appium、XCUITest、Espresso。

### API 和 contract 回归

推荐在: 后端服务、公开 API、webhook、auth 行为和集成。

避免在: 集合依赖脆弱共享状态或手动 secrets。

常见工具和做法: Bruno、Postman、Pact、Schemathesis、OpenAPI validators、supertest。

### AI 应用 eval

推荐在: RAG、agents、分类、抽取、审核和生成回复。

避免在: 用一个 golden prompt 判断整个 AI 功能。需要 dataset 和失败样本 review。

常见工具和做法: Braintrust、Langfuse、OpenAI Evals 思路、promptfoo、自定义 evaluation harness。

### CI 质量门禁

推荐在: 应该阻止 merge 或 release 的检查。

避免在: 慢且 flaky 的 gate。它会训练大家忽略失败。

常见工具和做法: GitHub Actions、GitLab CI、CircleCI、Buildkite、required status checks。

## 实操流程

1. 写清要保护的行为，以及它为什么重要。
2. 选择能以足够信心抓住失败的最便宜层级。
3. 让检查失败一次，或者至少确认它能抓住你关心的 bug。
4. 让验证环境稳定：数据、auth、环境和 secrets。
5. 在 review 前，本地或 CI 跑一次。
6. 附上证据：logs、traces、截图、视频、测试输出或 eval summary。
7. flaky 或太慢的检查要尽快修。吵闹的 gate 会失去权威。

## 示例

```md
行为:
工作区管理员可以邀请一位成员，重复邀请会显示错误。

层级:
Playwright 浏览器冒烟测试，因为风险跨 UI、API、auth 和 persistence。

测试轮廓:
1. 以 workspace admin 登录。
2. 打开 members settings。
3. 提交一个合法邮箱。
4. 断言待处理邀请出现。
5. 再提交同一个邮箱。
6. 断言重复邀请错误出现。

证据:
CI test output，失败时保留 Playwright trace。
```

## 验证清单

- 检查是否保护了一个被命名的行为？
- 这是不是最便宜且可靠的层级？
- 它会不会因为你关心的 bug 或回归而失败？
- 别人能不能不靠口口相传跑起来？
- 失败输出对 reviewer 或 on-call 有没有帮助？

## 常见坑

- 因为 E2E 看起来真实，就写一堆宽泛 E2E，然后被 flake 淹没。
- 加 snapshot，把偶然输出批准成标准。
- 测试实现细节，但用户可见行为没有被保护。
- 测试只在本地跑，从不接进 CI 或 PR evidence。
- 只看 AI eval 分数，不 review 失败样本。

## 变成团队实践以后

团队应该维护一条验证梯子：unit、integration、API、UI、mobile、eval、CI gate。梯子能帮助 reviewer 追问：这个检查为什么放在这一层？

AI-assisted coding 的每个 PR 都应该说清跑了哪些检查，以及为什么这些检查足够覆盖风险。很多时候，这句话和测试本身一样重要。

## 相关场景

- [需求到任务](../requirements-to-tasks/README.zh-CN.md)
- [代码审查与质量门禁](../code-review-quality-gates/README.zh-CN.md)
- [发布与变更管理](../release-change-management/README.zh-CN.md)
