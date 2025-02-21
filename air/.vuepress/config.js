module.exports = {
    base: '/air/',
    dest: './dist/air',
    title: '左耳听风',
    description: "Left ear hearing wind",
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
            }, {
                text: '数据结构与算法之美',
                link: 'https://doc.now.sh/ds/'
            }, {
                text: '深入拆解 Java 虚拟机',
                link: 'https://doc.now.sh/jvm/'
            }, {
                text: '趣谈网络协议',
                link: 'https://doc.now.sh/netprotocol/'
            }, {
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
            ['./article/181', '开篇词  |  洞悉技术的本质，享受科技的乐趣'],
            ['./article/183', '01 | 程序员如何用技术变现（上）'],
            ['./article/185', '02 | 程序员如何用技术变现（下）'],
            ['./article/281', '03 | Equifax信息泄露始末'],
            ['./article/285', '04 | 从Equifax信息泄露看数据安全'],
            ['./article/288', '05 | 何为技术领导力？'],
            ['./article/291', '06 | 如何才能拥有技术领导力？'],
            ['./article/294', '08 | Go语言，Docker和新技术'],
            ['./article/297', '10 | 如何成为一个大家愿意追随的Leader？'],
            ['./article/301', '30 | 编程范式游记（1）- 起源'],
            ['./article/303', '31 | 编程范式游记（2）- 泛型编程'],
            ['./article/471', '07 | 推荐阅读：每个程序员都该知道的知识'],
            ['./article/540', '09 | 答疑解惑：渴望、热情和选择'],
            ['./article/675', '11 | 程序中的错误处理：错误返回码和异常捕捉'],
            ['./article/693', '12 | 程序中的错误处理：异步编程以及我的最佳实践'],
            ['./article/730', '13 | 魔数 0x5f3759df'],
            ['./article/862', '14 | 推荐阅读：机器学习101'],
            ['./article/865', '19 | 答疑解惑：我们应该能够识别的表象和本质'],
            ['./article/995', '15 | 时间管理：同扭曲时间的事儿抗争'],
            ['./article/997', '16 | 时间管理：如何利用好自己的时间？'],
            ['./article/1059', '17 | 故障处理最佳实践：应对故障'],
            ['./article/1064', '18 | 故障处理最佳实践：故障改进'],
            ['./article/1411', '21 | 分布式系统架构的冰与火'],
            ['./article/1505', '22 | 从亚马逊的实践，谈分布式系统的难点'],
            ['./article/1512', '23 | 分布式系统的技术栈'],
            ['./article/1513', '24 | 分布式系统关键技术：全栈监控'],
            ['./article/1604', '25 | 分布式系统关键技术：服务调度'],
            ['./article/1609', '26 | 分布式系统关键技术：流量与数据调度'],
            ['./article/1610', '27 | 洞悉PaaS平台的本质'],
            ['./article/2017', '32 | 编程范式游记（3） - 类型系统和泛型的本质'],
            ['./article/2080', '28 | 推荐阅读：分布式系统架构经典资料'],
            ['./article/2421', '29 | 推荐阅读：分布式数据调度相关论文'],
            ['./article/2440', '20 | Git协同工作流，你该怎么选？'],
            ['./article/2711', '33 | 编程范式游记（4）- 函数式编程'],
            ['./article/2723', '34 | 编程范式游记（5）- 修饰器模式'],
            ['./article/2729', '35 | 编程范式游记（6）- 面向对象编程'],
            ['./article/2741', '36 | 编程范式游记（7）- 基于原型的编程范式'],
            ['./article/2748', '37 | 编程范式游记（8）- Go 语言的委托模式'],
            ['./article/2751', '38 | 编程范式游记（9）- 编程的本质'],
            ['./article/2752', '39 | 编程范式游记（10）- 逻辑编程范式'],
            ['./article/2754', '40 | 编程范式游记（11）- 程序世界里的编程范式'],
            ['./article/3912', '41 | 弹力设计篇之“认识故障和弹力设计”'],
            ['./article/3917', '42 | 弹力设计篇之“隔离设计”'],
            ['./article/3926', '43 | 弹力设计篇之“异步通讯设计”'],
            ['./article/4050', '44 | 弹力设计篇之“幂等性设计”'],
            ['./article/4086', '45 | 弹力设计篇之“服务的状态”'],
            ['./article/4087', '46 | 弹力设计篇之“补偿事务”'],
            ['./article/4121', '47 | 弹力设计篇之“重试设计”'],
            ['./article/4241', '48 | 弹力设计篇之“熔断设计”'],
            ['./article/4245', '49 | 弹力设计篇之“限流设计”'],
            ['./article/4252', '50 | 弹力设计篇之“降级设计”'],
            ['./article/4253', '51 | 弹力设计篇之“弹力设计总结”'],
            ['./article/5175', '52 | 管理设计篇之“分布式锁”'],
            ['./article/5197', '63 | 区块链技术 - 区块链的革命性及技术概要'],
            ['./article/5363', '64 | 区块链技术 - 区块链技术细节 - 哈希算法'],
            ['./article/5438', '65 | 区块链技术 - 区块链技术细节 - 加密和挖矿'],
            ['./article/5612', '66 | 区块链技术 - 去中心化的共识机制'],
            ['./article/5623', '67 | 区块链技术 - 智能合约'],
            ['./article/5636', '68 | 区块链技术 - 传统金融和虚拟货币'],
            ['./article/5819', '53 | 管理设计篇之“配置中心”'],
            ['./article/5909', '54 | 管理设计篇之“边车模式”'],
            ['./article/5920', '55 | 管理设计篇之“服务网格”'],
            ['./article/6086', '56 | 管理设计篇之“网关模式”'],
            ['./article/6282', '58 | 性能设计篇之“缓存”'],
            ['./article/6283', '57 | 管理设计篇之“部署升级策略”'],
            ['./article/7036', '59 | 性能设计篇之“异步处理”'],
            ['./article/7045', '60 | 性能设计篇之“数据库扩展”'],
            ['./article/7047', '61 | 性能设计篇之“秒杀”'],
            ['./article/7086', '62 | 性能设计篇之“边缘计算”'],
            ['./article/8136', '69 | 程序员练级攻略（2018）：开篇词'],
            ['./article/8216', '70 | 程序员练级攻略（2018）：零基础启蒙'],
            ['./article/8217', '71 | 程序员练级攻略（2018）：正式入门'],
            ['./article/8700', '72 | 程序员练级攻略（2018）：程序员修养'],
            ['./article/8701', '73 | 程序员练级攻略（2018）：编程语言'],
            ['./article/8887', '74 | 程序员练级攻略（2018）：理论学科'],
            ['./article/8888', '75 | 程序员练级攻略（2018）：系统知识'],
            ['./article/9369', '76 | 程序员练级攻略（2018）：软件设计'],
            ['./article/9759', '77 | 程序员练级攻略（2018）：Linux系统、内存和网络'],
            ['./article/9851', '78 | 程序员练级攻略（2018）：异步I/O模型和Lock-Free编程'],
            ['./article/10216', '79 | 程序员练级攻略（2018）：Java底层知识'],
            ['./article/10301', '80 | 程序员练级攻略（2018）：数据库'],
            ['./article/10603', '81 | 程序员练级攻略（2018）：分布式架构入门'],
            ['./article/10604', '82 | 程序员练级攻略（2018）：分布式架构经典图书和论文'],
            ['./article/11116', '84 | 程序员练级攻略（2018）：微服务'],
            ['./article/11232', '83 | 程序员练级攻略（2018）：分布式架构工程设计'],
            ['./article/11665', '85 | 程序员练级攻略（2018）：容器化和自动化运维'],
            ['./article/11669', '86 | 程序员练级攻略（2018）：机器学习和人工智能'],
            ['./article/12271', '87 | 程序员练级攻略（2018）：前端基础和底层原理'],
            ['./article/12389', '88 | 程序员练级攻略（2018）：前端性能优化和框架'],
            ['./article/12486', '89 | 程序员练级攻略（2018）：UI/UX设计'],
            ['./article/12561', '90 | 程序员练级攻略（2018）：技术资源集散地'],
            ['./article/13067', '91 | 程序员面试攻略：面试前的准备'],
            ['./article/13069', '92 | 程序员面试攻略：面试中的技巧'],
            ['./article/13191', '93 | 程序员面试攻略：面试风格'],
            ['./article/13192', '94 | 程序员面试攻略：实力才是王中王'],
            ['./article/14271', '95 | 高效学习：端正学习态度'],
            ['./article/14321', '96 | 高效学习：源头、原理和知识地图'],
            ['./article/14360', '97 | 高效学习：深度，归纳和坚持实践'],
            ['./article/14380', '98 | 高效学习：如何学习和阅读代码'],
            ['./article/14389', '99 | 高效学习：面对枯燥和量大的知识'],
            [ './article/28550', '100 | 高效沟通：Talk和Code同等重要' ],
            [ './article/32619', '101 | 高效沟通：沟通阻碍和应对方法' ],
            [ './article/32796', '102 | 高效沟通：沟通方式及技巧' ],
            [ './article/32902', '103 | 高效沟通：沟通技术' ],
            [ './article/33112', '104 | 高效沟通：好老板要善于提问' ],
            [ './article/41008', '105 | 高效沟通：好好说话的艺术' ],
            [ './article/41118', '结束语 | 业精于勤，行成于思' ]
        ]
    }
}