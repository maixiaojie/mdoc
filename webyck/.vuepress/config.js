module.exports = {
    base: '/webyck/',
    dest: './dist/webyck',
    title: '前端面试之道',
    description: "The Way of Front-end Interview",
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
            }]
        }],
        sidebar: [
            ['./article/5c024ecbf265da616a476638', '小册食用指南'],
            ['./article/5be91762f265da611b57e015', '前方的路，让我们结伴同行'],
            ['./article/5bed40d951882545f73004f6', 'JS 基础知识点及常考面试题（二）'],
            ['./article/5bdd0d83f265da615f76ba57', 'ES6 知识点及常考面试题'],
            ['./article/5bdc7198518825171726cfce', 'JS 异步编程及常考面试题'],
            ['./article/5be1a7e451882516bc477978', '手写 Promise'],
            ['./article/5be04a8e6fb9a04a072fd2cd', 'Event Loop'],
            ['./article/5bdd0d8e6fb9a04a044073fe', 'JS 进阶知识点及常考面试题'],
            ['./article/5bee2f5ff265da61553a67ba', 'JS 思考题'],
            ['./article/5be927d06fb9a049d81b5fc0', 'DevTools Tips'],
            ['./article/5bdc71fbf265da6128599324', '浏览器基础知识点及常考面试题'],
            ['./article/5c06769251882516cd70cfe9', '浏览器缓存机制'],
            ['./article/5bdc7207f265da613c09425d', '浏览器渲染原理'],
            ['./article/5bdc721851882516c33430a2', '安全防范知识点'],
            ['./article/5bdc72cbe51d450540286a9d', '从 V8 中看 JS 性能优化'],
            ['./article/5c0678636fb9a049b347c0aa', '性能优化琐碎事'],
            ['./article/5bdc775a6fb9a049f818b879', 'Webpack 性能优化'],
            ['./article/5c10c75af265da6135726f6c', '实现小型打包工具'],
            ['./article/5bdc715f6fb9a049c15ea4e0', 'JS 基础知识点及常考面试题（一）'],
            ['./article/5bdc731b51882516c56ced6f', 'Vue 常考基础知识点'],
            ['./article/5bdc7327f265da616b102924', 'Vue 常考进阶知识点'],
            ['./article/5bdc7333f265da611d661be0', 'React 常考基础知识点'],
            ['./article/5bdc73396fb9a04a0c2ddfe2', 'React 常考进阶知识点'],
            ['./article/5be91751e51d450ee5063ef5', '监控'],
            ['./article/5bdc729af265da615a414603', 'UDP'],
            ['./article/5c447392e51d45524b02eaf5', 'TCP'],
            ['./article/5bdc72abe51d45051c44add3', 'HTTP 及 TLS'],
            ['./article/5bdc72b151882516f039fce3', 'HTTP/2 及 HTTP/3'],
            ['./article/5bdc73e05188251719353031', '输入 URL 到页面渲染的整个流程'],
            ['./article/5bdc74186fb9a049ab0d0b6b', '设计模式'],
            ['./article/5bdc723a6fb9a049c43d1843', '常见数据结构'],
            ['./article/5bdc724af265da610f632e41', '常考算法题解析'],
            ['./article/5bdc71b251882517217fb2ab', 'CSS 常考面试题资料'],
            ['./article/5bdc74aff265da61561eb681', '如何写好一封简历'],
            ['./article/5bdc74bae51d450549409350', '面试常用技巧'],
            ['./article/5bdc72e6e51d45054f664dbf',
                'React 和 Vue 两大框架之间的相爱相杀'
            ]
        ]
    }
}