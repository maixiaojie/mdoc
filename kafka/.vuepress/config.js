module.exports = {
    base: '/kafka/',
    dest: './dist/kafka',
    title: 'Kafka核心技术与实战',
    description: "全面提升你的Kafka实战能力",
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
                text: '左耳听风',
                link: 'http://doc.mcust.cn/air/'
            }, {
                text: '深入浅出区块链',
                link: 'http://doc.mcust.cn/blockchain/'
            }, {
                text: '趣谈网络协议',
                link: 'http://doc.mcust.cn/netprotocol/'
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
        sidebar: [ [ './article/98683', '开篇词 | 为什么要学习Kafka？' ],
          [ './article/98948', '01 |  消息引擎系统ABC' ],
          [ './article/99318', '02 | 一篇文章带你快速搞定Kafka术语' ],
          [ './article/99797', '03 | Kafka只是消息引擎系统吗？' ],
          [ './article/100285', '04 | 我应该选择哪种Kafka？' ],
          [ './article/100726', '05 | 聊聊Kafka的版本号' ],
          [ './article/101107', '06 | Kafka线上集群部署方案怎么做？' ],
          [ './article/101171', '07 | 最最最重要的集群参数配置（上）' ],
          [ './article/101763', '08 | 最最最重要的集群参数配置（下）' ],
          [ './article/102067', '09 |  生产者消息分区机制原理剖析' ],
          [ './article/102132', '10 | 生产者压缩算法面面观' ] 
        ]
    }
}