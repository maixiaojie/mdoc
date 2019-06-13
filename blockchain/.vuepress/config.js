module.exports = {
    base: '/blockchain/',
    dest: './dist/blockchain',
    title: '深入浅出区块链',
    description: "Deep and shallow block chain",
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
    ],
    themeConfig: {
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: '其他专栏',
            items: [{
                text: '重学前端',
                link: 'http://doc.mcust.cn/frontend/'
            }, {
                text: '数据结构与算法之美',
                link: 'http://doc.mcust.cn/ds/'
            }, {
                text: '深入拆解 Java 虚拟机',
                link: 'http://doc.mcust.cn/jvm/'
            }, {
                text: '趣谈网络协议',
                link: 'http://doc.mcust.cn/netprotocol/'
            }, {
                text: '左耳听风',
                link: 'http://doc.mcust.cn/air/'
            }, {
                text: '前端面试之道',
                link: 'http://doc.mcust.cn/webyck/'
            }, {
                text: 'Web 前端面试指南与高频考题解析',
                link: 'http://doc.mcust.cn/webinter/'
            }, {
                text: '你不知道的 Chrome 调试技巧',
                link: 'http://doc.mcust.cn/chrome/'
            }, {
                text: '如何使用 Canvas 制作出炫酷的网页背景特效',
                link: 'http://doc.mcust.cn/canvas/'
            }, {
                text: 'MySQL实战45讲',
                link: 'http://doc.mcust.cn/mysql/'
            }]
        }],
        sidebar: [
            ['./article/4906', '开篇词 | 帮你从0到1深入学习区块链技术'],
            ['./article/4969', '第1讲 | 到底什么才是区块链？'],
            ['./article/4978', '第2讲 | 区块链到底是怎么运行的？'],
            ['./article/5025', '第3讲 | 浅说区块链共识机制'],
            ['./article/5220', '第4讲 | 区块链的应用类型'],
            ['./article/5225', '第5讲 | 如何理解数字货币？它与区块链又是什么样的关系？'],
            ['./article/5353', '第6讲 | 理解区块链之前，先上手体验一把数字货币'],
            ['./article/5550', '第7讲 | 区块链的常见误区'],
            ['./article/5601', '第9讲 | 深入区块链技术（一）：技术基础'],
            ['./article/5642', '第8讲 | 最主流区块链项目有哪些？'],
            ['./article/5954', '第10讲 | 深入区块链技术（二）：P2P网络'],
            ['./article/5956', '第11讲 | 深入区块链技术（三）：共识算法与分布式一致性算法'],
            ['./article/5963', '第12讲 | 深入区块链技术（四）：PoW共识'],
            ['./article/6207', '第13讲 | 深入区块链技术（五）：PoS共识机制'],
            ['./article/6224', '第15讲 | 深入区块链技术（七）：哈希与加密算法'],
            ['./article/6273', '第14讲 | 深入区块链技术（六）：DPoS共识机制'],
            ['./article/6511', '第16讲 | 深入区块链技术（八）： UTXO与普通账户模型'],
            ['./article/6515', '第17讲 |  去中心化与区块链交易性能'],
            ['./article/6519', '第18讲 | 智能合约与以太坊'],
            ['./article/6831', '第19讲 | 上手搭建一条自己的智能合约'],
            ['./article/6834', '第20讲 | 区块链项目详解：比特股BTS'],
            ['./article/6838', '第21讲 | 引人瞩目的区块链项目：EOS、IOTA、Cardano'],
            ['./article/7265', '第22讲 | 国内区块链项目技术一览'],
            ['./article/7270', '第23讲 | 联盟链和它的困境'],
            ['./article/7276', '第24讲 | 比特币专题（一）历史与货币'],
            ['./article/7690', '第25讲 | 比特币专题（二）：扩容之争、IFO与链上治理'],
            ['./article/7694', '第26讲 | 数字货币和数字资产'],
            ['./article/7699', '第27讲 | 弄懂数字货币交易平台（一）'],
            ['./article/8156', '第28讲 | 弄懂数字货币交易平台（二）'],
            ['./article/8158', '第29讲 | 互联网身份与区块链数字身份'],
            ['./article/8173', '第30讲 | 区块链即服务BaaS'],
            ['./article/8502', '第31讲 | 数字货币钱包服务'],
            ['./article/8515', '第32讲 | 区块链与供应链（一）'],
            ['./article/8519', '第33讲 | 区块链与供应链（二）'],
            ['./article/8968', '第34讲 | 从业区块链需要了解什么？'],
            ['./article/8988', '第35讲 | 搭建你的迷你区块链（设计篇 ）'],
            ['./article/9273', '第36讲 | 搭建你的迷你区块链（实践篇）'],
            ['./article/9344', '尾声篇 | 授人以鱼，不如授人以渔'],
            ['./article/42528', '新书首发 |《区块链第一课：深入浅出技术与应用》']
        ]
    }
}