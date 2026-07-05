# 前言

如果你想用好 AI，却不知道从哪里开始，可以参考这份 Roadmap。

## 为什么整理这份 Roadmap

做了几期 AI 科普后，我收到最多的反馈是：大家都知道 AI 很有用，也被铺天盖地的 AI 宣传包围着，但真正用起来，好像也就是有事问问豆包，效果还不一定好。想再学深一点，又不知道该从哪里开始。

于是我回顾了下自己学习和使用 AI 的过程，发现也踩了不少的坑，比如我曾经买过一个 99 元的 AI 课程，结果两个小时几乎都是车轱辘话，还不如后来刷到的同主题免费视频；又比如有一段时间用过某个 Claude Code 中转服务，后来被扒出来实际接入的是便宜的国产模型；再比如花了半个小时认真读一篇文章，照着测试后发现效果和文中描述完全不一样，然后才意识到那是一篇虚假的公关稿...... AI 的快速发展除了提升互联网行业的生产力，但与此同时，也让很多传统行业里的技术小白突然被推到浪潮面前，不知道该怎么开始。

所以这份 Roadmap 想做的事很简单：尽可能减少噪音和摩擦，给出一条真实、清晰、低门槛、易上手的学习路径，让每个愿意学习的人都能更顺利地开始使用 AI。

## 这份 Roadmap 适合谁

由于我也不是什么 AI 专家，只是一个扎实踩过坑，才把 AI 深度融入日常的普通使用者，我只能提供从一个小白到熟练使用 AI 的路径，至于更深入的 AI 应用开发或底层研究，就不在这份 Roadmap 的主要范围里了。

如果你时间比较充裕，或者正处在职业、学习方向的转型期，可以慢慢探索这份 Roadmap 的每一个角落，里面的资源都经过认真筛选，很多也是我反复看过或实践过的，我相信多多少少会给你带来一些启发。

如果你已经有具体的工作问题要解决，也可以直接跳到对应的 AI 能力模块，从中找到适合自己的能力和工具，直接拿来用，或者参考其中的思路，很多场景都会有帮助。

## 这里会有什么

这里目前整理了我长期收藏、反复筛选过的一些内容，并按不同能力和使用场景放到了对应的位置，所有资源都是免费的，优质的，好上手的

后续也会跟着 AI 的发展持续更新，不过并不会一味地追热点，而是同样会经过严格的人工筛选，尽量确保不同阶段的读者看了都有收获，也能找到可以马上尝试的内容

如果你有更好的内容推荐，或者认为某些内容不合适需要下架，可以联系 [heheer@zju.edu.cn](mailto:heheer@zju.edu.cn)


# 基础概念

先了解最基础的概念：我们现在谈论的 AI 到底是什么，为什么它能回答问题，以及为什么它有时会说错

- [Andrej Karpathy《Intro to Large Language Models》](https://www.youtube.com/watch?v=zjkBMFhNj_g&t=5s)
	- 23年的视频，大部分内容在现在看来也不会过时，从大语言模型就是 一个参数文件 + 一个运行文件 开始，一点点深入，举了很多容易理解的例子来解释。
- [3Blue1Brown《大语言模型的简要解释》](https://www.bilibili.com/video/BV1xmA2eMEFF/) 
	- 这个比较短的视频涉及了很多的内容却没有展开解释：预训练、强化学习、GPU、Transformer、Embedding、智能涌现等等，所以比较适合对 LLM 有了解后重新观看。
- [3Blue1Brown《GPT是什么？直观解释 Transformer》](https://www.bilibili.com/video/BV13z421U7cs/)
	- 3Blue1Brown 深度学习系列第 5 章，比上面的视频更完整地解释 GPT 和 Transformer，可以继续作为补充。


# 快速上手

完成第一次真正有用的 AI 使用：打开任意一个工具，提出一个具体问题，得到一个可以继续加工的回答

以下是几个简单推荐，排名不分先后，都是“自研模型 + 自家应用”，一个基本原则就是问任何想问的内容，不用管复杂的提示词，用起来再说

- 海外
	- [ChatGPT](https://chatgpt.com/)
	- [Claude](https://claude.ai/)
	- [Gemini](https://gemini.google.com/)
	- [Grok](https://grok.com/)
- 国内
	- [DeepSeek](https://chat.deepseek.com/)
	- [豆包](https://www.doubao.com/)
	- [千问](https://tongyi.aliyun.com/)
	- [元宝](https://yuanbao.tencent.com/)
	- [kimi](https://kimi.moonshot.cn/)
	- [智谱](https://chatglm.cn/)

- [数字游牧人《一口气学会使用DeepSeek，甚至给55岁的我妈用上了！》](https://www.bilibili.com/video/BV1jhFCerEpV/)
	- DeepSeek 火出圈后出来的早期视频，举了不少例子，没有用啥故作玄虚的提示词，非常实在地展示了 AI 的能力，可以跟着视频发送类似的提示词，感受 AI 的能力


# 核心场景

## 信息调研

可以简单分为 联网搜索 （Web Search）和 深度研究（Deep Research），联网搜索比较简单，是目前 AI 产品标配的功能。
深度研究则更进一步，会有多轮的联网搜索，是最值得优先掌握的 AI 能力之一。
当你进入一个新领域时，只需要给出主题词或核心问题，AI 就可以围绕它自动拆解研究方向、检索资料、筛选来源、整合结论，并生成一份带引用的结构化研究报告。通过这份报告，你可以快速了解领域全貌、识别关键概念、判断学习路径，并决定下一步应该深入哪些问题。

- [OpenAI Academy《Research with ChatGPT》](https://openai.com/academy/search-and-deep-research/)
	- OpenAI 官方的博客，对比了 search 和 deep research，说明了分别适合的场景，录了视频帮助上手，提供的提示词模板改改也可以用到别的产品的 deep research 里
- [電腦玩物《先用 Deep Research 掃清認知盲區，再用 Google 搜尋，我的 6 種學習新流程》](https://www.playpcesor.com/2025/05/deep-research-google-6.html)
	- 很详实的使用记录，解决问题的思路值得借鉴，AI 负责对要搜索的主题做基础的调研，生成一个可以推进的初稿，后续再自己进一步核验补全，虽然是繁体的，但是不影响阅读
- [YouTube：不同 AI 应用的 Deep Research 对比](https://www.youtube.com/watch?v=pSpvMmDuZBM)
	- 对不同 AI 应用的 Deep Research 做了个小对比，虽然过去了很久，产品已经更新了好几轮了，但是许多结论比如 ChatGPT 更倾向于参考自己站点的信息 这种都还是适用的，可以参考，不过音轨似乎有点问题，就一只耳机有声音
- [Agent Deep Research Skills](https://github.com/Weizhena/Deep-Research-skills)
	- 如果 Agent 的环境健康，也很推荐使用一些 Deep Research Skill 来辅助调研。这就是其中一个测试了效果还可以的 skill，践行了 human in the loop 的原则，让人能在列提纲、查细节、最后汇总等过程中，保持对调研方向的控制

## 内容理解

内容理解重点是让 AI 读懂我们提供的材料。这个材料可以是一段文字、一份 PDF、一个网页、一张截图、一段录音、一个视频等

### 文件

文件可以分为 短/单文件 和 长/多文件 两类，对于前一种情况，直接上传文件，文件内容会被加入到上下文中，每个 AI 产品可能有不同，可以查阅对应文档；后一种情况，则容易涉及 RAG 这种技术，在「知识整理」这个章节再进一步展开

- [OpenAI Help Center《文件上传常见问题》](https://help.openai.com/zh-hans-cn/articles/8555545-file-uploads-faq)
	- OpenAI 的文件上传文档，其中提到文档中嵌入的图片会被舍弃，实际测试发现确实第一步解析只会提取文字，不过后续还会渲染文件，能让 AI 通过视觉能力读取文件的截图

### 页面

对于页面的理解，最简单的是直接把链接发给 AI，让它阅读其中的内容；
更进一步值得尝试的是使用“AI 浏览器”。虽然很多人担心它存在隐私和安全风险，但也不用因为这点顾虑就完全不敢碰，拿来浏览一些公开网页还是很有帮助的

- 工具
	- [Atlas](https://chatgpt.com/zh-Hant-HK/atlas/)
	- [豆包浏览器](https://www.doubao.com/)
	- [夸克浏览器](https://www.quark.cn/)
	- [Dia](https://www.diabrowser.com/)
	- [Comet](https://www.perplexity.ai/comet)
	- [Tabbit](https://www.tabbitbrowser.com/)

- [檀东东Tango《【干货教程】重新学习怎么上网！AI·搜索·浏览器》](https://www.bilibili.com/video/BV1vmcdeGEVw/)
	- 豆包电脑版自带的 AI 浏览器功能，几个场景挺实用的，省去了不少装浏览器插件的功夫
- [秋芝2046《OpenAI原生AI浏览器！值得拥有的N个理由～》](https://www.bilibili.com/video/BV12is1zQELH/)
	- 总结了 AI 浏览器的使用场景，即解决跳转到其他AI工具使用的问题，用于解决日常使用浏览器时无数的小需求

### 图片

如何使用没什么好说的，就是上传图片即可。
可以简单了解下原理，目前流行的大模型视觉能力的实现方法主要两种，VLM 和 原生多模态，下面的视频介绍了相关的原理

- [IBM Technology《What Are Vision Language Models? How AI Sees & Understands Images》](https://www.youtube.com/watch?v=lOD_EE96jhM)
	- VLM 的总体介绍视频，主要中间的 Vision Encoder 这一节讲了图片转成向量，再把向量转换成视觉token的过程，通俗易懂
- [飞天闪客《【闪客】为啥所有AI都数不清手指？多模态底层原理揭秘》](https://www.bilibili.com/video/BV1zNt8zzEZX/)
	- 可以作为上面视频的补充，稍微多讲了点名词，不需要纠结具体什么意思，大概理解VLM的概念就行

- [IBM Technology《What is Multimodal AI? How LLMs Process Text, Images, and More》](https://www.youtube.com/watch?v=J51oZYcNvP8)
	- 这个视频讲的是原生多模态，一种相对更新的方式，介绍了之前 VLM 的局限，提供了一个共享向量空间的概念，在模型训练之初就接收多种模态的数据
- [OpenAI《你好 GPT-4o》](https://openai.com/zh-Hans-CN/index/hello-gpt-4o/)
	- GPT-4o 的更新公告，虽然是很久之前的模型了，但是它让“实时语音 + 视觉 + 文本”的端到端多模态体验第一次非常明显地进入大众产品


### 音频

这块也可以分成两类，一类是传统 pipeline，就是语音转文字转语音，是在 LLM 之前就已经成熟的技术，这里不展开；另一类则是图片里提到的多模态，比如 GPT-4o、豆包通话这些，能直接理解语音，可以感知语音里的语气语速

- 推荐工具
	- 音频转文字：[通义听悟](https://tingwu.aliyun.com/)、[飞书妙记](https://www.feishu.cn/product/minutes)
	- 语音输入法：[豆包输入法](https://shurufa.doubao.com/)、[微信输入法](https://z.weixin.qq.com/)、[Typeless](https://www.typeless.com/)

### 视频

视频理解是更进一步的需求，目前了解到的大概有四种实现方式，获取视频字幕、视频音频转文字、视频抽帧理解、原生视频理解。前两种还是理解文字，第三种是理解图片，第四种应该才算真正理解视频

- 推荐工具
	- [Gemini](https://gemini.google.com/)：目前在视频理解领域体验最好的工具之一，处理速度快且理解准确，强烈推荐首选。
	- [MiniMax](https://www.minimaxi.com/models/text/m3)：国内支持原生多模态的模型代表。虽然处理速度相对稍慢，但同样能准确识别视频画面与动态内容，值得一试。

## 知识整理

知识整理不止包括整理平时的学习笔记，还包括整理自己的生活状态等，有了 AI 就能很清晰很有条理地整理自己的所有资源

### LLM Wiki

目前最火的方式，用 AI Agent 维护一个仓库，把所有信息都存在里面，AI 会定时整理仓库里的知识内容，想要查询时也使用 AI 来查询，知识的使用效率很高

- [Andrej Karpathy / LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
	- Karpathy 大佬分享的 LLM Wiki 概念：让大模型把你持续输入的资料整理成一个长期维护的 Markdown 知识库，而不是每次提问时都从原始文档里临时检索答案
- [MarsLUL《开源我的AI生产力笔记系统！分享我的 Obsidian Skills》](https://www.bilibili.com/video/BV1XhzbBwEFk/)
	- 很值得推荐的一个开源小项目，可以下载过来根据自己的需求稍作修改。由于用到了很多 Obsidian 的双向链接，坚持用几个月后看着复杂的知识图谱，会很有成就感
- [技术爬爬虾《Obsidian邪修用法，免费云同步，AI，手机端，进阶技巧》](https://www.bilibili.com/video/BV1fZCyBYEuT/)
	- 一套很详细且对新手非常友好的 Obsidian 基础使用与进阶教程

### 来源型笔记本

典型代表就是 [NotebookLM](https://notebooklm.google.com/)。对我来说最常用的场景是粗读一本书：让 AI 生成思维导图，带着我读完全书并提炼出其中感兴趣的点。网上也有诸如 MIT 学生用它在 48 小时内通过考试的案例，总之用来辅助学习相当不错。

- [JeffSu杰夫《全新NotebookLM 完整操作指南，看这一条就够了！》](https://www.bilibili.com/video/BV1AFATz7EsD/)
	- 由 Google 官方前营销经理出品，视频质量很高，涵盖了 NotebookLM 各种核心功能的演示，以及非常真实的个人使用经验
- 其他同类型工具推荐：[腾讯 ima](https://ima.qq.com/)，可以自行体验它的知识库与智能写作功能

### RAG

前些年比较火的概念，对于企业里大量的产品文档、操作手册等的场景比较适用，而个人一般没有这么大量的资料需要处理

- [IBM Technology《What is Retrieval-Augmented Generation (RAG)?》](https://www.youtube.com/watch?v=T-D1OfcDW1M)
	- 没有废话地讲解了什么是 RAG，以及它主要用来解决什么问题，适合快速建立一个基础认知
- [IBM Technology《Is RAG Still Needed? Choosing the Best Approach for LLMs》](https://www.youtube.com/watch?v=UabBYexBD4k)
	- 可以配合上一条一起看。它讲清楚了什么时候该用 RAG，什么时候不需要用，能帮助你更好地做技术决策
- **工具推荐**
	- [Dify](https://dify.ai/)
	- [FastGPT](https://fastgpt.in/)
	- [RAGFlow](https://ragflow.io/)

## 写作表达

写作应该是使用最广泛的 AI 场景。AI 可以轻松地帮你组织出一段逻辑清晰的文字，但目前上限还是掌握在人手里，真正的写作者需要明确知道自己想要表达什么内容。

- [今天，我决定把「卡兹克风格创作.skill」开源了。](https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg)
- [上周做了场内部分享，关于我做AI这三年来总结的内容创作方法论。](https://mp.weixin.qq.com/s/93VMIcvAt4LT5n8vyZ0BYA)
- [“不是...而是...”刷屏的一年，我读内容的快乐被AI偷走了。](https://mp.weixin.qq.com/s/vl_60VsXFenDoNlfwwYn7Q)
	- 这三篇文章可以放在一起读。卡兹克的文章初读就会给人一种与众不同的真实感，文章里提炼了他做内容创作的很多核心想法，非常值得一读
- [人类行为设计师-小周《【进阶方法】如何用AI，帮我们写出90-100分的文案？》](https://www.bilibili.com/video/BV1D4ArzdE3D/)
	- 里面的观点很认同，虽然实操起来有一定难度，但如果遇到了写作瓶颈，非常推荐参考一下

## 多媒体创作

多媒体涵盖了图片、视频、音频等，从当初的史密斯吃面的惊悚场景，到现在几乎电影级精美的画面，AI 多媒体创作已经切实可用了

### 图片 & 视频

图片和视频类的 AI 产品应该是最卷的赛道了，各种交互形式层出不穷。这里主要讲原理和一些实操经验，具体工具的选择看自己哪个用着顺手即可。

- [漫士沉思录《【硬核科普】清华AI博士教你AI是怎么生成图片和视频的》](https://www.bilibili.com/video/BV16Z421n7fi/)
	- 虽然视频里提到的 Sora 已下线，但视频基于扩散模型的讲解非常扎实，是了解 AI 生图、生视频原理的好材料
- [秋芝2046《GPT image 2 实用玩法合集分享～【秋芝的AI开箱】》](https://www.bilibili.com/video/BV1chRLBSEY1/)
	- 视频里对比了当前主流的几款生图模型，参考价值很高
- [大师的AI小灶《再见了AI抽卡，5分钟搞懂AI生图的底层逻辑》](https://www.bilibili.com/video/BV1gsopB9ET1/)
	- 虽然实测 GPT-Image-2 没有视频中提到的某些问题，但里面从模型原理角度思考提示词的思路非常有趣，值得学习

- [火爆全网的《卢浮宫小猫》AI视频万字创作心得分享，这可能是他们最毫无保留的一次。](https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678972&idx=1&sn=d42663a7ea0cf4881ce4c5f5fdcb7bb6)
	- 之前很火的 AI 短片《卢浮宫小猫》的全流程分享，选角、定调、音乐、分镜、美术、动画，每一步都讲得很清楚
- [Mx-Shell《Ai原创短片〈丧尸清道夫〉-重制版，国产“爱死机”！》](https://www.bilibili.com/video/BV1FFRQB2Eqw/)
	- 《丧尸清道夫》正片
- [Mx-Shell《今天把我关于〈丧尸清道夫〉的创作思路分享给大家，如果能帮到你，我会很开心。》](https://www.bilibili.com/video/BV1xuVC6AEbg/)
	- 《丧尸清道夫》的生视频思路，非常真实接地气。不仅分享了“抽卡”过程，还展示了剪辑时间线和调色思路
- [Mx-Shell《国产“爱死机”〈丧尸清道夫〉图片资产工作流的创作思路分享！》](https://www.bilibili.com/video/BV1qJ7C6cEfS/)
	- 《丧尸清道夫》的生图工作流，同样非常真实，没有用故作玄虚的提示词，只是把想要的东西描述清楚，然后调整迭代

- 工具推荐
	- 简单的图片一般直接在 GPT、Gemini 或 豆包 对话框中生成
	- 复杂的视觉设计可以用 [Lovart](https://www.lovart.com/) 这类画布型工具
	- 生视频推荐使用 [可灵](https://klingai.com/)、[即梦](https://jimeng.doubao.com/) 这类大平台


### 音频

音频简单地分为 AI 音乐和声音克隆这两种，前者更偏向艺术创作，所以单独提及

- [Suno Music《How to Use Suno: From Beginner to Pro Features Explained》](https://www.youtube.com/watch?v=Vfai49qhluA)
	- [Suno](https://suno.com/) 官方出品的从入门到进阶使用教程，Suno 是目前 AI 音乐创作领域最好用的工具之一
- 文字转语音、声音克隆
	- 在线服务使用比较简单，免费的效果都不太行，之前用过 https://audio.z.ai/?tab=clone 但是现在好像没法克隆音色了
	- 至于更多的开源声音模型没有尝试过，所以不做推荐，可以自己试试 indexTT、Qwen3 TTS、VoxCPM 等等


## 编程

AI 编程早已不是程序员的专属。非技术背景的人也能通过了解产品设计规范、完善测试逻辑，用 AI 做出不错的应用和网站。

- [roadmap.sh: Vibe Coding](https://roadmap.sh/vibe-coding)
	- 大名鼎鼎的 roadmap.sh，也是这份 Roadmap 的灵感来源。虽然里面的 AI Engineer 路线对普通人来说过深，但这个 Vibe Coding 路线图非常棒，涵盖了工具选择、技术栈、安全、版本控制、测试等方方面面，学完后基本就能成为一个 Vibe Coding 高手
- [李自然说《Vibe Coding实战复盘：做玩具容易，做产品难》](https://www.bilibili.com/video/BV1Q7AjzdEQn/)
	- 一个比较反共识的视频。做个看起来炫酷的 Demo 容易，但要做真正能在生产环境稳定使用的东西就很难了。视频比较长，且是手持拍摄，建议先用 AI 总结后再针对性看
- [小小羊同学聊AI《codex制作个人作品集网站教程》](https://www.bilibili.com/video/BV1cME46tEwD/)
	- 从初始化提示词开始，没有盲目吹嘘“十分钟生成一个网站”，而是演示了真实的调优过程，视频信息密度很高，非常有实践意义，缺失的部署部分也可以直接交给 Codex 处理

# Agent

过去一年多里，AI Agent 是对我工作方式影响最大的工具。前面的核心场景中虽已多次提及，但特意没有深入，正是为了把它留到这里作为重头戏单独展开。

## 什么是 Agent？

- [技术爬爬虾《Codex (APP) 保姆级全攻略，海量实战教程， 一期精通Codex》](https://www.bilibili.com/video/BV1Kk9kBAEJv)
	- 一份非常详细的 Codex 教程。虽然由于 Codex 更新很快，部分界面可能不太一样了，但用来了解 Agent 能力依然非常有价值
- [赫赫儿《Agent是怎么跑起来的? 从零拆解Agent核心运行机制!》](https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?modal_id=7634148231470943530)
	- 简单地介绍了 Agent 的核心运行机制，采用了比较容易理解的 LLM + Harness 的介绍方式，很适合用来了解什么是 Agent
- [林亦LYi《一个视频搞懂OpenClaw！》](https://www.bilibili.com/video/BV1jEAaz3E6K/)
	- 十分钟把 OpenClaw 讲明白，包括它相比以前的 Coding Agent 做了哪些额外改进，以及可能存在的安全问题
- [Treap要赚一个亿U-Acc《万字拆解AI Agent编年史：一个视频看懂2022~2026五代演进，全程干货》](https://www.bilibili.com/video/BV1NL9tBsELS/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2)
	- 视频有点长但是不水，能感受到作者的思考过程，对于五代演进的划分可以作为参考，不一定完全准确

## 配置 Agent

对 Agent 有了基本的理解后，可以很容易想到 Agent 的配置很大程度上影响了 Agent 的能力，这里会介绍一些简单但是立竿见影的配置项。

- [Claude Code Docs《探索 .claude 目录》](https://code.claude.com/docs/zh-CN/claude-directory#ce-claude-md)
	- Claude Code 官方文档对于 .claude 目录的介绍，包括了 CLAUDE.md、settings.json、skills、rules 或 subagents 等一系列配置文件，可以总览有哪些可以个性化的地方
- [秋芝2046《手把手彻底学会 Agent Skills！》](https://www.bilibili.com/video/BV1G3FNznEiS/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2)
	- skills 是目前 Agent 里占据非常核心地位的功能，简单有用利于分享沉淀。这个视频详细介绍了什么是 skills，看完后无论是自己创建还是搜索好用的 skills，都很轻松

## 与 Agent 协作

- [五道口纳什《人机协作的视角，AI 时代的学习指南与焦虑缓解》](https://www.bilibili.com/video/BV12nw4z6Eoa/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2)
	- 非常有见地的思考，可以作为与 Agent 协作的心法，如果放弃自己的思考，结果就是被 AI 吞噬，而在和 AI 的交互中不断提升自己，这样的上限是无限的
- [绿导师原谅你了《04 (Aside) - LLM, Agents 和 Scaling Law》](https://www.bilibili.com/video/BV1gEcmzzE4P?spm_id_from=333.788.videopod.sections&vd_source=611f1c6701469d82272fd49ca9b9f7d2)
	- 大名鼎鼎的jyy出的最新的绝版真人操作系统课，虽然没看操作系统相关的部分，但是对于 AI 的讲解部分很有价值，可以顺带看看最后一节课的最后一部分，有着jyy老师的展望，总是令人热泪盈眶
