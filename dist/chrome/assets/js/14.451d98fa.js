(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{174:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"console篇-对象-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console篇-对象-方法","aria-hidden":"true"}},[t._v("#")]),t._v(" console篇 - 对象&方法")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("在我们调试 "),a("code",[t._v("Javascript")]),t._v(" 的代码时，"),a("code",[t._v("对象")]),t._v(" 和 "),a("code",[t._v("方法")]),t._v(" 作为经常被我们调试的对象，所以这里介绍关于 "),a("code",[t._v("对象")]),t._v(" 和 "),a("code",[t._v("方法")]),t._v(" 的调试技巧。")]),t._v(" "),a("h2",{attrs:{id:"_1-queryobjects-（对象查询）方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-queryobjects-（对象查询）方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("queryObjects")]),t._v(" （对象查询）方法")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c07a88c45b6bd?w=924&h=1026&f=png&s=77264",alt:""}})]),t._v(" "),a("p",[t._v("假如我们有这样一段代码，我们在里面定义了一些对象。")]),t._v(" "),a("p",[t._v("问一个问题，我们怎么知道，在 "),a("strong",[t._v("特定的时刻")]),t._v(" + "),a("strong",[t._v("特定的执行上下文")]),t._v(" 有哪些对象呢？")]),t._v(" "),a("p",[a("code",[t._v("DevTools")]),t._v(" 里的 "),a("code",[t._v("queryObjects")]),t._v(" 函数可以展示这些信息。")]),t._v(" "),a("blockquote",[a("p",[t._v("请注意，列表中创建的最后一个对象是不可用的 :  在代码执行后，对于它的引用并没有留存下来，也就是说，我们只有 "),a("code",[t._v("3")]),t._v(" 个 "),a("code",[t._v("person")]),t._v(" 对象：")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c07a88ed68f7f?w=954&h=606&f=gif&s=1443103",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"_2-monitor-（镜像）方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-monitor-（镜像）方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("monitor")]),t._v(" （镜像）方法")]),t._v(" "),a("p",[a("code",[t._v("monitor")]),t._v(" 是 "),a("code",[t._v("DevTools")]),t._v(" 的一个方法， 它能够让你 "),a("code",[t._v("“潜入”")]),t._v(" 到任何 "),a("code",[t._v("_function calls(方法的调用)")]),t._v(" 中：每当一个 "),a("code",[t._v("被潜入")]),t._v(" 的方法运行的时候，"),a("code",[t._v("console 控制台")]),t._v(" 会把它的实例打印出来，包含 "),a("strong",[t._v("函数名")]),t._v(" 以及 "),a("strong",[t._v("调用它的参数")]),t._v(" 。")]),t._v(" "),a("p",[t._v("我们把前面例子里面的 "),a("code",[t._v("Person")]),t._v(" 类拿过来，并且给它扩展两个方法：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("role "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" role"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMessage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'greeting'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`Hello, I'm ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("!`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("如你所见，"),a("code",[t._v("greet")]),t._v(" 方法通过一个特殊的参数来执行 "),a("code",[t._v("getMessage")]),t._v(" 方法，让我们看看对 "),a("code",[t._v("getMessage")]),t._v(" 方法进行追踪会产生什么结果：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/18/167c07a88ddad8cb?w=1034&h=510&f=gif&s=994422",alt:""}})]),t._v(" "),a("p",[t._v("这样做，会让我们少写很多 "),a("code",[t._v("console.logs")]),t._v(" !")]),t._v(" "),a("h3",{attrs:{id:"_3-monitorevents-（镜像事件）方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-monitorevents-（镜像事件）方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 3. "),a("code",[t._v("monitorEvents")]),t._v(" （镜像事件）方法")]),t._v(" "),a("p",[t._v("在上文中，我们讨论了用 "),a("code",[t._v("monitor")]),t._v(" 方法来监听函数，其实还可以使用名为 "),a("code",[t._v("monitorEvents")]),t._v(" 的方法，对 "),a("code",[t._v("events")]),t._v(" 做一样的事情：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/20/167c99eb0734d2f9?w=738&h=540&f=gif&s=2951578",alt:""}})])])}],!1,null,null,null);s.default=e.exports}}]);