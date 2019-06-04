module.exports = {
    base: '/jvm/',
    dest: './dist/jvm',
    title: '深入拆解 Java 虚拟机',
    description: "Deep Dismantling of Java Virtual Machines",
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
            },{
                text: '数据结构与算法之美',
                link: 'http://doc.mcust.cn/ds/'
            },{
                text: '趣谈网络协议',
                link: 'http://doc.mcust.cn/netprotocol/'
            },{
                text: '左耳听风',
                link: 'http://doc.mcust.cn/air/'
            },{
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
            }]
        }],
        sidebar: [
            ['./article/11074', '开篇词 | 为什么我们要学习Java虚拟机？'],
            ['./article/11289', '01 | Java代码是怎么运行的？'],
            ['./article/11503', '02 | Java的基本类型'],
            ['./article/11523', '03 | Java虚拟机是如何加载Java类的?'],
            ['./article/11539', '04 | JVM是如何执行方法调用的？（上）'],
            ['./article/12098', '05 | JVM是如何执行方法调用的？（下）'],
            ['./article/12134', '06 | JVM是如何处理异常的？'],
            ['./article/12192', '07 | JVM是如何实现反射的？'],
            ['./article/12423', '【工具篇】 常用工具介绍'],
            ['./article/12564', '08 | JVM是怎么实现invokedynamic的？（上）'],
            ['./article/12574', '09 | JVM是怎么实现invokedynamic的？（下）'],
            ['./article/13081', '10 | Java对象的内存布局'],
            ['./article/13091', '11 | 垃圾回收（上）'],
            ['./article/13137', '12 | 垃圾回收（下）'],
            ['./article/13484', '13 | Java内存模型'],
            ['./article/13530', '14 | Java虚拟机是怎么实现synchronized的？'],
            ['./article/13781', '15 | Java语法糖与Java编译器'],
            ['./article/14061', '16 | 即时编译（上）'],
            ['./article/14070', '17 | 即时编译（下）'],
            ['./article/14270', '18 | 即时编译器的中间表达形式'],
            ['./article/14575', '20 | 方法内联（上）'],
            ['./article/14652', '21 | 方法内联（下）'],
            ['./article/14794', '19 |  Java字节码（基础篇）'],
            ['./article/18046', '22 | HotSpot虚拟机的intrinsic'],
            ['./article/18048', '23 | 逃逸分析'],
            ['./article/39683', '24 | 字段访问相关优化'],
            ['./article/39814', '25 | 循环优化'],
            ['./article/39838', '26 | 向量化'],
            ['./article/40189', '27 | 注解处理器'],
            ['./article/40275', '28 | 基准测试框架JMH（上）'],
            ['./article/40281', '29 | 基准测试框架JMH（下）'],
            ['./article/40520', '30 | Java虚拟机的监控及诊断工具（命令行篇）'],
            ['./article/40821', '31 | Java虚拟机的监控及诊断工具（GUI篇）'],
            ['./article/40839', '32 | JNI的运行机制'],
            ['./article/41186', '33 | Java Agent与字节码注入'],
            ['./article/41245', '34 | Graal：用Java编译Java'],
            ['./article/41347', '35 | Truffle：语言实现框架'],
            ['./article/41582', '36 | SubstrateVM：AOT编译框架'],
            ['./article/41800', '尾声 | 道阻且长，努力加餐']
        ]
    }
}