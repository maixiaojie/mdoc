module.exports = {
    base: '/chrome/',
    dest: './dist/chrome',
    title: '你不知道的 Chrome 调试技巧',
    description: "熟练掌握 Chrome 调试技巧，直接提升工作效率。",
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
                text: '前端面试之道',
                link: 'http://doc.mcust.cn/webyck/'
            }, {
                text: '如何使用 Canvas 制作出炫酷的网页背景特效',
                link: 'http://doc.mcust.cn/canvas/'
            }]
        }],
        sidebar: [
            ['./article/5c5269026fb9a049f1549e4a', '写在前面'],
            ['./article/5c526943e51d451fb9559f80', '通用篇 - copying & saving'],
            ['./article/5c52694fe51d452a167bf5b5', '通用篇 - 快捷键和通用技巧'],
            ['./article/5c52695b6fb9a049f66c89b0', '通用篇 - 使用 Command'],
            ['./article/5c5269656fb9a049dc02aac6', '通用篇 - 代码块的使用'],
            ['./article/5c52696fe51d451fb9559f82', 'console 篇 - console 中的"$"'],
            ['./article/5c52697a5188252581251783', 'console 篇 - console 的 "bug" ?'],
            ['./article/5c526985518825242165f615', 'console 篇 - 异步的 console'],
            ['./article/5c52698e51882546660d41f9', 'console 篇 - Ninja console.log（忍者打印）'],
            ['./article/5c526998e51d4506953e5574', 'console 篇 - 自定义格式转换器'],
            ['./article/5c5269a2e51d4543805ef36a', 'console 篇 - 对象 & 方法'],
            ['./article/5c5269ac5188252593127289', 'console 篇 - console 中骚操作'],
            ['./article/5c5269c5e51d452a167bf5bc', 'Network 篇 - Network 的骚操作'],
            ['./article/5c5269d0e51d451adb2d476c', '元素面板篇 - 技巧集合'],
            ['./article/5c5269da6fb9a049f1549e50', '元素面板篇 - 颜色选择器'],
            ['./article/5c5269e5e51d45517411ca26', 'Drawer 篇 - Drawer 常识'],
            ['./article/5c5269f0e51d45599635e042', 'Workspace 篇 - workspace 技巧'],
            ['./article/5c5269fce51d45299a08e0f4', '结束语']
        ]
    }
}