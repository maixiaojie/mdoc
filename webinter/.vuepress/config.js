module.exports = {
    base: '/webinter/',
    dest: './dist/webinter',
    title: 'Web 前端面试指南与高频考题解析',
    description: "找工作面试是门技术活，掌握一定技巧可以让你事半功倍。",
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
                text: '前端面试之道',
                link: 'http://doc.mcust.cn/webyck/'
            }, {
                text: '趣谈网络协议',
                link: 'http://doc.mcust.cn/netprotocol/'
            }, {
                text: '你不知道的 Chrome 调试技巧',
                link: 'http://doc.mcust.cn/chrome/'
            }, {
                text: '如何使用 Canvas 制作出炫酷的网页背景特效',
                link: 'http://doc.mcust.cn/canvas/'
            }]
        }],
        sidebar: [
            ['./article/5a8f9ddc6fb9a06340522253', '准备：简历编写和面试前准备'],
            ['./article/5a98decef265da239866b163', '总结与补充说明'],
            ['./article/5a8f9f1af265da4e777fbdef','一面 2：JS-Web-API 知识点与高频考题解析'],
            ['./article/5a8f9f536fb9a063523e069f','一面 3：CSS-HTML 知识点与高频考题解析'],
            ['./article/5a8f9fcb6fb9a063417b3f9e', '一面 4：从容应对算法题目'],
            ['./article/5a8f9f7bf265da4e82635e46', '一面 5：浏览器相关知识点与高频考题解析'],
            ['./article/5a8f9ed96fb9a0633229bddf', '一面 1：ES 基础知识点与高频考题解析'],
            ['./article/5a8fa01b5188251c8563740a', '二面 1：如何回答常见的软技能问题'],
            ['./article/5a8fa0315188257a865d8425', '二面 2：如何介绍项目及应对项目细节追问'],
            ['./article/5a8fa05f5188257a6e404339', 'HR 面：谈钱不伤感情'],
            ['./article/5a8fa04a6fb9a0633531c026', '其他：面试注意事项'],
            ['./article/5a8f9faaf265da4e721c8da5','一面 6：开发环境相关知识点与高频考题解析']
        ]
    }
}