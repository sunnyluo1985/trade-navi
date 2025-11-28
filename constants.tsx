
import { 
  Globe, 
  ShoppingCart, 
  Share2, 
  Bot, 
  Box,
  Search,
  Image,
  GraduationCap,
  CreditCard,
  Truck,
  Code2,
  Database,
  Calculator,
  ShieldCheck,
  MapPin,
  Link,
  Mic,
  FileEdit,
  Presentation,
  FileText,
  Video,
  Monitor
} from "lucide-react";
import { Category } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: "ai-tools",
    title: "AI 提效黑科技",
    icon: Bot,
    subCategories: [
      {
        id: "ai-search-engine",
        title: "AI 搜索引擎 (合集)",
        tools: [
          { id: "ais1", title: "Perplexity", description: "目前体验最好的AI搜索，给出精准答案与来源", url: "https://www.perplexity.ai", badge: "首选" },
          { id: "ais2", title: "Genspark", description: "国产出海黑马，生成Sparkpage聚合页面", url: "https://www.genspark.ai", badge: "推荐" },
          { id: "ais3", title: "秘塔 AI 搜索", description: "无广告，学术模式非常适合做调研", url: "https://metaso.cn", badge: "学术" },
          { id: "ais4", title: "Morphic", description: "极简风格的AI搜索工具", url: "https://www.morphic.sh" },
          { id: "ais5", title: "You.com", description: "老牌AI搜索引擎，整合多种模式", url: "https://you.com" },
          { id: "ais6", title: "Bing Chat (Copilot)", description: "微软必应AI搜索，联网能力强", url: "https://www.bing.com/new" },
          { id: "ais7", title: "Arc Search", description: "Arc浏览器推出的“为我浏览”功能", url: "https://arc.net" },
          { id: "ais8", title: "360 AI搜索", description: "360推出的AI搜索与阅读助手", url: "https://sou.com" },
          { id: "ais9", title: "ThinkAny", description: "RAG技术驱动的AI搜索引擎", url: "https://thinkany.ai" },
          { id: "ais10", title: "Devv", description: "专为程序员设计的AI搜索引擎", url: "https://devv.ai", badge: "代码" },
          { id: "ais11", title: "Felo", description: "日语搜索能力极强的AI引擎", url: "https://felo.ai" }
        ]
      },
      {
        id: "ai-llm-cn",
        title: "国产大模型 (必用)",
        tools: [
          { id: "cn1", title: "DeepSeek", description: "深度求索，国产最强开源模型，推理能力极强", url: "https://www.deepseek.com", badge: "国产最强" },
          { id: "cn2", title: "Kimi 智能助手", description: "月之暗面出品，支持20万字超长无损上下文", url: "https://kimi.moonshot.cn", badge: "长文本" },
          { id: "cn3", title: "智谱清言 (ChatGLM)", description: "清华系团队，中文理解与生成能力卓越", url: "https://chatglm.cn" },
          { id: "cn4", title: "豆包 (Doubao)", description: "字节跳动出品，语音交互体验极佳", url: "https://www.doubao.com", badge: "字节" },
          { id: "cn5", title: "通义千问", description: "阿里达摩院出品，擅长商务写作与分析", url: "https://tongyi.aliyun.com" },
          { id: "cn6", title: "讯飞星火", description: "科大讯飞出品，文档润色与语音转写强", url: "https://xinghuo.xfyun.cn" },
          { id: "cn7", title: "文心一言", description: "百度出品，综合知识库丰富", url: "https://yiyan.baidu.com" },
          { id: "cn8", title: "腾讯混元", description: "腾讯全链路自研大模型，整合微信生态", url: "https://hunyuan.tencent.com" },
          { id: "cn9", title: "百川智能", description: "搜狗创始人王小川团队，医疗与百科强", url: "https://www.baichuan-ai.com" },
          { id: "cn12", title: "Yi (零一万物)", description: "李开复带队，高分开源模型", url: "https://www.lingyi.ai" },
          { id: "cn14", title: "天工AI", description: "昆仑万维出品，搜索与对话结合", url: "https://search.tiangong.cn" }
        ]
      },
      {
        id: "ai-llm-global",
        title: "全球顶尖模型",
        tools: [
          { id: "gl1", title: "ChatGPT", description: "OpenAI 必用神器，GPT-4o 模型", url: "https://chat.openai.com", badge: "TOP 1" },
          { id: "gl2", title: "Claude 3.5", description: "Anthropic出品，写代码与长文最强", url: "https://claude.ai", badge: "推荐" },
          { id: "gl3", title: "Gemini", description: "Google 多模态模型，整合谷歌生态", url: "https://gemini.google.com" },
          { id: "gl5", title: "Microsoft Copilot", description: "微软AI助手，免费使用GPT-4", url: "https://copilot.microsoft.com" },
          { id: "gl6", title: "Poe", description: "集成了GPT, Claude, Llama等多种模型", url: "https://poe.com" },
          { id: "gl7", title: "Llama 3 (Meta)", description: "Meta开源的最强模型，可本地部署", url: "https://llama.meta.com" },
          { id: "gl8", title: "Mistral AI", description: "欧洲最强开源大模型", url: "https://mistral.ai" },
          { id: "gl9", title: "Grok", description: "马斯克xAI出品，接入推特实时数据", url: "https://grok.x.ai" }
        ]
      },
      {
        id: "ai-ppt",
        title: "AI PPT & 演示文稿",
        tools: [
          { id: "ppt1", title: "Gamma", description: "一键生成精美PPT/网页，排版审美极佳", url: "https://gamma.app", badge: "首选" },
          { id: "ppt2", title: "Beautiful.ai", description: "智能设计幻灯片，自动排版对齐", url: "https://www.beautiful.ai", badge: "设计" },
          { id: "ppt3", title: "Tome", description: "擅长讲故事的AI演示生成工具", url: "https://tome.app" },
          { id: "ppt4", title: "iSlide AI", description: "老牌PPT插件的AI升级版，资源丰富", url: "https://www.islide.cc" },
          { id: "ppt5", title: "MindShow", description: "国内好用的Markdown转PPT工具", url: "https://www.mindshow.fun", badge: "国产" },
          { id: "ppt6", title: "WPS AI", description: "WPS内置AI，一键生成/美化PPT", url: "https://ai.wps.cn", badge: "办公" },
          { id: "ppt7", title: "Decktopus", description: "快速生成商业提案和演示文稿", url: "https://decktopus.com" },
          { id: "ppt8", title: "SlidesAI", description: "Google Slides 的 AI 生成插件", url: "https://www.slidesai.io" },
          { id: "ppt9", title: "Pitch", description: "现代化的协作演示软件，集成AI", url: "https://pitch.com" },
          { id: "ppt10", title: "Presentations.ai", description: "专注于企业品牌的AI PPT生成", url: "https://www.presentations.ai" },
          { id: "ppt11", title: "PopAi", description: "上传PDF直接生成PPT演示", url: "https://www.popai.pro" },
          { id: "ppt12", title: "AiPPT", description: "专注于AI生成PPT的国内工具", url: "https://www.aippt.cn" },
          { id: "ppt13", title: "Prezi", description: "非线性演示工具，现已支持AI", url: "https://prezi.com" },
          { id: "ppt14", title: "Canva Magic Design", description: "Canva内置的AI幻灯片生成", url: "https://www.canva.com" }
        ]
      },
      {
        id: "ai-pdf",
        title: "AI 阅读 & PDF处理",
        tools: [
          { id: "pdf1", title: "ChatDOC", description: "解析精准度极高的文档问答工具", url: "https://chatdoc.com", badge: "精准" },
          { id: "pdf2", title: "ChatPDF", description: "最早的PDF对话工具，简单易用", url: "https://www.chatpdf.com", badge: "经典" },
          { id: "pdf3", title: "Humata", description: "适合处理超长文档和复杂学术论文", url: "https://www.humata.ai" },
          { id: "pdf4", title: "SciSpace (Typeset)", description: "科研论文阅读与分析神器", url: "https://typeset.io", badge: "学术" },
          { id: "pdf5", title: "UPDF AI", description: "全能PDF编辑器，内置AI助手", url: "https://www.updf.com" },
          { id: "pdf6", title: "PDF.ai", description: "功能纯粹的PDF对话工具", url: "https://pdf.ai" },
          { id: "pdf7", title: "Adobe Acrobat AI", description: "Adobe官方PDF阅读助手", url: "https://www.adobe.com/acrobat/generative-ai-pdf.html" },
          { id: "pdf8", title: "Scholarcy", description: "自动提取论文摘要和关键事实", url: "https://www.scholarcy.com" },
          { id: "pdf9", title: "LightPDF", description: "免费在线PDF工具箱，含AI功能", url: "https://lightpdf.com" },
          { id: "pdf10", title: "Mathpix", description: "将PDF公式截图转换为LaTeX", url: "https://mathpix.com", badge: "理科" },
          { id: "pdf11", title: "PandaGPT", description: "基于GPT-4的文档阅读助手", url: "https://www.pandagpt.io" },
          { id: "pdf12", title: "AskYourPDF", description: "支持插件的PDF阅读工具", url: "https://askyourpdf.com" },
          { id: "pdf13", title: "Xmind AI", description: "将文档一键转为思维导图", url: "https://xmind.ai" },
          { id: "pdf14", title: "Monica PDF", description: "Monica插件自带的PDF阅读功能", url: "https://monica.im" }
        ]
      },
      {
        id: "ai-audio-avatar",
        title: "数字人 & 语音 (TTS)",
        tools: [
          { id: "aa1", title: "HeyGen", description: "目前效果最好的AI数字人视频生成", url: "https://www.heygen.com", badge: "数字人" },
          { id: "aa2", title: "ElevenLabs", description: "最逼真的AI语音合成(TTS)平台", url: "https://elevenlabs.io", badge: "语音" },
          { id: "aa3", title: "D-ID", description: "让照片开口说话，生成数字人", url: "https://www.d-id.com" },
          { id: "aa4", title: "Synthesia", description: "商业化AI视频演示制作平台", url: "https://www.synthesia.io" },
          { id: "aa5", title: "Fish Audio", description: "国产优秀的声音克隆与合成模型", url: "https://fish.audio/zh-CN/", badge: "国产" },
          { id: "aa6", title: "Murf.ai", description: "专业的工作室级AI配音工具", url: "https://murf.ai" },
          { id: "aa7", title: "Azure Speech", description: "微软Azure文本转语音，音色丰富", url: "https://speech.microsoft.com/portal" },
          { id: "aa8", title: "SadTalker", description: "开源的图片转视频说话项目", url: "https://sadtalker.github.io" },
          { id: "aa9", title: "Wondershare Virbo", description: "万兴播爆，跨境电商数字人营销", url: "https://virbo.wondershare.com" }
        ]
      },
      {
        id: "ai-video-img",
        title: "AI 绘图 & 视频",
        tools: [
          { id: "av1", title: "Midjourney", description: "目前画质最强的AI绘图工具", url: "https://www.midjourney.com", badge: "画质王" },
          { id: "av2", title: "Stable Diffusion", description: "最强开源绘图，可控性最高", url: "https://stability.ai" },
          { id: "av3", title: "可灵 AI (Kling)", description: "快手出品，视频生成效果惊艳", url: "https://klingai.kuaishou.com", badge: "视频" },
          { id: "av4", title: "Sora", description: "OpenAI 视频生成模型 (资讯)", url: "https://openai.com/sora" },
          { id: "av5", title: "Runway Gen-3", description: "好莱坞级别的AI视频编辑", url: "https://runwayml.com" },
          { id: "av6", title: "Vidu", description: "生数科技出品，国产视频生成黑马", url: "https://www.vidu.studio" },
          { id: "av7", title: "Leonardo.ai", description: "每日免费额度，生成质量极高", url: "https://leonardo.ai" },
          { id: "av11", title: "LiblibAI (哩布)", description: "国内最大的SD模型站，在线生图", url: "https://www.liblib.art", badge: "模型站" },
          { id: "av12", title: "Civitai", description: "全球最大的AI绘画模型社区(C站)", url: "https://civitai.com" },
          { id: "av13", title: "Flux.1", description: "最新开源文生图模型，文字生成准确", url: "https://flux.ai" }
        ]
      },
      {
        id: "ai-subs",
        title: "AI 字幕 & 提取",
        tools: [
          { id: "as1", title: "Whisper (OpenAI)", description: "目前开源最强的语音转文字模型", url: "https://github.com/openai/whisper", badge: "开源" },
          { id: "as2", title: "Captions.ai", description: "AI自动生成字幕与眼神校正", url: "https://www.captions.ai", badge: "爆款" },
          { id: "as3", title: "Veed.io", description: "在线视频编辑与自动加字幕", url: "https://www.veed.io/tools/auto-subtitle-generator" },
          { id: "as4", title: "Descript", description: "像编辑文档一样剪辑音视频", url: "https://www.descript.com", badge: "神器" },
          { id: "as5", title: "Rask.ai", description: "视频自动翻译与配音(Lip Sync)", url: "https://www.rask.ai", badge: "翻译" },
          { id: "as6", title: "剪映 (JianYing)", description: "国内最好用的自动识别字幕工具", url: "https://www.capcut.cn", badge: "必备" },
          { id: "as7", title: "Arctime", description: "专业级可视化字幕制作软件", url: "https://arctime.org" },
          { id: "as8", title: "Maestra", description: "自动为视频生成字幕和配音", url: "https://maestra.ai" },
          { id: "as9", title: "Happy Scribe", description: "高质量的转录与字幕生成服务", url: "https://www.happyscribe.com" },
          { id: "as10", title: "Vrew", description: "AI识别语音自动生成字幕编辑", url: "https://vrew.voyagerx.com", badge: "好用" },
          { id: "as11", title: "Zeemo", description: "自动视频字幕与翻译应用", url: "https://zeemo.ai" },
          { id: "as12", title: "Notta", description: "高精度的语音转文字与会议记录", url: "https://www.notta.ai" },
          { id: "as13", title: "Lark Minutes", description: "飞书妙记，音视频转文字", url: "https://www.feishu.cn/product/minutes" },
          { id: "as14", title: "讯飞听见", description: "科大讯飞专业语音转写服务", url: "https://www.iflyrec.com" },
          { id: "as15", title: "Tactiq", description: "Google Meet/Zoom 实时字幕插件", url: "https://tactiq.io" }
        ]
      },
      {
        id: "ai-work",
        title: "AI 编程 & 办公",
        tools: [
          { id: "aw2", title: "Cursor", description: "基于VS Code的AI编程编辑器", url: "https://www.cursor.com", badge: "代码" },
          { id: "aw3", title: "MarsCode (豆包)", description: "字节跳动出品的免费AI编程助手", url: "https://www.marscode.cn" },
          { id: "aw4", title: "GitHub Copilot", description: "微软推出的AI代码补全工具", url: "https://github.com/features/copilot" },
          { id: "aw12", title: "Codeium", description: "免费且强大的Copilot替代品", url: "https://codeium.com", badge: "免费" },
          { id: "aw6", title: "通义听悟", description: "会议录音转文字，智能总结", url: "https://tingwu.aliyun.com", badge: "会议" },
          { id: "aw13", title: "Otter.ai", description: "英语会议实时转录与笔记", url: "https://otter.ai" },
          { id: "aw8", title: "Monica", description: "全能浏览器AI插件，侧边栏助手", url: "https://monica.im" },
          { id: "aw9", title: "DeepL Write", description: "AI 驱动的英语/德语写作润色", url: "https://www.deepl.com/write" },
          { id: "aw11", title: "V0.dev", description: "Vercel出品，用AI生成UI界面", url: "https://v0.dev" },
          { id: "aw14", title: "Notion AI", description: "集成在Notion中的写作助手", url: "https://www.notion.so/product/ai" }
        ]
      }
    ]
  },
  {
    id: "client-dev",
    title: "客户开发 (B2B)",
    icon: Search,
    subCategories: [
      {
        id: "exhibitions",
        title: "国际展会 & 地推",
        tools: [
          { id: "ex1", title: "10times", description: "全球最大的展会查询平台，找展会必备", url: "https://10times.com", badge: "必备" },
          { id: "ex2", title: "EventsEye", description: "专业的国际贸易展会数据库", url: "https://www.eventseye.com" },
          { id: "ex3", title: "Canton Fair", description: "广交会官方网站", url: "https://www.cantonfair.org.cn", badge: "中国" },
          { id: "ex4", title: "CES", description: "国际消费类电子产品展览会", url: "https://www.ces.tech", badge: "美国" },
          { id: "ex5", title: "Hannover Messe", description: "汉诺威工业博览会", url: "https://www.hannovermesse.de", badge: "德国" },
          { id: "ex6", title: "MWC Barcelona", description: "世界移动通信大会", url: "https://www.mwcbarcelona.com" },
          { id: "ex7", title: "Magic Show", description: "全球最大的服装服饰展", url: "https://www.magicfashionevents.com" },
          { id: "ex8", title: "AUMA", description: "德国展览业协会，查询德国展会", url: "https://www.auma.de" },
          { id: "ex9", title: "Jetro", description: "日本贸易振兴机构展会数据库", url: "https://www.jetro.go.jp/en/database/j-messe/" },
          { id: "ex10", title: "HKTDC Fairs", description: "香港贸发局展会列表", url: "https://event.hktdc.com" }
        ]
      },
      {
        id: "customs-data",
        title: "海关 & 贸易数据",
        tools: [
          { id: "cd1", title: "UN Comtrade", description: "联合国商品贸易统计数据库，官方权威", url: "https://comtrade.un.org", badge: "权威" },
          { id: "cd2", title: "Trade Map (ITC)", description: "国际贸易中心提供的全球贸易数据", url: "https://www.trademap.org", badge: "宏观" },
          { id: "cd3", title: "ImportYeti", description: "完全免费查美国海关提单数据", url: "https://www.importyeti.com", badge: "免费" },
          { id: "cd4", title: "WITS World Bank", description: "世界银行综合贸易解决方案", url: "https://wits.worldbank.org" },
          { id: "cd6", title: "Panjiva", description: "标普全球旗下顶级供应链情报", url: "https://panjiva.com" },
          { id: "cd7", title: "52wmb (外贸邦)", description: "国内老牌海关数据查询服务", url: "https://www.52wmb.com" },
          { id: "cd8", title: "Tendata (腾道)", description: "商业数据服务商，数据全", url: "https://www.tendata.cn" },
          { id: "cd9", title: "Volza", description: "全球进出口贸易数据平台", url: "https://www.volza.com" },
          { id: "cd13", title: "Global Trade Tracker", description: "全球贸易追踪系统", url: "https://www.globaltradetracker.com" },
          { id: "cd17", title: "Cypher (Enigma)", description: "美国公司海关数据查询", url: "https://www.enigma.com" }
        ]
      },
      {
        id: "yellow-pages",
        title: "各国黄页 & 名录",
        tools: [
          { id: "yp1", title: "Europages", description: "欧洲主要B2B商业目录，采购商多", url: "https://www.europages.com", badge: "欧洲" },
          { id: "yp2", title: "Kompass", description: "全球最大的B2B企业名录黄页", url: "https://www.kompass.com", badge: "全球" },
          { id: "yp3", title: "ThomasNet", description: "北美最大的工业制造企业名录", url: "https://www.thomasnet.com", badge: "工业" },
          { id: "yp4", title: "Yellow Pages (US)", description: "美国最大的黄页网站", url: "https://www.yellowpages.com" },
          { id: "yp5", title: "Yell", description: "英国最知名的商业黄页", url: "https://www.yell.com", badge: "英国" },
          { id: "yp6", title: "PagesJaunes", description: "法国黄页，开发法国客户必备", url: "https://www.pagesjaunes.fr", badge: "法国" },
          { id: "yp7", title: "Gelbe Seiten", description: "德国黄页，寻找德国供应商/买家", url: "https://www.gelbeseiten.de", badge: "德国" },
          { id: "yp12", title: "Indiamart", description: "印度最大的B2B市场", url: "https://www.indiamart.com", badge: "印度" },
          { id: "yp18", title: "EC21", description: "韩国最大的B2B交易市场", url: "https://www.ec21.com", badge: "韩国" },
          { id: "yp19", title: "Yandex Maps", description: "俄罗斯及独联体国家企业查找", url: "https://yandex.com/maps", badge: "俄语区" }
        ]
      },
      {
        id: "email-tools",
        title: "邮箱挖掘 & 验证",
        tools: [
          { id: "eh1", title: "Hunter.io", description: "输入域名查找公司所有邮箱", url: "https://hunter.io", badge: "必用" },
          { id: "eh2", title: "Snov.io", description: "LinkedIn邮箱提取与自动化营销", url: "https://snov.io" },
          { id: "eh3", title: "Apollo.io", description: "拥有庞大的B2B联系人数据库", url: "https://www.apollo.io", badge: "强大" },
          { id: "eh4", title: "RocketReach", description: "精准查找专业人士联系方式", url: "https://rocketreach.co" },
          { id: "eh5", title: "Lusha", description: "精准获取领英联系方式插件", url: "https://www.lusha.com" },
          { id: "eh6", title: "Skrapp", description: "B2B 邮箱寻找工具", url: "https://www.skrapp.io" },
          { id: "eh8", title: "GetEmail.io", description: "利用大数据查找任何人邮箱", url: "https://getemail.io" },
          { id: "eh9", title: "ZeroBounce", description: "准确率极高的邮件清洗服务", url: "https://www.zerobounce.net" },
          { id: "eh11", title: "MailTester", description: "免费验证邮箱地址有效性", url: "https://mailtester.com" }
        ]
      },
      {
        id: "company-info",
        title: "企业背调 & 地图",
        tools: [
          { id: "ci1", title: "Google Maps", description: "地推与实景查看必备", url: "https://www.google.com/maps" },
          { id: "ci2", title: "LinkedIn Sales Nav", description: "领英销售导航，精准找人", url: "https://business.linkedin.com/sales-solutions" },
          { id: "ci3", title: "OpenCorporates", description: "全球最大的开放公司数据库", url: "https://opencorporates.com" },
          { id: "ci4", title: "Crunchbase", description: "查企业融资、高管信息", url: "https://www.crunchbase.com" },
          { id: "ci6", title: "Whois", description: "查询域名注册时间与持有人", url: "https://who.is" },
          { id: "ci7", title: "Wayback Machine", description: "查看客户网站的历史快照", url: "https://archive.org/web/" },
          { id: "ci8", title: "D&B Hoovers", description: "邓白氏商业信息数据库", url: "https://www.dnb.com" }
        ]
      }
    ]
  },
  {
    id: "calc-tools",
    title: "外贸核算工具",
    icon: Calculator,
    subCategories: [
      {
        id: "hs-tariffs",
        title: "HS编码 & 关税查询",
        tools: [
          { id: "hst1", title: "全通关 (通关网)", description: "中国海关HS编码、申报要素查询", url: "https://www.hsbianma.com", badge: "国内" },
          { id: "hst2", title: "FindHS.codes", description: "全球HS编码查询引挚", url: "https://www.findhs.codes" },
          { id: "hst3", title: "USITC Tariff Database", description: "美国国际贸易委员会关税查询", url: "https://dataweb.usitc.gov", badge: "美国" },
          { id: "hst4", title: "TARIC Consultation", description: "欧盟委员会官方关税查询", url: "https://ec.europa.eu/taxation_customs/dds2/taric/taric_consultation.jsp", badge: "欧盟" },
          { id: "hst5", title: "CBSA Customs Tariff", description: "加拿大边境服务局关税表", url: "https://www.cbsa-asfc.gc.ca/trade-commerce/tariff-tarif/menu-eng.html", badge: "加拿大" },
          { id: "hst6", title: "SimplyDuty", description: "简便的全球进口关税计算", url: "https://www.simplyduty.com", badge: "好用" },
          { id: "hst10", title: "DutyCalculator", description: "Pitney Bowes提供的关税计算服务", url: "https://www.dutycalculator.com" },
          { id: "hst17", title: "Easyship Duty Calc", description: "跨境电商运费与关税计算器", url: "https://www.easyship.com/duties-and-taxes-calculator" },
          { id: "hst20", title: "China Customs", description: "中国海关总署官方网站", url: "http://www.customs.gov.cn" }
        ]
      },
      {
        id: "container-calc",
        title: "装箱 & 算柜神器",
        tools: [
          { id: "cc1", title: "LoadExpert (装箱大师)", description: "国内最专业的集装箱装箱计算软件", url: "http://www.loadmaster.biz", badge: "专业" },
          { id: "cc2", title: "SeaRates Load Calculator", description: "在线3D装箱模拟计算，可视化强", url: "https://www.searates.com/reference/stuffing", badge: "可视化" },
          { id: "cc3", title: "Goodloading", description: "智能货物规划应用，支持托盘计算", url: "https://www.goodloading.com" },
          { id: "cc4", title: "CBM Calculator", description: "简单快速的体积(CBM)计算器", url: "https://www.cbmcalculator.com" },
          { id: "cc5", title: "EasyCargo", description: "在线3D集装箱装载优化软件", url: "https://www.easycargo3d.com" },
          { id: "cc6", title: "Pier2Pier", description: "免费的在线装箱量计算工具", url: "https://www.pier2pier.com/loadcalc" },
          { id: "cc7", title: "CargoWiz", description: "老牌装载优化软件，功能扎实", url: "https://www.softtruck.com" }
        ]
      },
      {
        id: "price-profit",
        title: "报价 & 利润核算",
        tools: [
          { id: "pp1", title: "FOB 价格计算器", description: "快速核算FOB美元报价 (Calculator.net)", url: "https://www.calculator.net/fob-calculator.html", badge: "常用" },
          { id: "pp2", title: "Amazon FBA 计算器", description: "亚马逊官方利润与费用核算", url: "https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index", badge: "官方" },
          { id: "pp3", title: "Shopify 利润计算器", description: "独立站产品定价与毛利估算", url: "https://www.shopify.com/tools/profit-margin-calculator" },
          { id: "pp4", title: "Omni Margin Calculator", description: "全能毛利率与售价反推计算", url: "https://www.omnicalculator.com/finance/margin" },
          { id: "pp5", title: "PayPal 费率计算器", description: "计算PayPal收款实际到账金额", url: "https://www.salecalc.com/paypal" },
          { id: "pp7", title: "Landed Cost (到岸成本)", description: "Zonos提供的关税与到岸成本计算", url: "https://zonos.com/landed-cost-calculator" },
          { id: "pp8", title: "AliPrice 价格追踪", description: "速卖通/1688价格历史与比价", url: "http://www.aliprice.com" },
          { id: "pp9", title: "Incoterms 2020", description: "国际贸易术语解释通则图解", url: "https://iccwbo.org/business-solutions/incoterms-rules/" }
        ]
      },
      {
        id: "tax-currency",
        title: "汇率 & 单位换算",
        tools: [
          { id: "tc1", title: "中国银行外汇牌价", description: "最权威的实时汇率查询", url: "https://www.boc.cn/sourcedb/whpj/", badge: "权威" },
          { id: "tc2", title: "XE Currency", description: "国际通用汇率转换工具", url: "https://www.xe.com" },
          { id: "tc5", title: "UnitConverters", description: "英制公制单位在线换算", url: "https://www.unitconverters.net" },
          { id: "tc7", title: "World Time Buddy", description: "最好用的时区对比与会议安排", url: "https://www.worldtimebuddy.com" },
          { id: "tc9", title: "Country Code", description: "全球国家代码与电话区号", url: "https://countrycode.org" }
        ]
      }
    ]
  },
  {
    id: "social-media",
    title: "社媒运营 (SNS)",
    icon: Share2,
    subCategories: [
      {
        id: "tiktok-video",
        title: "TikTok & 视频",
        tools: [
          { id: "tk1", title: "FastMoss", description: "TikTok 数据分析平台", url: "https://www.fastmoss.com", badge: "热门" },
          { id: "tk2", title: "EchoTik", description: "TikTok 选品与达人分析", url: "https://echotik.live" },
          { id: "tk3", title: "Kalodata", description: "TikTok电商数据分析", url: "https://kalodata.com" },
          { id: "tk4", title: "CapCut (剪映)", description: "字节跳动官方视频剪辑", url: "https://www.capcut.com" },
          { id: "tk5", title: "Snaptik", description: "无水印下载TikTok视频", url: "https://snaptik.app" },
          { id: "tk6", title: "TikStar", description: "TikTok创作者数据分析", url: "https://tikstar.com" },
          { id: "tk7", title: "Shoplus", description: "TikTok 爆品挖掘工具", url: "https://shoplus.net" },
          { id: "tk9", title: "SaveTT", description: "TikTok 视频与音频下载", url: "https://savett.cc" }
        ]
      },
      {
        id: "whatsapp-mkt",
        title: "WhatsApp 营销",
        tools: [
          { id: "wa1", title: "WhatsApp Web", description: "网页版登录入口", url: "https://web.whatsapp.com", badge: "基础" },
          { id: "wa2", title: "WA Business API", description: "官方商业API接口", url: "https://business.whatsapp.com" },
          { id: "wa4", title: "Watoolkit", description: "Chrome浏览器扩展插件", url: "https://watoolkit.com" },
          { id: "wa5", title: "Cooby", description: "让WhatsApp更有序的CRM插件", url: "https://cooby.co" },
          { id: "wa6", title: "WBSender", description: "Chrome批量发送扩展", url: "https://chromewebstore.google.com" }
        ]
      },
      {
        id: "linkedin-fb",
        title: "LinkedIn & FB",
        tools: [
          { id: "li1", title: "LinkedIn Helper", description: "领英自动化加人与群发", url: "https://www.linkedin-helper.com" },
          { id: "li2", title: "Dux-Soup", description: "著名的领英获客插件", url: "https://www.dux-soup.com" },
          { id: "li3", title: "Crystal", description: "分析领英用户的性格特征", url: "https://www.crystalknows.com" },
          { id: "fb1", title: "Meta Business Suite", description: "FB/Ins 官方一站式管理", url: "https://business.facebook.com" },
          { id: "fb2", title: "FB Ads Library", description: "查看竞争对手的广告素材", url: "https://www.facebook.com/ads/library", badge: "选品" },
          { id: "fb3", title: "ManyChat", description: "FB Messenger 聊天机器人", url: "https://manychat.com" },
          { id: "fb4", title: "BigSpy", description: "多平台广告素材间谍工具", url: "https://bigspy.com" }
        ]
      },
      {
        id: "social-mgmt",
        title: "综合管理 & 链接",
        tools: [
          { id: "sm1", title: "Buffer", description: "社媒帖子定时发布工具", url: "https://buffer.com" },
          { id: "sm2", title: "Hootsuite", description: "一站式社媒管理平台", url: "https://hootsuite.com" },
          { id: "sm3", title: "Linktree", description: "多链接聚合落地页 (Bio Link)", url: "https://linktr.ee" },
          { id: "sm4", title: "Bitly", description: "短链接生成与点击统计", url: "https://bitly.com" },
          { id: "sm6", title: "Canva", description: "快速制作社媒配图", url: "https://www.canva.com" }
        ]
      }
    ]
  },
  {
    id: "website-seo",
    title: "独立站 & SEO",
    icon: Globe,
    subCategories: [
      {
        id: "keyword-tool",
        title: "关键词 & 流量",
        tools: [
          { id: "seo1", title: "Semrush", description: "全能型SEO与竞对分析", url: "https://www.semrush.com", badge: "权威" },
          { id: "seo2", title: "Ahrefs", description: "外链分析与关键词挖掘神器", url: "https://ahrefs.com", badge: "必用" },
          { id: "seo3", title: "Google Trends", description: "谷歌趋势，查看搜索热度", url: "https://trends.google.com" },
          { id: "seo4", title: "Ubersuggest", description: "Neil Patel出品的关键词工具", url: "https://neilpatel.com/ubersuggest" },
          { id: "seo5", title: "Moz", description: "老牌SEO工具，域名权重查询", url: "https://moz.com" },
          { id: "seo6", title: "SimilarWeb", description: "查看任意网站流量来源", url: "https://www.similarweb.com", badge: "神器" },
          { id: "seo7", title: "Keywords Everywhere", description: "浏览器插件，实时看搜索量", url: "https://keywordseverywhere.com" },
          { id: "seo8", title: "AnswerThePublic", description: "长尾关键词与话题挖掘", url: "https://answerthepublic.com" },
          { id: "seo9", title: "KWFinder", description: "长尾词挖掘利器", url: "https://kwfinder.com" },
          { id: "seo10", title: "SpyFu", description: "侦查竞争对手PPC策略", url: "https://www.spyfu.com" }
        ]
      },
      {
        id: "seo-advanced",
        title: "外链 & 死链检测",
        tools: [
          { id: "sa1", title: "Dead Link Checker", description: "检测网站内的死链并修复", url: "https://www.deadlinkchecker.com", badge: "工具" },
          { id: "sa2", title: "Dr. Link Check", description: "专业的死链与链接健康度检查", url: "https://www.drlinkcheck.com" },
          { id: "sa3", title: "Majestic", description: "专注外链分析与信任度(TF/CF)查询", url: "https://zh.majestic.com", badge: "外链" },
          { id: "sa4", title: "Moz Link Explorer", description: "Moz推出的外链分析工具", url: "https://moz.com/link-explorer" },
          { id: "sa5", title: "Google Disavow", description: "拒绝垃圾外链，保护网站", url: "https://search.google.com/search-console/disavow-links" },
          { id: "sa6", title: "Screaming Frog", description: "尖叫青蛙，SEO爬虫工具，查死链神器", url: "https://www.screamingfrog.co.uk", badge: "爬虫" },
          { id: "sa7", title: "Help A Reporter Out", description: "HARO, 获取高权重媒体外链", url: "https://www.helpareporter.com" },
          { id: "sa8", title: "BuzzStream", description: "外链建设与KOL营销管理", url: "https://www.buzzstream.com" }
        ]
      },
      {
        id: "site-tech",
        title: "建站 & 技术分析",
        tools: [
          { id: "st1", title: "Shopify", description: "全球最流行的SaaS电商建站", url: "https://www.shopify.com", badge: "热门" },
          { id: "st2", title: "WordPress", description: "开源建站系统，生态丰富", url: "https://wordpress.org" },
          { id: "st3", title: "WooCommerce", description: "WP的开源电商插件", url: "https://woocommerce.com" },
          { id: "st4", title: "Google Analytics", description: "谷歌官方流量统计 (GA4)", url: "https://analytics.google.com" },
          { id: "st5", title: "Search Console", description: "谷歌站长工具，监控收录", url: "https://search.google.com/search-console" },
          { id: "st6", title: "PageSpeed Insights", description: "网站加载速度测试", url: "https://pagespeed.web.dev" },
          { id: "st7", title: "BuiltWith", description: "查询网站使用了什么技术栈", url: "https://builtwith.com" },
          { id: "st9", title: "Cloudflare", description: "免费CDN加速与安全防护", url: "https://www.cloudflare.com" }
        ]
      }
    ]
  },
  {
    id: "platform-ops",
    title: "跨境电商平台",
    icon: ShoppingCart,
    subCategories: [
      {
        id: "amazon-ops",
        title: "亚马逊 (Amazon)",
        tools: [
          { id: "amz1", title: "Jungle Scout", description: "亚马逊选品与数据分析鼻祖", url: "https://www.junglescout.com", badge: "经典" },
          { id: "amz2", title: "Helium 10", description: "亚马逊运营全能套件", url: "https://www.helium10.com", badge: "强大" },
          { id: "amz3", title: "Keepa", description: "亚马逊价格历史追踪插件", url: "https://keepa.com", badge: "必装" },
          { id: "amz4", title: "卖家精灵", description: "SellersSprite，本土化分析", url: "https://www.sellersprite.com" },
          { id: "amz5", title: "Sorftime", description: "亚马逊类目排名分析", url: "https://www.sorftime.com" },
          { id: "amz6", title: "CamelCamelCamel", description: "免费的亚马逊价格追踪", url: "https://camelcamelcamel.com" },
          { id: "amz8", title: "鸥鹭 (Oulu)", description: "亚马逊大数据选品", url: "https://www.oulu.com" },
          { id: "amz9", title: "AMZ123", description: "跨境电商卖家导航", url: "https://www.amz123.com" }
        ]
      },
      {
        id: "alibaba-ops",
        title: "阿里国际 (Alibaba)",
        tools: [
          { id: "ali1", title: "阿里卖家后台", description: "My Alibaba 登录入口", url: "https://i.alibaba.com" },
          { id: "ali2", title: "阿里翻译", description: "专注于电商领域的翻译", url: "https://translate.alibaba.com" },
          { id: "ali3", title: "P4P 营销中心", description: "外贸直通车后台", url: "https://p4p.alibaba.com" },
          { id: "ali4", title: "1688", description: "国内采购与货源寻找", url: "https://www.1688.com" },
          { id: "ali5", title: "AliPrice", description: "以图搜图，价格追踪助手", url: "https://www.aliprice.com" },
          { id: "ali6", title: "小满科技 (OKKI)", description: "阿里旗下外贸CRM", url: "https://www.xiaoman.cn" }
        ]
      },
      {
        id: "multi-platform",
        title: "Temu / TikTok / Shopee",
        tools: [
          { id: "mp1", title: "Temu 卖家中心", description: "拼多多跨境卖家后台", url: "https://seller.kuajingmaihuo.com", badge: "火爆" },
          { id: "mp2", title: "TikTok Shop", description: "TikTok小店卖家后台", url: "https://seller.tiktokglobalshop.com" },
          { id: "mp3", title: "SHEIN 供应商", description: "希音招商门户", url: "https://zhaoshang.sheincorp.cn" },
          { id: "mp4", title: "Shopee", description: "虾皮东南亚领航电商", url: "https://shopee.cn" },
          { id: "mp5", title: "Lazada", description: "阿里旗下东南亚电商平台", url: "https://www.lazada.com" },
          { id: "mp6", title: "AliExpress", description: "速卖通卖家入口", url: "https://seller.aliexpress.com" },
          { id: "mp8", title: "Ozon", description: "俄罗斯最大的电商平台", url: "https://seller.ozon.ru" },
          { id: "mp9", title: "Coupang", description: "韩国第一大电商平台", url: "https://wings.coupang.com" },
          { id: "mp11", title: "Mercado Libre", description: "拉美最大的电商平台", url: "https://www.mercadolibre.com" }
        ]
      },
      {
        id: "erp-tools",
        title: "ERP & 刊登工具",
        tools: [
          { id: "erp1", title: "店小秘", description: "免费好用的跨境电商ERP", url: "https://www.dianxiaomi.com", badge: "常用" },
          { id: "erp2", title: "马帮 ERP", description: "老牌跨境电商管理软件", url: "https://www.mabangerp.com" },
          { id: "erp3", title: "通途 (Tongtool)", description: "多平台刊登与订单管理", url: "https://www.tongtool.com" },
          { id: "erp4", title: "芒果店长", description: "轻量级跨境电商ERP", url: "https://www.mangoerp.com" },
          { id: "erp5", title: "易仓 ERP", description: "中大型卖家首选", url: "https://www.eccang.com" },
          { id: "erp6", title: "船长 BI", description: "亚马逊精细化运营分析", url: "https://www.captainbi.com" },
          { id: "erp7", title: "领星 ERP", description: "亚马逊业务财务一体化", url: "https://www.lingxing.com" }
        ]
      }
    ]
  },
  {
    id: "finance-logistics",
    title: "物流与支付",
    icon: Truck,
    subCategories: [
      {
        id: "payment",
        title: "跨境支付 & 结汇",
        tools: [
          { id: "pay1", title: "PingPong", description: "跨境收款，费率低到账快", url: "https://www.pingpongx.com" },
          { id: "pay2", title: "Payoneer (派安盈)", description: "全球电商平台收款必备", url: "https://www.payoneer.com" },
          { id: "pay3", title: "Airwallex (空中云汇)", description: "全球虚拟卡与收款", url: "https://www.airwallex.com" },
          { id: "pay4", title: "LianLian (连连)", description: "国内老牌跨境支付", url: "https://www.lianlianpay.com" },
          { id: "pay5", title: "PayPal", description: "全球最大的在线支付平台", url: "https://www.paypal.com" },
          { id: "pay6", title: "Wise", description: "国际汇款神器，汇率极好", url: "https://wise.com" },
          { id: "pay7", title: "XTransfer", description: "B2B外贸收款专家", url: "https://www.xtransfer.cn" },
          { id: "pay8", title: "Stripe", description: "独立站信用卡收款通道", url: "https://stripe.com" }
        ]
      },
      {
        id: "logistics-track",
        title: "物流追踪 & 关务",
        tools: [
          { id: "log1", title: "17Track", description: "全球物流包裹一站式查询", url: "https://www.17track.net", badge: "常用" },
          { id: "log2", title: "快递100", description: "国内国际快递查询", url: "https://www.kuaidi100.com" },
          { id: "log3", title: "HS Code查询", description: "通关网HS编码查询", url: "https://www.hsbianma.com" },
          { id: "log5", title: "AfterShip", description: "电商包裹追踪与通知", url: "https://www.aftership.com" },
          { id: "log6", title: "Freightos", description: "国际货运运费估算", url: "https://www.freightos.com" },
          { id: "log7", title: "Searates", description: "海运费查询与船期表", url: "https://www.searates.com" },
          { id: "log8", title: "TrackTry", description: "全球包裹追踪平台", url: "https://www.tracktry.com" }
        ]
      }
    ]
  },
  {
    id: "design-tools",
    title: "设计与素材",
    icon: Image,
    subCategories: [
      {
        id: "design-online",
        title: "在线设计",
        tools: [
          { id: "des1", title: "Canva", description: "小白也能用的在线设计神器", url: "https://www.canva.com", badge: "必备" },
          { id: "des2", title: "Figma", description: "专业的界面设计协作工具", url: "https://www.figma.com" },
          { id: "des3", title: "Adobe Express", description: "Adobe推出的在线设计", url: "https://www.adobe.com/express/" },
          { id: "des4", title: "VistaCreate", description: "类似于Canva的设计工具", url: "https://create.vista.com" },
          { id: "des5", title: "稿定设计", description: "国内电商设计模板多", url: "https://www.gaoding.com" }
        ]
      },
      {
        id: "image-process",
        title: "图片处理 (去背景/水印)",
        tools: [
          { id: "ip1", title: "Remove.bg", description: "一键智能抠图去背景", url: "https://www.remove.bg", badge: "好用" },
          { id: "ip2", title: "TinyPNG", description: "智能压缩WebP, PNG, JPEG", url: "https://tinypng.com" },
          { id: "ip9", title: "WatermarkRemover", description: "AI智能去除图片水印", url: "https://www.watermarkremover.io", badge: "去水印" },
          { id: "ip10", title: "SnapEdit", description: "移除路人、水印、对象", url: "https://snapedit.app" },
          { id: "ip11", title: "PhotoRoom", description: "高质量AI抠图与背景合成", url: "https://www.photoroom.com" },
          { id: "ip12", title: "PicWish", description: "佐糖，全能图片处理(去水印/变清晰)", url: "https://picwish.com" },
          { id: "ip3", title: "Upscale.media", description: "AI图片无损放大增强", url: "https://www.upscale.media" },
          { id: "ip4", title: "Photopea", description: "在线版 Photoshop", url: "https://www.photopea.com" },
          { id: "ip5", title: "Cleanup.pictures", description: "移除图片中不需要的物体", url: "https://cleanup.pictures" },
          { id: "ip6", title: "IloveIMG", description: "批量图片编辑工具箱", url: "https://www.iloveimg.com" },
          { id: "ip7", title: "Bigjpg", description: "AI人工智能图片放大", url: "https://bigjpg.com" },
          { id: "ip8", title: "Vector Magic", description: "位图转矢量图神器", url: "https://vectormagic.com" }
        ]
      },
      {
        id: "stock-photo",
        title: "免费图库",
        tools: [
          { id: "sp1", title: "Unsplash", description: "高质量免费商用图片", url: "https://unsplash.com", badge: "精美" },
          { id: "sp2", title: "Pexels", description: "免费素材图片与视频", url: "https://www.pexels.com" },
          { id: "sp3", title: "Pixabay", description: "海量免版税图库", url: "https://pixabay.com" },
          { id: "sp4", title: "Freepik", description: "高质量矢量图与PSD下载", url: "https://www.freepik.com" },
          { id: "sp5", title: "Vecteezy", description: "免费矢量艺术图库", url: "https://www.vecteezy.com" }
        ]
      }
    ]
  },
  {
    id: "utilities",
    title: "实用工具箱",
    icon: Box,
    subCategories: [
      {
        id: "meeting-tools",
        title: "会议 & 协作",
        tools: [
          { id: "mt1", title: "Zoom", description: "全球最常用的视频会议软件", url: "https://zoom.us", badge: "主流" },
          { id: "mt2", title: "Google Meet", description: "谷歌生态下的浏览器视频会议", url: "https://meet.google.com" },
          { id: "mt3", title: "Microsoft Teams", description: "企业级沟通与协作平台", url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software" },
          { id: "mt4", title: "Voov Meeting (腾讯会议)", description: "腾讯会议国际版，连接国内外", url: "https://voovmeeting.com", badge: "必备" },
          { id: "mt5", title: "Skype", description: "老牌国际网络电话与视频", url: "https://www.skype.com" },
          { id: "mt6", title: "Slack", description: "团队即时通讯与协作工具", url: "https://slack.com" },
          { id: "mt7", title: "Discord", description: "年轻化社区与语音沟通平台", url: "https://discord.com" },
          { id: "mt8", title: "Webex", description: "Cisco推出的专业视频会议", url: "https://www.webex.com" },
          { id: "mt9", title: "DingTalk (钉钉)", description: "阿里出品，适合与国内供应商沟通", url: "https://www.dingtalk.com" },
          { id: "mt10", title: "Lark (飞书)", description: "字节跳动出品，先进的协作办公平台", url: "https://www.larksuite.com", badge: "高效" },
          { id: "mt11", title: "BlueJeans", description: "高质量音频的商务视频会议", url: "https://www.bluejeans.com" },
          { id: "mt12", title: "Whereby", description: "无需下载的浏览器视频会议", url: "https://whereby.com" },
          { id: "mt13", title: "Gather", description: "像素风虚拟办公室与会议", url: "https://www.gather.town" },
          { id: "mt14", title: "Butter", description: "专注于互动研讨会的会议工具", url: "https://www.butter.us" }
        ]
      },
      {
        id: "screen-tools",
        title: "录屏 & 截图",
        tools: [
          { id: "st1", title: "Loom", description: "外贸人常用的视频邮件录制工具", url: "https://www.loom.com", badge: "爆款" },
          { id: "st2", title: "OBS Studio", description: "开源强大的录屏与直播推流软件", url: "https://obsproject.com", badge: "专业" },
          { id: "st3", title: "Snipaste", description: "最好用的贴图与截图软件", url: "https://zh.snipaste.com", badge: "截图" },
          { id: "st4", title: "ShareX", description: "功能极其强大的开源截图工具", url: "https://getsharex.com" },
          { id: "st5", title: "Screen Studio", description: "自动变焦的精美演示视频录制", url: "https://www.screen.studio", badge: "Mac" },
          { id: "st6", title: "FSCapture", description: "小巧轻便的录屏与长截图工具", url: "https://www.faststone.org/FSCaptureDetail.htm" },
          { id: "st7", title: "Xnapper", description: "让截图瞬间变精美的工具", url: "https://xnapper.com" },
          { id: "st8", title: "Bandicam", description: "老牌高清录屏软件，游戏/桌面", url: "https://www.bandicam.cn" },
          { id: "st9", title: "Camtasia", description: "录屏+剪辑一体化专业软件", url: "https://www.techsmith.com/video-editor.html" },
          { id: "st10", title: "Movavi Screen Recorder", description: "简单易用的屏幕录制工具", url: "https://www.movavi.com/screen-recorder" },
          { id: "st11", title: "Screencastify", description: "Chrome浏览器录屏插件", url: "https://www.screencastify.com" },
          { id: "st12", title: "Lightshot", description: "轻量级截图并快速分享", url: "https://app.prntscr.com" }
        ]
      },
      {
        id: "editors-dev",
        title: "编辑器 & 排版",
        tools: [
          { id: "ed1", title: "Typora", description: "极简的Markdown写作工具", url: "https://typora.io", badge: "Markdown" },
          { id: "ed2", title: "Obsidian", description: "第二大脑，知识管理与写作", url: "https://obsidian.md" },
          { id: "ed3", title: "秀米 Xiumi", description: "微信公众号排版神器", url: "https://xiumi.us", badge: "排版" },
          { id: "ed4", title: "135编辑器", description: "丰富的微信文章排版模板", url: "https://www.135editor.com" },
          { id: "ed5", title: "CodePen", description: "在线前端代码编辑与演示", url: "https://codepen.io" },
          { id: "ed6", title: "StackEdit", description: "在线Markdown编辑器，支持同步", url: "https://stackedit.io" },
          { id: "ed7", title: "Online HTML Editor", description: "所见即所得的在线HTML编辑器", url: "https://html-online.com/editor/" }
        ]
      },
      {
        id: "ip-trademark",
        title: "商标 & 知识产权",
        tools: [
          { id: "tm1", title: "USPTO (美国商标)", description: "美国专利商标局官方查询", url: "https://tmsearch.uspto.gov", badge: "美国" },
          { id: "tm2", title: "EUIPO (欧盟商标)", description: "欧盟知识产权局查询", url: "https://euipo.europa.eu/eSearch/", badge: "欧盟" },
          { id: "tm3", title: "WIPO Brand", description: "世界知识产权组织全球品牌数据库", url: "https://branddb.wipo.int", badge: "全球" },
          { id: "tm4", title: "中国商标网", description: "国家知识产权局商标局官方查询", url: "http://wcjs.sbj.cnipa.gov.cn", badge: "中国" },
          { id: "tm5", title: "Trademarkia", description: "免费的全球商标搜索引擎", url: "https://www.trademarkia.com" },
          { id: "tm6", title: "Google Patents", description: "谷歌专利搜索", url: "https://patents.google.com" },
          { id: "tm7", title: "UKIPO (英国商标)", description: "英国知识产权局查询", url: "https://trademarks.ipo.gov.uk" },
          { id: "tm8", title: "J-PlatPat (日本)", description: "日本特许厅专利商标查询", url: "https://www.j-platpat.inpit.go.jp" }
        ]
      },
      {
        id: "translation",
        title: "翻译 & 语言",
        tools: [
          { id: "tr1", title: "DeepL", description: "全球最准确的AI翻译工具", url: "https://www.deepl.com", badge: "首选" },
          { id: "tr2", title: "Google Translate", description: "谷歌翻译，支持语种最多", url: "https://translate.google.com" },
          { id: "tr3", title: "沉浸式翻译", description: "最好用的双语对照翻译插件", url: "https://immersive-translate.owenyoung.com", badge: "神级" },
          { id: "tr4", title: "彩云小译", description: "文档与网页双语对照翻译", url: "https://fanyi.caiyunapp.com" },
          { id: "tr5", title: "Tess.ai", description: "多语言文案生成", url: "https://tess.ai" }
        ]
      },
      {
        id: "format-convert",
        title: "格式 & 视频转换",
        tools: [
          { id: "fc1", title: "Convertio", description: "全能文件格式在线转换", url: "https://convertio.co" },
          { id: "fc5", title: "HandBrake", description: "开源免费的视频转码压缩神器", url: "https://handbrake.fr", badge: "视频" },
          { id: "fc6", title: "FreeConvert", description: "支持视频、音频、文档免费转换", url: "https://www.freeconvert.com" },
          { id: "fc2", title: "PDF24", description: "免费且强大的在线PDF工具箱", url: "https://tools.pdf24.org", badge: "良心" },
          { id: "fc3", title: "Smallpdf", description: "好用的PDF处理工具", url: "https://smallpdf.com" },
          { id: "fc4", title: "CloudConvert", description: "支持200+格式云端转换", url: "https://cloudconvert.com" }
        ]
      },
      {
        id: "efficiency",
        title: "效率 & 传输",
        tools: [
          { id: "eff1", title: "WeTransfer", description: "超大文件免费传输", url: "https://wetransfer.com" },
          { id: "eff2", title: "SendAnywhere", description: "跨设备文件极速传输", url: "https://send-anywhere.com" },
          { id: "eff3", title: "Time.is", description: "精准的世界时间与时差查询", url: "https://time.is" },
          { id: "eff5", title: "Notion", description: "全能笔记与知识库管理", url: "https://www.notion.so" },
          { id: "eff6", title: "Trello", description: "看板式项目管理工具", url: "https://trello.com" }
        ]
      }
    ]
  },
  {
    id: "learning-news",
    title: "学习 & 资讯",
    icon: GraduationCap,
    subCategories: [
      {
        id: "forums",
        title: "论坛 & 社区",
        tools: [
          { id: "ln1", title: "福步外贸论坛", description: "国内最大的外贸人社区", url: "https://bbs.fobshanghai.com", badge: "老牌" },
          { id: "ln2", title: "米问社区", description: "米课旗下外贸问答社区", url: "https://ask.imiker.com" },
          { id: "ln3", title: "知无不言", description: "跨境电商亚马逊社区", url: "https://www.wearesellers.com" },
          { id: "ln4", title: "Quora", description: "国外的高质量问答社区", url: "https://www.quora.com" },
          { id: "ln5", title: "Reddit", description: "国外最大的论坛与兴趣小组", url: "https://www.reddit.com" }
        ]
      },
      {
        id: "news",
        title: "行业资讯",
        tools: [
          { id: "nw1", title: "雨果网", description: "跨境电商智能服务平台", url: "https://www.cifnews.com", badge: "资讯" },
          { id: "nw2", title: "亿邦动力", description: "电商新闻门户", url: "https://www.ebrun.com" },
          { id: "nw3", title: "36氪出海", description: "关注出海新经济", url: "https://letschuhai.36kr.com" },
          { id: "nw4", title: "白鲸出海", description: "泛互联网出海服务平台", url: "https://www.baijing.cn" },
          { id: "nw5", title: "TechCrunch", description: "全球科技创业新闻", url: "https://techcrunch.com" }
        ]
      },
      {
        id: "courses",
        title: "课程学习",
        tools: [
          { id: "cr1", title: "Udemy", description: "全球最大的在线课程平台", url: "https://www.udemy.com" },
          { id: "cr2", title: "Coursera", description: "国际顶级大学在线课程", url: "https://www.coursera.org" },
          { id: "cr3", title: "Google Digital", description: "谷歌数字营销免费课程", url: "https://skillshop.withgoogle.com" },
          { id: "cr4", title: "YouTube", description: "最好的免费视频学习平台", url: "https://www.youtube.com" }
        ]
      }
    ]
  }
];
