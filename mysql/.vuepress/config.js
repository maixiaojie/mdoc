module.exports = {
    base: '/mysql/',
    dest: './dist/mysql',
    title: 'MySQL实战45讲',
    description: "从原理到实战，丁奇带你搞懂MySQL",
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
                text: '趣谈网络协议',
                link: 'http://doc.mcust.cn/netprotocol/'
            }, {
                text: '左耳听风',
                link: 'http://doc.mcust.cn/air/'
            }, {
                text: '深入浅出区块链',
                link: 'http://doc.mcust.cn/blockchain/'
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
                text: '深入拆解 Java 虚拟机',
                link: 'http://doc.mcust.cn/jvm/'
            }]
        }],
        sidebar: [
            ['./article/67888', '开篇词 | 这一次，让我们一起来搞懂MySQL'],
            ['./article/68319', '01 | 基础架构：一条SQL查询语句是如何执行的？'],
            ['./article/68633', '02  | 日志系统：一条SQL更新语句是如何执行的？'],
            ['./article/68963', '03 | 事务隔离：为什么你改了我还看不见？'],
            ['./article/69236', '04 | 深入浅出索引（上）'],
            ['./article/69636', '05 | 深入浅出索引（下）'],
            ['./article/69862', '06 | 全局锁和表锁 ：给表加个字段怎么有这么多阻碍？'],
            ['./article/70215', '07 | 行锁功过：怎么减少行锁对性能的影响？'],
            ['./article/70562', '08 | 事务到底是隔离的还是不隔离的？'],
            ['./article/70848', '09 | 普通索引和唯一索引，应该怎么选择？'],
            ['./article/71173', '10 | MySQL为什么有时候会选错索引？'],
            ['./article/71492', '11 |  怎么给字符串字段加索引？'],
            ['./article/71806', '12 | 为什么我的MySQL会“抖”一下？'],
            ['./article/72388', '13 | 为什么表数据删掉一半，表文件大小不变？'],
            ['./article/72775', '14 | count(*)这么慢，我该怎么办？'],
            ['./article/73161', '15 | 答疑文章（一）：日志和索引相关问题'],
            ['./article/73370', '直播回顾 | 林晓斌：我的 MySQL 心路历程'],
            ['./article/73479', '16 | “order by”是怎么工作的？'],
            ['./article/73795', '17 | 如何正确地显示随机消息？'],
            ['./article/74059', '18 | 为什么这些SQL语句逻辑相同，性能却差异巨大？'],
            ['./article/74687', '19 | 为什么我只查一行的语句，也执行这么慢？'],
            [ './article/75173', '20 | 幻读是什么，幻读有什么问题？' ],
            ['./article/75659', '21 | 为什么我只改一行的语句，锁这么多？'],
            ['./article/75746', '22 | MySQL有哪些“饮鸩止渴”提高性能的方法？'],
            ['./article/76161', '23 | MySQL是怎么保证数据不丢的？'],
            ['./article/76446', '24 | MySQL是怎么保证主备一致的？'],
            ['./article/76795', '25 | MySQL是怎么保证高可用的？'],
            ['./article/77083', '26 | 备库为什么会延迟好几个小时？'],
            ['./article/77427', '27 | 主库出问题了，从库怎么办？'],
            ['./article/77636', '28 | 读写分离有哪些坑？'],
            ['./article/78134', '29 | 如何判断一个数据库是不是出问题了？'],
            ['./article/78427', '30 | 答疑文章（二）：用动态的观点看加锁'],
            ['./article/78658', '31 | 误删数据后除了跑路，还能怎么办？'],
            ['./article/79026', '32 | 为什么还有kill不掉的语句？'],
            ['./article/79407', '33 | 我查这么多数据，会不会把数据库内存打爆？'],
            ['./article/79700', '34 | 到底可不可以使用join？'],
            ['./article/80147', '35 | join语句怎么优化？'],
            ['./article/80449', '36 | 为什么临时表可以重名？'],
            ['./article/80477', '37 | 什么时候会使用内部临时表？'],
            ['./article/80495', '38 | 都说InnoDB好，那还要不要使用Memory引擎？'],
            ['./article/80801', '40 | insert语句的锁为什么这么多？'],
            ['./article/81925', '41 | 怎么最快地复制一张表？'],
            ['./article/82231', '42 | grant之后要跟着flush privileges吗？'],
            ['./article/82560', '43 | 要不要使用分区表？'],
            ['./article/83556', '结束语 | 点线网面，一起构建MySQL知识网络']
        ]
    }
}