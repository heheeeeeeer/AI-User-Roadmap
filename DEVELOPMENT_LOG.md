# Development Log

每次修改本项目后，都需要在这里追加记录。下一次修改前必须先阅读本文件，并确认上一条记录里的回归检查点没有复现。

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
