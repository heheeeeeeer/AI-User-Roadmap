const colors = {
  blue: { accent: "var(--blue)", soft: "var(--blue-soft)" },
  green: { accent: "var(--green)", soft: "var(--green-soft)" },
  amber: { accent: "var(--amber)", soft: "var(--amber-soft)" },
  coral: { accent: "var(--coral)", soft: "var(--coral-soft)" },
  gray: { accent: "var(--gray)", soft: "var(--gray-soft)" }
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);
window.addEventListener("load", () => {
  requestAnimationFrame(() => window.scrollTo(0, 0));
});

const iconExternal = `
  <svg class="external-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M14 20H6a2 2 0 0 1-2-2V10" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
  </svg>
`;

const topics = [
  { id: "intro", title: "前言", color: "gray", x: 56, y: 500 },
  { id: "basic", title: "基础概念", color: "blue", x: 260, y: 500 },
  { id: "quick", title: "快速上手", color: "blue", x: 505, y: 500 },
  { id: "core", title: "核心能力", color: "green", x: 760, y: 494, className: "hub" },

  { id: "research", title: "信息调研", color: "green", x: 1040, y: 150 },
  { id: "deep", title: "Deep Research", color: "green", x: 1280, y: 105, className: "small" },
  { id: "web", title: "Web Search", color: "green", x: 1280, y: 210, className: "small" },

  { id: "understanding", title: "内容理解", color: "green", x: 1040, y: 350 },
  { id: "file", title: "文件", color: "green", x: 1280, y: 300, className: "small" },
  { id: "page", title: "页面", color: "green", x: 1280, y: 360, className: "small" },
  { id: "image", title: "图片", color: "green", x: 1280, y: 420, className: "small" },
  { id: "audio-understand", title: "音频", color: "green", x: 1280, y: 480, className: "small" },
  { id: "video", title: "视频", color: "green", x: 1280, y: 540, className: "small" },

  { id: "knowledge", title: "知识整理", color: "green", x: 1040, y: 660 },
  { id: "wiki", title: "LLM Wiki", color: "green", x: 1280, y: 610, className: "small" },
  { id: "notebook", title: "来源型笔记本", color: "green", x: 1280, y: 670, className: "small" },
  { id: "rag", title: "RAG", color: "green", x: 1280, y: 730, className: "small" },

  { id: "writing", title: "写作表达", color: "amber", x: 1040, y: 845 },
  { id: "media", title: "多媒体创作", color: "amber", x: 1040, y: 960 },
  { id: "media-image", title: "图片 & 视频", color: "amber", x: 1280, y: 925, className: "small" },
  { id: "media-audio", title: "音频", color: "amber", x: 1280, y: 1015, className: "small" },

  { id: "coding", title: "编程", color: "coral", x: 1040, y: 1120 },
  { id: "advanced", title: "进阶使用", color: "coral", x: 1660, y: 960 },
  { id: "agent", title: "Agent", color: "coral", x: 1885, y: 960 },
  { id: "other", title: "其他场景", color: "gray", x: 2080, y: 960 }
];

const resources = [
  { id: "r-basic-1", parent: "basic", label: "3Blue1Brown / LLM explained", url: "https://www.bilibili.com/video/BV1xmA2eMEFF/", x: 260, y: 590 },
  { id: "r-basic-2", parent: "basic", label: "Karpathy / Intro to LLM", url: "https://www.bilibili.com/video/BV1yD421P7mj/", x: 260, y: 636 },
  { id: "r-basic-3", parent: "basic", label: "3Blue1Brown / Transformer", url: "https://www.bilibili.com/video/BV13z421U7cs/", x: 260, y: 682 },
  { id: "r-quick-1", parent: "quick", label: "数字游牧人 / DeepSeek 入门", url: "https://www.bilibili.com/video/BV1jhFCerEpV/", x: 505, y: 590 },

  { id: "r-deep-1", parent: "deep", label: "OpenAI Academy / Research with ChatGPT", url: "https://openai.com/academy/search-and-deep-research/", x: 1545, y: 72 },
  { id: "r-deep-2", parent: "deep", label: "電腦玩物 / Deep Research 学习流程", url: "https://www.playpcesor.com/2025/05/deep-research-google-6.html", x: 1545, y: 118 },
  { id: "r-deep-3", parent: "deep", label: "Caleb Writes Code / AI Deep Research", url: "https://www.youtube.com/watch?v=pSpvMmDuZBM", x: 1545, y: 164 },

  { id: "r-file-1", parent: "file", label: "OpenAI Help / 文件上传 FAQ", url: "https://help.openai.com/zh-hans-cn/articles/8555545-file-uploads-faq", x: 1545, y: 286 },
  { id: "r-page-1", parent: "page", label: "檀东东Tango / AI 浏览器", url: "https://www.bilibili.com/video/BV1vmcdeGEVw/", x: 1545, y: 336 },
  { id: "r-page-2", parent: "page", label: "秋芝2046 / OpenAI 浏览器", url: "https://www.bilibili.com/video/BV12is1zQELH/", x: 1545, y: 382 },
  { id: "r-image-1", parent: "image", label: "IBM Technology / Vision Language Models", url: "https://www.youtube.com/watch?v=lOD_EE96jhM", x: 1545, y: 428 },
  { id: "r-image-2", parent: "image", label: "飞天闪客 / 多模态原理", url: "https://www.bilibili.com/video/BV1zNt8zzEZX/", x: 1545, y: 474 },
  { id: "r-image-3", parent: "image", label: "IBM Technology / Multimodal AI", url: "https://www.youtube.com/watch?v=J51oZYcNvP8", x: 1545, y: 520 },
  { id: "r-image-4", parent: "image", label: "OpenAI / 你好 GPT-4o", url: "https://openai.com/zh-Hans-CN/index/hello-gpt-4o/", x: 1545, y: 566 },

  { id: "r-wiki-1", parent: "wiki", label: "Karpathy / llm-wiki", url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f", x: 1545, y: 596 },
  { id: "r-wiki-2", parent: "wiki", label: "MarsLUL / Obsidian Skills", url: "https://www.bilibili.com/video/BV1XhzbBwEFk/", x: 1545, y: 642 },
  { id: "r-wiki-3", parent: "wiki", label: "技术爬爬虾 / Obsidian 邪修", url: "https://www.bilibili.com/video/BV1fZCyBYEuT/", x: 1545, y: 688 },
  { id: "r-notebook-1", parent: "notebook", label: "JeffSu杰夫 / NotebookLM 指南", url: "https://www.bilibili.com/video/BV1AFATz7EsD/", x: 1545, y: 734 },
  { id: "r-rag-1", parent: "rag", label: "IBM Technology / What is RAG?", url: "https://www.youtube.com/watch?v=T-D1OfcDW1M", x: 1545, y: 780 },
  { id: "r-rag-2", parent: "rag", label: "IBM Technology / Is RAG Still Needed?", url: "https://www.youtube.com/watch?v=UabBYexBD4k", x: 1545, y: 826 },

  { id: "r-writing-1", parent: "writing", label: "数字生命卡兹克 / 内容创作（一）", url: "https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg", x: 1280, y: 812 },
  { id: "r-writing-2", parent: "writing", label: "数字生命卡兹克 / 内容创作（二）", url: "https://mp.weixin.qq.com/s/93VMIcvAt4LT5n8vyZ0BYA", x: 1280, y: 858 },
  { id: "r-writing-3", parent: "writing", label: "数字生命卡兹克 / 内容创作（三）", url: "https://mp.weixin.qq.com/s/vl_60VsXFenDoNlfwwYn7Q", x: 1280, y: 904 },
  { id: "r-writing-4", parent: "writing", label: "小周 / AI 写文案", url: "https://www.bilibili.com/video/BV1D4ArzdE3D/", x: 1280, y: 950 },

  { id: "r-media-1", parent: "media-image", label: "漫士沉思录 / AI 生图生视频", url: "https://www.bilibili.com/video/BV16Z421n7fi/", x: 1545, y: 890 },
  { id: "r-media-2", parent: "media-image", label: "秋芝2046 / GPT image 2", url: "https://www.bilibili.com/video/BV1chRLBSEY1/", x: 1545, y: 936 },
  { id: "r-media-3", parent: "media-image", label: "大师的AI小灶 / 生图底层逻辑", url: "https://www.bilibili.com/video/BV1gsopB9ET1/", x: 1545, y: 982 },
  { id: "r-media-4", parent: "media-image", label: "微信公众号 / 卢浮宫小猫", url: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678972&idx=1&sn=d42663a7ea0cf4881ce4c5f5fdcb7bb6&poc_token=HDd0Kmqjmlv-8GpKfK2dOoDb9uRN7XD3Y6CqOO8O", x: 1545, y: 1028 },
  { id: "r-media-5", parent: "media-image", label: "Mx-Shell / 丧尸清道夫 原片", url: "https://www.bilibili.com/video/BV1FFRQB2Eqw/", x: 1545, y: 1074 },
  { id: "r-media-6", parent: "media-image", label: "Mx-Shell / 生视频思路", url: "https://www.bilibili.com/video/BV1xuVC6AEbg/", x: 1545, y: 1120 },
  { id: "r-media-7", parent: "media-image", label: "Mx-Shell / 生图思路", url: "https://www.bilibili.com/video/BV1qJ7C6cEfS/", x: 1545, y: 1166 },
  { id: "r-audio-1", parent: "media-audio", label: "Suno Music / Suno 入门", url: "https://www.youtube.com/watch?v=Vfai49qhluA", x: 1545, y: 1212 },
  { id: "r-audio-2", parent: "media-audio", label: "Z.ai / Audio Clone", url: "https://audio.z.ai/?tab=clone", x: 1545, y: 1258 },

  { id: "r-code-1", parent: "coding", label: "roadmap.sh / Vibe Coding", url: "https://roadmap.sh/vibe-coding", x: 1280, y: 1100 },
  { id: "r-code-2", parent: "coding", label: "李自然说 / 做产品难", url: "https://www.bilibili.com/video/BV1Q7AjzdEQn/", x: 1280, y: 1146 },
  { id: "r-code-3", parent: "coding", label: "小小羊 / Codex 作品集", url: "https://www.bilibili.com/video/BV1cME46tEwD/", x: 1280, y: 1192 },

  { id: "r-agent-1", parent: "agent", label: "技术爬爬虾 / Codex 攻略", url: "https://www.bilibili.com/video/BV1Kk9kBAEJv", x: 1885, y: 1032 },
  { id: "r-agent-2", parent: "agent", label: "林亦LYi / OpenClaw", url: "https://www.bilibili.com/video/BV1jEAaz3E6K/", x: 1885, y: 1078 },
  { id: "r-agent-3", parent: "agent", label: "抖音作者 / 定制 Agent", url: "https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?modal_id=7634148231470943530", x: 1885, y: 1124 },
  { id: "r-other-1", parent: "other", label: "少数派 / AI 盯着 6 只龟", url: "https://sspai.com/post/108453", x: 2080, y: 1032 }
];

const topicEdges = [
  ["intro", "basic"], ["basic", "quick"], ["quick", "core"],
  ["core", "research"], ["research", "deep"], ["research", "web"],
  ["core", "understanding"], ["understanding", "file"], ["understanding", "page"], ["understanding", "image"], ["understanding", "audio-understand"], ["understanding", "video"],
  ["core", "knowledge"], ["knowledge", "wiki"], ["knowledge", "notebook"], ["knowledge", "rag"],
  ["core", "writing"],
  ["core", "media"], ["media", "media-image"], ["media", "media-audio"],
  ["core", "coding"], ["coding", "advanced"], ["media-image", "advanced"], ["media-audio", "advanced"], ["advanced", "agent"], ["agent", "other"]
];

const handnote = {
  src: "assets/handnote-core-use.png",
  alt: "核心是先用起来",
  x: 458,
  y: 350,
  rotation: -7
};

const expandedTopicIds = new Set();
const byId = new Map(topics.map((topic) => [topic.id, topic]));
const resourcesByParent = new Map();
resources.forEach((resource) => {
  const current = resourcesByParent.get(resource.parent) || [];
  current.push(resource);
  resourcesByParent.set(resource.parent, current);
});

const nodeLayer = document.getElementById("nodeLayer");
const connectorLayer = document.getElementById("connectorLayer");
const topicEdgeLayer = document.getElementById("topicEdgeLayer");
const resourceEdgeLayer = document.getElementById("resourceEdgeLayer");
const annotationLayer = document.getElementById("annotationLayer");
const mapCanvas = document.getElementById("mapCanvas");
const mapShell = document.getElementById("mapShell");

function applyColorVars(element, colorName) {
  const color = colors[colorName] || colors.gray;
  element.style.setProperty("--accent", color.accent);
  element.style.setProperty("--accent-soft", color.soft);
}

function renderTopics() {
  topics.forEach((topic, index) => {
    const node = document.createElement("button");
    const hasResources = resourcesByParent.has(topic.id);
    node.type = "button";
    node.className = `topic-node ${topic.className || ""} ${hasResources ? "has-resources" : ""}`.trim();
    node.id = `node-${topic.id}`;
    node.textContent = topic.title;
    node.style.left = `${topic.x}px`;
    node.style.top = `${topic.y}px`;
    node.style.animationDelay = `${80 + index * 26}ms`;
    node.dataset.topicId = topic.id;
    node.setAttribute("aria-expanded", hasResources ? "false" : "true");
    node.disabled = !hasResources;
    applyColorVars(node, topic.color);
    if (hasResources) {
      node.addEventListener("click", () => toggleResources(topic.id));
    }
    nodeLayer.appendChild(node);
  });
}

function renderResources() {
  resources.forEach((resource, index) => {
    const anchor = document.createElement("a");
    anchor.className = "resource-node";
    anchor.href = resource.url;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.id = `resource-${resource.id}`;
    anchor.dataset.parent = resource.parent;
    anchor.hidden = true;
    anchor.style.left = `${resource.x}px`;
    anchor.style.top = `${resource.y}px`;
    anchor.style.animationDelay = `${index * 24}ms`;
    anchor.innerHTML = `<span class="label">${resource.label}</span>${iconExternal}`;
    nodeLayer.appendChild(anchor);
  });
}

function toggleResources(topicId) {
  const willExpand = !expandedTopicIds.has(topicId);
  if (expandedTopicIds.has(topicId)) {
    expandedTopicIds.delete(topicId);
  } else {
    expandedTopicIds.add(topicId);
  }
  syncResourceVisibility();
  renderResourceConnectors();
  if (willExpand) {
    const firstResource = document.querySelector(`.resource-node[data-parent="${topicId}"]:not([hidden])`);
    firstResource?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }
}

function syncResourceVisibility() {
  document.querySelectorAll(".topic-node.has-resources").forEach((node) => {
    const isExpanded = expandedTopicIds.has(node.dataset.topicId);
    node.classList.toggle("expanded", isExpanded);
    node.setAttribute("aria-expanded", String(isExpanded));
  });

  resources.forEach((resource) => {
    const element = document.getElementById(`resource-${resource.id}`);
    if (element) {
      element.hidden = !expandedTopicIds.has(resource.parent);
    }
  });
}

function boxOfTopic(topicId) {
  const topic = byId.get(topicId);
  const element = document.getElementById(`node-${topicId}`);
  const width = element?.offsetWidth || 132;
  const height = element?.offsetHeight || 52;
  return {
    x: topic.x + width / 2,
    y: topic.y + height / 2,
    right: topic.x + width,
    left: topic.x,
    top: topic.y,
    bottom: topic.y + height
  };
}

function boxOfResource(resource) {
  const element = document.getElementById(`resource-${resource.id}`);
  const width = element?.offsetWidth || 270;
  const height = element?.offsetHeight || 38;
  return {
    x: resource.x + width / 2,
    y: resource.y + height / 2,
    right: resource.x + width,
    left: resource.x,
    top: resource.y,
    bottom: resource.y + height
  };
}

function pathBetweenBoxes(from, to) {
  const startX = from.right;
  const startY = from.y;
  const endX = to.left;
  const endY = to.y;
  const midX = startX + Math.max(34, (endX - startX) * 0.5);
  return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
}

function renderTopicConnectors() {
  connectorLayer.setAttribute("viewBox", "0 0 2320 1320");
  topicEdgeLayer.innerHTML = "";

  topicEdges.forEach(([from, to], index) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathBetweenBoxes(boxOfTopic(from), boxOfTopic(to)));
    path.setAttribute("class", index > 2 ? "edge branch" : "edge");
    topicEdgeLayer.appendChild(path);
  });
}

function renderResourceConnectors() {
  resourceEdgeLayer.innerHTML = "";
  resources
    .filter((resource) => expandedTopicIds.has(resource.parent))
    .forEach((resource, index) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", pathBetweenBoxes(boxOfTopic(resource.parent), boxOfResource(resource)));
      path.setAttribute("class", "edge resource-edge");
      path.style.animationDelay = `${index * 18}ms`;
      resourceEdgeLayer.appendChild(path);
    });
}

function renderAnnotations() {
  const item = document.createElement("div");
  item.className = "annotation handnote-image";
  item.style.left = `${handnote.x}px`;
  item.style.top = `${handnote.y}px`;
  item.style.transform = `rotate(${handnote.rotation}deg)`;
  item.innerHTML = `<img src="${handnote.src}" alt="${handnote.alt}" loading="eager" />`;
  annotationLayer.appendChild(item);
}

function renderMobile() {
  const mobile = document.getElementById("mobileRoadmap");
  const groups = [
    { topic: "intro" },
    { topic: "basic", resources: ["r-basic-1", "r-basic-2"] },
    { topic: "quick", resources: ["r-quick-1"] },
    { topic: "core", children: ["research", "understanding", "knowledge", "writing", "media", "coding"] },
    { topic: "deep", resources: ["r-deep-1", "r-deep-2", "r-deep-3"] },
    { topic: "knowledge", children: ["wiki", "notebook", "rag"] },
    { topic: "media", children: ["media-image", "media-audio"], resources: ["r-media-1", "r-audio-1"] },
    { topic: "advanced" },
    { topic: "agent", resources: ["r-agent-1", "r-agent-2"] },
    { topic: "other", resources: ["r-other-1"] }
  ];

  const resourceById = new Map(resources.map((item) => [item.id, item]));
  mobile.innerHTML = groups.map((group) => {
    const topic = byId.get(group.topic);
    const color = colors[topic.color];
    const children = (group.children || []).map((id) => `<span class="mobile-chip">${byId.get(id).title}</span>`).join("");
    const mobileResources = (group.resources || []).map((id) => {
      const resource = resourceById.get(id);
      return `<a class="mobile-resource" href="${resource.url}" target="_blank" rel="noopener noreferrer" hidden><span>${resource.label}</span>${iconExternal}</a>`;
    }).join("");
    const hasResources = Boolean(group.resources?.length);
    return `
      <article class="mobile-section" style="--accent:${color.accent};--accent-soft:${color.soft};--ink:var(--ink-${topic.color});">
        <button class="mobile-topic ${hasResources ? "mobile-toggle" : ""}" type="button" ${hasResources ? 'aria-expanded="false"' : "disabled"}>${topic.title}</button>
        ${children ? `<div class="mobile-children">${children}</div>` : ""}
        ${mobileResources ? `<div class="mobile-resources">${mobileResources}</div>` : ""}
        ${group.note ? `<div class="mobile-note">${group.note}</div>` : ""}
      </article>
    `;
  }).join("");

  mobile.querySelectorAll(".mobile-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const section = button.closest(".mobile-section");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      section.querySelectorAll(".mobile-resource").forEach((resource) => {
        resource.hidden = expanded;
      });
    });
  });
}

let scale = 1;

function setScale(nextScale) {
  scale = Math.min(1.15, Math.max(0.7, nextScale));
  mapCanvas.style.transform = `scale(${scale})`;
  mapShell.scrollLeft = Math.min(mapShell.scrollLeft, mapCanvas.offsetWidth * scale);
}

function fitToStart() {
  const availableWidth = mapShell.clientWidth;
  const target = Math.min(1, Math.max(0.62, (availableWidth - 56) / 2320));
  setScale(target);
  mapShell.scrollLeft = 0;
  mapShell.scrollTop = 0;
}

document.querySelectorAll("[data-zoom]").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.zoom;
    if (action === "in") setScale(scale + 0.08);
    if (action === "out") setScale(scale - 0.08);
    if (action === "fit") fitToStart();
  });
});

renderTopics();
renderResources();
syncResourceVisibility();
requestAnimationFrame(() => {
  renderTopicConnectors();
  renderResourceConnectors();
});
renderAnnotations();
renderMobile();
fitToStart();
