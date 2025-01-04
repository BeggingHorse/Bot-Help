// 插件功能数据
const plugins = [
  {
    name: "ark-plugin",
    functions: [
      { name: "ark设置", command: "^#ark设置(.*)$" },
      { name: "ark帮助", command: "^#ark帮助$", description: "ark帮助" },
      { name: "喵喵独立群配置文件", command: "^(.*)$", description: "喵喵独立群配置文件" },
      { name: "设置优先级", command: "^#刷新优先级(.*)$", description: "设置优先级" },
      { name: "替换文件", command: "^#ark创建备份$", description: "替换文件" },
      { name: "角色排名获取", command: "^#(.*)排名统计$", description: "角色排名获取" },
    ],
  },
  {
    name: "Atlas",
    functions: [
      { name: "Atlas图鉴管理", command: "^#*(github)?(原神|星铁|绝区零)?图鉴(强行)?(强制)?升级$", description: "更新、升级图鉴拓展包及其插件" },
      { name: "Atlas图鉴", command: "#?.+(图鉴)*", description: "原神各类图鉴与角色材料，支持热更新" },
      { name: "Atlas图鉴帮助", command: "(#|\\\*)?(图鉴|wiki|百科|Atlas)(帮助|菜单|功能)", description: "Atlas图鉴的帮助" },
      { name: "Atlas原魔属性计算", command: "^(#|原魔).*(生命值|攻击力).*", description: "查询原魔生命值和攻击力" },
    ],
  },
  {
    name: "bililivePush-plugin",
    functions: [
      { name: "bilibili", command: "^#?(绝区零|星铁)?(全体|匿名)?订阅直播间", description: "无功能说明" },
      { name: "[推送插件]帮助", command: "^#?((B|b)ili)*(推送|(P|p)ush)(命令|帮助|菜单|help|说明|功能|指令|使用说明)$", description: "推送帮助" },
    ],
  },
  {
    name: "cb-plugin",
    functions: [
      { name: "cbGold", command: "^#?(尘白|cb)数据金$", description: "尘白数据金" },
      { name: "cbGuide", command: "^#?(尘白|cb)(\\S+)攻略$", description: "尘白角色攻略" },
      { name: "cbHelp", command: "^#?(尘白|cb)帮助$", description: "尘白帮助" },
      { name: "cbMaterial", command: "^#?(尘白|cb)(材料|养成)", description: "尘白养成材料" },
      { name: "cbRank", command: "^#?(尘白|cb)强度榜$", description: "尘白强度榜" },
    ],
  },
  {
    name: "earth-k-plugin",
    functions: [
      { name: "隐藏哔咔", command: "#点哔咔漫画(.*)$", description: "隐藏哔咔" },
      { name: "b站视频", command: "https://www.bilibili.com(.*)|https://b23.tv(.*)", description: "b站视频" },
      { name: "[土块插件]大话骰", command: "^#加入大话骰$", description: "简单开发示例" },
      { name: "土块插件管理1", command: "^#查看安装插件|#查看所有插件|#查看未装插件", description: "土块插件管理" },
      { name: "[土块插件]占卜", command: "^#卜卦", description: "无功能说明" },
      { name: "土块表情包", command: "^#?土块表情开启$", description: "土块表情包" },
      { name: "[土块插件]原史", command: "^#原史(.*)$", description: "简单开发示例" },
      { name: "[土块插件]原神视频", command: "^#角色视频列表$|^#角色视频(.*)$", description: "简单开发示例" },
      { name: "[土块插件]原神语音", command: "^#角色语音汇总$", description: "简单开发示例" },
      { name: "[土块插件]猜原神", command: "^#猜原神$|#猜(.*)|#看答案|#提示|#重置猜原神分数", description: "简单开发示例" },
      { name: "[土块插件]帮助", command: "^#?(土块|土堆|泥土|土|赌怪)?(命令|帮助|菜单|help|说明|功能|指令|使用说明)$", description: "土块帮助" },
      { name: "[土块插件]打我", command: "^#打我|石头|剪刀|布$|(.*)#打他(.*)$", description: "打我" },
      { name: "#土块画图帮助", command: "#画图帮助", description: "#土块画图帮助" },
      { name: "[土块插件]了解人物-本地图片", command: "^#了解(.*)$", description: "了解人物" },
      { name: "小功能", command: "#今日运势", description: "小功能" },
      { name: "openai", command: "#结束对话", description: "chatgpt from openai" },
      { name: "[土块插件]练习记忆力", command: "^#练习记忆力", description: "练习记忆力" },
      { name: "[土块插件]点小说", command: "^#点小说(.*)$|#看小说(.*)|#选小说(.*)|#取消小说搜索$", description: "土块点小说" },
      { name: "[土块插件]点歌", command: "^#点歌|#听[1-9][0-9]|#听[0-9]*$", description: "土块点歌" },
      { name: "土块状态", command: "^#?土块状态(pro)?$", description: "无功能说明" },
      { name: "[土块插件]一站到底", command: "^#加入一站到底$", description: "简单开发示例" },
      { name: "土块tags", command: "^#目录(.*)", description: "土块tags" },
      { name: "[土块插件]更新", command: "^#*土块(插件)?(强制)?更新$", description: "无功能说明" },
    ],
  },
  {
    name: "example",
    functions: [
      { name: "PxxnHub", command: "#ph", description: "PxxnHub文本生成" },
      { name: "[Jiaozi]网页截图预览", command: "https?://\\S+|[\\w-]+(\\.\\w+)+", description: "无功能说明" },
      { name: "ys-米游社cos", command: "^#?cos", description: "ys-米游社cos" },
      { name: "卸载枫叶", command: "^#卸载枫叶$", description: "一键删除枫叶插件" },
      { name: "复读", command: "^#复读$", description: "复读用户发送的内容，然后撤回" },
      { name: "喜报", command: "^#?(喜报|xb|悲报|bb)", description: "简单开发示例" },
      { name: "[备份|还原]", command: "^#?(配置文件)?备份$", description: "备份" },
      { name: "星铁角色素材", command: "^#星铁(.*)(突破|材料|素材)$", description: "星铁角色养成突破素材，来自紫喵,小橙子啊" },
      { name: "查询委托成就", command: "^#*(设置|配置)?(.+)(别称|别名)$", description: "查询每日委托任务有没有成就" },
      { name: "精致睡眠", command: "^#?(精致睡眠|jjsm)", description: "简单开发示例" },
    ],
  },
  {
    name: "FanSky_Qs",
    functions: [
      { name: "OpenAI功能Index", command: "^早$", description: "OpenAI功能Index" },
      { name: "FanSky小功能Index", command: "^#?(抽象帮助|cxbz)", description: "FanSky小功能" },
      { name: "提瓦特小助手", command: "^#成就(排行|排名|查询|统计)(.*)$", description: "提瓦特小助手" },
      { name: "未知功能", command: "®", description: "无功能说明" },
    ],
  },
  {
    name: "genshin",
    functions: [
      { name: "别名设置", command: "^#(星铁)?(设置|配置)(.*)(别名|昵称)$", description: "角色别名设置" },
      { name: "邦布查询", command: "^#*绝区零?(邦布|人偶)$", description: "邦布查询" },
      { name: "养成计算", command: "^#*(星铁)?(.*)(养成|计算)([0-9]|,|，| )*$", description: "角色养成材料计算器" },
      { name: "体力查询", command: "^#*(原神|星铁)?(体力|树脂|查询体力)$", description: "体力查询" },
      { name: "兑换码", command: "^#(原神|星铁|绝区零)?(兑换码使用|cdk-u).+", description: "前瞻直播兑换码" },
      { name: "十连", command: "^#*(10|[武器池常驻]*[十]+|抽|单)[连抽卡奖][123武器池常驻]*$", description: "模拟抽卡，每天十连一次，四点更新" },
      { name: "抽卡记录", command: "(.*)authkey=(.*)", description: "抽卡记录数据统计" },
      { name: "札记查询", command: "^(#原石|#*札记|#*(星铁)?星琼)([0-9]|[一二两三四五六七八九十]+)*月*$", description: "米游社札记·开拓月历查询" },
      { name: "角色素材", command: "^#?(星铁)?(.*)(突破|材料|素材|培养)$", description: "角色养成突破素材" },
      { name: "米游社公告", command: "^#*(官方|星铁|原神|崩坏三|崩三|绝区零|崩坏二|崩二|崩坏学园二|未定|未定事件簿)?(公告|资讯|活动)(列表|[0-9])*$", description: "#公告 #资讯 #活动" },
      { name: "体力查询", command: "^#*绝区零?(体力|树脂|查询体力)$", description: "体力查询" },
      { name: "充值记录", command: "^#?(充值|消费)(记录|统计)$", description: "充值记录,消费记录,充值统计,消费统计" },
      { name: "角色查询", command: "^(#*角色3|#*角色卡片|角色)$", description: "原神角色信息查询" },
      { name: "配置", command: "^#使用(全部|用户)ck$", description: "#配置ck" },
      { name: "七圣召唤卡组查询", command: "^#*七圣(召唤)?查询(牌|卡)组(列表)?[0-9]{0,2}$", description: "原神角色信息查询" },
      { name: "米游社攻略", command: "^#?(更新)?\\S+攻略([1-7])?$", description: "米游社攻略图" },
      { name: "留影叙佳期", command: "^#?(留影(叙佳期)?|((领)?((角色)?生日)(卡)?))$", description: "留影叙佳期" },
      { name: "用户绑定", command: "^#?(体力|[Cc](oo)?[Kk](ie)?)帮助", description: "米游社ck绑定，游戏uid绑定" },
      { name: "用户管理", command: "^#用户统计$", description: "CK用户管理" },
      { name: "原神", command: "绑定 Uid", description: "无功能说明" },
    ],
  },
  {
    name: "gpti-plugin",
    functions: [
      { name: "bing", command: "^#bb([\\s\\S]*)$", description: "bing" },
      { name: "gptweb", command: "^#gw([\\s\\S]*)$", description: "gptweb" },
      { name: "gpt", command: "^#gg([\\s\\S]*)$", description: "gpt" },
      { name: "dalle_mini", command: "^#dm([\\s\\S]*)$", description: "dalle_mini" },
      { name: "dalle_v1", command: "^#dd([\\s\\S]*)$", description: "dalle_v1" },
      { name: "emi", command: "^#ee([\\s\\S]*)$", description: "emi" },
      { name: "GPTI-帮助", command: "^#?gpti帮助$", description: "GPTI 帮助" },
      { name: "llama2", command: "^#ll([\\s\\S]*)$", description: "llama2" },
      { name: "prodia_stablediffusion", command: "^#ps([\\s\\S]*)$", description: "prodia_stablediffusion" },
      { name: "prodia_v1", command: "^#pp([\\s\\S]*)$", description: "prodia_v1" },
      { name: "stablediffusion_v1", command: "^#sd1([\\s\\S]*)$", description: "stablediffusion_v1" },
      { name: "stablediffusion_v1", command: "^#sd2([\\s\\S]*)$", description: "stablediffusion_v1" },
      { name: "gpti-更新插件", command: "^#gpti((插件)?(强制)?更新| update)$", description: "无功能说明" },
    ],
  },
  {
    name: "Guoba-Plugin",
    functions: [
      { name: "锅巴帮助", command: "^#?锅巴(帮助|菜单|说明|功能|指令|命令|使用说明|help)$", description: "锅巴插件帮助" },
      { name: "锅巴登录", command: "^#?锅巴(登录|登陆)$", description: "锅巴快捷登录" },
      { name: "锅巴更新", command: "^#锅巴版本$", description: "锅巴更新、升级" },
      { name: "未知功能", command: "^#?锅巴", description: "无功能说明" },
    ],
  },
  {
    name: "hs-qiqi-plugin",
    functions: [
      { name: "[枫叶插件]绑定功能", command: "^绑定$", description: "无功能说明" },
      { name: "[枫叶]今日新闻", command: "^#?(今日新闻|每日60[Ss秒])$", description: "每日60s读懂世界" },
      { name: "[枫叶]涩涩", command: "^枫叶小姐姐视频|枫叶漫剪视频$", description: "涩涩" },
      { name: "随机类游戏", command: "^开奖帮助$", description: "随机类游戏" },
      { name: "一眼丁真", command: "^#?上传坤图$", description: "每日一张丁真图片或坤坤图片" },
      { name: "[枫叶]原神角色语音", command: "^(.*)语音$", description: "无功能说明" },
      { name: "只听我的", command: "#?只听我的$", description: "枫叶_只听我的" },
      { name: "枫叶插件_帮助", command: "^#?枫叶(插件)?帮助$", description: "发送帮助提示图" },
      { name: "拉黑词", command: "^#*取消拉黑词(.)+", description: "监听拉黑词" },
      { name: "数字炸弹", command: "^#?数字炸弹$", description: "数字炸弹小游戏" },
      { name: "枫叶插件_更新", command: "^#*枫叶(插件)?(强制)?更新$", description: "调用Yunzai自带更新模块进行插件更新" },
      { name: "时间", command: "^#几点了$", description: "无功能说明" },
      { name: "枫叶睡眠时间", command: "^(早安|早上好(呀|吖)?)$", description: "睡眠" },
      { name: "闭嘴", command: "^#(闭嘴|放开)", description: "撤回不听话的群友的所有消息" },
      { name: "【枫叶插件】检测视频链接", command: "^https://m.v.qq.com/(.*)/(.*)$", description: "无功能说明" },
      { name: "枫叶插件_设置", command: "^#?枫叶(开启|关闭)全部设置$", description: "设置" },
      { name: "[枫叶]这周征讨哪三个呢", command: "^#这周讨伐谁$", description: "随机返回三个周本boss" },
      { name: "[枫叶]随机图片", command: "^(开启|关闭)本群随机图$", description: "概率发送图片" },
      { name: "青年大学习", command: "青年大学习", description: "截图" },
    ],
  },
  {
    name: "ICQQ-Plugin",
    functions: [
      { name: "匿名消息", command: "^#[Qq]+账号$", description: "ICQQ 适配器设置" },
    ],
  },
  {
    name: "liangshi-calc",
    functions: [
      { name: "测试角色极限面板", command: "^#?((极限|极限面板)?(梦见月瑞希|月瑞希)(极限面板|面板100000000))$", description: "测试角色极限面板" },
      { name: "calc", command: "^#*(强制)?更新(.*)(崩坏三|崩坏3|崩三|崩3|原神|星铁|崩坏星穹铁道|崩坏：星穹铁道|铁道|绝区零|绝|鸣潮|明朝|潮|幻塔|幻塔PSN|幻塔psn|战双|战双帕弥什|帕弥什|尘白|尘白禁区)(.*?)(计算|伤害计算)$", description: "calc拓展" },
      { name: "反馈", command: "^#*(伤害计算拓展|伤害计算|计算|梁氏|liangshi)(插件)?(反馈|错误|有问题|不对)$", description: "反馈" },
      { name: "[伤害计算拓展插件]帮助", command: "^#?(梁氏|伤害计算拓展|liangshi|面板拓展|计算拓展)(命令|帮助|菜单|help|说明|功能|指令|使用说明|预设面板)$", description: "伤害计算拓展帮助" },
      { name: "角色资源", command: "^#*(.*)(收益曲线|角色介绍|介绍|角色海报|海报|角色封面|封面|侧头像|证件照|立绘|名片|普通攻击|元素战技|元素爆发|cv)(帮助)?$", description: "角色资源" },
      { name: "梁氏预设面板", command: "^#?梁氏([，,])?启动([！!])?$", description: "梁氏预设面板初始化" },
      { name: "原神占用", command: "^#?原神占用$", description: "原神历史/预下载占用" },
      { name: "[伤害计算拓展]更新", command: "^#*梁氏(计算|插件)?(强制)?更新$", description: "无功能说明" },
      { name: "预设面板", command: "^#?预设面板(帮助|说明)?$", description: "预设面板输入替换" },
    ],
  },
  {
    name: "logier-plugin",
    functions: [
      { name: "[鸢尾花插件]今日番剧", command: "^#?(今日番剧|番剧)$", description: "今日番剧" },
      { name: "[鸢尾花插件]今日CP", command: "^#?(今日cp|今日CP|cp生成|CP生成)$", description: "CP生成" },
      { name: "[鸢尾花插件]每日问候", command: "^(早上好|晚上好|早安|晚安|早|睡觉了|中午好|午安|上午好|下午好)$", description: "无功能说明" },
      { name: "[鸢尾花插件]鸢尾花帮助", command: "^#?(logier|鸢尾花|yuanweihua|iris|鸢尾|yuanwei)(帮助|help|指令|菜单|命令)$", description: "鸢尾花帮助" },
      { name: "[鸢尾花插件]今日运势", command: "^#?(今日运势|运势)$", description: "今日运势" },
      { name: "[鸢尾花插件]今日老婆", command: "^(#|/)?(今日老婆|marry)$", description: "今日老婆" },
      { name: "[鸢尾花插件]真寻日报", command: "^#?(60s日报|真寻日报)$", description: "真寻日报" },
      { name: "[鸢尾花插件]摸鱼日历", command: "^#?(摸鱼日历|摸鱼)$", description: "获取摸鱼日历" },
      { name: "[鸢尾花插件]今日新闻", command: "^#?(60s日报|今日新闻)$", description: "获取每日60s新闻" },
      { name: "[鸢尾花插件]保存表情包", command: "^#?(保)?(存表情)(包)?$", description: "保存表情包" },
      { name: "[鸢尾花插件]定时发图", command: "^#?(定时发图|发图)$", description: "定时发图" },
      { name: "[鸢尾花]设置", command: "^#?鸢尾花(开启|关闭)(本群)?定时发图$", description: "设置" },
      { name: "[鸢尾花插件]今日签到", command: "^#?(今日)?(签到|打卡)$", description: "今日签到" },
      { name: "[鸢尾花插件]算一卦", command: "^#?(算一卦|算卦).*$", description: "算一卦" },
      { name: "[鸢尾花插件]塔罗牌", command: "^#?(塔罗牌|塔罗)(.*)$", description: "塔罗牌" },
      { name: "[鸢尾花插件]更新", command: "^#?(鸢尾花)(插件)?(强制)?更新$", description: "更新" },
      { name: "[鸢尾花插件]今日天气", command: "^#?(天气)\\s.*$", description: "今日天气" },
    ],
  },
  {
    name: "loveMys-plugin",
    functions: [
      { name: "[loveMys] 插件更新", command: "^#loveMys(插件)?(强制)?更新$", description: "[loveMys] 插件更新" },
    ],
  },
  {
    name: "miao-plugin",
    functions: [
      { name: "喵喵设置", command: "^#喵喵(强制)?(更新图像|图像更新)$", description: "【#管理】更新素材" },
      { name: "角色查询", command: "^#喵喵角色卡片$", description: "角色卡片" },
      { name: "抽卡统计", command: "^#*(星铁)?(抽卡|抽奖|角色|武器|光锥|常驻|集录|up)+池?(记录|祈愿|分析)$", description: "抽卡记录" },
      { name: "喵喵帮助", command: "^(\\/|#)?(喵喵)?(命令|帮助|菜单|help|说明|功能|指令|使用说明)$", description: "【#/帮助】 #/喵喵帮助" },
      { name: "戳一戳", command: "poke", description: "#老公 #老婆 查询" },
      { name: "角色面板", command: "^#(星铁|原神)?(面板角色|角色面板|面板)(列表)?\\s*(\\d{9,10})?$", description: "面板角色列表 查看当前已获取面板数据的角色列表" },
      { name: "深渊统计", command: "^#(喵喵)?角色(持有|持有率|命座|命之座|.命)(分布|统计|持有|持有率)?$", description: "【#统计】 #角色持有率 #角色5命统计" },
      { name: "角色资料", command: "^#喵喵WIKI$", description: "喵喵WIKI" },
    ],
  },
  {
    name: "mora-plugin",
    functions: [
      { name: "深渊版本", command: "^#?(原神|星铁)?[1-9]\\.\\d(深渊|混沌)$", description: "各版本深渊怪物" },
      { name: "复刻表", command: "^#?(原神|星铁)?(角色|武器|光锥)?复刻表$", description: "复刻时间表" },
      { name: "摩拉帮助", command: "^#?摩拉帮助$", description: "摩拉插件帮助" },
      { name: "米游社角色攻略", command: "^#?(星铁|绝区零)?(更新)?\\S+(攻略|一图流)$", description: "米游社角色攻略" },
      { name: "角色配队一图流", command: "^#\\S+配队$", description: "角色配队一图流 @茗血茶" },
    ],
  },
  {
    name: "mysMap",
    functions: [
      { name: "米游社大地图", command: "^#+((提瓦特|渊下宫|层岩巨渊|地下矿区|旧(日之)?海)?((哪有|哪里有)(.+))|((.+)(在哪|在哪里|哪有|哪里有|位置|点位))(？|\\?)?)$", description: "找资源" },
    ],
  },
  {
    name: "other",
    functions: [
      { name: "开机", command: "^#重启$", description: "#开机" },
      { name: "发送日志", command: "^#(运行|错误)*日志[0-9]*(.*)", description: "发送最近100条运行日志" },
      { name: "更新", command: "^#更新日志", description: "#更新 #强制更新" },
    ],
  },
  {
    name: "StarRail-plugin",
    functions: [
      { name: "星铁别名设置", command: "^${rulePrefix}(设置|配置|添加)(.*)(别名|昵称)$", description: "星铁角色别名设置" },
      { name: "星铁plugin-深渊", command: "^${rulePrefix}(上期|本期)?(简易)?(深渊)", description: "星穹铁道深渊信息" },
      { name: "星穹铁道", command: "^${rulePrefix}(抽卡|十连)(角色|光锥|常驻)?$", description: "星穹铁道抽卡插件" },
      { name: "星铁plugin抽卡分析", command: "^${rulePrefix}抽卡链接(绑定)?$", description: "星穹铁道抽卡分析" },
      { name: "[星铁插件]帮助", command: "^${rulePrefix}帮助$", description: "星铁帮助" },
      { name: "星铁plugin基本信息", command: "^${rulePrefix}绑定(uid|UID)?(\\s)?[1-9][0-9]{8}$", description: "星穹铁道基本信息" },
      { name: "星铁面板-兼容版", command: "^#星铁更新面板.*$", description: "可同时使用miao-plugin和StarRail-plugin" },
      { name: "星铁plugin-收入", command: "^${rulePrefix}(星琼获取|月历|月收入|收入|原石)$", description: "星穹铁道收入信息" },
      { name: "星铁plugin-体力", command: "^${rulePrefix}体力$", description: "星穹铁道体力信息" },
      { name: "星铁plugin-面板", command: "^${rulePrefix}(.+)面板(更新)?(.*)", description: "星穹铁道面板信息" },
      { name: "星铁plugin-模拟宇宙", command: "^${rulePrefix}(上期|本期)?(模拟)?宇宙", description: "星穹铁道模拟宇宙信息" },
      { name: "星铁插件-角色信息/攻略", command: "^${rulePrefix}(.*)参考面板$", description: "星穹铁道攻略信息数据来自米游社" },
      { name: "米游社星铁攻略", command: "^${rulePrefix}?(更新)?\\S+攻略(\\d+|all)?$", description: "米游社星铁攻略图" },
      { name: "星铁更新插件", command: "^${rulePrefix}(插件)?(强制)?更新$", description: "星铁插件更新" },
      { name: "StarRail-Plugin更新日志", command: "^${rulePrefix}(插件)?更新日志$", description: "StarRail-Plugin更新日志" },
    ],
  },
  {
    name: "system",
    functions: [
      { name: "添加消息", command: "^#(全局)?添加", description: "添加消息" },
      { name: "botOperate", command: "^#(Bot|机器人)验证.+:.+$", description: "Bot 操作" },
      { name: "设置主人", command: "^#设置主人验证码$", description: "设置主人" },
      { name: "状态统计", command: "^#(状态|统计)", description: "#状态" },
    ],
  },
  {
    name: "TRSS-Plugin",
    functions: [
      { name: "阿里云盘", command: "^阿里云盘上传", description: "阿里云盘" },
      { name: "百度网盘", command: "^百度网盘上传", description: "百度网盘" },
      { name: "文件操作", command: "^文件查看", description: "文件操作" },
      { name: "Markdown", command: "^md.+", description: "Markdown" },
      { name: "米哈游登录", command: "^#?(体力|(c|C)(oo)?k(ie)?|(s|S)(to)?k(en)?)(帮助|教程)$", description: "米哈游登录" },
      { name: "二维码生成", command: "^二维码.+", description: "二维码生成" },
      { name: "图片修复", command: "^#?(动漫)?图片修复$", description: "图片修复" },
      { name: "图片背景去除", command: "^#?(动漫)?(图片)?(去除?背景|背景去除?)$", description: "图片背景去除" },
      { name: "远程命令", command: "^rjp.+", description: "远程命令" },
      { name: "脚本执行", command: "^脚本执行.+", description: "脚本执行" },
      { name: "SourceCode", command: "^sc(\\d+~\\d+)?.+", description: "SourceCode" },
      { name: "系统信息", command: "^#?系统信息$", description: "系统信息" },
      { name: "语音合成", command: ".+说.+", description: "语音合成" },
    ],
  },
  {
    name: "trss-xianxin-plugin",
    functions: [
      { name: "功能相关", command: "^#*(开|开启|关|关闭)菜单联想$", description: "处理功能相关代码" },
      { name: "B站功能", command: "^#*up\\s*[0-9]*$", description: "b站相关指令" },
      { name: "21点", command: "^#*21(点)?$", description: "21点小游戏" },
      { name: "转发", command: "^#*转发$", description: "处理转发小工具" },
      { name: "群战", command: "^#*(我的|加入)?群战(信息)?$", description: "群战小游戏" },
      { name: "快捷群管", command: "^(戳|撤|禁|踢)+\\s*[0-9]*$", description: "快捷群管" },
      { name: "五子棋", command: "^#五子棋$", description: "五子棋小游戏" },
      { name: "闲心插件帮助", command: "^#*闲心(插件)?(命令|帮助|菜单|help|说明|功能|指令|使用说明)$", description: "闲心插件帮助" },
      { name: "米游社功能", command: "^#*(原神|星铁)攻略\\s*.*$", description: "处理米游社中获取wiki、攻略、cos、话题、同人等内容" },
      { name: "神秘指令", command: "^#*(woc|卧槽)\\s*[0-9]*$", description: "处理神秘指令代码" },
      { name: "给我点颜色看看", command: "^#*给我点颜色(看看)?$", description: "根据色块找不同" },
      { name: "data/", command: "^#*赞我$", description: "处理一些杂项小工具" },
      { name: "更新插件", command: "^#*闲心(插件)?(强制)?更新", description: "更新插件代码" },
      { name: "微博功能", command: "^#*博主\\s*[0-9]*$", description: "微博相关指令" },
    ],
  },
  {
    name: "windoge-plugin",
    functions: [
      { name: "windoge-plugin", command: ".+", description: "无功能说明" },
      { name: "未知功能", command: "^#windoge(强制)?更新$", description: "无功能说明" },
      { name: "未知功能", command: "^#群通知帮助$", description: "无功能说明" },
      { name: "未知功能", command: "^#(抽卡|[0-6]命|精[(0|1|5)])+期望+$", description: "无功能说明" },
      { name: "未知功能", command: "^#*(多|全|全部)*(便笺|便签|派遣)$", description: "无功能说明" },
      { name: "未知功能", command: "^#*(天赋|武器|周本)+素材+$", description: "无功能说明" },
      { name: "未知功能", command: "^#*[^-~]+参考面板+$", description: "无功能说明" },
    ],
  },
  {
    name: "ws-plugin",
    functions: [
      { name: "[ws-plugin] 设置", command: "^#ws状态$", description: "[ws-plugin] 设置" },
      { name: "[ws-plugin] 获取群成员列表", command: "^#ws获取群成员列表", description: "[ws-plugin] 获取群成员列表" },
      { name: "[ws-plugin] tool", command: "#ws转图片.*", description: "[ws-plugin] tool" },
      { name: "[ws-plugin] 帮助", command: "^#ws版本$", description: "[ws-plugin] 帮助" },
      { name: "[ws-plugin] 用户信息", command: "^#ws[_-]?(me|id|ID)$", description: "[ws-plugin] 用户信息" },
      { name: "[ws-plugin] 插件更新", command: "^#ws(插件)?(强制)?更新$", description: "[ws-plugin] 插件更新" },
    ],
  },
  {
    name: "xiaofei-plugin",
    functions: [
      { name: "小飞插件_代发言", command: "^#?代(.*)", description: "代替指定QQ发言。" },
      { name: "小飞插件_原神星铁注册时间查询", command: "^(#|\\*)?(星铁)?(刷新)?(我的)?(原神|星铁)?注册时间$", description: "通过官方活动接口获取游戏注册时间。" },
      { name: "小飞插件_天气", command: "^#?(小飞)?(.*)天气$", description: "请求腾讯天气网站进行页面截图，目前支持以下命令：【#天气】" },
      { name: "小飞插件_帮助", command: "^#?小飞(插件)?帮助$", description: "无功能说明" },
      { name: "小飞插件_更新", command: "^#?小飞(插件)?(强制)?更新$", description: "调用Yunzai自带更新模块进行插件更新" },
      { name: "机器人违规查询", command: "^#(机器人|bot|Bot|BOT)违规记录(查询)?(.*)?$", description: "无功能说明" },
      { name: "小飞插件_点歌", command: "^#?(点歌|音乐)(ck|cookie)(检查|状态)$", description: "无功能说明" },
      { name: "小飞插件_通行证ck转米游社ck", command: "^#?获取stoken$", description: "使用米哈游通行证ck登录米游社并自动绑定。" },
    ],
  },
  {
    name: "xiaoyao-cvs-plugin",
    functions: [
      { name: "图鉴更新", command: "^#图鉴(强制)?更新$", description: "图鉴更新" },
      { name: "图鉴版本介绍", command: "^#图鉴版本$", description: "图鉴版本介绍" },
      { name: "查看插件的功能", command: "^#?(图鉴)?(命令|帮助|菜单|help|说明|功能|指令|使用说明)$", description: "查看插件的功能" },
      { name: "角色、食物、怪物、武器信息图鉴", command: "^(#(.*)|.*图鉴)$", description: "角色、食物、怪物、武器信息图鉴" },
      { name: "sr 星穹铁道武器信息图鉴", command: "^((#|\\*)(.*)|.*图鉴)$", description: "sr 星穹铁道武器信息图鉴" },
      { name: "体力", command: "^#*(多|全|全部)*(体力|树脂|查询体力|便笺|便签)$", description: "体力" },
      { name: "体力推送", command: "^#*((开启|关闭)体力推送|体力设置群(推送(开启|关闭)|(阈值|上限)(\\d*)))$", description: "体力推送" },
      { name: "体力模板设置", command: "^#(体力模板(设置(.*)|列表(.*))|(我的体力模板列表|体力模板移除(.*)))$", description: "体力模板设置" },
      { name: "体力", command: "#poke#", description: "体力" },
      { name: "动态", command: "#?(动态|幻影)", description: "动态" },
      { name: "地图资源查询", command: "^#(刷新|更新)?(.*)(在(哪|那)里*)$", description: "地图资源查询" },
      { name: "清空地图下载数据", command: "^#(清空|清除)地图(缓存)?数据$", description: "清空地图下载数据" },
      { name: "扫码登录", command: "^#(扫码|二维码|辅助)(登录|绑定|登陆)$", description: "扫码登录" },
      { name: "账号密码登录", command: "^#(账号|密码)(密码)?(登录|绑定|登陆)$", description: "账号密码登录" },
      { name: "原神充值（离线）", command: "^#?((原神(微信)?充值(微信)?(.*))|((商品|充值)列表)|((订单|查询)(订单|查询)(.*)))$", description: "原神充值（离线）" },
      { name: "米社规则签到", command: "^#*(${lodash.map(ForumData,v=> v.otherName.join('|')).join('|')}|游戏)签到$", description: "米社规则签到" },
      { name: "米游社米游币签到", command: "^#*(米游社|mys|社区)(原神|崩坏3|崩坏2|未定事件簿|大别野|崩坏星穹铁道|绝区零|全部)签到$", description: "米游社米游币签到" },
      { name: "云原神签到", command: "^#*云原神签到$", description: "云原神签到" },
      { name: "米游币、云原神查询", command: "^#*(米游币|米币|云原神)查询$", description: "米游币、云原神查询" },
      { name: "cookies获取帮助", command: "^#*(米游社|cookies|米游币|stoken|Stoken|云原神|云)(帮助|教程|绑定)$", description: "cookies获取帮助" },
      { name: "米游币、云原神查询", command: "^#((米游币|云原神|米社(原神|崩坏3|崩坏2|未定事件簿)*))全部签到$", description: "米游币、云原神查询" },
      { name: "用户个人信息查询", command: "^#*(ck|stoken|cookie|cookies|签到)查询$", description: "用户个人信息查询" },
      { name: "更新抽卡记录", command: "^#*(更新|获取|导出)抽卡记录$", description: "更新抽卡记录" },
      { name: "刷新充值记录", command: "^#*(刷新|获取|导出)(充值|氪金)记录$", description: "刷新充值记录" },
      { name: "查询绑定数据", command: "^#*我的(stoken|云ck)$", description: "查询绑定数据" },
      { name: "绑定stoken", command: "^(.*)stoken=(.*)$", description: "绑定stoken" },
      { name: "绑定ck自动获取sk", command: "^(.*)login_ticket=(.*)$", description: "绑定ck自动获取sk" },
      { name: "云原神签到token获取", command: "^(.*)ct(.*)$", description: "云原神签到token获取" },
      { name: "删除云原神、stoken数据", command: "^#*删除(我的)*((stoken|sk)|(云原神|云ck))$", description: "删除云原神、stoken数据" },
      { name: "刷新cookie", command: "^#*(刷新|更新|获取)(ck|cookie)$", description: "刷新cookie" },
    ],
  },
  {
    name: "xiaoye-plugin",
    functions: [
      { name: "小叶插件帮助", command: "^#?小叶(插件)?帮助$", description: "小叶插件帮助" },
      { name: "保存圣遗物", command: "^#*保存圣遗物([一二三四五六七八九十]|[0-9])*$", description: "保存圣遗物" },
      { name: "小叶插件设置", command: "^#*小叶(插件)?设置(三词条|四词条)(概率)?[0-9]+$", description: "小叶插件设置" },
      { name: "刷圣遗物", command: "^#*刷圣遗物.*$", description: "刷指定副本的圣遗物和强化" },
      { name: "小叶插件更新", command: "^#小叶(插件)?(强制)?更新$", description: "小叶插件更新" },
    ],
  },
  {
    name: "yenai-plugin",
    functions: [
      { name: "proxy", command: "^#椰奶(sese|涩涩)?设置$", description: "proxy" },
      { name: "椰奶小助手", command: "^#(改|换)头像", description: "椰奶小助手" },
      { name: "椰奶娱乐", command: "^#唱歌$", description: "椰奶娱乐" },
      { name: "椰奶申请处理", command: "^#?(同意|拒绝)$", description: "椰奶申请处理" },
      { name: "椰奶图片搜索", command: "^#?(椰奶)?(以图)?搜图$", description: "椰奶图片搜索" },
      { name: "椰奶pixiv", command: "^#?(查看|获取)?热门(t|T)(a|A)(g|G)$", description: "椰奶pixiv" },
      { name: "椰奶搜索", command: "^#?搜索菜单$", description: "椰奶搜索" },
      { name: "椰奶setu", command: "^#椰奶tag(.*)$", description: "椰奶setu" },
      { name: "椰奶状态", command: "^#?(椰奶)?状态(pro)?(debug)?$", description: "椰奶状态" },
      { name: "椰奶点赞", command: "^#?((我要|给我)?(资料卡)?(点赞)|(赞|超|操|草|抄|吵|炒)(我|他|她|它|TA|ta|Ta))$", description: "椰奶点赞" },
      { name: "椰奶更新插件", command: "^#*椰奶(插件)?(强制)?更新$", description: "椰奶更新插件" },
      { name: "椰奶版本信息", command: "^#?椰奶(插件)?版本$", description: "椰奶版本信息" },
      { name: "椰奶助手-拉黑白名单", command: "^#拉[黑白](群聊?)?", description: "椰奶助手-拉黑白名单" },
      { name: "椰奶助手-其他", command: "^#取直链", description: "椰奶助手-其他" },
      { name: "椰奶助手-空间", command: "^#获?取说说列表(\\d+)?$", description: "椰奶助手-空间" },
      { name: "椰奶群管-基础", command: "^#解禁(\\d+)?$", description: "椰奶群管-基础" },
      { name: "椰奶群管-其他", command: "^#?(谁|哪个吊毛|哪个屌毛|哪个叼毛)是龙王$", description: "椰奶群管-其他" },
      { name: "椰奶群管-群公告", command: "^#发群?公告", description: "椰奶群管-群公告" },
      { name: "椰奶群管-违禁词", command: "^#?新增(模糊|精确|正则)?(踢|禁|撤|踢撤|禁撤)?违禁词", description: "椰奶群管-违禁词" },
      { name: "椰奶群管-幸运字符", command: "^#(查)?(幸运)?字符(列表)?$", description: "椰奶群管-幸运字符" },
      { name: "椰奶群管-入群验证", command: "^#重新验证(\\d+|从未发言的人)?$", description: "椰奶群管-入群验证" },
      { name: "椰奶群管-投票", command: "^#(发起)?投票(禁言|踢人)", description: "群员投票处决某人" },
      { name: "椰奶群管-白名单", command: "^#?群管(加|删)白(名单)?", description: "椰奶群管-白名单" },
      { name: "椰奶私聊群管", command: "^#解禁\\s?(\\d+)\\s(\\d+)$", description: "椰奶私聊群管" },
    ],
  },
  {
    name: "yunzai-plugin-deer-pipe",
    functions: [
      { name: "🦌管", command: "^(🦌|鹿)$", description: "一个🦌管签到插件，发送🦌以进行签到" },
      { name: "帮🦌", command: "^添加(🦌|鹿)友(.*)", description: "添加信任🦌友友，可以帮你🦌🦌" },
      { name: "🦌管排行榜", command: "^(🦌|鹿|戒🦌|戒鹿)榜$", description: "一个🦌管排行榜" },
    ],
  },
  {
    name: "ZZZ-Plugin",
    functions: [
      { name: "信息查询 基本信息", command: "card", description: "查看玩家的角色和邦布列表" },
      { name: "便签", command: "note", description: "查看体力、刮刮卡、营业、每日任务完成情况等信息" },
      { name: "单月月报/菲林/邦布券/母带统计", command: "monthly+[参数]", description: "查看单月菲林、邦布券、加密/原装母带的收入情况（查询结果也会写入数据库）。其中，参数可以为空（默认为本月），也可以为年份月份或者月份，例如：2024年9月、9月、上月" },
      { name: "查看全部月报/菲林/邦布券/母带统计", command: "monthly统计", description: "查看菲林、邦布券、加密/原装母带的收入总情况（会查询全部可查询月份+已保存数据，新旧数据会进行合并）。" },
      { name: "抽卡记录 刷新抽卡记录", command: "刷新/更新抽卡链接", description: "刷新抽卡记录，如果数据过多，可能需要等待很长一段时间，请等待回复后再%查看抽卡记录" },
      { name: "获取抽卡记录链接", command: "获取抽卡链接", description: "获取抽卡记录链接，获取链接后可以用于小程序等第三方工具查看抽卡记录" },
      { name: "查看抽卡记录", command: "抽卡分析", description: "查看抽卡记录，需要手动%刷新抽卡记录，否则读取的是缓存数据" },
      { name: "角色面板 刷新角色面板", command: "刷新面板", description: "刷新角色面板" },
      { name: "查看角色面板列表", command: "面板", description: "查看已保存的角色面板列表" },
      { name: "查看角色面板", command: "角色名+面板", description: "查看角色详细面板信息" },
      { name: "查看角色面板图", command: "查看+角色名+面板图[+页码]", description: "查看自定义角色面板图，在添加或者删除角色图后，会导致角色图的ID发生变化，此时需要重新获取图片列表来查看ID，否则可能会删除错误的图片" },
      { name: "获取角色面板图", command: "原图", description: "获取自定义角色面板图原图片，可以用于下载图片，直接回复面板图片的消息并携带指令即可" },
      { name: "练度统计", command: "练度", description: "查看角色练度统计（如果更新需要先%刷新面板）" },
      { name: "战绩查询 查看式舆防卫战", command: "式舆防卫战", description: "查看式舆防卫战(深渊)信息" },
      { name: "查看上期式舆防卫战", command: "上期式舆防卫战", description: "查看上期式舆防卫战(深渊)信息" },
      { name: "查看危局强袭战", command: "危局强袭战", description: "查看式危局强袭战信息" },
      { name: "查看上期危局强袭战", command: "上期式舆防卫战", description: "查看上期危局强袭战信息" },
      { name: "角色攻略查看角色攻略", command: "角色名+攻略[+0~7]", description: "查看角色攻略，后面可以加0~7查看不同来源的攻略，其中0或者all为攻略合集" },
      { name: "更新角色攻略", command: "更新+角色名+攻略[+0~7]", description: "当需要更新某个角色的攻略，或者某个角色攻略出现错误对不上时，可以使用此命令更新攻略" },
      { name: "角色天赋图鉴", command: "角色名+天赋[+等级]", description: "查看角色天赋，默认等级为12级，核心技等级为F，你可以在指令后面加上自定义等级，以英文句号点分隔，顺序依次为：普通攻击、闪避、支援技、特殊技、连携技、核心技，其中除核心技等级为0和A～F表示外，其他等级为1～16的数字。例如：%猫又天赋6.12.11.10.9.F" },
      { name: "兑换码", command: "code", description: "获取前瞻兑换码" },
      { name: "绑定设备", command: "绑定设备", description: "用于尝试解决10041报错等问题（无法100%解决），需要发送设备信息，具体方法请发送%绑定设备帮助查看" },
      { name: "绑定设备帮助", command: "绑定设备帮助", description: "查看如何绑定设备" },
      { name: "解绑设备", command: "解绑设备", description: "解除绑定设备" },
      { name: "更新日志", command: "[插件]更新日志", description: "查看插件的Commit日志" },
      { name: "版本", command: "[插件]版本", description: "查看插件版本日志" },
      { name: "检查更新", command: "[插件]检查更新", description: "检查插件是否更新" },
    ],
  },
];

// 动态生成插件功能列表
function renderPlugins() {
  const pluginList = document.getElementById("plugin-list");
  pluginList.innerHTML = "";

  // 按功能数量排序
  const sortedPlugins = plugins.sort((a, b) => b.functions.length - a.functions.length);

  sortedPlugins.forEach((plugin) => {
    const pluginCard = document.createElement("div");
    pluginCard.className = "plugin-card";

    const pluginTitle = document.createElement("h2");
    pluginTitle.textContent = plugin.name; // 不显示功能数量
    pluginCard.appendChild(pluginTitle);

    const functionList = document.createElement("ul");
    plugin.functions.forEach((func) => {
      const funcItem = document.createElement("li");
      funcItem.className = "function-item";

      // 功能名称
      const funcName = document.createElement("div");
      funcName.className = "function-name";
      funcName.textContent = func.name;
      funcItem.appendChild(funcName);

      // 指令（以代码块形式显示）
      const funcCommand = document.createElement("code"); // 使用 <code> 标签
      funcCommand.className = "function-command";
      funcCommand.textContent = `指令: ${func.command}`;
      funcItem.appendChild(funcCommand);

      // 描述（如果 description 和 name 不同）
      if (func.description && func.description !== func.name) {
        const funcDescription = document.createElement("div");
        funcDescription.className = "function-description";
        funcDescription.textContent = `描述: ${func.description}`;
        funcItem.appendChild(funcDescription);
      }

      functionList.appendChild(funcItem);
    });

    pluginCard.appendChild(functionList);
    pluginList.appendChild(pluginCard);
  });
}

// 搜索功能
document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const pluginCards = document.querySelectorAll(".plugin-card");

  pluginCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// 初始化页面
document.addEventListener("DOMContentLoaded", renderPlugins);