module.exports = {
    base: '/canvas/',
    dest: './dist/canvas',
    title: '如何使用 Canvas 制作出炫酷的网页背景特效',
    description: "从零开始学习 Canvas 相关知识，分析其特效，最终制作出炫酷的网页背景。",
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
                text: '左耳听风',
                link: 'https://doc.now.sh/air/'
            }, {
                text: '深入浅出区块链',
                link: 'https://doc.now.sh/blockchain/'
            }, {
                text: '趣谈网络协议',
                link: 'https://doc.now.sh/netprotocol/'
            }, {
                text: 'Web 前端面试指南与高频考题解析',
                link: 'https://doc.now.sh/webinter/'
            }, {
                text: '你不知道的 Chrome 调试技巧',
                link: 'https://doc.now.sh/chrome/'
            }, {
                text: '前端面试之道',
                link: 'https://doc.now.sh/webyck/'
            }, {
                text: 'MySQL实战45讲',
                link: 'https://doc.now.sh/mysql/'
            }]
        }],
        sidebar: [
            ['./article/5a0ab8e26fb9a0451170a622', '什么是 Canvas '],
            ['./article/5a0bda285188257bfe45618c', 'Canvas 的应用场景'],
            ['./article/5a0bd02e518825293b4fd87c', '手摸手带你入门 Canvas'],
            ['./article/5a0bdf10f265da432002c75f', '炫酷背景特效的通性'],
            ['./article/5a0be1335188253edc7f749a', '怎么实现随机粒子'],
            ['./article/5a0be1cc6fb9a0452a3bdb0b', '使你的随机粒子动起来'],
            ['./article/5a0be1956fb9a04509090987', '使你的鼠标和屏幕互动'],
            ['./article/5a0bdf806fb9a045146392d6', '制作属于你自己的特效'],
            ['./article/5a0bd062518825320476bea2', '使你的 Canvas 更加优雅']
        ]
    }
}