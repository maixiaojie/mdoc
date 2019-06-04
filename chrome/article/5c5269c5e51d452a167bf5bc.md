# Network 篇 - Network 的骚操作

## 前言

`Network` 作为我们经常调试的 `Chrome` 面板，你知道它有哪些使用技巧吗？

## 1. 隐藏 network overview

你经常查看 `Network` 面板是为了:

- 我想看看请求的时间轴信息
- 我就想看看请求列表- 确认下请求状态，资源大小和响应结果呢

我赌你是后者，如果是这样，那么 `Overview` 的部分就没有任何理由占用 `Network` 接近一半的空间。隐藏它！

![](https://user-gold-cdn.xitu.io/2019/1/22/168745fc910fdc73?w=1000&h=712&f=png&s=292517)

## 2. Request initiator 显示了调用堆栈信息

> `initiator` 可以翻译为 启动器，但是太过生硬，大家理解意思就好。

`Network` 面板中的 `initiator` 这一列显明了是哪个脚本的哪一行触发了请求。它显示了在调用堆栈中触发请求的最后一步。但如果你用的是，例如：一个本地化的 `fetch` API， 那它将会指向一些低层级的类库的代码 - 例如 当我们在 `Angular` 配合使用 `Axios` 或者 `zone.js` 的时候，这时指向的是 `xhr.js` 

除了这些外部库之外，如果你希望查看代码的哪一部分触发了请求。 将鼠标悬停在显示的 `initiator`（例如 外部库）上，你将看到完整的调用堆栈，包括你的文件：

![](https://user-gold-cdn.xitu.io/2018/12/29/167f8282477941b8?w=1156&h=386&f=gif&s=665995)


## 3. 请求过滤

`Network` 面板中的过滤器输入框接受字符串或正则表达式，对应显示匹配的请求。 但是你也可以使用它来过滤很多属性。

只需输入 例如 `method` 或者 `mime-type` :

![](https://user-gold-cdn.xitu.io/2018/12/29/167f8282534dfe59?w=762&h=574&f=gif&s=3048800)

如果想要显示所有可能的关键字，在空白的输入框按下 `[ctrl] + [space]`


## 4. 自定义请求表

在请求表中，你可以看到有关每个请求的几条信息，例如：`Status`， `Type`， `Initiator`， `Size` 和 `Time`。但是你同样可以添加更多(例如 我经常添加 `Method`)。更多：

![](https://user-gold-cdn.xitu.io/2018/12/29/167f82824d09c68d?w=800&h=485&f=png&s=109333)

> 你可以添加所有 `Network` 面板里展示出来的信息。

要自定义显示哪些列，右键单击请求表标题上的任意位置。

> 请注意，`Response Headers` 是一个有更多选项的完整的子菜单，甚至可以定义你自己的选项。

![](https://user-gold-cdn.xitu.io/2018/12/29/167f828279b0b397?w=1156&h=386&f=gif&s=4780857)

## 5. 重新发送 `XHR` 的请求

如何重新发送 `XHR` 的请求？刷新页面？太老套了，试试这么做：

![](https://user-gold-cdn.xitu.io/2018/12/20/167c99ea1c267c2b?w=600&h=339&f=png&s=173909)


## 6. XHR/fetch 断点

在某一特定时刻，你想要对已发送的 `“ajax”` 请求进行捕获怎么做呢？
可以使用 `XHR/fetch breakpoint` 。

> 这些只能在 `Source` 面板中设置。（我也同样希望可以直接在 `Network` 面板中设置，但事实并非如此）

你可以添加部分 `URL` 作为触发器或监听任何请求：

![](https://user-gold-cdn.xitu.io/2019/1/22/16874662814db12c?w=1472&h=1202&f=png&s=508915)