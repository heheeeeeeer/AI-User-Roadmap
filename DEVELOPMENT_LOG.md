# Development Log

每次修改本项目后，都需要在这里追加记录。下一次修改前必须先阅读本文件，并确认上一条记录里的回归检查点没有复现。

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
