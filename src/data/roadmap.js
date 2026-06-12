export const roadmap = {
  title: "AI Roadmap",
  subtitle: "普通人的生成式 AI 使用地图",
  handnote: {
    src: "/assets/handnote-core-use.png",
    alt: "核心是先用起来"
  },
  stages: [
    {
      id: "intro",
      title: "前言",
      color: "gray",
      side: "left",
      summary: "先明确边界：这不是 AI 全学科路线，而是普通人使用生成式 AI 的地图。",
      groups: [
        {
          title: "阅读提示",
          items: ["非技术友好", "更关注 AI 使用", "开源免费，欢迎推荐和下架反馈"]
        }
      ]
    },
    {
      id: "basic",
      title: "基础概念",
      color: "blue",
      side: "left",
      summary: "理解生成式 AI 为什么能回答问题，也知道它为什么会出错。",
      groups: [
        {
          title: "推荐资源",
          resources: [
            {
              label: "3Blue1Brown / Large Language Models explained briefly",
              url: "https://www.bilibili.com/video/BV1xmA2eMEFF/"
            },
            {
              label: "Andrej Karpathy / Intro to Large Language Models",
              url: "https://www.bilibili.com/video/BV1yD421P7mj/"
            },
            {
              label: "3Blue1Brown / GPT 是什么？直观解释 Transformer",
              url: "https://www.bilibili.com/video/BV13z421U7cs/"
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
      summary: "完成第一次真正有用的 AI 使用：提出具体问题，得到可继续加工的回答。",
      note: true,
      groups: [
        {
          title: "可以先试这些",
          items: ["ChatGPT", "Claude", "Gemini", "Grok", "DeepSeek", "豆包", "千问", "元宝", "Kimi", "智谱"]
        },
        {
          title: "推荐资源",
          resources: [
            {
              label: "数字游牧人 / 一口气学会使用 DeepSeek",
              url: "https://www.bilibili.com/video/BV1jhFCerEpV/"
            }
          ]
        }
      ]
    },
    {
      id: "research",
      title: "信息调研",
      color: "green",
      side: "right",
      summary: "把 AI 当作进入新领域的起点：拆解方向、检索资料、筛选来源、整合结论。",
      groups: [
        {
          title: "Deep Research",
          resources: [
            {
              label: "OpenAI Academy / Research with ChatGPT",
              url: "https://openai.com/academy/search-and-deep-research/"
            },
            {
              label: "電腦玩物 / Deep Research 学习流程",
              url: "https://www.playpcesor.com/2025/05/deep-research-google-6.html"
            },
            {
              label: "Caleb Writes Code / AI Deep Research",
              url: "https://www.youtube.com/watch?v=pSpvMmDuZBM"
            }
          ]
        },
        {
          title: "Web Search",
          items: ["Perplexity", "秘塔 AI 搜索", "Felo", "Elicit", "SciSpace", "Consensus"]
        }
      ]
    },
    {
      id: "understanding",
      title: "内容理解",
      color: "green",
      side: "left",
      summary: "让 AI 读懂你已经提供的材料：文件、网页、图片、音频和视频。",
      groups: [
        {
          title: "文件",
          resources: [
            {
              label: "OpenAI Help Center / 文件上传常见问题",
              url: "https://help.openai.com/zh-hans-cn/articles/8555545-file-uploads-faq"
            }
          ]
        },
        {
          title: "页面",
          resources: [
            {
              label: "檀东东Tango / AI 搜索浏览器教程",
              url: "https://www.bilibili.com/video/BV1vmcdeGEVw/"
            },
            {
              label: "秋芝2046 / OpenAI 原生 AI 浏览器",
              url: "https://www.bilibili.com/video/BV12is1zQELH/"
            }
          ]
        },
        {
          title: "图片",
          resources: [
            {
              label: "IBM Technology / Vision Language Models",
              url: "https://www.youtube.com/watch?v=lOD_EE96jhM"
            },
            {
              label: "飞天闪客 / 多模态底层原理",
              url: "https://www.bilibili.com/video/BV1zNt8zzEZX/"
            },
            {
              label: "IBM Technology / Multimodal AI",
              url: "https://www.youtube.com/watch?v=J51oZYcNvP8"
            },
            {
              label: "OpenAI / 你好 GPT-4o",
              url: "https://openai.com/zh-Hans-CN/index/hello-gpt-4o/"
            }
          ]
        },
        {
          title: "音频",
          items: ["通义听悟", "飞书妙记", "豆包输入法", "微信输入法", "Typeless"]
        },
        {
          title: "视频",
          items: ["Gemini", "MiniMax", "字幕理解", "抽帧理解", "原生视频理解"]
        }
      ]
    },
    {
      id: "knowledge",
      title: "知识整理",
      color: "green",
      side: "right",
      summary: "整理学习笔记、生活状态和长期资料，让知识可以被持续查询和复用。",
      groups: [
        {
          title: "LLM Wiki",
          resources: [
            {
              label: "Andrej Karpathy / llm-wiki",
              url: "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f"
            },
            {
              label: "MarsLUL / Obsidian Skills",
              url: "https://www.bilibili.com/video/BV1XhzbBwEFk/"
            },
            {
              label: "技术爬爬虾 / Obsidian 邪修用法",
              url: "https://www.bilibili.com/video/BV1fZCyBYEuT/"
            }
          ]
        },
        {
          title: "来源型笔记本",
          resources: [
            {
              label: "JeffSu杰夫 / NotebookLM 完整操作指南",
              url: "https://www.bilibili.com/video/BV1AFATz7EsD/"
            }
          ]
        },
        {
          title: "RAG",
          resources: [
            {
              label: "IBM Technology / What is RAG?",
              url: "https://www.youtube.com/watch?v=T-D1OfcDW1M"
            },
            {
              label: "IBM Technology / Is RAG Still Needed?",
              url: "https://www.youtube.com/watch?v=UabBYexBD4k"
            }
          ]
        }
      ]
    },
    {
      id: "writing",
      title: "写作表达",
      color: "amber",
      side: "left",
      summary: "AI 可以组织清晰文字，但真正的上限仍取决于写作者知道自己要什么。",
      groups: [
        {
          title: "推荐资源",
          resources: [
            {
              label: "数字生命卡兹克 / 内容创作系列文章（一）",
              url: "https://mp.weixin.qq.com/s/AtxGrii_K-nzkwUM9SNhEg"
            },
            {
              label: "数字生命卡兹克 / 内容创作系列文章（二）",
              url: "https://mp.weixin.qq.com/s/93VMIcvAt4LT5n8vyZ0BYA"
            },
            {
              label: "数字生命卡兹克 / 内容创作系列文章（三）",
              url: "https://mp.weixin.qq.com/s/vl_60VsXFenDoNlfwwYn7Q"
            },
            {
              label: "人类行为设计师-小周 / AI 写出高分文案",
              url: "https://www.bilibili.com/video/BV1D4ArzdE3D/"
            }
          ]
        }
      ]
    },
    {
      id: "media",
      title: "多媒体创作",
      color: "amber",
      side: "right",
      summary: "图片、视频、音频创作已经切实可用，重点是理解工具边界和工作流。",
      groups: [
        {
          title: "图片 & 视频",
          resources: [
            {
              label: "漫士沉思录 / AI 生成图片和视频原理",
              url: "https://www.bilibili.com/video/BV16Z421n7fi/"
            },
            {
              label: "秋芝2046 / GPT image 2 实用玩法",
              url: "https://www.bilibili.com/video/BV1chRLBSEY1/"
            },
            {
              label: "大师的AI小灶 / 生图底层逻辑",
              url: "https://www.bilibili.com/video/BV1gsopB9ET1/"
            },
            {
              label: "微信公众号 / 卢浮宫小猫创作心路历程",
              url: "https://mp.weixin.qq.com/s?__biz=MzIyMzA5NjEyMA==&mid=2647678972&idx=1&sn=d42663a7ea0cf4881ce4c5f5fdcb7bb6"
            },
            {
              label: "Mx-Shell / 丧尸清道夫原片",
              url: "https://www.bilibili.com/video/BV1FFRQB2Eqw/"
            },
            {
              label: "Mx-Shell / 丧尸清道夫生视频思路",
              url: "https://www.bilibili.com/video/BV1xuVC6AEbg/"
            },
            {
              label: "Mx-Shell / 丧尸清道夫生图思路",
              url: "https://www.bilibili.com/video/BV1qJ7C6cEfS/"
            }
          ]
        },
        {
          title: "音频",
          resources: [
            {
              label: "Suno Music / From Beginner to Pro",
              url: "https://www.youtube.com/watch?v=Vfai49qhluA"
            },
            {
              label: "Z.ai / Audio Clone",
              url: "https://audio.z.ai/?tab=clone"
            }
          ]
        }
      ]
    },
    {
      id: "coding",
      title: "编程",
      color: "coral",
      side: "left",
      summary: "非技术背景也能通过产品设计、测试意识和 AI 协作做出可用应用。",
      groups: [
        {
          title: "推荐资源",
          resources: [
            {
              label: "roadmap.sh / Vibe Coding",
              url: "https://roadmap.sh/vibe-coding"
            },
            {
              label: "李自然说 / 做玩具容易，做产品难",
              url: "https://www.bilibili.com/video/BV1Q7AjzdEQn/"
            },
            {
              label: "小小羊同学聊AI / Codex 制作作品集网站",
              url: "https://www.bilibili.com/video/BV1cME46tEwD/"
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
      groups: [
        {
          title: "Agent",
          resources: [
            {
              label: "技术爬爬虾 / Codex App 保姆级全攻略",
              url: "https://www.bilibili.com/video/BV1Kk9kBAEJv"
            },
            {
              label: "林亦LYi / 一个视频搞懂 OpenClaw",
              url: "https://www.bilibili.com/video/BV1jEAaz3E6K/"
            },
            {
              label: "抖音作者 / 基于开源 Codex 定制 Agent",
              url: "https://www.douyin.com/user/MS4wLjABAAAAsIs0bWWViQOm7ksfM9zzmVe_mDaSXfH-3OGH0qvRXp2NOEbmQRmGUcTdMGJNT8F7?modal_id=7634148231470943530"
            }
          ]
        }
      ]
    },
    {
      id: "other",
      title: "其他场景",
      color: "gray",
      side: "right",
      summary: "把 AI 用到足够具体的小场景里，价值会变得更清楚。",
      groups: [
        {
          title: "推荐资源",
          resources: [
            {
              label: "少数派 / AI 帮我 24 小时盯着 6 只龟",
              url: "https://sspai.com/post/108453"
            }
          ]
        }
      ]
    }
  ]
};
