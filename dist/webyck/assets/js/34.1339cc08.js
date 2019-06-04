(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{202:function(v,_,e){"use strict";e.r(_);var o=e(0),t=Object(o.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"js-思考题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-思考题","aria-hidden":"true"}},[v._v("#")]),v._v(" JS 思考题")]),v._v(" "),e("p",[v._v("之前我们通过了七个章节来学习关于 JS 这部分的内容，那么接下来，会以几道思考题的方式来确保大家理解这部分的内容。")]),v._v(" "),e("p",[v._v("这种方式不仅能加深你对知识点的理解，同时也能帮助你串联起多个碎片知识点。一旦你拥有将多个碎片知识点串联起来的能力，在面试中就不会经常出现一问一答的情况。如果面试官的每个问题你都能引申出一些相关联的知识点，那么面试官一定会提高对你的评价。")]),v._v(" "),e("blockquote",[e("p",[v._v("思考题一：JS 分为哪两大类型？都有什么各自的特点？你该如何判断正确的类型？")])]),v._v(" "),e("p",[v._v("首先这几道题目想必很多人都能够很好的答出来，接下来就给大家一点思路讲出与众不同的东西。")]),v._v(" "),e("p",[e("strong",[v._v("思路引导：")])]),v._v(" "),e("ol",[e("li",[v._v("对于原始类型来说，你可以指出 "),e("code",[v._v("null")]),v._v(" 和 "),e("code",[v._v("number")]),v._v(" 存在的一些问题。对于对象类型来说，你可以从垃圾回收的角度去切入，也可以说一下对象类型存在深浅拷贝的问题。")]),v._v(" "),e("li",[v._v("对于判断类型来说，你可以去对比一下 "),e("code",[v._v("typeof")]),v._v(" 和 "),e("code",[v._v("instanceof")]),v._v(" 之间的区别，也可以指出 "),e("code",[v._v("instanceof")]),v._v(" 判断类型也不是完全准确的。")])]),v._v(" "),e("p",[v._v("以上就是这道题目的回答思路，当然不是说让大家完全按照这个思路去答题，而是存在一个意识，当回答面试题的时候，尽量去引申出这个知识点的某些坑或者与这个知识点相关联的东西。")]),v._v(" "),e("blockquote",[e("p",[v._v("思考题二：你理解的原型是什么？")])]),v._v(" "),e("p",[e("strong",[v._v("思路引导：")])]),v._v(" "),e("p",[v._v("起码说出原型小节中的总结内容，然后还可以指出一些小点，比如并不是所有函数都有 "),e("code",[v._v("prototype")]),v._v(" 属性，然后引申出原型链的概念，提出如何使用原型实现继承，继而可以引申出 ES6 中的 "),e("code",[v._v("class")]),v._v(" 实现继承。")]),v._v(" "),e("blockquote",[e("p",[v._v("思考题三：bind、call 和 apply 各自有什么区别？")])]),v._v(" "),e("p",[e("strong",[v._v("思路引导：")])]),v._v(" "),e("p",[v._v("首先肯定是说出三者的不同，如果自己实现过其中的函数，可以尝试说出自己的思路。然后可以聊一聊 "),e("code",[v._v("this")]),v._v(" 的内容，有几种规则判断 "),e("code",[v._v("this")]),v._v(" 到底是什么，"),e("code",[v._v("this")]),v._v(" 规则会涉及到 "),e("code",[v._v("new")]),v._v("，那么最后可以说下自己对于 "),e("code",[v._v("new")]),v._v(" 的理解。")]),v._v(" "),e("blockquote",[e("p",[v._v("思考题四：ES6 中有使用过什么？")])]),v._v(" "),e("p",[e("strong",[v._v("思路引导：")])]),v._v(" "),e("p",[v._v("这边可说的实在太多，你可以列举 1 - 2 个点。比如说说 "),e("code",[v._v("class")]),v._v("，那么 "),e("code",[v._v("class")]),v._v(" 又可以拉回到原型的问题；可以说说 "),e("code",[v._v("promise")]),v._v("，那么线就被拉到了异步的内容；可以说说 "),e("code",[v._v("proxy")]),v._v("，那么如果你使用过 Vue 这个框架，就可以谈谈响应式原理的内容；同样也可以说说 "),e("code",[v._v("let")]),v._v(" 这些声明变量的语法，那么就可以谈及与 "),e("code",[v._v("var")]),v._v(" 的不同，说到提升这块的内容。")]),v._v(" "),e("blockquote",[e("p",[v._v("思考题五：JS 是如何运行的？")])]),v._v(" "),e("p",[e("strong",[v._v("思路引导：")])]),v._v(" "),e("p",[v._v("这其实是很大的一块内容。你可以先说 JS 是单线程运行的，这里就可以说说你理解的线程和进程的区别。然后讲到执行栈，接下来的内容就是涉及 Eventloop 了，微任务和宏任务的区别，哪些是微任务，哪些又是宏任务，还可以谈及浏览器和 Node 中的 Eventloop 的不同，最后还可以聊一聊 JS 中的垃圾回收。")]),v._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),e("p",[v._v("虽然思考题不多，但是其实每一道思考题背后都可以引申出很多内容，大家接下去在学习的过程中也应该始终有一个意识，你学习的这块内容到底和你现在脑海里的哪一个知识点有关联。同时也欢迎大家总结这些思考题，并且把总结的内容链接放在评论中，我会挑选出不错的文章单独放入一章节给大家参考。")])])}],!1,null,null,null);_.default=t.exports}}]);