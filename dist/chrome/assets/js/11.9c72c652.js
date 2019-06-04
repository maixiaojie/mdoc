(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{179:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("像下面这样")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("或者这样")]),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("这样太难用了！不是输入之前就被触发了，就是括号漏写了...")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("敲黑板：这是一条"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("不推荐使用的API"),s("OutboundLink")],1),t._v(",尽管看起来这么酷炫...")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("(注："),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cache storage keys"),s("OutboundLink")],1),t._v(" 一般用来对 "),s("code",[t._v("request")]),t._v(" 和 "),s("code",[t._v("response")]),t._v(" 进行缓存)")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("更多的例子就不一一举例了。")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"console篇-异步的-console"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#console篇-异步的-console","aria-hidden":"true"}},[this._v("#")]),this._v(" console篇 - 异步的 console")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如今，越来越多与浏览器有关的 API 都是 "),s("em",[t._v("基于 "),s("code",[t._v("Promise")]),t._v(" 的")]),t._v(" 。当你使用 "),s("code",[t._v("promise")]),t._v(" 的时候通常配套用 "),s("code",[t._v(".then(处理方法)")]),t._v(" 或者 将 "),s("code",[t._v("promise")]),t._v(" 包裹在 "),s("code",[t._v("async")]),t._v(" 方法中，再使用 "),s("code",[t._v("await")]),t._v(" 来接收结果。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我们在 "),e("code",[this._v("JavaScript/TypeScript")]),this._v(" 中大量使用的东西，但如果在 "),e("code",[this._v("Console")]),this._v(" 中书写这样的结构很不方便。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e0201c187733?w=800&h=248&f=png&s=75956",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e020118e0846?w=800&h=260&f=png&s=74347",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[e("strong",[this._v("但如果 "),e("code",[this._v("console")]),this._v(" 默认就被 "),e("code",[this._v("async")]),this._v(" 包裹呢？")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("你猜怎么着，还真是这样！你可以直接使用 "),e("code",[this._v("await")]),this._v(" ：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e0201c5c5fd7?w=1006&h=304&f=gif&s=290225",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("事实上,在 "),e("code",[this._v("Console")]),this._v(" 中使用 "),e("code",[this._v("promise")]),this._v(" 比在源码中使用起来还要简单！")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-用你的异步console-来看一些更酷的东西"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-用你的异步console-来看一些更酷的东西","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 用你的异步"),e("code",[this._v("console")]),this._v(" 来看一些更酷的东西")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我和你一样，觉得 "),e("code",[this._v("fetch")]),this._v(" 的例子相当无聊 -- 所以再来一个新玩法：通过 "),e("code",[this._v("console")]),this._v(" 来获取到更多有意思的信息。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("Storage")]),this._v(" 系统的 "),e("strong",[this._v("占用数")]),this._v(" 和 "),e("strong",[this._v("空闲数")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" navigator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("estimate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e02019dbfde7?w=800&h=156&f=png&s=40976",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("设备的 "),e("strong",[this._v("电池信息")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了达到更好的效果，我们将这个技巧和前几天中提到的 "),e("code",[this._v("console.table")]),this._v(" 来合并使用：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e09d64ce9285?w=800&h=375&f=png&s=87305",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("媒体能力")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e0201c6930dc?w=800&h=363&f=png&s=93690",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("Cache storage keys")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/12/12/1679e02015fb7bc3?w=800&h=267&f=png&s=77486",alt:""}})])}],!1,null,null,null);e.default=n.exports}}]);