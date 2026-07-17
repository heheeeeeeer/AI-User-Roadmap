export const roadmap = {
  title: "AI User Roadmap",
  stages: [
    {
      id: "intro",
      title: "前言",
      color: "gray",
      summary: "如果你想用好 AI，却不知道从哪里开始，可以参考这份 Roadmap。",
      intro: [
        {
          title: "为什么整理这份 Roadmap",
          paragraphs: [
            "做了几期 AI 科普后，我收到最多的反馈是：大家都知道 AI 很有用，也被铺天盖地的 AI 宣传包围着，但真正用起来，好像也就是有事问问豆包，效果还不一定好。想再学深一点，又不知道该从哪里开始。",
            "于是我回顾了下自己学习和使用 AI 的过程，发现也踩了不少的坑，比如我曾经买过一个 99 元的 AI 课程，结果两个小时几乎都是车轱辘话，还不如后来刷到的同主题免费视频；又比如有一段时间用过某个 Claude Code 中转服务，后来被扒出来实际调用会掺入便宜的模型；再比如花了半个小时认真读一篇文章，照着测试后发现效果和文中描述完全不一样，然后才意识到那是一篇虚假的公关稿...... AI 的快速发展除了提升互联网行业的生产力，但与此同时，也让很多传统行业里的技术小白突然被推到浪潮面前，不知道该怎么开始。",
            "所以这份 Roadmap 想做的事很简单：尽可能减少噪音和摩擦，给出一条真实、清晰、低门槛、易上手的学习路径，让每个愿意学习的人都能更顺利地开始使用 AI。"
          ]
        },
        {
          title: "这份 Roadmap 适合谁",
          paragraphs: [
            "由于我也不是什么 AI 专家，只是一个扎实踩过坑，才把 AI 深度融入日常的普通使用者，我只能提供从一个小白到熟练使用 AI 的路径，至于更深入的 AI 应用开发或底层研究，就不在这份 Roadmap 的主要范围里了。",
            "如果你时间比较充裕，或者正处在职业、学习方向的转型期，可以慢慢探索这份 Roadmap 的每一个角落，里面的资源都经过认真筛选，很多也是我反复看过或实践过的，我相信多多少少会给你带来一些启发。",
            "如果你已经有具体的工作问题要解决，也可以直接跳到对应的 AI 核心场景模块，从中找到适合自己的能力和工具，直接拿来用，或者参考其中的思路，很多场景都会有帮助。"
          ]
        },
        {
          title: "这里会有什么",
          paragraphs: [
            "这里目前整理了我长期收藏、反复筛选过的一些内容，并按不同能力和使用场景放到了对应的位置，所有资源都是免费的，优质的，好上手的。",
            "后续也会跟着 AI 的发展持续更新，不过并不会一味地追热点，而是同样会经过严格的人工筛选，尽量确保不同阶段的读者看了都有收获，也能找到可以马上尝试的内容。",
            "如果你有更好的内容推荐，或者认为某些内容不合适需要下架，可以联系 heheer@zju.edu.cn。"
          ]
        }
      ]
    },
    {
      id: "basic",
      title: "基础概念",
      color: "blue",
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
              label: "3Blue1Brown / 大语言模型的简要解释",
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
      summary: "完成第一次真正有用的 AI 使用：打开任意一个工具，提出一个具体问题，得到一个可以继续加工的回答。",
      groups: [
        {
          title: "推荐工具",
          description: "排名不分先后，都是“自研模型 + 自家应用”。先不用管复杂提示词，问任何想问的内容，用起来再说。",
          resources: [
            { label: "ChatGPT", url: "https://chatgpt.com/" },
            { label: "Claude", url: "https://claude.ai/" },
            { label: "Gemini", url: "https://gemini.google.com/" },
            { label: "Grok", url: "https://grok.com/" },
            { label: "DeepSeek", url: "https://chat.deepseek.com/" },
            { label: "豆包", url: "https://www.doubao.com/" },
            { label: "千问", url: "https://tongyi.aliyun.com/" },
            { label: "元宝", url: "https://yuanbao.tencent.com/" },
            { label: "Kimi", url: "https://kimi.moonshot.cn/" },
            { label: "ChatGLM", url: "https://chatglm.cn/" }
          ]
        },
        {
          title: "推荐资源",
          resources: [
            {
              label: "数字游牧人 / 一口气学会使用DeepSeek",
              url: "https://www.bilibili.com/video/BV1jhFCerEpV/",
              note: "DeepSeek 火出圈后出来的早期视频，举了不少例子，没有故作玄虚的提示词，非常实在地展示了 AI 的能力。可以跟着视频发送类似的提示词，感受 AI 的能力。"
            }
          ]
        }
      ]
    },
    {
      id: "core",
      title: "核心场景",
      color: "green",
      subtopics: [
        {
          id: "research",
          title: "信息调研",
          color: "green",
          summary: "可以简单分为联网搜索和深度研究。深度研究会多轮联网搜索，是最值得优先掌握的 AI 能力之一。",
          groups: [
            {
              title: "深度研究 Deep Research",
              description: "进入一个新领域时，只需要给出主题词或核心问题，AI 就可以围绕它自动拆解研究方向、检索资料、筛选来源、整合结论，并生成一份带引用的结构化研究报告。",
              resources: [
                {
                  label: "OpenAI Academy / Research with ChatGPT",
                  url: "https://openai.com/academy/search-and-deep-research/",
                  note: "OpenAI 官方博客，对比了 search 和 deep research，说明了分别适合的场景，录了视频帮助上手，提供的提示词模板也可以迁移到其他产品里。"
                },
                {
                  label: "電腦玩物 / 先用 Deep Research 掃清認知盲區，再用 Google 搜尋，我的 6 種學習新流程",
                  url: "https://www.playpcesor.com/2025/05/deep-research-google-6.html",
                  note: "很详实的使用记录，解决问题的思路值得借鉴，AI 负责对要搜索的主题做基础的调研，生成一个可以推进的初稿，后续再自己进一步核验补全，虽然是繁体的，但是不影响阅读。"
                },
                {
                  label: "Caleb Writes Code / AI Deep Research (Manus, Perplexity, OpenAI, Kimi, Anthropic, Gemini)",
                  url: "https://www.youtube.com/watch?v=pSpvMmDuZBM",
                  note: "虽然过去了很久，产品已经更新了好几轮了，但是许多结论比如 ChatGPT 更倾向于参考自己站点的信息 这种都还是适用的，可以参考。"
                },
                {
                  label: "Weizhena / Deep Research Skills",
                  url: "https://github.com/Weizhena/Deep-Research-skills",
                  note: "也很推荐用 Deep Research Skill 辅助调研。可以结合后面的 Agent 部分来看，这是其中一个测试了效果还可以的 skill，它践行了 human in the loop，让人能在列提纲、查细节、汇总等环节保持控制。"
                }
              ]
            },
            {
              title: "联网搜索",
              description: "联网搜索是目前 AI 产品标配的功能，适合快速查找资料、补充事实和做基础核验。以下是两个比较常用的 AI 搜索引擎。",
              toolResources: [
                { label: "Perplexity", url: "https://www.perplexity.ai/" },
                { label: "秘塔 AI 搜索", url: "https://metaso.cn/" },
              ]
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
              title: "网页",
              description: "最简单的是直接把链接发给 AI，让它阅读网页；更进一步可以尝试 AI 浏览器，用来浏览公开网页会很有帮助。",
              toolResources: [
                { label: "豆包浏览器", url: "https://www.doubao.com/" },
                { label: "夸克浏览器", url: "https://www.quark.cn/" },
                { label: "Dia", url: "https://www.diabrowser.com/" },
              ],
              resources: [
                {
                  label: "檀东东Tango / 重新学习怎么上网！AI·搜索·浏览器",
                  url: "https://www.bilibili.com/video/BV1vmcdeGEVw/",
                  note: "豆包电脑版自带的 AI 浏览器功能，几个场景挺实用，省去了不少装浏览器插件的功夫。"
                }
              ]
            },
            {
              title: "图片",
              description: "使用很简单，就是上传图片。原理可以简单了解 VLM 和原生多模态两种主流实现方式。",
              resources: [
                {
                  label: "IBM Technology / What Are Vision Language Models? How AI Sees & Understands Images",
                  url: "https://www.youtube.com/watch?v=lOD_EE96jhM",
                  note: "VLM 的总体介绍视频，尤其是 Vision Encoder 这一节讲了图片转向量，再把向量转换成视觉 token 的过程，通俗易懂。"
                },
                {
                  label: "飞天闪客 / 为啥所有AI都数不清手指？多模态底层原理揭秘",
                  url: "https://www.bilibili.com/video/BV1zNt8zzEZX/",
                  note: "可以作为上面视频的补充，稍微多讲了点名词。不需要纠结具体什么意思，大概理解 VLM 的概念就行。"
                },
                {
                  label: "IBM Technology / What is Multimodal AI? How LLMs Process Text, Images, and More",
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
              description: "一类是传统 pipeline，就是语音转文字转语音，是在 LLM 之前就已经成熟的技术，这里不展开；另一类则是图片里提到的多模态，比如 GPT-4o、豆包通话这些，能直接理解语音，可以感知语音里的语气语速。",
              toolResources: [
                { label: "通义听悟", url: "https://tingwu.aliyun.com/" },
                { label: "飞书妙记", url: "https://www.feishu.cn/product/minutes" },
                { label: "豆包输入法", url: "https://shurufa.doubao.com/" },
                { label: "微信输入法", url: "https://z.weixin.qq.com/" },
                { label: "Typeless", url: "https://www.typeless.com/" }
              ]
            },
            {
              title: "视频",
              description: [
                "视频理解大概有四种实现方式：获取字幕、音频转文字、视频抽帧理解、原生视频理解。前两种还是理解文字，第三种是理解图片，第四种才更接近真正理解视频。",
                "这里可以直接搜索支持原生多模态的模型，比如 Gemini 目前在视频理解领域体验最好的工具之一，处理速度快且理解准确；比如 MiniMax-M3，国内支持原生多模态的模型代表。虽然处理速度相对稍慢，但同样能准确识别视频画面与动态内容。"
              ],
              toolResources: [
                { label: "Gemini", url: "https://gemini.google.com/" },
                { label: "MiniMax M3", url: "https://www.minimaxi.com/models/text/m3" }
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
              description: "之前一段时间很火的方式，是用 AI Agent 维护一个仓库，把所有信息存在里面，AI 整理知识内容，查询时也交给 AI 来查。",
              resources: [
                {
                  label: "Andrej Karpathy / LLM Wiki",
                  url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
                  note: "Karpathy 大佬分享的 LLM Wiki 概念：让大模型把你持续输入的资料整理成一个长期维护的 Markdown 知识库，而不是每次提问时都从原始文档里临时检索答案。"
                },
                {
                  label: "MarsLUL / 开源我的AI生产力笔记系统！分享我的 Obsidian Skills",
                  url: "https://www.bilibili.com/video/BV1XhzbBwEFk/",
                  note: "很值得推荐的一个开源小项目，可以下载过来根据自己的需求稍作修改。由于用到了很多 Obsidian 的双向链接，坚持用几个月后看着复杂的知识图谱，会很有成就感。"
                },
                {
                  label: "技术爬爬虾 / Obsidian邪修用法，免费云同步，AI，手机端，进阶技巧",
                  url: "https://www.bilibili.com/video/BV1fZCyBYEuT/",
                  note: "一套很详细且对新手非常友好的 Obsidian 基础使用与进阶教程。"
                }
              ]
            },
            {
              title: "来源型笔记本",
              description: [
                "典型代表就是 NotebookLM。对我来说最常用的场景是粗读一本书：让 AI 生成思维导图，带着我读完全书并提炼出其中感兴趣的点。网上也有诸如 MIT 学生用它在 48 小时内通过考试的案例，总之用来辅助学习相当不错。"
              ],
              resources: [
                {
                  label: "JeffSu杰夫 / 全新NotebookLM 完整操作指南，看这一条就够了！",
                  url: "https://www.bilibili.com/video/BV1AFATz7EsD/",
                  note: "由 Google 官方前营销经理出品，视频质量很高，涵盖了 NotebookLM 各种核心功能的演示，以及非常真实的个人使用经验。"
                }
              ]
            },
            {
              title: "RAG",
              description: [
                "前些年比较火的概念，对于企业里大量产品文档、操作手册等场景比较适用，应该也有不少落地的案例，不过个人一般没有这么大量的资料需要处理。",
              ],
              resources: [
                {
                  label: "IBM Technology / What is Retrieval-Augmented Generation (RAG)?",
                  url: "https://www.youtube.com/watch?v=T-D1OfcDW1M",
                  note: "没有废话地讲解了什么是 RAG，以及它主要用来解决什么问题，适合快速建立基础认知。"
                },
                {
                  label: "IBM Technology / Is RAG Still Needed? Choosing the Best Approach for LLMs",
                  url: "https://www.youtube.com/watch?v=UabBYexBD4k",
                  note: "可以配合上一条一起看。它讲清楚了什么时候该用 RAG，什么时候不需要用，能帮助你更好做技术决策。"
                }
              ],
              toolResources: [
                { label: "Dify", url: "https://dify.ai/" },
                { label: "FastGPT", url: "https://fastgpt.in/" },
                { label: "RAGFlow", url: "https://ragflow.io/" }
              ]
            }
          ]
        },
        {
          id: "writing",
          title: "写作表达",
          color: "amber",
          summary: "写作应该是使用最广泛的 AI 场景。AI 可以轻松地帮你组织出一段逻辑清晰的文字，但目前上限还是掌握在人手里，真正的写作者需要明确知道自己想要表达什么内容。",
          groups: [
            {
              title: "推荐资源",
              resources: [
                {
                  label: "数字生命卡兹克 / 今天，我决定把「卡兹克风格创作.skill」开源了。",
                  url: "https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg"
                },
                {
                  label: "数字生命卡兹克 / 上周做了场内部分享，关于我做AI这三年来总结的内容创作方法论。",
                  url: "https://mp.weixin.qq.com/s/93VMIcvAt4LT5n8vyZ0BYA"
                },
                {
                  label: "数字生命卡兹克 / “不是...而是...”刷屏的一年，我读内容的快乐被AI偷走了。",
                  url: "https://mp.weixin.qq.com/s/vl_60VsXFenDoNlfwwYn7Q",
                  note: "这三篇文章可以放在一起读。卡兹克的文章初读就会给人一种与众不同的真实感，文章里提炼了他做内容创作的很多核心想法，非常值得一读。"
                },
                {
                  label: "人类行为设计师-小周 / 如何用AI，帮我们写出90-100分的文案？",
                  url: "https://www.bilibili.com/video/BV1D4ArzdE3D/",
                  note: "里面的观点很认同。虽然实操起来有一定难度，但如果遇到写作瓶颈，非常推荐参考以下。"
                }
              ]
            }
          ]
        },
        {
          id: "media",
          title: "多媒体创作",
          color: "amber",
          summary: "多媒体涵盖了图片、视频、音频等，从当初的史密斯吃面的惊悚场景，到现在几乎电影级精美的画面，AI 多媒体创作已经切实可用了",
          groups: [
            {
              title: "图片 & 视频",
              description: [
                "图片和视频类的 AI 产品应该是最卷的赛道了，各种交互形式层出不穷。",
                "这里主要讲原理和一些实操经验，具体工具的选择看自己哪个用着顺手即可。简单的图片一般直接在 GPT、Gemini 或豆包对话框中生成，复杂的视觉设计可以用 Lovart，OiiOii 这类画布型工具"
              ],
              toolResources: [
                { label: "Lovart", url: "https://www.lovart.ai/" },
                { label: "TapNow", url: "https://app.tapnow.ai/home" },
                { label: "Liblib", url: "https://www.liblib.art/" },
                { label: "OiiOii", url: "https://www.oiioii.ai/" },
                { label: "可灵", url: "https://klingai.com/" },
                { label: "即梦", url: "https://jimeng.jianying.com/" }
              ],
              resources: [
                {
                  label: "漫士沉思录 / 清华AI博士教你AI是怎么生成图片和视频的",
                  url: "https://www.bilibili.com/video/BV16Z421n7fi/",
                  note: "虽然视频里提到的 Sora 已下线，但基于扩散模型的讲解非常扎实，是了解 AI 生图、生视频原理的好材料。"
                },
                {
                  label: "秋芝2046 / GPT image 2 实用玩法合集分享～",
                  url: "https://www.bilibili.com/video/BV1chRLBSEY1/",
                  note: "视频里对比了当前主流的几款生图模型，参考价值很高。"
                },
                {
                  label: "大师的AI小灶 / 再见了AI抽卡，5分钟搞懂AI生图的底层逻辑",
                  url: "https://www.bilibili.com/video/BV1gsopB9ET1/",
                  note: "虽然实测 GPT-Image-2 没有视频中提到的某些问题，但里面从模型原理角度思考提示词的思路很有趣，值得学习。"
                },
                {
                  label: "Mx-Shell / AI原创短片《丧尸清道夫》-重制版，国产“爱死机”！",
                  url: "https://www.bilibili.com/video/BV1FFRQB2Eqw/",
                  note: "《丧尸清道夫》正片。"
                },
                {
                  label: "Mx-Shell / 今天把我关于《丧尸清道夫》的创作思路分享给大家，如果能帮到你，我会很开心。",
                  url: "https://www.bilibili.com/video/BV1xuVC6AEbg/",
                  note: "《丧尸清道夫》的生视频思路，非常真实接地气。不仅分享了“抽卡”过程，还展示了剪辑时间线和调色思路。"
                },
                {
                  label: "Mx-Shell / 国产“爱死机”《丧尸清道夫》图片资产工作流的创作思路分享！",
                  url: "https://www.bilibili.com/video/BV1qJ7C6cEfS/",
                  note: "《丧尸清道夫》的生图工作流，同样非常真实，没有用故作玄虚的提示词，只是把想要的东西描述清楚，然后调整迭代。"
                }
              ]
            },
            {
              title: "音频",
              description: [
                "音频简单分为 AI 音乐和声音克隆。AI 音乐更偏艺术创作，所以单独提及。",
                "文字转语音、声音克隆这类的在线服务使用很简单，不展开，而开源的声音模型没有尝试过，所以不做推荐，可以自己试试 indexTT、Qwen3 TTS、VoxCPM 等等"
              ],
              resources: [
                {
                  label: "Suno Music / From Beginner to Pro",
                  url: "https://www.youtube.com/watch?v=Vfai49qhluA",
                  note: "Suno 官方出品的从入门到进阶使用教程。Suno 是目前 AI 音乐创作领域最好用的工具之一。"
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
              title: "推荐工具",
              description: "AI coding 的工具非常多，下面列举一些个人用过体验还不错的。",
              toolResources: [
                { label: "Cursor", url: "https://cursor.com/get-started" },
                { label: "Codex", url: "https://openai.com/zh-Hans-CN/codex/" },
                { label: "Claude Code", url: "https://www.anthropic.com/claude-code" },
                { label: "Trae", url: "https://www.trae.ai/" },
                { label: "Bolt.new", url: "https://bolt.new/" },
                { label: "v0", url: "https://v0.dev/" }
              ]
            },
            {
              title: "推荐资源",
              description: "AI coding 相关的资源也很多，这里主要推荐一些心法，每个工具具体的使用方法大同小异，掌握了心法，用任何工具都可以实现需求。",
              resources: [
                {
                  label: "roadmap.sh / Vibe Coding",
                  url: "https://roadmap.sh/vibe-coding",
                  note: "这份 Roadmap 的灵感来源之一。这个 Vibe Coding 路线图涵盖工具选择、技术栈、安全、版本控制、测试等方面，看完后就能成为一个 Vibe Coding 高手。"
                },
                {
                  label: "李自然说 / Vibe Coding实战复盘：做玩具容易，做产品难",
                  url: "https://www.bilibili.com/video/BV1Q7AjzdEQn/",
                  note: "一个比较反共识的视频。做个看起来炫酷的 Demo 容易，但要做真正能在生产环境稳定使用的东西就很难了。视频比较长，且是手持拍摄有点抖，建议先用 AI 总结后再针对性看。"
                },
                {
                  label: "小小羊同学聊AI / codex制作个人作品集网站教程",
                  url: "https://www.bilibili.com/video/BV1cME46tEwD/",
                  note: "从初始化提示词开始，没有盲目吹嘘“十分钟生成一个网站”，而是演示了真实的调优过程，视频信息密度很高，非常有实践意义。"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "advanced",
      title: "Agent",
      color: "coral",
      groups: [
        {
          title: "什么是 Agent？",
          resources: [

            {
              label: "赫赫儿 / Agent是怎么跑起来的? 从零拆解Agent核心运行机制!",
              url: "https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?modal_id=7634148231470943530",
              note: "简单地介绍了 Agent 的核心运行机制，采用了比较容易理解的 LLM + Harness 的介绍方式，很适合用来了解什么是 Agent。"
            },
            {
              label: "林亦LYi / 一个视频搞懂 OpenClaw",
              url: "https://www.bilibili.com/video/BV1jEAaz3E6K/",
              note: "十分钟把 OpenClaw 讲明白，包括它相比以前的 Coding Agent 做了哪些额外改进，以及可能存在的安全问题。"
            },
            {
              label: "绿导师原谅你了 / 04 (Aside) - LLM, Agents 和 Scaling Law",
              url: "https://www.bilibili.com/video/BV1gEcmzzE4P?spm_id_from=333.788.videopod.sections&vd_source=611f1c6701469d82272fd49ca9b9f7d2",
              note: "很连贯地讲解了 LLM -> Agent 以及背后的 Scaling Law，jyy 老师的课果然不让人失望，虽然由于是大学课程会有点散，容易犯困，但是分几次看完后也能有很深入的理解。还有这个系列的最后一节课也值得推荐，最后一部分令人热泪盈眶。"
            },
            {
              label: "Treap要赚一个亿U-Acc / 万字拆解AI Agent编年史",
              url: "https://www.bilibili.com/video/BV1NL9tBsELS/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2",
              note: "整个视频能感受到作者的思考过程，编年史的形式也很有趣味性，虽然对于五代演进的划分不一定完全准确，但是可以作为一些阅读补充与参考。"
            }
          ]
        },
        {
          title: "配置 Agent",
          description: "对 Agent 有了基本的理解后，可以很容易想到 Agent 的配置很大程度上影响了 Agent 的能力，这里会介绍一些简单但是立竿见影的配置项。",
          resources: [
            {
              label: "Claude Code Docs / 探索 .claude 目录",
              url: "https://code.claude.com/docs/zh-CN/claude-directory",
              note: "Claude Code 官方文档对于 .claude 目录的介绍，包括了 CLAUDE.md 等一系列配置文件，可以总览有哪些可以个性化的地方。"
            },
            {
              label: "秋芝2046 / 手把手彻底学会 Agent Skills！",
              url: "https://www.bilibili.com/video/BV1G3FNznEiS/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2",
              note: "Skills 是目前 Agent 里占据非常核心地位的功能，简单有用利于分享沉淀。这个视频详细介绍了什么是 Skills，看完后无论是自己创建还是搜索好用的 Skills，都很轻松。"
            }
          ]
        },
        {
          title: "与 Agent 协作",
          resources: [
            {
              label: "技术爬爬虾 / Codex App 保姆级全攻略",
              url: "https://www.bilibili.com/video/BV1Kk9kBAEJv",
              note: "一份非常详细的 Codex 教程，尽管软件已经更新了好几轮，页面出现了不少变化，但是与 Agent 协作的方法可以应用到各个不同的 Agent 上。"
            },
            {
              label: "五道口纳什 / 人机协作的视角，AI 时代的学习指南与焦虑缓解",
              url: "https://www.bilibili.com/video/BV12nw4z6Eoa/?spm_id_from=333.337.search-card.all.click&vd_source=611f1c6701469d82272fd49ca9b9f7d2",
              note: "非常有见地的思考，可以作为与 Agent 协作的心法。如果放弃自己的思考，结果就是被 AI 吞噬；而在和 AI 的交互中不断提升自己，这样的上限才是无限的。"
            }
          ]
        }
      ]
    }
  ]
};
