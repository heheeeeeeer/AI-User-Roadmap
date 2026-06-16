export const roadmap = {
  title: "AI User Roadmap",
  stages: [
    {
      id: "intro",
      title: "前言",
      color: "gray",
      side: "left",
      summary: "如果你想用好 AI ，却不知道从哪里开始，可以参考这份 Roadmap。",
      intro: [
        {
          title: "预先声明",
          paragraphs: [
            "一句话概括：如果你想用好 AI ，却不知道从哪里开始，可以参考这份 Roadmap。",
            "灵感来自于 roadmap.sh & csdiy.wiki，AI 收集初审，人工整理复审。",
            "项目开源免费，如有内容推荐或者需要下架的，可以联系 heheer@zju.edu.cn"
          ]
        },
        {
          title: "其他碎碎念",
          paragraphs: [
            "最初想做这个项目，是因为有视频观众问我该如何学习和使用 AI。于是我去参考了 roadmap.sh，发现里面的 AI Engineer Roadmap 更偏向 AI 开发，并不太适合普通 AI 使用者。",
            "本以为找不到资源只能表示抱歉了，突然想到自己之前买过一个 99 元的 AI 课程，结果两个小时里都是车轱辘话，还不如某次在 B 站刷到的同主题免费视频。所以为了减少类似的情况，我决定自己整理一个由免费、高质量、好上手的资源组成的、面向 AI 使用者的 Roadmap。",
            "真正开始整理后，才发现网络上充斥着大量标题夸张、内容浮夸的教程，想要找到真正有价值的内容对新手来说非常困难。也因此，我更决定要把这个项目做好，帮助想学习 AI 的人少走一些弯路。",
            "我希望这个项目不只是一个资源列表，而是一条任何人都能马上开始的学习路径。让大家不用先被信息噪音劝退，也不用花冤枉钱试错，而是能从真实、有用、免费的内容开始，逐步建立对 AI 的理解，学会把 AI 变成自己工作、学习和创作中的可靠工具。"
          ]
        }
      ]
    },
    {
      id: "basic",
      title: "基础概念",
      color: "blue",
      side: "left",
      drawer: true,
      summary: "先了解最基础的概念：我们现在谈论的 AI 到底是什么，为什么它能回答问题，以及为什么它有时会说错。",
      groups: [
        {
          title: "推荐资源",
          resources: [
            {
              label: "Andrej Karpathy / Intro to Large Language Models",
              url: "https://www.youtube.com/watch?v=zjkBMFhNj_g&t=5s",
              note: "23 年的视频，大部分内容在现在看来也不会过时。从大语言模型就是一个参数文件 + 一个运行文件开始，一点点深入，举了很多容易理解的例子来解释。"
            },
            {
              label: "3Blue1Brown / Large Language Models explained briefly",
              url: "https://www.bilibili.com/video/BV1xmA2eMEFF/",
              note: "这个比较短的视频涉及了很多内容却没有展开解释：预训练、强化学习、GPU、Transformer、Embedding、智能涌现等等，所以比较适合对 LLM 有了解后重新观看。"
            },
            {
              label: "3Blue1Brown / GPT 是什么？直观解释 Transformer",
              url: "https://www.bilibili.com/video/BV13z421U7cs/",
              note: "3Blue1Brown 深度学习系列第 5 章，比上面的视频更完整地解释 GPT 和 Transformer，可以继续作为补充。"
            }
          ]
        }
      ]
    },
    {
      id: "quick",
      title: "快速上手",
      color: "blue",
      side: "right",
      drawer: true,
      summary: "完成第一次真正有用的 AI 使用：打开任意一个工具，提出一个具体问题，得到一个可以继续加工的回答。",
      groups: [
        {
          title: "海外",
          description: "排名不分先后，都是“自研模型 + 自家应用”。先不用管复杂提示词，问任何想问的内容，用起来再说。",
          resources: [
            { label: "OpenAI / ChatGPT", url: "https://chatgpt.com/" },
            { label: "Anthropic / Claude", url: "https://claude.ai/" },
            { label: "Google / Gemini", url: "https://gemini.google.com/" },
            { label: "xAI / Grok", url: "https://grok.com/" }
          ]
        },
        {
          title: "国内",
          resources: [
            { label: "DeepSeek / Chat", url: "https://chat.deepseek.com/" },
            { label: "字节跳动 / 豆包", url: "https://www.doubao.com/" },
            { label: "阿里云 / 千问", url: "https://tongyi.aliyun.com/" },
            { label: "腾讯 / 元宝", url: "https://yuanbao.tencent.com/" },
            { label: "Moonshot AI / Kimi", url: "https://kimi.moonshot.cn/" },
            { label: "智谱 / ChatGLM", url: "https://chatglm.cn/" }
          ]
        },
        {
          title: "推荐资源",
          resources: [
            {
              label: "数字游牧人 / 一口气学会使用 DeepSeek",
              url: "https://www.bilibili.com/video/BV1jhFCerEpV/",
              note: "DeepSeek 火出圈后出来的早期视频，举了不少例子，没有故作玄虚的提示词，非常实在地展示了 AI 的能力。可以跟着视频发送类似的提示词，感受 AI 的能力。"
            }
          ]
        }
      ]
    },
    {
      id: "core",
      title: "核心能力",
      color: "green",
      side: "right",
      summary: "把 AI 用到真实任务里所需的六类高频能力。",
      subtopics: [
        {
          id: "research",
          title: "信息调研",
          color: "green",
          summary: "可以简单分为联网搜索和深度研究。深度研究会多轮联网搜索，是最值得优先掌握的 AI 能力之一。",
          groups: [
            {
              title: "Deep Research",
              description: "进入一个新领域时，只需要给出主题词或核心问题，AI 就可以围绕它自动拆解研究方向、检索资料、筛选来源、整合结论，并生成一份带引用的结构化研究报告。",
              resources: [
                {
                  label: "OpenAI Academy / Research with ChatGPT",
                  url: "https://openai.com/academy/search-and-deep-research/",
                  note: "OpenAI 官方博客，对比了 search 和 deep research，说明了分别适合的场景，录了视频帮助上手，提供的提示词模板也可以迁移到其他产品里。"
                },
                {
                  label: "電腦玩物 / Deep Research 学习流程",
                  url: "https://www.playpcesor.com/2025/05/deep-research-google-6.html",
                  note: "很详实的使用记录。AI 负责对主题做基础调研并生成可推进的初稿，后续再由自己进一步核验补全，解决问题的思路值得借鉴。"
                },
                {
                  label: "Caleb Writes Code / Deep Research 对比",
                  url: "https://www.youtube.com/watch?v=pSpvMmDuZBM",
                  note: "对不同 AI 应用的 Deep Research 做了小对比。虽然产品已经更新了几轮，但不少结论仍有参考价值。"
                },
                {
                  label: "Weizhena / Agent Deep Research Skills",
                  url: "https://github.com/Weizhena/Deep-Research-skills",
                  note: "如果 Agent 环境健康，也很推荐用 Deep Research Skill 辅助调研。它践行了 human in the loop，让人能在列提纲、查细节、汇总等环节保持控制。"
                }
              ]
            },
            {
              title: "Web Search",
              description: "联网搜索是目前 AI 产品标配的功能，适合快速查找资料、补充事实和做基础核验。",
              items: ["Perplexity", "秘塔 AI 搜索", "Felo", "Elicit", "SciSpace", "Consensus"]
            }
          ]
        },
        {
          id: "understanding",
          title: "内容理解",
          color: "green",
          summary: "内容理解重点是让 AI 读懂我们提供的材料。材料可以是一段文字、一份 PDF、一个网页、一张截图、一段录音或一个视频。",
          groups: [
            {
              title: "文件",
              description: "文件可以分为短/单文件和长/多文件。前一种直接上传，内容会进入上下文；后一种容易涉及 RAG，会在知识整理里展开。",
              resources: [
                {
                  label: "OpenAI Help Center / 文件上传常见问题",
                  url: "https://help.openai.com/zh-hans-cn/articles/8555545-file-uploads-faq",
                  note: "OpenAI 的文件上传文档。其中提到文档中嵌入的图片会被舍弃，实际测试第一步解析确实只提取文字，后续才可能通过视觉能力读取文件截图。"
                }
              ]
            },
            {
              title: "页面",
              description: "最简单的是直接把链接发给 AI，让它阅读网页；更进一步可以尝试 AI 浏览器，用来浏览公开网页会很有帮助。",
              resources: [
                { label: "OpenAI / Atlas", url: "https://chatgpt.com/zh-Hant-HK/atlas/" },
                { label: "字节跳动 / 豆包浏览器", url: "https://www.doubao.com/" },
                { label: "夸克 / 夸克浏览器", url: "https://www.quark.cn/" },
                { label: "The Browser Company / Dia", url: "https://www.diabrowser.com/" },
                { label: "Perplexity / Comet", url: "https://www.perplexity.ai/comet" },
                { label: "Tabbit / AI Browser", url: "https://www.tabbitbrowser.com/" },
                {
                  label: "檀东东Tango / AI 搜索浏览器教程",
                  url: "https://www.bilibili.com/video/BV1vmcdeGEVw/",
                  note: "豆包电脑版自带的 AI 浏览器功能，几个场景挺实用，省去了不少装浏览器插件的功夫。"
                },
                {
                  label: "秋芝2046 / OpenAI 原生 AI 浏览器",
                  url: "https://www.bilibili.com/video/BV12is1zQELH/",
                  note: "总结了 AI 浏览器的使用场景：解决跳转到其他 AI 工具使用的问题，用于处理日常浏览器里的无数小需求。"
                }
              ]
            },
            {
              title: "图片",
              description: "使用上就是上传图片。原理上可以简单了解 VLM 和原生多模态两种主流实现方式。",
              resources: [
                {
                  label: "IBM Technology / What Are Vision Language Models?",
                  url: "https://www.youtube.com/watch?v=lOD_EE96jhM",
                  note: "VLM 的总体介绍视频，尤其是 Vision Encoder 这一节讲了图片转向量，再把向量转换成视觉 token 的过程，通俗易懂。"
                },
                {
                  label: "飞天闪客 / 多模态底层原理",
                  url: "https://www.bilibili.com/video/BV1zNt8zzEZX/",
                  note: "可以作为上面视频的补充，稍微多讲了点名词。不需要纠结具体什么意思，大概理解 VLM 的概念就行。"
                },
                {
                  label: "IBM Technology / What is Multimodal AI?",
                  url: "https://www.youtube.com/watch?v=J51oZYcNvP8",
                  note: "讲的是原生多模态，一种相对更新的方式。它介绍了之前 VLM 的局限，并提供了共享向量空间的概念。"
                },
                {
                  label: "OpenAI / 你好 GPT-4o",
                  url: "https://openai.com/zh-Hans-CN/index/hello-gpt-4o/",
                  note: "GPT-4o 的更新公告。虽然已经是很久之前的模型，但它让实时语音、视觉、文本的端到端多模态体验第一次明显进入大众产品。"
                }
              ]
            },
            {
              title: "音频",
              description: "一类是传统 pipeline：语音转文字再转语音；另一类是原生多模态语音，能直接理解语音并感知语气语速。",
              resources: [
                { label: "阿里云 / 通义听悟", url: "https://tingwu.aliyun.com/" },
                { label: "飞书 / 妙记", url: "https://www.feishu.cn/product/minutes" },
                { label: "字节跳动 / 豆包输入法", url: "https://shurufa.doubao.com/" },
                { label: "腾讯 / 微信输入法", url: "https://z.weixin.qq.com/" },
                { label: "Typeless / Voice Typing", url: "https://www.typeless.com/" }
              ]
            },
            {
              title: "视频",
              description: "视频理解大概有四种实现方式：获取字幕、音频转文字、视频抽帧理解、原生视频理解。前两种还是理解文字，第三种是理解图片，第四种才更接近真正理解视频。",
              resources: [
                {
                  label: "Google / Gemini",
                  url: "https://gemini.google.com/",
                  note: "目前在视频理解领域体验最好的工具之一，处理速度快且理解准确，强烈推荐首选。"
                },
                {
                  label: "MiniMax / Text M3",
                  url: "https://www.minimaxi.com/models/text/m3",
                  note: "国内支持原生多模态的模型代表。虽然处理速度相对稍慢，但同样能准确识别视频画面与动态内容，值得一试。"
                }
              ]
            }
          ]
        },
        {
          id: "knowledge",
          title: "知识整理",
          color: "green",
          summary: "知识整理不止包括学习笔记，也包括整理生活状态和长期资料。有了 AI，就能更清晰地组织自己的资源。",
          groups: [
            {
              title: "LLM Wiki",
              description: "目前很火的方式是用 AI Agent 维护一个仓库，把所有信息存在里面，定时整理知识内容，查询时也交给 AI 来查。",
              resources: [
                {
                  label: "Andrej Karpathy / LLM Wiki",
                  url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
                  note: "Karpathy 分享的 LLM Wiki 概念：让大模型把你持续输入的资料整理成一个长期维护的 Markdown 知识库。"
                },
                {
                  label: "MarsLUL / Obsidian Skills",
                  url: "https://www.bilibili.com/video/BV1XhzbBwEFk/",
                  note: "很值得推荐的开源小项目，可以下载后按自己的需求修改。坚持使用几个月后，复杂的知识图谱会很有成就感。"
                },
                {
                  label: "技术爬爬虾 / Obsidian 邪修用法",
                  url: "https://www.bilibili.com/video/BV1fZCyBYEuT/",
                  note: "一套很详细且对新手非常友好的 Obsidian 基础使用与进阶教程。"
                }
              ]
            },
            {
              title: "来源型笔记本",
              description: "典型代表是 NotebookLM。常用场景是粗读一本书：让 AI 生成思维导图，带着读完全书并提炼感兴趣的点。",
              resources: [
                {
                  label: "JeffSu杰夫 / NotebookLM 完整操作指南",
                  url: "https://www.bilibili.com/video/BV1AFATz7EsD/",
                  note: "由 Google 官方前营销经理出品，视频质量很高，涵盖了 NotebookLM 核心功能演示和非常真实的个人使用经验。"
                },
                {
                  label: "腾讯 / ima",
                  url: "https://ima.qq.com/",
                  note: "同类型工具，可以自行体验它的知识库与智能写作功能。"
                }
              ]
            },
            {
              title: "RAG",
              description: "前些年比较火的概念，对于企业里大量产品文档、操作手册等场景比较适用，个人一般没有这么大量的资料需要处理。",
              resources: [
                {
                  label: "IBM Technology / What is RAG?",
                  url: "https://www.youtube.com/watch?v=T-D1OfcDW1M",
                  note: "没有废话地讲解了什么是 RAG，以及它主要用来解决什么问题，适合快速建立基础认知。"
                },
                {
                  label: "IBM Technology / Is RAG Still Needed?",
                  url: "https://www.youtube.com/watch?v=UabBYexBD4k",
                  note: "可以配合上一条一起看。它讲清楚了什么时候该用 RAG，什么时候不需要用，能帮助你更好做技术决策。"
                },
                { label: "Dify / AI App Platform", url: "https://dify.ai/" },
                { label: "FastGPT / Knowledge Base AI", url: "https://fastgpt.in/" },
                { label: "RAGFlow / Open-source RAG Engine", url: "https://ragflow.io/" }
              ]
            }
          ]
        },
        {
          id: "writing",
          title: "写作表达",
          color: "amber",
          summary: "写作应该是使用最广泛的 AI 场景。AI 可以组织出逻辑清晰的文字，但上限仍取决于写作者是否知道自己想表达什么。",
          groups: [
            {
              title: "推荐资源",
              resources: [
                {
                  label: "数字生命卡兹克 / 卡兹克风格创作 skill",
                  url: "https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg",
                  note: "这三篇文章可以放在一起读。卡兹克的文章初读就会给人一种与众不同的真实感，提炼了他做内容创作的很多核心想法。"
                },
                {
                  label: "数字生命卡兹克 / AI 三年内容创作方法论",
                  url: "https://mp.weixin.qq.com/s/93VMIcvAt4LT5n8vyZ0BYA"
                },
                {
                  label: "数字生命卡兹克 / 不是...而是...",
                  url: "https://mp.weixin.qq.com/s/vl_60VsXFenDoNlfwwYn7Q"
                },
                {
                  label: "人类行为设计师-小周 / AI 写出高分文案",
                  url: "https://www.bilibili.com/video/BV1D4ArzdE3D/",
                  note: "里面的观点很认同。虽然实操起来有一定难度，但如果遇到写作瓶颈，非常推荐参考。"
                }
              ]
            }
          ]
        },
        {
          id: "media",
          title: "多媒体创作",
          color: "amber",
          summary: "多媒体涵盖图片、视频、音频等。AI 多媒体创作已经切实可用，重点是理解工具边界和工作流。",
          groups: [
            {
              title: "图片 & 视频",
              description: "图片和视频类 AI 产品非常卷，各种交互形式层出不穷。这里主要讲原理和实操经验，具体工具看自己哪个用着顺手。",
              resources: [
                {
                  label: "漫士沉思录 / AI 生成图片和视频原理",
                  url: "https://www.bilibili.com/video/BV16Z421n7fi/",
                  note: "虽然视频里提到的 Sora 已下线，但基于扩散模型的讲解非常扎实，是了解 AI 生图、生视频原理的好材料。"
                },
                {
                  label: "秋芝2046 / GPT image 2 实用玩法",
                  url: "https://www.bilibili.com/video/BV1chRLBSEY1/",
                  note: "视频里对比了当前主流的几款生图模型，参考价值很高。"
                },
                {
                  label: "大师的AI小灶 / 生图底层逻辑",
                  url: "https://www.bilibili.com/video/BV1gsopB9ET1/",
                  note: "虽然实测 GPT-Image-2 没有视频中提到的某些问题，但里面从模型原理角度思考提示词的思路非常有趣。"
                },
                {
                  label: "微信公众号 / 卢浮宫小猫创作心得",
                  url: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678972&idx=1&sn=d42663a7ea0cf4881ce4c5f5fdcb7bb6",
                  note: "AI 短片《卢浮宫小猫》的全流程分享，选角、定调、音乐、分镜、美术、动画，每一步都讲得很清楚。"
                },
                {
                  label: "Mx-Shell / 丧尸清道夫原片",
                  url: "https://www.bilibili.com/video/BV1FFRQB2Eqw/",
                  note: "《丧尸清道夫》正片。"
                },
                {
                  label: "Mx-Shell / 丧尸清道夫生视频思路",
                  url: "https://www.bilibili.com/video/BV1xuVC6AEbg/",
                  note: "非常真实接地气。不仅分享了“抽卡”过程，还展示了剪辑时间线和调色思路。"
                },
                {
                  label: "Mx-Shell / 丧尸清道夫生图思路",
                  url: "https://www.bilibili.com/video/BV1qJ7C6cEfS/",
                  note: "生图工作流同样真实，没有故作玄虚的提示词，只是把想要的东西描述清楚，然后调整迭代。"
                },
                { label: "Lovart / 视觉设计画布", url: "https://www.lovart.com/" },
                { label: "可灵 / AI 视频", url: "https://klingai.com/" },
                { label: "即梦 / AI 创作", url: "https://jimeng.doubao.com/" }
              ]
            },
            {
              title: "音频",
              description: "音频简单分为 AI 音乐和声音克隆。AI 音乐更偏艺术创作，所以单独提及。",
              resources: [
                {
                  label: "Suno Music / From Beginner to Pro",
                  url: "https://www.youtube.com/watch?v=Vfai49qhluA",
                  note: "Suno 官方出品的从入门到进阶使用教程。Suno 是目前 AI 音乐创作领域最好用的工具之一。"
                },
                {
                  label: "Z.ai / Audio Clone",
                  url: "https://audio.z.ai/?tab=clone",
                  note: "在线服务使用比较简单，免费的效果通常不太行。之前这个工具还能克隆音色，但现在可能已经不可用。"
                }
              ]
            }
          ]
        },
        {
          id: "coding",
          title: "编程",
          color: "coral",
          summary: "AI 编程早已不是程序员的专属。非技术背景的人也能通过产品设计规范、测试逻辑和 AI 协作做出不错的应用和网站。",
          groups: [
            {
              title: "推荐资源",
              resources: [
                {
                  label: "roadmap.sh / Vibe Coding",
                  url: "https://roadmap.sh/vibe-coding",
                  note: "这份 Roadmap 的灵感来源之一。这个 Vibe Coding 路线图涵盖工具选择、技术栈、安全、版本控制、测试等方面，很适合入门。"
                },
                {
                  label: "李自然说 / 做玩具容易，做产品难",
                  url: "https://www.bilibili.com/video/BV1Q7AjzdEQn/",
                  note: "一个比较反共识的视频。做炫酷 Demo 容易，但做真正能在生产环境稳定使用的东西很难。视频较长，建议先用 AI 总结后再针对性看。"
                },
                {
                  label: "小小羊同学聊AI / Codex 制作作品集网站",
                  url: "https://www.bilibili.com/video/BV1cME46tEwD/",
                  note: "从初始化提示词开始，没有盲目吹嘘“十分钟生成一个网站”，而是演示真实调优过程。视频信息密度很高，缺失的部署部分也可以交给 Codex 处理。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "advanced",
      title: "进阶使用",
      color: "coral",
      side: "right",
      summary: "从会使用 AI，到把它嵌入真实工作流和长期任务里。",
      subtopics: [
        {
          id: "agent",
          title: "Agent",
          color: "coral",
          summary: "给 LLM 加上能影响现实世界的工具链，它就变成了每个人的私人助理。比如 OpenClaw 这类 24 小时在线的 Agent，也进一步衍生出了不少产品和高阶玩法。",
          groups: [
            {
              title: "推荐资源",
              resources: [
                {
                  label: "技术爬爬虾 / Codex App 保姆级全攻略",
                  url: "https://www.bilibili.com/video/BV1Kk9kBAEJv",
                  note: "一份非常详细的 Codex 教程。虽然 Codex 更新很快，部分界面可能不太一样，但用来了解 Agent 能力依然很有价值，也推荐直接使用 Codex。"
                },
                {
                  label: "林亦LYi / 一个视频搞懂 OpenClaw",
                  url: "https://www.bilibili.com/video/BV1jEAaz3E6K/",
                  note: "十分钟把 OpenClaw 讲得明明白白，包括它相比以前的 Coding Agent 做了哪些额外改进，以及可能存在的安全问题。"
                },
                {
                  label: "赫赫儿 / Agent 是怎么跑起来的",
                  url: "https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?modal_id=7634148231470943530",
                  note: "非常建议尝试自己写一个 Agent，可以基于开源 Codex 代码调整。这样既能定制自己的需求，也能更深理解 Agent 的工作原理。"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
