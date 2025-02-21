module.exports = {
    base: '/netprotocol/',
    dest: './dist/netprotocol',
    title: '趣谈网络协议',
    description: "Talking about Network Protocol",
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
                link: 'https://doc.now.sh/frontend/'
            },{
                text: '数据结构与算法之美',
                link: 'https://doc.now.sh/ds/'
            },{
                text: '深入拆解 Java 虚拟机',
                link: 'https://doc.now.sh/jvm/'
            },{
                text: '左耳听风',
                link: 'https://doc.now.sh/air/'
            },{
                text: '深入浅出区块链',
                link: 'https://doc.now.sh/blockchain/'
            }, {
                text: '前端面试之道',
                link: 'https://doc.now.sh/webyck/'
            }, {
                text: 'Web 前端面试指南与高频考题解析',
                link: 'https://doc.now.sh/webinter/'
            }, {
                text: '你不知道的 Chrome 调试技巧',
                link: 'https://doc.now.sh/chrome/'
            }, {
                text: '如何使用 Canvas 制作出炫酷的网页背景特效',
                link: 'https://doc.now.sh/canvas/'
            }, {
                text: 'MySQL实战45讲',
                link: 'https://doc.now.sh/mysql/'
            }]
        }],
        sidebar: [
            ['./article/7398', '开篇词 | 想成为技术牛人？先搞定网络协议！'],
            ['./article/7581', '第1讲 | 为什么要学习网络协议？'],
            ['./article/7724', '第2讲 | 网络分层的真实含义是什么？'],
            ['./article/7772', '第3讲 | ifconfig：最熟悉又陌生的命令行'],
            ['./article/8015', '第4讲 | DHCP与PXE：IP是怎么来的，又是怎么没的？'],
            ['./article/8094', '第5讲 | 从物理层到MAC层：如何在宿舍里自己组网玩联机游戏？'],
            ['./article/8386', '第6讲 | 交换机与VLAN：办公室太复杂，我要回学校'],
            ['./article/8445', '第7讲 | ICMP与ping：投石问路的侦察兵'],
            ['./article/8590', '第8讲 | 世界这么大，我想出网关：欧洲十国游与玄奘西行'],
            ['./article/8729', '第9讲 | 路由协议：西出网关无故人，敢问路在何方'],
            ['./article/8924', '第10讲 | UDP协议：因性善而简单，难免碰到“城会玩”'],
            ['./article/8975', '第11讲 | TCP协议（上）：因性恶而复杂，先恶后善反轻松'],
            ['./article/9141', '第12讲 | TCP协议（下）：西行必定多妖孽，恒心智慧消磨难'],
            ['./article/9293',
                '第13讲 | 套接字Socket：Talk is cheap, show me the code'
            ],
            ['./article/9410', '第14讲 | HTTP协议：看个新闻原来这么麻烦'],
            ['./article/9492', '第15讲 | HTTPS协议：点外卖的过程原来这么复杂'],
            ['./article/9688', '第16讲 | 流媒体协议：如何在直播里看到美女帅哥？'],
            ['./article/9707', '第17讲 | P2P协议：我下小电影，99%急死你'],
            ['./article/9895', '第18讲 | DNS协议：网络世界的地址簿'],
            ['./article/9938', '第19讲 | HTTPDNS：网络世界的地址簿也会指错路'],
            ['./article/10085', '第20讲 | CDN：你去小卖部取过快递么？'],
            ['./article/10098', '第21讲 | 数据中心：我是开发商，自己拿地盖别墅'],
            ['./article/10386', '第22讲 | VPN：朝中有人好做官'],
            ['./article/10534', '第23讲 | 移动网络：去巴塞罗那，手机也上不了脸书'],
            ['./article/10742', '第24讲 | 云中网络：自己拿地成本高，购买公寓更灵活'],
            ['./article/10755', '第25讲 | 软件定义网络：共享基础设施的小区物业管理办法'],
            ['./article/10978', '第26讲 | 云中的网络安全：虽然不是土豪，也需要基本安全和保障'],
            ['./article/10994', '第27讲 | 云中的网络QoS：邻居疯狂下电影，我该怎么办？'],
            ['./article/11324', '第28讲 | 云中网络的隔离GRE、VXLAN：虽然住一个小区，也要保护隐私'],
            ['./article/11465', '第29讲 | 容器网络：来去自由的日子，不买公寓去合租'],
            ['./article/11643', '第30讲 | 容器网络之Flannel：每人一亩三分地'],
            ['./article/11940', '第31讲 | 容器网络之Calico：为高效说出善意的谎言'],
            ['./article/12230', '第32讲 | RPC协议综述：远在天边，近在眼前'],
            ['./article/12388', '第33讲 | 基于XML的SOAP协议：不要说NBA，请说美国职业篮球联赛'],
            ['./article/12512', '第34讲 | 基于JSON的RESTful接口协议：我不关心过程，请给我结果'],
            ['./article/12521', '第35讲 | 二进制类RPC协议：还是叫NBA吧，总说全称多费劲'],
            ['./article/12819', '第36讲 | 跨语言类RPC协议：交流之前，双方先来个专业术语表'],
            ['./article/12991', '第37讲 | 知识串讲：用双十一的故事串起碎片的网络协议（上）'],
            ['./article/12996', '第38讲 | 知识串讲：用双十一的故事串起碎片的网络协议（中）'],
            ['./article/13099', '第39讲 | 知识串讲：用双十一的故事串起碎片的网络协议（下）'],
            ['./article/13124', '第40讲 | 搭建一个网络实验环境：授人以鱼不如授人以渔'],
            ['./article/13520', '协议专栏特别福利 | 答疑解惑第一期'],
            ['./article/13847', '协议专栏特别福利 | 答疑解惑第二期'],
            ['./article/14028', '协议专栏特别福利 | 答疑解惑第三期'],
            ['./article/14194', '协议专栏特别福利 | 答疑解惑第四期'],
            ['./article/14381', '协议专栏特别福利 | 答疑解惑第五期'],
            ['./article/14384', '测一测 | 这些网络协议你都掌握了吗？'],
            ['./article/14553', '结束语 | 放弃完美主义，执行力就是限时限量认真完成'],
            ['./article/17846', '我是如何创作“趣谈网络协议”专栏的？'],
            ['./article/17862', '“趣谈网络协议”专栏「食用指南」']
        ]
    }
}