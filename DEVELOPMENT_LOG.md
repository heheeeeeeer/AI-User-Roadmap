# Development Log

每次修改本项目后，都需要在这里追加记录。下一次修改前必须先阅读本文件，并确认上一条记录里的回归检查点没有复现。

## 2026-07-05（发布前回归修复）

### 改动摘要

- 发布前检查最新代码时，修复「信息调研 / 联网搜索」从工具卡退回普通资源卡的回归，重新改为 `toolResources`。
- 删除「知识整理 / 来源型笔记本」描述里重新出现的 `腾讯 ima` 推荐，继续保持此前已确认的移除要求。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- `git diff --check` 检查通过。
- 启动本地预览 `npm run dev -- --port 8765`，通过 `http://127.0.0.1:8765/` 确认页面返回 `HTTP/1.1 200 OK`。
- 读取本地页面 HTML，确认 `AI User Roadmap`、`前言`、`基础概念`、`快速上手`、`核心场景`、`Agent` 等关键内容正常输出。
- 读取本地 `/roadmap-data.json`，确认详情面板数据可正常返回。
- 使用源码搜索确认 `src/data/roadmap.js` 中不再包含 `ima`。

### 下一次改动前需要防止复现

- `联网搜索` 应继续作为工具列表使用 `toolResources`，不要退回普通资源卡。
- `来源型笔记本` 里不要重新加入 `ima` 或 `腾讯 ima`。
- 发布前继续同时检查构建、本地预览响应、路线图 JSON 数据和前序 UI 回归点。

## 2026-07-04（更新 Agent 章节原文稿和网页数据）

### 改动摘要

- 将重组后的 Agent 章节内容更新到 `src/data/roadmap.js`，按“什么是 Agent”、“配置 Agent”、“与 Agent 协作”三个子分组重新组织。
- 在 `什么是 Agent？` 分组中增加了通俗的 Agent 公式和概念解释。
- 在 `配置 Agent` 分组中补充了 `CLAUDE.md` 和 `Skills` 两个影响深远的配置项官方说明。
- 在 `与 Agent 协作` 分组中引用了人机协作的视频结论，强化了对学习和原理重要性的引导。
- 删除了原本混在同一组的单一列表结构，使得资源推荐具有更清晰的认知路径。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 检查 `roadmap.js` 数据结构，确认 `advanced` 阶段的 `groups` 数组结构正确，各项 `resources` 格式无误。

### 下一次改动前需要防止复现

- 维护 `Agent` 章节时，请继续保持“概念 -> 配置 -> 协作/实战”这种分类清晰的逻辑。
- 不要在 `Agent` 里混入不具备强 Agent 特征（如单次问答、简单生图）的普通工具资源。

## 2026-07-04（修正路线图响应式重叠）

### 改动摘要

- 重新收敛路线图主线的响应式布局：901–1120px 不再把 `.roadmap-flow` 撑满父容器，避免浮岛和阶段节点被拉得过远。
- 560px 以下不再切换成上下堆叠，而是保持“浮岛在左、阶段节点在右”的横向关系，并同步缩小浮岛、连接线、阶段卡和标题字号。
- 将页面最小宽度从 320px 收到 280px，保证极窄预览下也不会因为全局最小宽度产生横向溢出。
- 主路线图上隐藏右侧二级快捷入口，二级内容继续保留在详情面板中，避免核心场景的多入口弹层与后续阶段节点发生层叠。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 使用 in-app browser 分别测量 1008px、320px、280px 宽度：`scrollWidth === clientWidth`，未出现横向溢出。
- DOM 度量确认 1008px、320px、280px 下前五个阶段节点均在浮岛右侧，浮岛与卡片垂直中心误差约 1–5px，未再上下堆叠。
- DOM 度量确认 `.subtopics-wrapper` 可见数量为 0，主路线图上不再出现二级弹层覆盖后续阶段。
- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 中窄屏不要再把 `.roadmap-flow` 改回 `width: 100%`，否则浮岛和阶段节点会被父容器拉散。
- 560px 以下应继续保持左右结构，只能通过缩放图片、连接线和阶段卡来适配，不要恢复单列堆叠。
- 主路线图旁不应重新展示二级快捷弹层；若恢复，必须先验证核心场景多入口不会压到下一阶段。
- 继续保护无横向溢出、阶段标题不省略、资源默认可见和详情面板里的二级内容入口。

## 2026-07-04（优化 Agent 章节引导语）

### 改动摘要

- 优化了 `docs/AI Roadmap 原文稿.md` 中 `Agent` 章节的开头引导语，修复了原文略显啰嗦的表达（“就是想着单独在这里展开一下”），使其语感更通顺连贯。

### 影响文件

- `docs/AI Roadmap 原文稿.md`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 检查文本替换正确，未破坏 Markdown 格式。

### 下一次改动前需要防止复现

- 维护原文稿时，尽量保持专业且平易近人的行文风格，避免口语化赘述。

## 2026-07-04（编程分组补充工具推荐）

### 改动摘要

- 在 `编程` 一级模块下新增 `推荐工具` 分组。
- 补充 `Cursor`、`Claude Code`、`Trae`、`Bolt.new`、`v0` 五个工具，并使用 `toolResources` 让它们按紧凑工具卡展示。
- 保留原有 `推荐资源` 教程卡分组，不和工具条目混排。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 抽查源码确认 `编程` 现在同时包含 `推荐工具` 和 `推荐资源` 两个分组，工具清单使用 `toolResources`。

### 下一次改动前需要防止复现

- `编程` 下的工具推荐应继续使用紧凑工具卡，不要混回普通资源卡。
- 若后续继续补充编程工具，优先保持工具与教程资源分组展示。

## 2026-07-04（多媒体工具改为工具卡）

### 改动摘要

- 将 `多媒体创作 / 图片 & 视频` 分组里的 `Lovart`、`可灵`、`即梦` 从普通 `resources` 中拆出，改为 `toolResources`。
- 同步去掉这三个工具条目里的来源/用途后缀，只保留工具名，让它们按项目现有的紧凑工具卡样式展示。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 抽查源码确认 `图片 & 视频` 分组同时包含教程型 `resources` 和工具型 `toolResources`，三项工具不再混在普通资源卡中。

### 下一次改动前需要防止复现

- `Lovart`、`可灵`、`即梦` 应继续作为工具卡展示，不要重新混回普通资源卡。

## 2026-07-04（视频描述改为分段渲染）

### 改动摘要

- 将 `内容理解 / 视频` 分组的 `description` 从单个字符串改为字符串数组，利用现有组件对 `string[]` 的支持，让说明文案按两段 `<p>` 正常渲染。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 抽查源码确认 `内容理解 / 视频` 的 `description` 已改为两段数组写法，不再依赖 `\n\n`。

### 下一次改动前需要防止复现

- 需要换段的 `description` 继续优先使用 `string[]`，不要再依赖字符串内的 `\n` 期望页面自动分段。

## 2026-07-04（移除核心场景摘要）

### 改动摘要

- 删除一级阶段 `核心场景` 的摘要文案 `普通人在真实任务里最常用到的六类 AI 场景。`，按当前需求让该阶段不再显示这句说明。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用源码搜索确认项目内不再存在该句摘要文案。

### 下一次改动前需要防止复现

- 如无明确需要，不要再给 `核心场景` 回填这句摘要；若后续要补摘要，需先确认和页面信息密度是否匹配。

## 2026-07-04（核心场景与 Agent 结构改名）

### 改动摘要

- 将一级阶段 `核心能力` 改名为 `核心场景`，使章节命名更贴合当前内容里“高频使用模块”的组织方式。
- 将一级阶段 `进阶使用` 直接改名为 `Agent`，不再保留内部同名单子模块，避免页面上出现 `Agent > Agent` 的重复层级。
- 把原 `进阶使用 / Agent` 的资源组直接提升到一级阶段下，并补上一句说明，明确 Agent 是把前文调研、理解、整理、编程等能力串成可持续执行流程的编排层。
- 同步更新 `docs/AI Roadmap 原文稿.md` 中的章节标题，去掉重复的 `## Agent` 小标题。

### 影响文件

- `src/data/roadmap.js`
- `docs/AI Roadmap 原文稿.md`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用源码搜索确认 `src/data/roadmap.js` 中不再存在一级阶段标题 `进阶使用` 或重复的 `Agent` 子模块结构。
- 抽查原文稿，确认标题已调整为 `核心场景` 与 `Agent`，且 `Agent` 章节正文直接承接，不再多一层重复二级标题。

### 下一次改动前需要防止复现

- `知识整理` 和 `编程` 继续留在 `核心场景` 下，不要因为部分内容可 Agent 化就整体移出一级结构。
- `Agent` 继续作为一级阶段维护，不要再恢复成 `进阶使用` 下的同名单子模块，避免重复层级和页面重叠检查点回归。
- 如果后续继续扩写 `Agent`，优先补充定义、适用任务、边界与风险，不要只堆资源链接。

## 2026-07-04（分组标题竖条居中修复）

### 改动摘要

- 修复资源分组标题中左侧绿色竖条与标题文字基线不居中的问题。
- 将 `.group-card-heading` 增加最小行高，并把伪元素竖条改为基于容器 50% 垂直居中定位。
- 根据页面截图继续收紧分组标题行高，将分组标题改为 `inline-flex`，并把竖条高度固定为 16px，让标题文字与竖条在视觉上垂直居中。
- 修复普通资源列表 timeline 节点与竖线未严格同轴的问题，把竖线、圆点和横向连接线收敛到同一组 CSS 变量，避免不同资源列表里出现像素级错位。
- 根据浏览器批注继续调整普通资源列表 timeline 的横向留白，将轴线放到资源卡左侧 gutter 中心，保持左侧空隙和卡片侧空隙一致。
- 调整浮岛到阶段卡片的虚线连接，去掉原先过大的 `-30px` 负偏移，改为轻量偏移并让节点使用 `top: 50%` 居中，避免连接线贴住浮岛。
- 根据用户复查反馈，放弃粗节点/重线方案，改为轻量资源索引：7px 小圆点、1px 细竖线、同轴 `transform` 居中定位和弱连接线，降低 timeline 的视觉重量。
- 进一步从底层重做普通资源列表视觉：移除外置 timeline 节点、竖线和横向连接线，改为卡片内部轻量左侧强调线，避免无信息价值的时间线装饰持续制造对齐问题。
- 继续优化左侧阶段导航：修复阶段卡被连接线挤压后标题默认省略的问题；阶段卡改为稳定宽度，连接线改为固定轻量长度，并缩小连接节点视觉重量。
- 修复单个二级入口（如「进阶使用」下的 Agent）与主阶段卡重叠的问题：二级入口改为按主连接线和主卡宽度计算锚点，不再依赖父容器 `left: 100%`。
- 调整响应式策略：901–1480px 中窄屏隐藏右侧二级入口，避免二级弹层在笔记本宽度下裁切/溢出；二级内容仍可从主阶段详情面板进入。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 尝试使用 in-app browser 刷新 `http://127.0.0.1:8766/` 做截图验证，但该本地地址被当前浏览器安全策略拦截；本轮依据用户截图与 CSS 度量继续修正。
- 使用本地预览 `http://localhost:8765/` 点击并截图检查「快速上手」「信息调研」「内容理解」「进阶使用 / Agent」「前言」「基础概念」，确认普通资源卡 timeline 节点与竖线对齐，工具卡/资源卡混排正常。
- DOM 验证本地页面 `scrollWidth === clientWidth`，未引入横向溢出。
- 根据 CSS 几何复核：资源 timeline gutter 为 44px，轴线位于 22px，左右留白相等；阶段连接线从原 `-30px` 调整为桌面 `-8px` / 中宽 `-10px`。
- 最后一次尝试用 in-app browser 轻量截图复查时插件执行超时；已完成 `npm run build` 验证。
- 资源 timeline 进一步改为轻量方案，圆点与竖线共用 `--timeline-x`，通过 `transform` 基于同一轴心定位，避免粗节点比例失衡。
- 最终普通资源卡改为无外置 timeline 的卡片强调线方案，去掉节点比例失衡和线条错位风险。
- 阶段导航标题不再因 flex 挤压默认显示省略号；连接线长度和节点比例已按轻量设计语言调整。
- DOM 验证「进阶使用」和「Agent」卡片 overlap 为 0，阶段标题仍完整显示且没有横向溢出。
- 响应式规则改为 1480px 以下隐藏 `.subtopics-wrapper`，降低中窄屏横向溢出风险。

### 下一次改动前需要防止复现

- 分组小标题继续统一使用 `.group-card-heading` 结构。
- 左侧绿色竖条应始终跟随标题容器垂直居中，不要恢复 `top: 0.15em` 这类固定偏移，也不要重新把标题行高放宽到导致视觉偏移。
- 普通资源列表当前不再使用外置 timeline；不要轻易恢复外部圆点、竖线和横向连接线，除非先确认其信息价值和视觉比例。
- 阶段连接线不要恢复 `-30px` 负偏移，避免虚线和节点贴住浮岛。
- 阶段卡应保持足够宽度显示短标题，不要让连接线参与挤压按钮主体。
- 阶段连接节点应保持轻量，不要再加大 halo 或核心圆点。
- 单个二级入口应锚定在主卡右侧，不要重新使用会受主卡宽度影响的 `left: 100%`。
- 中窄屏不应展示右侧二级入口；如恢复展示，必须覆盖 901–1480px 的横向溢出验证。
- 继续保护工具卡/资源卡分流、无资源数量标签、无折叠控件、无横向溢出和浮岛路线布局。

## 2026-07-03（发布前清理与复查）

### 改动摘要

- 发布前清理不再使用的 `.group-card > h2` 兼容样式，统一小标题样式入口为 `.group-card-heading h2`。
- 复查本轮资源/工具卡、二级模块和内容数据调整后的关键残留文本与构建状态。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 使用 `git diff --check` 检查空白与 diff 格式问题。
- 使用源码搜索确认没有残留 `页面理解工具`、`页面理解资源`、`腾讯 / ima`、资源折叠控件相关类名。
- 阶段 Icon 文件体积复查约 `24–36KB`。
- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 分组小标题继续统一使用 `.group-card-heading` 结构，不要恢复直接 `.group-card > h2` 的旧写法。
- 继续保护工具卡/资源卡分流、无资源数量标签、无折叠控件、无横向溢出和浮岛路线布局。

## 2026-07-03（知识整理清理 ima 与 RAG 工具化）

### 改动摘要

- 从「知识整理」的 `来源型笔记本` 中删除 `ima` 条目。
- 将 `RAG` 分组中的 Dify、FastGPT、RAGFlow 拆为 `toolResources`，改用紧凑工具卡展示。
- 保留 `RAG` 分组前两个 IBM 讲解视频为普通资源卡，继续展示来源和说明文字。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「知识整理」面板，确认 `ima` 和 `腾讯` 不再出现在详情内容中。
- DOM 验证 `来源型笔记本` 只剩 `NotebookLM 完整操作指南`；`RAG` 中 `What is RAG?` 和 `Is RAG Still Needed?` 为普通资源卡，Dify、FastGPT、RAGFlow 为紧凑工具卡。
- 验证 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- `ima` 不要重新加入「来源型笔记本」。
- `RAG` 最后三个工具应继续使用紧凑工具卡，不要混回普通资源卡。
- 继续保护同一分组内工具卡与资源卡可连续展示、资源默认可见、无资源数量标签、无折叠控件和浮岛路线布局。

## 2026-07-03（修正内容理解工具卡）

### 改动摘要

- 重新核对「内容理解」中的 `网页` 分组，确认同一分组下 6 个网页工具和 2 个教程资源均正常渲染。
- 将「音频」分组改为工具型 `toolResources`，并去掉来源厂商小字，只保留工具名：通义听悟、飞书妙记、豆包输入法、微信输入法、Typeless。
- 将「视频」分组改为工具型 `toolResources`，用紧凑工具卡展示 Gemini 与 Text M3，不再使用带说明文字的资源卡样式。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「内容理解」面板并截图核对：`网页` 下工具卡正常显示，后接两个资源卡。
- DOM 验证 `网页` 包含 6 个紧凑工具卡和 2 个普通资源卡；`音频` 包含 5 个紧凑工具卡且无来源小字；`视频` 包含 2 个紧凑工具卡且无普通资源卡。
- 验证 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 内容理解里的网页工具不要消失，`网页` 分组应继续先显示工具卡再显示教程资源卡。
- 音频和视频属于工具型内容，应继续使用紧凑工具卡，不显示来源厂商小字。
- 继续保护资源默认可见、无资源数量标签、无折叠控件、工具卡无公司来源小字和浮岛路线布局。

## 2026-07-03（合并内容理解网页分组）

### 改动摘要

- 将「内容理解」中的 `页面理解工具` 与 `页面理解资源` 合并为单一 `网页` 分组。
- 新增同一分组内先渲染 `toolResources`、再渲染 `resources` 的能力，使工具卡与资源卡可以在同一个小标题下连续展示。
- `网页` 分组下保留 6 个紧凑工具卡和 2 个普通资源阅读卡，不再额外区分两个小标题。

### 影响文件

- `src/data/roadmap.js`
- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「内容理解」面板，确认只显示 `网页` 小标题，不再显示 `页面理解工具` 或 `页面理解资源`。
- DOM 验证 `网页` 分组内包含 6 个紧凑工具卡和 2 个普通资源卡，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 内容理解里的网页工具和教程资源应保持同一 `网页` 分组下连续展示，不要再拆成两个相邻小标题。
- 同一分组内工具仍应使用紧凑双列工具卡，教程资源仍应使用普通资源卡。
- 继续保护资源默认可见、无资源数量标签、无折叠控件、工具卡无公司来源小字和浮岛路线布局。

## 2026-07-03（内容理解页面工具与资源拆分）

### 改动摘要

- 将「内容理解」中的原 `页面` 分组拆分为 `页面理解工具` 与 `页面理解资源`。
- `页面理解工具` 保留 Atlas、豆包浏览器、夸克浏览器、Dia、Comet、Tabbit，并改为紧凑双列工具卡展示。
- 工具卡只保留工具名，不再显示公司来源小字；两个教程资源继续使用单列阅读卡片，保留作者来源和说明文字。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「内容理解」面板，确认 `页面理解工具` 渲染为 `.resource-list-compact`，`页面理解资源` 渲染为普通资源卡。
- DOM 验证工具区 6 个工具无来源小字、资源区 2 个教程保留来源和说明，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 页面理解里的工具和教程资源应继续分组渲染，不要重新混在同一个资源列表里。
- 工具区继续使用紧凑双列工具卡，教程资源继续使用单列阅读卡片。
- 继续保护资源默认可见、无资源数量标签、无折叠控件、工具卡无公司来源小字和浮岛路线布局。

## 2026-07-03（信息调研 Web Search 工具化）

### 改动摘要

- 将「信息调研」里的 `Web Search` 保持为独立小标题，与 `Deep Research` 同级展示。
- 将原 `Web Search` 下方的工具从普通 `items` 芯片列表改为 `resources` 工具列表，套用紧凑双列工具卡样式。
- 为 Perplexity、秘塔 AI 搜索、Felo、Elicit、SciSpace、Consensus 补充对应链接，使它们作为推荐工具可直接点击。

### 影响文件

- `src/data/roadmap.js`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「信息调研」面板，确认 `Deep Research` 与 `Web Search` 均作为小标题展示。
- DOM 验证 `Web Search` 下方不再存在 `.chip-grid`，6 个工具渲染为 `.resource-list-compact` 工具卡，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- `Web Search` 下的工具应继续使用紧凑工具卡，不要退回普通芯片样式。
- 信息调研里 `Deep Research` 和 `Web Search` 应保持同级小标题结构。
- 继续保护资源卡片体系、工具清单紧凑双列、资源默认可见、无资源数量标签、无折叠控件和浮岛路线布局。

## 2026-07-03（核心能力二级模块改为单列）

### 改动摘要

- 按反馈移除「核心能力」详情面板中的 `能力模块` 小标题，减少无意义层级。
- 移除二级模块入口中的 `01/02` 序号样式，改为更轻的小圆点标识。
- 将二级模块从两列导航卡改为一行一个的单列列表，降低局促感并提升可读性。
- 保留右侧箭头、纸感边框、轻微 hover 阴影，与详情面板和资源卡体系保持衔接。

### 影响文件

- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「核心能力」面板，确认不再显示 `能力模块` 小标题，不存在 `01/02` 序号文本。
- DOM 验证二级模块为单列 `450px`，6 个模块完整显示，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 核心能力二级模块不要恢复 `01/02` 序号或无意义小标题。
- 如继续调整二级模块入口，优先保持单列清爽目录感，避免重新变得局促。
- 继续保护资源卡片体系、工具清单紧凑双列、资源默认可见、无资源数量标签、无折叠控件和浮岛路线布局。

## 2026-07-03（优化核心能力二级模块排版）

### 改动摘要

- 优化「核心能力」详情面板中的二级模块入口，不再使用局促的普通按钮式排版。
- 将能力模块区调整为轻量导航卡样式：标题使用与资源区一致的绿色短竖标识，模块入口保留两列但增加留白、序号圆点和右侧箭头。
- 统一二级模块入口的纸感背景、边框、hover 阴影与详情面板整体视觉，提升与资源卡片体系的衔接感。
- 本次只调整右侧详情面板里的能力模块 UI，不改动左侧浮岛路线和主阶段按钮。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「核心能力」面板，确认 6 个二级模块以两列导航卡展示，模块入口高度约 `56px`，布局更舒展。
- DOM 验证 `.capability-button` 使用 grid 布局，包含两列 `219px 219px`，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 核心能力二级模块继续保持轻量导航卡样式，不要退回普通表单按钮式网格。
- 后续调整二级模块时，需要同时检查桌面详情面板和移动端两列/单列适配，避免局促或横向溢出。
- 继续保护资源卡片体系、工具清单紧凑双列、资源默认可见、无资源数量标签、无折叠控件和浮岛路线布局。

## 2026-07-03（快速上手资源分区与工具卡统一）

### 改动摘要

- 将「快速上手」资源结构调整为两块：`推荐工具` 与 `推荐资源`。
- 合并原「海外 / 国内」工具列表，工具卡只保留工具名，不再显示来源公司，降低视觉噪音。
- 多组资源场景恢复小标题展示，单组资源场景继续隐藏冗余标题，避免「基础概念」再次出现无区分度的「推荐资源」标题。
- 微调紧凑工具卡样式：降低高度、统一边框/纸感背景和间距，使其与下方资源阅读卡片更衔接。

### 影响文件

- `src/data/roadmap.js`
- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「快速上手」面板，确认显示 `推荐工具` 与 `推荐资源` 两个小标题。
- DOM 验证工具区共 10 个工具卡，只显示工具名且不再出现 OpenAI、Anthropic、Google 等来源公司；资源区仍保留「一口气学会使用 DeepSeek」阅读卡片。
- 精确检查「基础概念」详情面板，确认它作为单组资源仍不显示「推荐资源」小标题，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 「快速上手」继续保持 `推荐工具 / 推荐资源` 两段结构，工具卡不要恢复公司来源小字。
- 单组资源不要恢复冗余小标题；多组资源才使用小标题区分内容。
- 继续保护工具清单紧凑双列、带说明资源单列阅读卡片、资源默认可见、无资源数量标签、无折叠控件和无横向溢出。

## 2026-07-03（工具清单改为紧凑双列）

### 改动摘要

- 将纯工具清单型资源自动识别为紧凑展示：当同一组资源数量大于 1 且都没有说明文字 `note` 时，改为双列网格。
- 紧凑工具卡片保留标题、来源和外链箭头，但降低卡片高度、缩小间距，并隐藏左侧时间线圆点，提升列表密度。
- 保留带说明文字的学习资源为原有单列时间线卡片，避免长说明被压缩影响阅读。
- 同步更新静态 `ResourceList.astro` / `StagePanel.astro` 与动态 `Roadmap.astro` 渲染逻辑，确保首屏和按需加载详情展示一致。

### 影响文件

- `src/components/ResourceList.astro`
- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「快速上手」面板，确认海外/国内工具组渲染为双列紧凑卡片，带说明文字的 DeepSeek 教程仍保持单列阅读卡片。
- DOM 验证 `compactListCount = 2`、紧凑工具卡 `min-height = 58px`、紧凑列表隐藏时间线圆点，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 纯工具清单继续保持紧凑双列展示，不要退回松散单列时间线卡片。
- 带说明文字的资源仍应保持单列阅读卡片，避免长文本被双列压缩。
- 继续保护资源默认可见、无资源数量标签、无折叠控件、无「推荐资源」冗余标题、浮岛路线布局和无横向溢出。

## 2026-07-03（移除资源组标题）

### 改动摘要

- 移除资源列表上方的「推荐资源」分组标题展示，让单一资源列表直接进入卡片内容。
- 同步更新静态 `StagePanel.astro` 与动态 `Roadmap.astro` 两条渲染路径，确保首屏和点开详情后的资源区都不再显示该标题。
- 保留资源卡片、时间线节点、标题优先与来源弱化展示等上一轮确认过的资源区样式。

### 影响文件

- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「基础概念」面板，确认页面正文中不再包含「推荐资源」，且 3 个资源卡片仍正常显示。
- DOM 验证 `resourceCards = 3`、`visibleRecommendText = false`，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 资源区不要恢复「推荐资源」这类无区分度标题；除非后续真的出现多个并列资源分类。
- 保持资源卡片标题优先、来源辅助展示，不要退回「作者 / 标题」整体加粗放在首行。
- 继续保护资源默认可见、无资源数量标签、无折叠控件、浮岛路线布局和无横向溢出。

## 2026-07-03（资源卡标题优先展示）

### 改动摘要

- 将「基础概念」第二个推荐资源名称改为「大语言模型的简要解释」。
- 调整资源卡片的信息层级：继续在数据中保留「来源 / 标题」格式，但页面渲染时自动拆分为标题优先、来源弱化显示。
- 同步更新静态资源列表组件和动态详情面板渲染逻辑，避免首屏与按需加载面板展示不一致。
- 为资源来源新增轻量小字样式，减少作者名放在前面造成的视觉拥挤。

### 影响文件

- `src/data/roadmap.js`
- `src/components/ResourceList.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览打开「基础概念」面板，确认第二个资源标题显示为「大语言模型的简要解释」，来源显示为较弱的 `3Blue1Brown`。
- DOM 验证资源标题、来源拆分正确，且 `scrollWidth - clientWidth = 0`，无横向溢出。

### 下一次改动前需要防止复现

- 资源卡片继续保持标题优先、来源辅助展示，不要退回「作者 / 标题」整体加粗放在首行的样式。
- 如果继续调整资源数据格式，需要同步检查静态 `ResourceList.astro` 与动态 `Roadmap.astro` 两条渲染路径。
- 继续保护资源默认可见、无资源数量标签、无折叠控件、浮岛路线布局和无横向溢出。

## 2026-07-03（参考设计稿优化资源区 UI）

### 改动摘要

- 参考设计稿将资源分组从“整块包裹卡片”调整为更轻的时间线式阅读清单。
- 为包含资源的分组新增 `resource-group-card` 样式：分组标题左侧使用绿色短竖标记，资源列表左侧增加细竖线和节点圆点。
- 资源卡片改为更接近设计稿的独立卡：更大的留白、更柔和的边框、更清晰的标题层级和更轻的 hover 阴影。
- 同步更新静态 `StagePanel.astro` 与动态 `Roadmap.astro`，确保首屏阶段和按需加载子模块使用同一套资源区 UI。
- 保持上一轮要求：不恢复首页副标题、不显示“个资源”数量标签、不恢复资源折叠条。

### 影响文件

- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览和 headless Chrome 截图检查 `基础概念`、`快速上手`、`内容理解` 三类代表面板，覆盖单组资源、多组短资源、多组长资源。
- 截图验证资源区已呈现时间线式清单，没有资源数量标签，没有 `<details>/<summary>` 折叠控件。
- DOM 验证代表面板 `details = 0`、`countBadges = []`，且 `scrollWidth` 与 `clientWidth` 均为 `1440`，无横向溢出。
- 验证截图保存在 `/private/tmp/ai-roadmap-ui-reference-check/`。

### 下一次改动前需要防止复现

- 资源区继续保持设计稿式时间线清单，不要退回大包裹卡片或折叠条。
- 若继续调整资源卡片，需要同时检查单组、多组、长列表三类面板，避免只优化一个场景。
- 继续保护无首页副标题、无资源数量标签、资源默认可见、浮岛路线布局和无横向溢出。

## 2026-07-03（移除首页副标题与资源数量标签）

### 改动摘要

- 移除首页主标题下方的副标题“从入门到进阶的 AI 学习路径”。
- 移除资源分组标题右侧的“3 个资源 / 4 个资源”等数量胶囊标签。
- 同步更新静态资源面板和按需加载面板，确保所有资源分组都不再显示数量标签。
- 清理数量标签对应的 CSS，避免标题栏继续保留右侧空位。

### 影响文件

- `src/components/Roadmap.astro`
- `src/components/StagePanel.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用 `rg` 确认源码中不再包含“从入门到进阶的 AI 学习路径”或“个资源”数量标签文本。

### 下一次改动前需要防止复现

- 不要恢复首页副标题，标题区域保持更干净。
- 资源默认展开后不要再额外展示数量标签，避免形成新的视觉噪音。
- 继续保护资源列表默认可见、无展开条、无横向溢出和竖向路线图布局。

## 2026-07-03（资源列表默认展开与卡片 UI 优化）

### 改动摘要

- 移除资源分组里的 `<details>/<summary>` 折叠交互，不再显示“3 个资源”展开条和 `+/-` 按钮。
- 将所有资源分组改为默认直接展示资源列表，资源数量变成分组标题右侧的轻量胶囊标签。
- 同步更新静态 `StagePanel.astro` 和按需加载的 `Roadmap.astro` 渲染逻辑，避免不同打开路径出现不一致。
- 优化资源分组卡片和资源链接卡片样式：更柔和的背景、圆角、间距、hover/focus 状态，让资源区更像整理好的阅读清单。
- 删除旧的资源折叠动画与增强脚本，减少无用交互和 JS 负担。

### 影响文件

- `src/components/StagePanel.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用 `rg` 检查源码和构建产物，确认不再包含 `resource-details`、`resource-reveal`、`<details`、`<summary`、`setupResourceDetails`、`enhanceResourceDetails` 等旧资源折叠逻辑。
- 使用本地预览和 headless Chrome 逐个打开并截图验证：前言、基础概念、快速上手、核心能力、进阶使用、信息调研、内容理解、知识整理、写作表达、多媒体创作、编程、Agent。
- 逐项 DOM 验证所有打开状态的 `detailsCount` 与 `summaryCount` 均为 `0`；包含资源的面板均直接展示 `.resource-panel` 和 `.resource-list`。
- 桌面端验证 `scrollWidth` 与 `clientWidth` 均为 `1440`，无横向溢出。
- 验证截图保存在 `/private/tmp/ai-roadmap-resource-verification/`。

### 下一次改动前需要防止复现

- 不要恢复资源分组的折叠条或 `+/-` 展开按钮；资源列表应默认可见。
- 如果继续调整资源卡片 UI，需要同步检查静态首屏面板和按需加载面板，避免两套渲染路径不一致。
- 继续保护前言章节无编号、顶部一句话桌面单行、竖向路线图布局、浮岛素材背景一致性和无横向溢出。

## 2026-07-03（更新前言措辞与联系邮箱链接）

### 改动摘要

- 将前言中“焦虑但是手足无措”相关句子替换为“不知道该怎么开始”，语气更直接自然。
- 将前言末尾的 `heheer@zju.edu.cn` 渲染为可点击的 `mailto:` 邮箱链接。
- 同步更新静态前言组件和按需加载详情面板的段落渲染逻辑，确保邮箱链接在不同打开路径下都可点击。

### 影响文件

- `src/data/roadmap.js`
- `src/components/IntroCard.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 代码层面确认旧句子已替换，且邮箱链接使用 `mailto:heheer@zju.edu.cn`。

### 下一次改动前需要防止复现

- 后续调整前言文案时，继续保持邮箱可点击，不要退回纯文本。
- 如果继续调整段落渲染逻辑，需要同步维护静态组件和按需加载面板，避免两种详情打开路径展示不一致。
- 继续保护前言章节无 `01/02` 编号、顶部一句话桌面单行、资源默认收起和无横向溢出。

## 2026-07-03（优化前言详情排版）

### 改动摘要

- 保留前言正文卡片的现有视觉样式，不再继续调整用户截图中框出的正文卡片质感。
- 移除前言详情章节标题前的 `01`、`02`、`03` 编号展示，并同步清理静态组件与按需加载面板里的编号生成逻辑。
- 将桌面端文章面板顶部的一句话总结设置为单行展示，并在 `901px–1120px` 窄桌面区间放宽详情栏宽度，让 MacBook Air 类宽度下更容易保持单行；移动端仍允许正常换行，避免横向溢出。

### 影响文件

- `src/components/IntroCard.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用本地预览在 `1024px` 宽度下检查：前言顶部一句话总结为单行，页面 `scrollWidth` 与视口宽度一致，无横向溢出。
- 检查最终构建产物与源码，确认不再包含 `intro-section-kicker`、`intro-statement`、`intro-principles` 或前言编号生成逻辑。

### 下一次改动前需要防止复现

- 前言章节标题不要恢复 `01/02` 这类顺序编号，保持更自然的文章标题层级。
- 如果继续调整详情栏宽度，需要同时检查 MacBook Air 窄桌面、普通桌面和移动端，避免为单行导语引入横向溢出。
- 继续保护正文卡片现有样式、资源默认收起、竖向路线图布局和浮岛素材背景一致性。

## 2026-07-03（更新前言正式文案）

### 改动摘要

- 将用户确认后的新版前言文案同步到 `src/data/roadmap.js`，更新一句话总结、整理 Roadmap 的原因、适合人群和内容说明。
- 前言详情正文从旧版“三条声明 + 碎碎念”更新为三个完整段落章节：`为什么整理这份 Roadmap`、`这份 Roadmap 适合谁`、`这里会有什么`。
- 调整 `IntroCard.astro` 的前言章节渲染方式，让所有前言章节统一按正文段落展示，避免新版长段落被错误渲染成列表项。

### 影响文件

- `src/data/roadmap.js`
- `src/components/IntroCard.astro`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 代码层面确认前言 summary 已去掉 `AI ，` 中多余空格，并同步为新版一句话总结。
- 代码层面确认前言详情章节数量为 3 个，且均使用段落栈展示。

### 下一次改动前需要防止复现

- 后续更新前言时，需要继续保持“先一句话总结，再解释背景、适合谁、有什么”的清晰结构。
- 不要把长正文重新渲染为项目符号列表，否则阅读节奏会被打碎。
- 继续保护竖向路线图布局、资源默认收起、无横向溢出，以及浮岛素材背景与页面底色一致。

## 2026-07-03（清理临时目录）

### 改动摘要

- 按要求删除项目中的 `tmp/` 临时目录。
- 清理内容包括临时文案草稿、图标预览中间文件和 UI 审查截图。
- 本次不调整网页源码、样式、数据或构建配置。

### 影响文件

- `tmp/`（删除）
- `DEVELOPMENT_LOG.md`

### 已做验证

- 使用 `find tmp -maxdepth 1 -print` 确认 `tmp/` 已不存在。
- 使用 `git status --short` 确认不再显示 `?? tmp/`。
- 未运行 `npm run build`，因为本次只删除未跟踪临时文件，不影响 Astro 页面构建。

### 下一次改动前需要防止复现

- 如需继续生成文案草稿或 UI 截图，应重新创建临时目录，并避免把临时产物误当作正式资源。
- 正式页面资源仍应放在 `public/`，路线图文案仍应以 `src/data/roadmap.js` 为准。

## 2026-07-03（整理前言临时文案）

### 改动摘要

- 将旧版前言中的项目初衷、roadmap.sh / csdiy.wiki 灵感、99 元课程经历、教程质量问题和开源免费声明，整合进新版首页式结构。
- 临时草稿前言改为“为什么整理这份 Roadmap / 适合谁 / 这里会有什么”的结构，减少大段连续叙述，方便后续继续编辑。
- 本次只修改临时文案草稿，不同步 `src/data/roadmap.js`，也不调整网页结构或样式。

### 影响文件

- `tmp/content-drafts/roadmap-copy-draft.md`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 抽查临时草稿开头，确认新版前言完整替换旧版“预先声明 / 其他碎碎念”结构。
- 确认“基础概念”段落仍接在前言之后，没有被误删。
- 检查临时草稿共 `375` 行。
- 未运行 `npm run build`，因为本次只修改临时 Markdown 文案草稿，不影响 Astro 页面构建。

### 下一次改动前需要防止复现

- 如果继续调整前言，需要保持首页可扫读结构，避免退回成大段难读正文。
- 后续回填源码时，需要把临时 Markdown 结构映射回 `src/data/roadmap.js` 的 `summary`、`intro` 或新数据结构，并运行 `npm run build`。

## 2026-07-02（导出现有文案临时草稿）

### 改动摘要

- 从 `src/data/roadmap.js` 导出现有站点文案，生成便于人工编辑的 Markdown 临时草稿。
- 草稿保留阶段标题、简介、分组标题、资源名称、链接和说明，方便后续逐段改写后再同步回源码。
- 本次不调整网页结构、样式或运行时代码。

### 影响文件

- `tmp/content-drafts/roadmap-copy-draft.md`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 检查临时草稿共 `359` 行。
- 抽查草稿开头包含站点标题、前言、基础概念、快速上手等内容。
- 抽查草稿结尾包含进阶使用与 Agent 推荐资源。
- 未运行 `npm run build`，因为本次只新增临时 Markdown 文案草稿，不影响 Astro 页面构建。

### 下一次改动前需要防止复现

- 如果根据草稿回填 `src/data/roadmap.js`，需要保持 JS 数据结构合法，尤其是引号、逗号、数组层级和资源字段。
- 回填文案后仍需运行 `npm run build`，并检查前言展开态、资源默认收起、竖向路线图布局和无横向溢出。

## 2026-07-02（前言展开态阅读设计稿）

### 改动摘要

- 将前言展开详情从连续正文卡片调整为更清晰的阅读稿结构：顶部保留标题和一句话导读，正文分为带编号的“预先声明”和“其他碎碎念”。
- “预先声明”改为三条独立要点，提升扫读效率；“其他碎碎念”改为文章式段落栈，增加字号、行高和段落间距。
- 右侧详情栏桌面端最大宽度从 `450px` 放宽到 `520px`，改善长中文段落的换行和可读性。
- 补齐移动端 `detail-dock` 的背景与滤镜重置，避免遮罩出现但详情面板没有覆盖到前景。

### 影响文件

- `src/components/IntroCard.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 本地预览端口 `8765` 被占用，Astro 自动使用 `http://127.0.0.1:8766/`。
- 桌面端 `1440x900` 截图检查：前言详情栏宽约 `518px`，内容按“概览 / 预先声明 / 其他碎碎念”分层展示，正文可纵向滚动。
- 移动端 `390x844` 截图检查：前言抽屉正常覆盖到前景，`documentElement.scrollWidth` 与 `clientWidth` 同为 `390px`，无横向溢出。

### 下一次改动前需要防止复现

- 后续继续调整详情栏时，必须同时检查桌面右侧 dock 和移动端全屏抽屉，避免移动端只出现遮罩但详情面板不可见。
- 不要把前言正文重新压回单一大卡片；应继续保持“先扫结论，再读背景”的信息层级。
- 继续保护资源默认收起、竖向路线图布局、无横向溢出和手写注释不遮挡内容。

## 2026-07-02（回退页面大背景为浮岛素材底色）

### 改动摘要

- 将网页大背景从暖色渐变和细网格纹理回退为原来的纯色画布 `#faf8f6`。
- 保留上一版简约 UI、阶段卡片和透明小 Icon 调整，仅移除会放大浮岛不透明底图边界的页面背景效果。
- 这次不改动浮岛图片本身，避免重新导出素材带来新的水流、留白或体积变化。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 代码层面确认 `body` 背景已回到 `var(--canvas)`，且不再叠加 `body::before` 的网格纹理层。

### 下一次改动前需要防止复现

- 只要继续使用带不透明底色的浮岛素材，就不要直接给页面大背景叠加明显的暖色渐变、纹理或纸感色差，否则会重新露出素材矩形底。
- 如未来想恢复更丰富的背景，需要先把浮岛素材重新处理成真正透明背景，或让素材底色与页面背景完全一致。
- 继续保护上一版已确认的透明阶段 Icon、小图体积、竖向路线图布局、资源默认收起和无横向溢出。

## 2026-07-02（简约高级 UI 调整与透明阶段 Icon）

### 改动摘要

- 将五个主阶段按钮 Icon 全部替换为无背景透明 PNG，并统一缩小到 `256x256`，单张约 `23–32KB`，避免继续使用 512px 大图造成不必要加载。
- 重新生成前言、基础概念、快速上手、核心能力和进阶使用的独立软 3D 小物件 Icon，移除原先的圆角底卡背景。
- 保持主体小岛路线、瀑布素材和水流衔接不变，仅调整外层 UI：暖纸感背景、标题字体与副标题、阶段卡片、连接线、二级能力浮层和详情/资源卡片质感。
- 移动端阶段布局改为“小岛居中 + 阶段卡片完整显示在下方”，避免右侧卡片被裁切。

### 影响文件

- `src/components/Roadmap.astro`
- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `public/assets/stage-icons/intro.png`
- `public/assets/stage-icons/basics.png`
- `public/assets/stage-icons/quick-start.png`
- `public/assets/stage-icons/core.png`
- `public/assets/stage-icons/advanced.png`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 使用 `sips` 确认五张阶段 Icon 均为 `256x256` 且 `hasAlpha: yes`。
- 检查五张阶段 Icon 文件大小约 `23–32KB`，相比上一版 512px PNG 明显减小。
- 截图检查桌面端：主体小岛路线保持不变，标题、背景、阶段卡片和二级能力浮层已调整为更简约高级的视觉语言。
- 截图检查移动端：阶段卡片不再被右侧裁切，改为在小岛下方完整展示。

### 下一次改动前需要防止复现

- 不要把阶段 Icon 恢复成带圆角底卡的大图；继续保持透明背景和较小资源体积。
- 后续如继续调整移动端布局，需要确认卡片完整显示、无横向溢出，并且不破坏小岛与瀑布主体。
- 继续保持详情内容按需加载、资源默认收起，以及二级标题 SVG 图标逻辑不被误删。

## 2026-06-26（替换主阶段按钮为软 3D 图片 Icon）

### 改动摘要

- 将前言、基础概念、快速上手、核心能力、进阶使用五个主阶段按钮的旧内联 SVG 图标替换为新生成的软 3D 图片 Icon。
- 新增 `public/assets/stage-icons/` 静态资源目录，并将 5 张 Icon 统一压缩为 `512x512` PNG，用于页面按钮内展示。
- 调整主阶段按钮左侧图标列宽和 `.stage-main-icon` 样式，让图片 Icon 在桌面、平板和移动端都保持足够可读的尺寸。
- 保留二级标题的现有 SVG 小图标，不影响信息调研、编程能力、Agent 等子模块入口。

### 影响文件

- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `public/assets/stage-icons/intro.png`
- `public/assets/stage-icons/basics.png`
- `public/assets/stage-icons/quick-start.png`
- `public/assets/stage-icons/core.png`
- `public/assets/stage-icons/advanced.png`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 确认仅替换主阶段按钮图标，二级标题图标仍使用原有 SVG 逻辑。
- 保留前次岛屿布局、水流间距、资源按需加载和移动端抽屉相关代码路径，未改动路线图主体数据。

### 下一次改动前需要防止复现

- 后续继续替换图标时，不要把项目引用指向 `$CODEX_HOME/generated_images`，正式资源必须落在 `public/` 下。
- 如果调整按钮尺寸，需要同时回归桌面、平板和移动端，避免图片 Icon 被压得过小或挤压标题文字。
- 不要误删二级标题 SVG 图标逻辑，除非明确要为二级标题也生成并接入独立 Icon。

## 2026-06-21（收紧瀑布与下一座岛之间的纵向间距）

### 改动摘要

- 为前四个路线阶段增加响应式负向底部间距，让后一个岛屿向上靠近上一段瀑布。
- 桌面端最多收紧 `18px`，移动端约收紧 `12px`；不改变岛图尺寸、水流造型、节点卡片或现有横向偏移。
- 保留少量呼吸空间，避免瀑布直接压住下一座岛，同时消除之前明显偏大的视觉断层。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 在桌面端完整截图检查：前四张图片框与下一张图片框由约 `11px` 间隙调整为约 `7px` 重叠，结合素材内部留白后，可见水流与下一座岛的间距约为 `0–20px`。
- 在移动端完整截图检查：相邻图片框约有 `4–8px` 重叠，但岛体与水流主体没有互相遮挡。
- 移动端 `scrollWidth` 与 `clientWidth` 同为 `375px`，无横向溢出。
- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 不要移除 `.island-stage:not(.is-last)` 的响应式负间距，否则水流和下一座岛之间会重新出现明显断层。
- 如后续修改岛图内部留白或图片框高度，需要重新截图评估当前 `-18px` 到 `-12px` 的收紧幅度，避免真正重叠。
- 继续保持无横向溢出、节点卡片不重叠和终点水池完整显示。

## 2026-06-21（统一五座岛屿的构图比例与水流衔接）

### 改动摘要

- 参考已确认的第一张前言岛屿和纵向路线设计稿，重新生成并替换第 2–5 张岛屿素材。
- 五张图片统一为接近 `700x565` 的横向画幅，在相同 `270x218` 页面画框内保持相近的岛体占比、视角、光照和留白。
- 第 1–4 张统一使用较宽、较厚、连续向下并在末端柔化的瀑布，强化相邻阶段之间的水流衔接感。
- 第 5 张作为路线终点，保留完整水池、踏石和荷叶，让瀑布明确落入水池，不再向空白处渐隐。
- 将原本只用于第一张图片的边缘遮罩扩展到全部岛图，使不透明生成背景平滑融入页面画布。
- 将五张 WebP 按质量 88 重新压缩，单张约 `15–22KB`；PNG 继续保留为兼容回退资源。

### 影响文件

- `public/assets/islands/roadmap/island-01.webp`
- `public/assets/islands/roadmap/island-02.png`
- `public/assets/islands/roadmap/island-02.webp`
- `public/assets/islands/roadmap/island-03.png`
- `public/assets/islands/roadmap/island-03.webp`
- `public/assets/islands/roadmap/island-04.png`
- `public/assets/islands/roadmap/island-04.webp`
- `public/assets/islands/roadmap/island-05.png`
- `public/assets/islands/roadmap/island-05.webp`
- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。
- 在 `1280px` 桌面视口完整截图检查五座岛屿，图片框均为 `270x218`，岛体、水流和节点卡片未重叠，页面无横向溢出。
- 在 `390x844` 移动端视口完整截图检查，五张图片均已加载，`scrollWidth` 与 `clientWidth` 同为 `390px`，无横向溢出。
- 确认终点岛屿的瀑布与下方水池连续，池体、踏石和荷叶均完整显示。

### 下一次改动前需要防止复现

- 后续替换岛图时继续保持接近 `1.239:1` 的画幅比例和相近岛体占比，避免在统一图片框中忽大忽小。
- 第 1–4 张水流保持较厚、连续并朝向下一阶段；第 5 张必须保留明确的终点水池。
- 生成素材继续使用与页面一致的不透明背景和边缘遮罩，不要恢复洋红色键抠图。
- 重新导出图片时同步更新 PNG、WebP 和 `IslandStage.astro` 的固有尺寸，并控制 WebP 体积。

## 2026-06-21（试用网页底色版前言岛屿瀑布）

### 改动摘要

- 仅替换前言阶段的第一张岛屿素材；参考第二张“基础概念”岛图重新调整构图，让岛体在相同画框内大小接近，并让瀑布具有相近的宽度、厚度和连续落差。
- 瀑布末端以柔化和渐隐方式融入页面背景，整体落点朝向下一阶段，强化纵向路线中水流相接的感觉。
- 不再对半透明水流使用洋红色键抠图，图片直接使用接近页面 `#f8f7f5` 的不透明背景，避免再次出现粉色污染。
- 将页面画布色微调为新素材边缘的 `#faf8f6`，消除不透明图片与页面之间的亮色矩形边界。
- 为第一张不透明图片的四周加入很窄的边缘遮罩渐隐，使生成图内部的轻微背景亮度变化平滑过渡到页面画布，不形成硬矩形边界。
- 同步更新第一张图片的固有尺寸，并生成无损 WebP 版本供浏览器优先加载。

### 影响文件

- `public/assets/islands/roadmap/island-01.png`
- `public/assets/islands/roadmap/island-01.webp`
- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 确认 PNG 尺寸为 `700x565` 且不含 Alpha 通道，画幅比例与页面的 `270x218` 图片框一致，WebP 使用无损编码。
- 在 `1280x720` 本地页面中截图核对：第一张和第二张图片框均为 `270x218`，页面无横向溢出；重新构图后第一张岛体不再因纵向留白显著偏小。
- 在 `390x844` 移动端视口截图核对：前四座岛屿、水流和节点卡片均完整显示，页面 `scrollWidth` 与 `clientWidth` 同为 `390px`，没有横向溢出。
- `npm run build` 构建通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 先在真实页面检查不透明图片边界是否可见，再决定是否批量处理后续岛屿。
- 不要再使用洋红色键处理半透明水流末端，避免色键颜色混入虚化像素。
- 如页面背景色发生变化，需要同步重做这张不透明背景素材。

## 2026-06-20（替换站点图标为新的岛屿 PNG，并补全标准 favicon 资源）

### 改动摘要

- 将用户提供的 PNG 图像作为新的站点图标来源，生成并接入一套标准 favicon 资源：`favicon.ico`、`favicon-16x16.png`、`favicon-32x32.png`、`apple-touch-icon.png`、`android-chrome-192x192.png`、`android-chrome-512x512.png`。
- 更新 `BaseLayout.astro` 头部图标声明，不再使用原先的占位 `favicon.svg`，并新增 `site.webmanifest`。
- 对导出的 PNG favicon 做了索引色压缩，避免大尺寸图标体积虚高；压缩后 `512x512` 主图标约 `17KB`，`192x192` 约 `5KB`，适合线上静态站点使用。
- 删除旧的 `public/favicon.svg`，统一让浏览器、移动端桌面快捷方式与 manifest 使用同一套图标风格。

### 影响文件

- `src/layouts/BaseLayout.astro`
- `public/favicon.ico`
- `public/favicon-16x16.png`
- `public/favicon-32x32.png`
- `public/apple-touch-icon.png`
- `public/android-chrome-192x192.png`
- `public/android-chrome-512x512.png`
- `public/favicon-512.png`
- `public/site.webmanifest`
- `public/favicon.svg`（删除）
- `DEVELOPMENT_LOG.md`

### 已做验证

- 检查原始图片尺寸为 `756x756`，原文件大小约 `83898` bytes，适合作为 favicon 源图。
- 检查生成后的图标大小：`favicon-16x16.png` 为 `1309` bytes，`favicon-32x32.png` 为 `1574` bytes，`apple-touch-icon.png` 为 `4710` bytes，`android-chrome-192x192.png` 为 `5121` bytes，`android-chrome-512x512.png` 为 `17076` bytes，`favicon.ico` 为 `6698` bytes。
- `BaseLayout.astro` 与 `site.webmanifest` 诊断均为 0 问题。

### 下一次改动前需要防止复现

- 不要再只保留单一的 `favicon.svg` 占位图标；继续维护浏览器 favicon、Apple touch icon 和 manifest 图标这一整套资源。
- 如需替换站点图标，优先从同一张高分辨率源图导出多尺寸版本，避免不同入口显示风格不一致。
- 更换图标时继续关注大尺寸 PNG 的压缩，避免 `512x512` 图标无意义膨胀到数十或上百 KB。

## 2026-06-20（移除节点激活时的小岛轻微变亮效果）

### 改动摘要

- 删除 `.island-stage.is-active .island-picture` 上的 `filter: brightness(1.025)` 激活态样式。
- 保留节点按钮本身的激活反馈（边框与背景渐变），不再让小岛图片额外变亮。
- 之所以移除，是因为当前亮度变化过小，感知收益很低，同时会让主视觉也承担“选中态提示”的职责，反而不如让反馈集中在真正可点击的按钮上。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 代码层面确认小岛激活态不再额外应用 `filter`，按钮激活态样式仍保留。
- 本次仅删除 1 条局部样式规则，不涉及布局、脚本或资源路径。

### 下一次改动前需要防止复现

- 不要再给小岛图片加入这种幅度很小、感知不明确的激活亮度变化。
- 如果后续需要强化选中反馈，优先调整按钮本身的边框、背景或图标，而不是岛图主视觉。

## 2026-06-20（最终性能与安全收尾：详情面板按需加载 + 修复 esbuild 审计告警）

### 改动摘要

- 不再在 `Roadmap.astro` 首屏 HTML 中一次性渲染全部 13 个详情面板和 18 组资源列表，改为仅输出主路线图结构；用户首次点击节点时，再从静态路由 `/roadmap-data.json` 拉取详情数据并即时生成面板 DOM。
- 将原本写在 `StagePanel.astro` 里的资源折叠动画逻辑迁移到 `Roadmap.astro` 的客户端脚本中，并改为事件委托，保证新注入的详情内容仍然支持关闭按钮、遮罩、Escape、子模块跳转和资源展开动画。
- 新增 `src/pages/roadmap-data.json.ts`，由同一份 `src/data/roadmap.js` 生成静态 JSON，避免维护第二份详情数据。
- 在 `package.json` 中增加 `esbuild` override 到 `^0.28.1`，并更新 `package-lock.json`，修复 `npm audit` 中关于 Astro 传递依赖 `esbuild` 的低危安全告警。

### 影响文件

- `src/components/Roadmap.astro`
- `src/pages/roadmap-data.json.ts`
- `package.json`
- `package-lock.json`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。
- `npm audit --omit=dev` 结果为 `0 vulnerabilities`。
- 构建产物中新增 `/roadmap-data.json` 静态路由，确认详情数据已从首页拆出。
- `dist/index.html` 大小从上轮审查时的 `77196` bytes 降到 `25338` bytes，首屏 HTML 体积减少约 67%。
- 检查新构建的 `dist/index.html`，确认其中已不再包含任何 `data-intro-panel` 或 `<details>` 详情内容标记，隐藏详情不再首屏下发。

### 下一次改动前需要防止复现

- 不要把所有详情面板、资源列表重新直接渲染进 `index.html`；详情内容继续保持按需拉取。
- 如果后续扩充路线图字段，优先更新 `src/data/roadmap.js` 与 `src/pages/roadmap-data.json.ts` 的映射，不要手写第二份静态详情数据。
- 修改详情交互时，继续回归桌面侧栏、移动端全屏抽屉、遮罩关闭、Escape 关闭、资源默认收起和子模块跳转。
- 升级依赖后继续运行 `npm audit`，确保 `esbuild` override 不被回退到有告警的版本。

## 2026-06-20（将路线图主布局从 Grid 切换为 Flexbox 以解决跳动问题）

### 改动摘要

- 之前的 `.product-workspace` 采用的是 CSS Grid 布局（`1fr 0px` 到 `minmax(...) minmax(...)` 的切换）。由于部分浏览器在处理网格轨道的 `minmax` 过渡时不支持平滑插值，导致点击节点打开详情面板时，主区域会瞬间“跳动”。
- **修复方案**：
  - 将 `.product-workspace` 的 `display: grid` 改为了 `display: flex`。
  - 为左侧路线图容器 `.roadmap-board` 设置 `flex: 1 1 auto; transition: width 400ms, flex-basis 400ms`。
  - 为右侧详情面板 `.detail-dock` 设置 `flex: 0 0 0px; width: 0px; margin-left: 0`。
  - 当展开时（`.is-detail-open`），让右侧 `.detail-dock` 改变宽度和 `margin-left`，让左侧 `.roadmap-board` 平滑收缩（`flex: 1 1 560px`），从而完美替代原有的 Grid 分栏动画。
- 同步修复了期间不小心引入的一个未闭合的 CSS 花括号。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认动画引擎已改为基于 `flex-basis` 和 `width` 的插值，这在所有现代浏览器中都能得到如丝般顺滑的逐帧渲染。

### 下一次改动前需要防止复现

- 维护主体双栏布局时，请不要再改回 `display: grid` 的 `grid-template-columns` 动画，维持现在的 Flexbox 方案以确保顺滑过渡。

## 2026-06-20（再次精调路线图虚线与圆点的对齐和间距）

### 改动摘要

- 调整了 `.stage-connector` 的左侧外边距（`margin-left: -32px`），使其缩短，以便与前方的圆点拉开距离。
- 调整了 `::before` 圆点的绝对定位坐标（`left: -14px; top: -6px;`），使其在视觉上更精确地居中对齐到虚线末端，并保持了两端都有空白间距。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认虚线现在的起点和终点都与两端的圆点和卡片保持了呼吸间距，圆点视觉上也完全居中了。

### 下一次改动前需要防止复现

- 维护虚线和圆点时，请继续使用绝对定位分离它们，保持当前的 `margin` 与 `left/top` 配合，确保左、右侧均有留白。

## 2026-06-20（修复路线图虚线与圆点的对齐和间距）

### 改动摘要

- 修改了 `.stage-connector` 与其 `::before` 伪元素（代表起点的圆点）的定位方式。
- 将 `.stage-connector` 设置为 `position: relative`，并为其增加了 `margin-right: 4px`，使虚线不直接贴紧右侧的阶段卡片。
- 将 `::before` 圆点改为绝对定位（`position: absolute; left: -12px; top: -5px;`），使其完美居中并独立于虚线本身，让虚线左侧与圆点之间也自然留出间距。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认虚线现在的起点和终点都与两端的圆点和卡片保持了呼吸间距，不再紧贴在一起。

### 下一次改动前需要防止复现

- 维护虚线和圆点时，请继续使用绝对定位分离它们，不要用 `margin-top` 这种容易被排版挤压变形的方式。

## 2026-06-20（全面移除所有 STAGE 编号副标题）

### 改动摘要

- 从路线图左侧的节点胶囊中，去除了 `.stage-pill-index`（即“STAGE 01”、“STAGE 02”等副标题文本），并清理了其对应的 CSS 样式。
- 从路线图右侧的详情抽屉面板中，去除了 `.detail-stage-number` 元素（详情里的阶段编号），并清理了对应的 CSS 样式。
- 从相关的 Astro 组件（`IntroCard.astro` 和 `Roadmap.astro`）中彻底清理了不再使用的 `stageNumber` 属性传入及类型定义。

### 影响文件

- `src/components/IslandStage.astro`
- `src/components/IntroCard.astro`
- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors、0 warnings（无未使用变量的警告）。
- 确认全站无论是左侧按钮还是右侧详情内容，都不再出现 `STAGE XX` 的字样。

### 下一次改动前需要防止复现

- 不要再为路线图的各个阶段重新加上类似于 STAGE 01 这种强制编号的副标题，保持界面文本精简。

## 2026-06-20（实现详情面板的 Toggle 交互）

### 改动摘要

- 修改了 `src/components/Roadmap.astro` 中的 `openPanel` 脚本逻辑。
- 之前仅在移动端（`mobileQuery.matches`）时，二次点击已打开的节点会关闭面板；现在取消了移动端的条件限制。
- 现在在桌面端和移动端，当面板已经处于打开状态时，再次点击对应的节点按钮，都会触发 `closeAll` 并直接 `return`，实现“点击展开，再点击关闭”的 Toggle 交互体验。

### 影响文件

- `src/components/Roadmap.astro`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 阅读代码确认已移除 `&& mobileQuery.matches` 判断，所有端表现一致。

### 下一次改动前需要防止复现

- 在修改详情面板交互脚本时，请保持二次点击当前 active 节点能关闭侧边栏的设计。

## 2026-06-20（回退路线图主体左移，恢复居中布局）

### 改动摘要

- 撤销了上一步将 `.roadmap-flow` 强制左移的修改（`margin: 12px 0 0 12px`），将其恢复为居中对齐（`margin: 12px auto 0`）。
- 同步移除了移动端断点里用于保持居中的额外覆盖代码。
- 由于路线图右侧还需要留出给子模块节点或详情侧边栏的空间，强制左移会导致右侧留白过多而失衡，因此还是采用居中最为协调。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认 `.roadmap-flow` 在桌面端已恢复居中对齐，排版更加平衡。

### 下一次改动前需要防止复现

- 考虑到右侧详情栏的交互体验，主岛链请保持 `margin: auto` 的居中布局，避免盲目左移导致右侧留白失衡。

## 2026-06-20（移除背景云朵装饰）

### 改动摘要

- 删除了 `.roadmap-board::before` 中使用多重径向渐变绘制的背景云朵图案及其在移动端的断点覆盖代码。
- 页面左侧现在完全干净，去除了不必要的装饰元素。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认 `.roadmap-board::before` 伪元素已被清理。

### 下一次改动前需要防止复现

- 不要再使用 `::before` 等伪元素为路线图容器添加这种纯装饰性的云朵背景图案。

## 2026-06-20（去除背景渐变色，统一为设计稿色值）

### 改动摘要

- 将网页根节点的 `--canvas` 背景变量从 `#f3f6f4` 更新为设计稿色值 `#f8f7f5`。
- 从 `body` 选择器中移除了复杂的多重背景渐变效果（`radial-gradient` 与 `linear-gradient`），改为直接使用纯色背景 `var(--canvas)`。
- 同步更新了 `BaseLayout.astro` 中的 `<meta name="theme-color">` 色值为 `#f8f7f5`。

### 影响文件

- `src/styles/global.css`
- `src/layouts/BaseLayout.astro`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认背景变成纯色且代码冗余渐变逻辑被清理。

### 下一次改动前需要防止复现

- 不要再为 `body` 增加冗杂的 `radial-gradient` 背景，保持极简纯色设计。

## 2026-06-20（移除路线图外层卡片边框与背景）

### 改动摘要

- 去除了左侧路线图容器 `.roadmap-board` 的白色背景、阴影和外边框，让主线内容直接平铺并融入网页底色。
- 右侧详情面板 `.detail-dock` 仍保留原有的卡片样式。
- 清理了移动端 `@media (max-width: 560px)` 中针对 `.roadmap-board` 边框和阴影的重置覆盖代码。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 确认 `.roadmap-board` 的卡片样式已成功剥离，页面视觉变得更加开阔。

### 下一次改动前需要防止复现

- 不要再给路线图的主容器增加背景色和外边框。

## 2026-06-20（移除标题底部分割线）

### 改动摘要

- 移除了路线图主标题 `.roadmap-title` 下方的浅灰色底部分割线 (`border-bottom`)，使视觉更干净。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 检查 `global.css`，确保 `border-bottom: 1px solid var(--line);` 已被移除。

### 下一次改动前需要防止复现

- 不要再给 `.roadmap-title` 加上底部边框线。

## 2026-06-20（移除路线图标题下方的引导文案）

### 改动摘要

- 删除 `Roadmap.astro` 中 `.roadmap-title` 内 `<h1>` 旁边的 `<p>按顺序探索五座岛屿，建立一套真正能落地的 AI 使用方法。</p>`，连同外层冗余 `<div>` 一起移除，标题区只剩 `<h1>`。
- 同步清理 `global.css` 中只服务于该 `<p>` 的样式：基础规则 `.roadmap-title > p`（max-width / 字号 / 颜色）以及 1120px、900px、560px 三档断点中对它的显隐 / 尺寸覆盖。

### 影响文件

- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 全工程 grep `按顺序探索` / `roadmap-title > p` 均无匹配。
- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。
- `.roadmap-title` 保留 `display: flex` / `justify-content: space-between` 等布局规则，仅 `<h1>` 一个子元素，不影响后续若再次插入副标题的扩展。

### 下一次改动前需要防止复现

- 不要在标题区重新加入"按顺序探索…"或类似的副标题引导语；路线图区域请保持极简，仅以 `<h1>` 标识。
- 如确需在 `<h1>` 旁增加辅助文字，请改用 `<small>` 或自定义类名，并新增配套样式，不要复用旧 `.roadmap-title > p` 路径。

## 2026-06-20（全局性能深度优化）

### 改动摘要

- 优化 Astro 构建配置 (`astro.config.mjs`)，启用 `compressHTML: true` 开启 HTML 压缩。
- 配置 `inlineStylesheets: "always"`，将小体积的 CSS 完全内联进 HTML 产物中，直接消除了所有外部 CSS 的渲染阻塞（Render-Blocking）请求，显著提升首次内容绘制 (FCP)。
- 将 Vite 目标构建配置为 `target: "esnext"` 并使用 `esbuild` 作为 css minifier。
- 在 `BaseLayout.astro` 头部添加 LCP (Largest Contentful Paint) 元素的 `<link rel="preload">` 预加载指令，提前请求首屏图片 (`island-01.webp`)。
- 补充丢失的 `favicon.svg`，消除浏览器由于默认请求 `/favicon.ico` 带来的 404 错误与多余请求。
- 添加 `theme-color` meta 标签，增强移动端加载体验。

### 影响文件

- `astro.config.mjs`
- `src/layouts/BaseLayout.astro`
- `public/favicon.svg`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 构建成功，Astro check 为 0 errors。
- 检查 `dist` 构建产物，确认 `_astro` 目录下不再产生独立的 `.css` 文件，全部样式和轻量脚本已被内联入 `index.html`。
- 首图 `island-01.webp` 被成功预加载。

### 下一次改动前需要防止复现

- 在不引入巨大第三方 UI 库的前提下，请保持 `inlineStylesheets: "always"`。如果以后引入大量 CSS 导致 HTML 过大，再考虑改回默认的 `auto`。
- 如果首图发生变更，需同步修改 `BaseLayout.astro` 中的 preload 链接路径。
- 保留 `favicon.svg`，避免产生无意义的 404 请求影响性能分析。

## 2026-06-20（优化详情面板弹出动效）

### 改动摘要

- 将 `.product-workspace` 的切换方式从生硬的 `display: block` 与 `display: grid` 互切，优化为平滑的 CSS Grid 动画。
- 使用 `grid-template-columns: 1fr 0px;` 作为基础态，切换到双栏时过渡到 `minmax(...) minmax(...)`，并添加 `transition` 属性，使左侧路线图宽度变化流畅。
- 同步调整 `.detail-dock`，使用 `opacity` 和 `visibility` 控制显隐，使其与 Grid 宽度动画完美结合。
- 调整内部 `.intro-popover` 的位移和时长，统一使用 `400ms` 动效，让内容滑入与右侧栏展开完全同步。
- 移动端动效与遮罩也做了对应时间微调，保持多端体验的一致与顺滑。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过，Astro check 为 0 errors。
- 检查 `@media (max-width: 900px)` 下对 `.detail-dock` 的显隐覆盖（`opacity: 1; visibility: visible;`）正常，确保移动端弹窗不会因此次修改被隐藏。

### 下一次改动前需要防止复现

- 不要改回 `display: none` / `display: block` 的突变方式。保持利用 `grid-template-columns` 动画以确保平滑感。
- 若未来新增详情组件，请保持内部动画时长对齐主容器，避免产生不跟手的错觉。

## 2026-06-20（一比一还原设计稿，提取子模块至路线图主线）

### 改动摘要

- 参考设计稿，将部分阶段（如"核心能力"、"进阶使用"）的子模块（subtopics）直接渲染在路线图的主线上，与主节点通过虚线相连。
- 为"核心能力"设计了多子模块（6个）的右侧 2 列网格 Popover 样式。
- 为"进阶使用"设计了单子模块（Agent）的右侧相连 Pill 样式。
- 保留了原有的阶段详情侧边栏交互：点击这些子模块仍能正常打开右侧详情面板，且不影响原有移动端抽屉逻辑。
- 考虑到桌面详情打开时以及移动端可能造成的横向溢出问题，在双栏展开态和屏幕小于 900px 时隐藏子模块外露 UI（回退为只保留在抽屉内）。
- 提取并补全了各子模块对应的高质量 SVG 图标。

### 影响文件

- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。
- `curl` 本地开发服务器验证新元素 `subtopics-wrapper` 和 `subtopics-popover` 正常输出在 DOM 中。
- 保证新引入绝对定位的弹窗在双栏打开态时 `opacity: 0` / `pointer-events: none` 防止遮挡详情面板。
- 确认在 900px 移动端断点下通过 `display: none` 隐藏子模块面板，避免出现横向溢出。

### 下一次改动前需要防止复现

- 不要因为提取了子模块就在小屏端放任横向溢出；必须保留 `@media (max-width: 900px)` 及 `.product-workspace.is-detail-open` 中对 `.subtopics-wrapper` 的隐藏降级。
- 不要打破 `.stage-action` 作为 `display: flex` 的结构；子模块必须依赖其绝对定位或弹性布局特性，否则可能导致 `.island-stage` 的双列网格被破坏。

## 2026-06-20（反转岛链层级：最上层岛层级最高）

### 改动摘要

- 将 `.island-stage` 的 `z-index` 计算从 `calc(var(--stage-index) + 1)` 改为 `calc(5 - var(--stage-index))`，使 `--stage-index` 越小的节点（越靠上）层级越高。
- 当前 5 座岛的 z-index 由上至下依次为 `5 / 4 / 3 / 2 / 1`，最上面一座永远不会被下方任何岛覆盖。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。
- 阅读 `.island-stage:nth-child(1..5)` 五条规则仍只设置 `--island-offset-x`，未与新的 z-index 计算冲突。
- 提示：当前公式写死 5 座岛，后续若调整路线图阶段数量，需同步把 `calc(5 - …)` 中的 5 改为新数量（或改用反向写法 `calc(var(--stage-count) - var(--stage-index))`，并在 IslandStage 中注入 `--stage-count`）。

### 下一次改动前需要防止复现

- 不要把 z-index 改回 `calc(var(--stage-index) + 1)`，否则下方节点会再次覆盖最上层岛屿。
- 同一节点内部的瀑布与按钮层级（`z-index: 1/2/3`）仍依赖该岛本身的 `z-index` 作为基础；如果后续把岛链整体改成 sticky 容器，需要重新核对 `--stage-index` 在 DOM 中的稳定来源。
- 增加或减少路线图阶段数量时，记得同步更新 `calc(5 - …)` 中的常量。

## 2026-06-20（移除手写注释图）

### 改动摘要

- 删除 `public/assets/handnote-core-use.png` 及其在 `IslandStage.astro` 中的 `<img class="roadmap-handnote">` 条件渲染（`stage.id === "core"` 时显示"核心是先用起来"的手写体）。
- 同步移除 `global.css` 中 `.roadmap-handnote` 的全部规则：基础定位（旋转 -4deg、绝对定位）以及 1120px、900px、560px 三档断点里针对它的位置 / 显隐覆盖。

### 影响文件

- `public/assets/handnote-core-use.png`（删除）
- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 全工程 grep `handnote` / `hand-note` / `handnote-core-use` 均无匹配。
- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。
- 构建产物 `dist/` 中不再包含 `handnote-core-use.png`；`public/assets/` 仅保留 `islands/` 子目录。

### 下一次改动前需要防止复现

- 不要在节点上重新加入装饰性手写注释图；如确需为某个阶段补充视觉提示，请改用 `islands/roadmap/` 内的同尺寸素材或在 `IslandStage` 中以 SVG 直接渲染。
- "核心是先用起来" 这层语义请继续保留在文字描述里（如 `data/roadmap.js` 中 `core` 阶段的 summary / groups），而不是靠图传达。

## 2026-06-20（清理 IslandStage 重构后遗留的死代码）

### 改动摘要

- 删除 `src/components/RoadmapStage.astro`：旧版左右分栏 + `intro-island` 视觉的节点组件，已被 `IslandStage` 完全替代，且全工程无任何 import 引用。
- 移除 `StagePanel.astro` 中永远不被调用的 `inlineResources` 入参与其分支（`<div class="resource-inline">`），资源列表统一走 `<details>` 收起流程。
- 清理 `global.css` 中孤立的选择器 `.eyebrow`（仅与 `.detail-stage-number` 同名分组，从未被使用）。
- 删除 `public/assets/islands/intro-island.{png,jpg}`：旧组件独占的引言阶段插图，新版 `IslandStage` 直接使用 `roadmap/island-01.{png,webp}`，无需保留 fallback。

### 影响文件

- `src/components/RoadmapStage.astro`（删除）
- `src/components/StagePanel.astro`
- `src/styles/global.css`
- `public/assets/islands/intro-island.png`（删除）
- `public/assets/islands/intro-island.jpg`（删除）
- `DEVELOPMENT_LOG.md`

### 已做验证

- 全工程 grep `eyebrow` / `inlineResources` / `resource-inline` / `RoadmapStage` / `intro-island.(png|jpg)` 均无匹配。
- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints；构建产物仅包含 5 张 island 资源 + 手写注释图。
- `dist/index.html` 仍生成单个静态页面，未引入任何缺失资源。

### 下一次改动前需要防止复现

- 不要再恢复旧 `RoadmapStage` 路径或 `intro-island.png`，节点样式继续由 `IslandStage` + `src/styles/global.css` 中的 `.island-stage` 系列维护。
- 新增节点资源时直接放进 `public/assets/islands/roadmap/`，并在 `IslandStage.astro` 中维护 `imageDimensions` 与图标数组。
- 不要给 `StagePanel` 重新引入 `inlineResources` 之类的未使用入参；如需新增展示形态，请先确认有调用方传入。

## 2026-06-20（取消岛屿重叠并修复末岛裁剪）

### 改动摘要

- 移除所有岛屿节点的负间距，PC 与移动端均改为参考移动端的自然分段布局，不再互相覆盖。
- 使用共享的响应式阶段高度与图片高度变量，保证阶段步距始终大于图片高度，并继续复用同一套错落定位规则。
- 移除 `content-visibility` 与固有尺寸占位，避免离屏节点或动画溢出被浏览器绘制隔离裁剪。
- 为最后一个节点增加 28px 安全区，并将移动端路线图底部留白提升到 42px，确保最后一座岛及水池完整显示。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- PC 端四段相邻岛图的实际间隙分别为 9px、11px、13px、14px，所有节点 `margin-bottom` 均为 0。
- 390px 移动端最后一岛底部距路线图容器 65px、距外层卡片 97px，`scrollWidth === clientWidth === 390px`。
- 资源列表默认收起，详情仍为点击后显示。
- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 不要重新为岛屿节点设置负间距或依赖图片互相覆盖来隐藏瀑布末端。
- 保持 `--island-step` 大于 `--island-art-height`，并保留末岛与路线图底部安全区。
- 不要恢复会裁剪动画溢出的 `content-visibility`，除非完成末岛和各瀑布的专项回归。

## 2026-06-20（统一全端岛链定位规则）

### 改动摘要

- 明确相邻层级：后一个节点的层级高于前一个节点，使下层岛体自然覆盖上层瀑布末端，避免平直切口露出。
- 为各段设置轻量负间距，让图片原生瀑布落点接近下一岛；不要求像素级严丝合缝，保持与移动端一致的自然留白。
- 删除桌面、1024px、移动端三套重复的小岛偏移和间距覆盖，统一为一套 `clamp()` 响应式规则。
- 断点仅保留图片尺寸和网格宽度；清理已删除的 `.island-stream` 残余样式及移动端额外位移。

### 影响文件

- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 浏览器检查 PC 与 390px 移动端，确认岛链均呈现相同的错落方向和近似落点效果。
- 检查页面无 `.island-stream`、无 `.island-shadow`、岛图无 CSS drop-shadow，资源默认收起。
- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 小岛横向位置和段间距只在基础 `nth-child` 规则中维护，不要在断点里再次复制坐标。
- 断点仅负责尺寸与布局结构；调整错落节奏时使用现有 `clamp()` 变量同步影响全端。
- 保持后续节点覆盖前序瀑布末端的层级顺序，同时继续检查 390px 横向溢出。

## 2026-06-20（移除岛链附加效果并精确对齐）

### 改动摘要

- 完全移除小岛图片的 CSS `drop-shadow`，不再生成岛间灰雾或瀑布周围的附加阴影。
- 删除所有额外生成的蓝色延伸水流及对应动画，只保留透明素材中原生瀑布。
- 将第一岛向右、第二岛向左形成 56px 相对错位，并单独缩短第一段间距，使第一岛原生瀑布落到第二岛右侧上缘。
- 重新收紧桌面端阶段步距；移动端维持独立的 190px 步距并取消第一段负间距，避免内容拥挤。

### 影响文件

- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 浏览器截图确认第一岛瀑布与第二岛右侧对齐，页面中 `.island-stream` 与 `.island-shadow` 元素数量均为 0，岛图计算样式 `filter: none`。
- 390px 移动端检查无横向溢出，资源仍默认收起。
- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints。

### 下一次改动前需要防止复现

- 不要为岛图重新添加整体 drop-shadow、额外蓝色连接线或伪造水流动画。
- 第一岛和第二岛的位置需保持“第一岛偏右、第二岛偏左”，并保留第一段单独收紧的垂直间距。
- 后续更换岛图时应直接调整透明素材或节点位置，不要用覆盖层弥补瀑布落点。

## 2026-06-20（重排小岛水流路径）

### 改动摘要

- 为五个小岛分别设置独立横向偏移，形成左、右、左、右、收束的错落路径，接近参考设计稿的岛链节奏。
- 根据各张岛图的瀑布出口位置分别调整延伸水流，使上一节点水流更自然地落向下一座岛。
- 缩短节点纵向间距，让图片自带瀑布与下一岛上缘连续衔接。
- 移除路线图左侧的统一绿色竖线和落在瀑布底部的独立椭圆阴影；改为更轻的岛体投影，避免横向灰雾和双重阴影。
- 为 1024px 临界宽度和 390px 移动端单独收敛偏移量，防止错落布局引起横向溢出。

### 影响文件

- `src/components/IslandStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 使用浏览器分别截图检查岛链上半段、核心能力至进阶使用的下半段，以及 390px 移动端布局。
- 390px 下五个阶段边界均为 14px–376px，`scrollWidth === clientWidth === 390px`。
- 运行 `npm run build`，Astro check 与静态构建通过。

### 下一次改动前需要防止复现

- 不要恢复统一居中的机械排布、绿色竖向主线或瀑布末端的椭圆阴影。
- 调整岛图尺寸时需同步检查每个节点的 `--island-offset-x` 与 `--waterfall-offset-x`，保证水流仍能衔接。
- 继续在桌面单栏、桌面详情双栏和 390px 移动端三种状态检查横向溢出。

## 2026-06-20（按需显示阶段详情）

### 改动摘要

- 桌面端初始状态不再渲染可见的详情占位卡，路线图默认独占整行宽度。
- 点击任一阶段节点后才切换为双栏并显示对应详情；关闭详情后恢复单栏路线图。
- 移除页面标题上方的 `LEARNING PATH` 辅助标题，简化标题区域。

### 影响文件

- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 运行 `npm run build`，Astro check 与静态构建通过。
- 浏览器验证初始详情栏不可见且不占宽度，点击阶段后详情正常出现，关闭后恢复单栏。
- 检查资源列表初始收起、页面无横向溢出。

### 下一次改动前需要防止复现

- 不要恢复默认打开“基础概念”详情或空白详情占位面板。
- 保持节点点击后单活动详情、关闭恢复单栏，以及移动端全屏详情行为。
- 页面主标题上方不要重新加入 `LEARNING PATH`。

## 2026-06-20（移除顶部 Header）

### 改动摘要

- 移除页面顶部品牌、说明文案与版本标签组成的整行 Header。
- 同步删除对应桌面端和移动端样式，让双栏工作区直接贴近页面顶部，不残留占位空白。

### 影响文件

- `src/components/Roadmap.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 运行 `npm run build`，Astro check 与静态构建通过。
- 在本地浏览器确认 Header 已移除、工作区顶部空间已回收，并检查页面无横向溢出。

### 下一次改动前需要防止复现

- 不要重新加入独立的全宽顶部 Header；页面标题继续保留在左侧路线图卡片内部。
- 继续保持桌面双栏、移动端单列详情页与资源默认收起行为。

## 2026-06-20

### 改动摘要

- 按产品设计稿将页面重构为桌面双栏工作台：左侧为五段纵向悬浮小岛路线，右侧为当前阶段的固定详情面板。
- 新增可复用 `IslandStage` 组件，五个主阶段统一复用图片、连接流、阶段按钮、加载策略和选中状态，不为节点复制独立结构。
- 使用用户提供的 5 张真实透明小岛图，自动检测 alpha 内容边界、裁剪透明余量，并生成带透明通道的 PNG fallback 与 WebP 优化资源。
- 重写阶段详情切换逻辑：桌面端保持右侧面板，移动端使用 100vw × 100dvh 全屏详情页；支持遮罩、关闭按钮、Escape、滚动锁定与恢复。
- 保留现有路线图数据、子模块入口、外部资源链接协议过滤及 `noopener noreferrer external` 安全属性。
- 保持资源列表默认收起，并继续使用原有展开动画；手写注释仅在宽屏安全留白区显示，在中小屏隐藏，避免遮挡内容。
- 新增克制的小岛浮动、同步阴影呼吸和瀑布光流动画，并为 `prefers-reduced-motion` 提供完整降级。
- 首屏岛图使用 eager/high priority，其余岛图使用 lazy loading；所有岛图优先加载 WebP 并保留 PNG 兼容方案。

### 影响文件

- `src/components/IslandStage.astro`
- `src/components/Roadmap.astro`
- `src/components/IntroCard.astro`
- `src/components/StagePanel.astro`
- `src/styles/global.css`
- `public/assets/islands/roadmap/island-01.{png,webp}` 至 `island-05.{png,webp}`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过，Astro check 为 0 errors、0 warnings、0 hints，静态页面构建成功。
- 自动检查 5 张源图均为 RGBA，实际内容 alpha 边界有效；优化后图片四角保持透明，不含棋盘格、黑底或白色矩形背景。
- 浏览器以 1440 × 1000、1024 × 900、390 × 844 三种视口完成实际截图验证；三档均满足 `scrollWidth === clientWidth`，无横向溢出。
- 1440px / 1024px 桌面端确认岛屿、瀑布、连接点和阶段按钮对齐，右侧详情面板完整可滚动。
- 390px 移动端确认五个阶段均落在视口内；详情页打开后尺寸为 390 × 844，关闭后滚动锁定与根节点 overflow 均恢复。
- 验证移动端资源列表初始展开数为 0；点击“3 个资源”后正确显示 3 个有效链接。
- 验证桌面端从“核心能力”进入“信息调研”后只保留一个活动详情面板，按钮 `aria-expanded` 与面板状态同步。
- 本地开发服务器保持运行于 `http://127.0.0.1:8767/`（8765、8766 已被既有进程占用，Astro 自动顺延端口）。

### 下一次改动前需要防止复现

- 不要把真实小岛图退回 CSS 拼接的伪 3D 图形，也不要用 mask 遮盖素材背景。
- 保持五个主阶段由 `IslandStage` 统一渲染，并维持 WebP 优先、PNG fallback、首屏 eager / 后续 lazy 的加载策略。
- 保持桌面双栏、移动单列 + 全屏详情页的断点行为，继续检查 1024px 临界宽度和 390px 横向溢出。
- 不要让资源列表恢复为默认展开；新增详情内容时需继续检查长文本、资源链接和子模块面板的独立滚动。
- 手写注释只能出现在安全留白区，中小屏继续隐藏；不要遮挡岛屿、按钮或详情内容。
- 修改详情切换脚本后必须回归滚动锁定恢复、Escape 关闭、活动按钮同步和单活动面板约束。

## 2026-06-18

### 改动摘要

- 将第一个路线图节点“前言”改为 CSS 分层绘制的 2.5D 小岛样片。
- 为小岛节点增加轻量动效，包括悬浮、瀑布光带、阴影呼吸、树木轻摆和星点闪烁。
- 保留原有按钮语义、详情抽屉触发逻辑和后续路线图节点样式。
- 增加移动端尺寸约束，避免小岛样片撑出横向空间。

### 影响文件

- `src/components/RoadmapStage.astro`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过，Astro check 结果为 0 errors、0 warnings、0 hints。
- `npm run dev -- --port 8765` 在沙箱内因 `listen EPERM` 失败，授权后启动成功；8765 被占用，Vite 自动使用 `http://127.0.0.1:8766/`。
- 使用 `curl -I http://127.0.0.1:8766/` 验证本地预览返回 HTTP 200。
- 检查构建产物，确认 `stage-island-node`、`island-scene`、`has-island-preview` 已输出到 `dist/`。
- 尝试用 Playwright 做桌面/移动端截图和横向溢出检查，但本地 Playwright 浏览器二进制缺失；改用系统 Chrome headless 时进程因权限限制退出，未完成截图验证。

### 下一次改动前需要防止复现

- 继续保证路线图为竖向主线布局，不要把所有节点一次性改成未验证的新视觉结构。
- 扩展后续小岛节点时继续保持资源默认收起、详情抽屉可用、移动端无横向溢出。
- 若引入 GLB、Rive 或图片资产，需要先做首屏体积和移动端降级策略，避免影响静态站加载速度。
- 需要补一次真实浏览器截图验证，重点检查 1440px 和 390px 视口的小岛节点位置、手写注释是否遮挡内容、页面是否出现横向滚动。

## 2026-06-16

### 改动摘要

- 新增 `IntroCard` 组件并优化阶段面板样式与排版。
- 扩充及更新路线图数据 (`src/data/roadmap.js`)。
- 优化了资源列表展示样式和动画 (`ResourceList`, `RoadmapStage`, `global.css`)。
- 为 Cloudflare Pages 部署做相关提交准备。

### 影响文件

- `.gitignore`
- `src/components/IntroCard.astro`
- `src/components/ResourceList.astro`
- `src/components/Roadmap.astro`
- `src/components/RoadmapStage.astro`
- `src/components/StagePanel.astro`
- `src/data/roadmap.js`
- `src/layouts/BaseLayout.astro`
- `src/pages/index.astro`
- `src/styles/global.css`

### 已做验证

- 代码已提交，等待 Cloudflare Pages 构建流程进行测试。

### 下一次改动前需要防止复现

- 保证部署在 Cloudflare Pages 后的资源路径和静态文件能够正确访问。
- 维持竖向主线布局和现有的 CSS 样式动画正常。

## 2026-06-12

### 改动摘要

- 迁移为 Astro 静态站点。
- 将路线图从横向脑图改为竖向主线布局，参考 roadmap.sh 的单轴路线图形式。
- 资源列表改为默认收起，点击资源数量后展开。
- 保留“快速上手”附近的一张手写注释图，避免遮挡内容。
- 新增本开发指南和改动记录机制。

### 影响文件

- `AGENTS.md`
- `DEVELOPMENT_LOG.md`
- `package.json`
- `astro.config.mjs`
- `tsconfig.json`
- `src/pages/index.astro`
- `src/components/Roadmap.astro`
- `src/components/RoadmapStage.astro`
- `src/components/StagePanel.astro`
- `src/components/ResourceList.astro`
- `src/data/roadmap.js`
- `src/styles/global.css`
- `public/AI Roadmap 0.0.2.md`
- `public/assets/handnote-core-use.png`

### 已做验证

- `npm run build` 通过。
- Astro check 结果为 0 errors、0 warnings。
- 桌面 1440px 视口无横向溢出。
- 移动端 390px 视口无横向溢出。
- 所有资源组默认收起。
- 手写注释不遮挡“快速上手”右侧内容面板。
- 右上角原文链接指向 `/AI%20Roadmap%200.0.2.md`。

### 下一次改动前需要防止复现

- 不要恢复旧的 `index.html / app.js / styles.css` 静态实现。
- 不要把路线图改回横向坐标画布。
- 不要让资源默认全部展开。
- 不要引入横向滚动。
- 不要让手写注释遮挡节点或内容卡片。
- 不要移除 `ASTRO_TELEMETRY_DISABLED=1`，否则构建可能尝试写入用户偏好目录。

## 2026-06-12

### 改动摘要

- 移除公开发布目录里的 Markdown 原文副本和页面原文入口，避免构建产物暴露本地文档。
- 给外部资源链接增加 URL 协议过滤，仅渲染 `http` / `https` 链接。
- 为所有新窗口外链保留 `noopener noreferrer external`，降低反向标签劫持和 referrer 泄露风险。
- 移除微信链接中的 `poc_token` 参数。
- 将 Astro 升级到 `^6.4.6`，修复生产依赖安全审计中的 Astro 漏洞。
- 将 `@astrojs/check` 升级到 `^0.9.9`。
- 使用 npm `overrides` 将传递依赖 `yaml` 固定到安全版本。
- 将手写注释图压缩为实际渲染尺寸附近的 376px 宽图片，并补充图片尺寸、lazy loading 和 async decoding。
- 对路线图阶段启用 `content-visibility: auto`，并增加 `prefers-reduced-motion` 动画降级。
- 移除旧版静态实现和不再使用的根目录图片资源。
- 新增 README 与 MIT License。

### 影响文件

- `.gitignore`
- `LICENSE`
- `README.md`
- `astro.config.mjs`
- `package.json`
- `package-lock.json`
- `public/assets/handnote-core-use.png`
- `src/components/Roadmap.astro`
- `src/components/RoadmapStage.astro`
- `src/components/ResourceList.astro`
- `src/data/roadmap.js`
- `src/styles/global.css`
- `DEVELOPMENT_LOG.md`

### 已做验证

- `npm run build` 通过。
- `npm audit` 结果为 0 vulnerabilities。
- `find public -maxdepth 3 -type f -print` 确认发布目录只包含手写注释图。
- `npm run preview` 启动后使用 `curl -I http://127.0.0.1:4321/` 确认返回 HTTP 200。
- 检查构建 HTML，确认外部链接包含 `noopener noreferrer external`，页面不再包含 Markdown 原文入口。
- Browser 插件本地标签页创建超时，未完成可视化截图验证。

### 下一次改动前需要防止复现

- 不要把 Markdown 原文或技术文档放回 `public/`。
- 不要恢复页面右上角的原文文档入口，除非确认该文档可以公开。
- 新增资源链接时避免提交个人 token、追踪参数或非 `http` / `https` 协议链接。
- 升级依赖后继续运行 `npm run build` 和 `npm audit`。

## 2026-06-22（阶段导航图标预览）

### 改动摘要

- 参考已确认的前言图标风格，生成一套圆润、低饱和、软 3D 玩具感的一级阶段导航图标。
- 本轮覆盖前言、基础概念、快速上手、核心能力和进阶使用；信息调研、编程能力、Agent 等二级标题图标按要求暂不生成。
- 图标目前仅作为预览素材保存，尚未替换网站现有导航图标。

### 影响文件

- `output/imagegen/stage-icons/intro.png`
- `output/imagegen/stage-icons/basic.png`
- `output/imagegen/stage-icons/quick.png`
- `output/imagegen/stage-icons/core.png`
- `output/imagegen/stage-icons/advanced.png`
- `output/imagegen/stage-icons/preview.png`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 五张独立图标均统一缩放为 512 × 512 PNG，并确认不含透明通道。
- 生成 768 × 512 合集预览，检查了图标的配色区分、圆润造型和小尺寸轮廓可读性。
- `npm run build` 通过。

### 下一次改动前需要防止复现

- 未经用户确认前不要把预览图标接入网站。
- 后续接入时需要在实际 20–35px 导航尺寸检查清晰度、对齐和背景融合，避免引入横向溢出或改变路线图布局。
- 继续保持二级标题无图标，除非用户明确要求补充。

## 2026-06-22（阶段导航图标轻量化第二版）

### 改动摘要

- 以前言图标为严格视觉母版，重新设计快速上手、核心能力和进阶使用三个一级阶段图标。
- 统一为“轻薄白色主体 + 小型彩色语义符号”的结构，移除旧稿中过厚的底座、圆环和堆叠台阶。
- 保留第一版文件，第二版使用 `-v2` 文件名，网站现有图标仍未替换。

### 影响文件

- `output/imagegen/stage-icons/quick-v2.png`
- `output/imagegen/stage-icons/core-v2.png`
- `output/imagegen/stage-icons/advanced-v2.png`
- `output/imagegen/stage-icons/preview-v2.png`
- `DEVELOPMENT_LOG.md`

### 已做验证

- 检查第二版合集预览，确认五张图标在主体材质、透视、留白、阴影和视觉重量上更接近同一套设计语言。
- 三张第二版图标均为 512 × 512 PNG。
- `npm run build` 通过。

### 下一次改动前需要防止复现

- 接入网站前需由用户确认第二版方向，并在 20–35px 实际尺寸验证语义和辨识度。
- 不要重新引入厚底座、大圆环、大面积彩色块或堆叠体块。
- 二级标题图标继续保持暂不生成、暂不接入。
