(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{171:function(t,e,_){"use strict";_.r(e);var i=_(0),s=Object(i.a)({},function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[_("p",[t._v("在MySQL中有两个kill命令：一个是kill query +线程id，表示终止这个线程中正在执行的语句；一个是kill connection +线程id，这里connection可缺省，表示断开这个线程的连接，当然如果这个线程有语句正在执行，也是要先停止正在执行的语句的。")]),t._v(" "),_("p",[t._v("不知道你在使用MySQL的时候，有没有遇到过这样的现象：使用了kill命令，却没能断开这个连接。再执行show processlist命令，看到这条语句的Command列显示的是Killed。")]),t._v(" "),_("p",[t._v("你一定会奇怪，显示为Killed是什么意思，不是应该直接在show processlist的结果里看不到这个线程了吗？")]),t._v(" "),_("p",[t._v("今天，我们就来讨论一下这个问题。")]),t._v(" "),_("p",[t._v("其实大多数情况下，kill query/connection命令是有效的。比如，执行一个查询的过程中，发现执行时间太久，要放弃继续查询，这时我们就可以用kill query命令，终止这条查询语句。")]),t._v(" "),_("p",[t._v("还有一种情况是，语句处于锁等待的时候，直接使用kill命令也是有效的。我们一起来看下这个例子：")]),t._v(" "),t._m(0),t._v(" "),_("p",[t._v("图1 kill query 成功的例子")]),t._v(" "),_("p",[t._v("可以看到，session C 执行kill query以后，session B几乎同时就提示了语句被中断。这，就是我们预期的结果。")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("但是，这里你要停下来想一下：session B是直接终止掉线程，什么都不管就直接退出吗？显然，这是不行的。")]),t._v(" "),_("p",[t._v("我在"),_("a",{attrs:{href:"https://time.geekbang.org/column/article/69862",target:"_blank",rel:"noopener noreferrer"}},[t._v("第6篇文章"),_("OutboundLink")],1),t._v("中讲过，当对一个表做增删改查操作时，会在表上加MDL读锁。所以，session B虽然处于blocked状态，但还是拿着一个MDL读锁的。如果线程被kill的时候，就直接终止，那之后这个MDL读锁就没机会被释放了。")]),t._v(" "),_("p",[t._v("这样看来，kill并不是马上停止的意思，而是告诉执行线程说，这条语句已经不需要继续执行了，可以开始“执行停止的逻辑了”。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),_("p",[t._v("为什么要发信号呢？")]),t._v(" "),_("p",[t._v("因为像图1的我们例子里面，session B处于锁等待状态，如果只是把session B的线程状态设置THD::KILL_QUERY，线程B并不知道这个状态变化，还是会继续等待。发一个信号的目的，就是让session B退出等待，来处理这个THD::KILL_QUERY状态。")]),t._v(" "),_("p",[t._v("上面的分析中，隐含了这么三层意思：")]),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("到这里你就知道了，原来不是“说停就停的”。")]),t._v(" "),_("p",[t._v("接下来，我们"),_("strong",[t._v("再看一个kill不掉的例子")]),t._v("，也就是我们在前面"),_("a",{attrs:{href:"https://time.geekbang.org/column/article/78134",target:"_blank",rel:"noopener noreferrer"}},[t._v("第29篇文章"),_("OutboundLink")],1),t._v("中提到的 innodb_thread_concurrency 不够用的例子。")]),t._v(" "),_("p",[t._v("首先，执行set global innodb_thread_concurrency=2，将InnoDB的并发线程上限数设置为2；然后，执行下面的序列：")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("图2 kill query 无效的例子")]),t._v(" "),_("p",[t._v("可以看到：")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),_("p",[t._v("图3 kill connection之后的效果")]),t._v(" "),_("p",[t._v("这时候，id=12这个线程的Commnad列显示的是Killed。也就是说，客户端虽然断开了连接，但实际上服务端上这条语句还在执行过程中。")]),t._v(" "),t._m(9),t._v(" "),_("p",[t._v("在实现上，等行锁时，使用的是pthread_cond_timedwait函数，这个等待状态可以被唤醒。但是，在这个例子里，12号线程的等待逻辑是这样的：每10毫秒判断一下是否可以进入InnoDB执行，如果不行，就调用nanosleep函数进入sleep状态。")]),t._v(" "),_("p",[t._v("也就是说，虽然12号线程的状态已经被设置成了KILL_QUERY，但是在这个等待进入InnoDB的循环过程中，并没有去判断线程的状态，因此根本不会进入终止逻辑阶段。")]),t._v(" "),_("p",[t._v("而当session E执行kill connection 命令时，是这么做的，")]),t._v(" "),t._m(10),t._v(" "),_("p",[t._v("那为什么执行show processlist的时候，会看到Command列显示为killed呢？其实，这就是因为在执行show processlist的时候，有一个特别的逻辑：")]),t._v(" "),t._m(11),t._v(" "),_("p",[t._v("所以其实，即使是客户端退出了，这个线程的状态仍然是在等待中。那这个线程什么时候会退出呢？")]),t._v(" "),_("p",[t._v("答案是，只有等到满足进入InnoDB的条件后，session C的查询语句继续执行，然后才有可能判断到线程状态已经变成了KILL_QUERY或者KILL_CONNECTION，再进入终止逻辑阶段。")]),t._v(" "),_("p",[t._v("到这里，我们来小结一下。")]),t._v(" "),_("p",[t._v("**这个例子是kill无效的第一类情况，即：线程没有执行到判断线程状态的逻辑。**跟这种情况相同的，还有由于IO压力过大，读写IO的函数一直无法返回，导致不能及时判断线程的状态。")]),t._v(" "),_("p",[t._v("**另一类情况是，终止逻辑耗时较长。**这时候，从show processlist结果上看也是Command=Killed，需要等到终止逻辑完成，语句才算真正完成。这类情况，比较常见的场景有以下几种：")]),t._v(" "),t._m(12),t._v(" "),_("p",[t._v("之前有人问过我，如果直接在客户端通过Ctrl+C命令，是不是就可以直接终止线程呢？")]),t._v(" "),_("p",[t._v("答案是，不可以。")]),t._v(" "),_("p",[t._v("这里有一个误解，其实在客户端的操作只能操作到客户端的线程，客户端和服务端只能通过网络交互，是不可能直接操作服务端线程的。")]),t._v(" "),_("p",[t._v("而由于MySQL是停等协议，所以这个线程执行的语句还没有返回的时候，再往这个连接里面继续发命令也是没有用的。实际上，执行Ctrl+C的时候，是MySQL客户端另外启动一个连接，然后发送一个kill query 命令。")]),t._v(" "),_("p",[t._v("所以，你可别以为在客户端执行完Ctrl+C就万事大吉了。因为，要kill掉一个线程，还涉及到后端的很多操作。")]),t._v(" "),t._m(13),t._v(" "),_("p",[t._v("在实际使用中，我也经常会碰到一些同学对客户端的使用有误解。接下来，我们就来看看两个最常见的误解。")]),t._v(" "),t._m(14),t._v(" "),_("p",[t._v("有些线上的库，会包含很多表（我见过最多的一个库里有6万个表）。这时候，你就会发现，每次用客户端连接都会卡在下面这个界面上。")]),t._v(" "),t._m(15),t._v(" "),_("p",[t._v("图4 连接等待")]),t._v(" "),_("p",[t._v("而如果db1这个库里表很少的话，连接起来就会很快，可以很快进入输入命令的状态。因此，有同学会认为是表的数目影响了连接性能。")]),t._v(" "),_("p",[t._v("从"),_("a",{attrs:{href:"https://time.geekbang.org/column/article/68319",target:"_blank",rel:"noopener noreferrer"}},[t._v("第一篇文章"),_("OutboundLink")],1),t._v("你就知道，每个客户端在和服务端建立连接的时候，需要做的事情就是TCP握手、用户校验、获取权限。但这几个操作，显然跟库里面表的个数无关。")]),t._v(" "),_("p",[t._v("但实际上，正如图中的文字提示所说的，当使用默认参数连接的时候，MySQL客户端会提供一个本地库名和表名补全的功能。为了实现这个功能，客户端在连接成功后，需要多做一些操作：")]),t._v(" "),t._m(16),t._v(" "),_("p",[t._v("在这些操作中，最花时间的就是第三步在本地构建哈希表的操作。所以，当一个库中的表个数非常多的时候，这一步就会花比较长的时间。")]),t._v(" "),t._m(17),t._v(" "),_("p",[t._v("图中的提示也说了，如果在连接命令中加上-A，就可以关掉这个自动补全的功能，然后客户端就可以快速返回了。")]),t._v(" "),_("p",[t._v("这里自动补全的效果就是，你在输入库名或者表名的时候，输入前缀，可以使用Tab键自动补全表名或者显示提示。")]),t._v(" "),_("p",[t._v("实际使用中，如果你自动补全功能用得并不多，我建议你每次使用的时候都默认加-A。")]),t._v(" "),_("p",[t._v("其实提示里面没有说，除了加-A以外，加–quick(或者简写为-q)参数，也可以跳过这个阶段。但是，这个**–quick是一个更容易引起误会的参数，也是关于客户端常见的一个误解。**")]),t._v(" "),_("p",[t._v("你看到这个参数，是不是觉得这应该是一个让服务端加速的参数？但实际上恰恰相反，设置了这个参数可能会降低服务端的性能。为什么这么说呢？")]),t._v(" "),_("p",[t._v("MySQL客户端发送请求后，接收服务端返回结果的方式有两种：")]),t._v(" "),t._m(18),t._v(" "),_("p",[t._v("MySQL客户端默认采用第一种方式，而如果加上–quick参数，就会使用第二种不缓存的方式。")]),t._v(" "),_("p",[t._v("采用不缓存的方式时，如果本地处理得慢，就会导致服务端发送结果被阻塞，因此会让服务端变慢。关于服务端的具体行为，我会在下一篇文章再和你展开说明。")]),t._v(" "),_("p",[t._v("那你会说，既然这样，为什么要给这个参数取名叫作quick呢？这是因为使用这个参数可以达到以下三点效果：")]),t._v(" "),t._m(19),t._v(" "),_("p",[t._v("所以你看到了，–quick参数的意思，是让客户端变得更快。")]),t._v(" "),t._m(20),t._v(" "),_("p",[t._v("在今天这篇文章中，我首先和你介绍了MySQL中，有些语句和连接“kill不掉”的情况。")]),t._v(" "),_("p",[t._v("这些“kill不掉”的情况，其实是因为发送kill命令的客户端，并没有强行停止目标线程的执行，而只是设置了个状态，并唤醒对应的线程。而被kill的线程，需要执行到判断状态的“埋点”，才会开始进入终止逻辑阶段。并且，终止逻辑本身也是需要耗费时间的。")]),t._v(" "),_("p",[t._v("所以，如果你发现一个线程处于Killed状态，你可以做的事情就是，通过影响系统环境，让这个Killed状态尽快结束。")]),t._v(" "),_("p",[t._v("比如，如果是第一个例子里InnoDB并发度的问题，你就可以临时调大innodb_thread_concurrency的值，或者停掉别的线程，让出位子给这个线程执行。")]),t._v(" "),_("p",[t._v("而如果是回滚逻辑由于受到IO资源限制执行得比较慢，就通过减少系统压力让它加速。")]),t._v(" "),_("p",[t._v("做完这些操作后，其实你已经没有办法再对它做什么了，只能等待流程自己完成。")]),t._v(" "),_("p",[t._v("最后，我给你留下一个思考题吧。")]),t._v(" "),_("p",[t._v("如果你碰到一个被killed的事务一直处于回滚状态，你认为是应该直接把MySQL进程强行重启，还是应该让它自己执行完成呢？为什么呢？")]),t._v(" "),_("p",[t._v("你可以把你的结论和分析写在留言区，我会在下一篇文章的末尾和你讨论这个问题。感谢你的收听，也欢迎你把这篇文章分享给更多的朋友一起阅读。")]),t._v(" "),t._m(21),t._v(" "),_("p",[t._v("我在上一篇文章末尾，给你留下的问题是，希望你分享一下误删数据的处理经验。")]),t._v(" "),t._m(22),t._v(" "),_("p",[t._v("从浏览器拷贝文本执行，是一个非常不规范的操作。除了这个例子里面说的SQL语句截断问题，还可能存在乱码问题。")]),t._v(" "),_("p",[t._v("一般这种操作，如果脚本的开发和执行不是同一个人，需要开发同学把脚本放到git上，然后把git地址，以及文件的md5发给运维同学。")]),t._v(" "),_("p",[t._v("这样就要求运维同学在执行命令之前，确认要执行的文件的md5，跟之前开发同学提供的md5相同才能继续执行。")]),t._v(" "),_("p",[t._v("另外，我要特别点赞一下@苍茫 同学复现问题的思路和追查问题的态度。")]),t._v(" "),t._m(23),t._v(" "),_("p",[t._v("不过，这个方案最大的敌人是这样的思想：这是个小操作，不需要这么严格。")]),t._v(" "),t._m(24),t._v(" "),_("p",[t._v("为了数据安全和服务稳定，多做点预防方案的设计讨论，总好过故障处理和事后复盘。方案设计讨论会和故障复盘会，这两种会议的会议室气氛完全不一样。经历过的同学一定懂的。")]),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/17/d0/17f88dc70c3fbe06a7738a0ac01db4d0.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"收到kill以后，线程做什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#收到kill以后，线程做什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" 收到kill以后，线程做什么？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("其实，这跟Linux的kill命令类似，kill -N pid并不是让进程直接停止，而是给进程发一个信号，然后进程处理这个信号，进入终止逻辑。只是对于MySQL的kill命令来说，不需要传信号量参数，就只有“停止”这个命令。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("实现上，当用户执行kill query thread_id_B时，MySQL里处理kill命令的线程做了两件事：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("把session B的运行状态改成THD::KILL_QUERY(将变量killed赋值为THD::KILL_QUERY)；")])]),this._v(" "),e("li",[e("p",[this._v("给session B的执行线程发一个信号。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("一个语句执行过程中有多处“埋点”，在这些“埋点”的地方判断线程状态，如果发现线程状态是THD::KILL_QUERY，才开始进入语句终止逻辑；")])]),this._v(" "),e("li",[e("p",[this._v("如果处于等待状态，必须是一个可以被唤醒的等待，否则根本不会执行到“埋点”处；")])]),this._v(" "),e("li",[e("p",[this._v("语句从开始进入终止逻辑，到终止逻辑完全完成，是有一个过程的。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/32/6e/32e4341409fabfe271db3dd4c4df696e.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("sesssion C执行的时候被堵住了；")])]),this._v(" "),e("li",[e("p",[this._v("但是session D执行的kill query C命令却没什么效果，")])]),this._v(" "),e("li",[e("p",[this._v("直到session E执行了kill connection命令，才断开了session C的连接，提示“Lost connection to MySQL server during query”，")])]),this._v(" "),e("li",[e("p",[this._v("但是这时候，如果在session E中执行show processlist，你就能看到下面这个图。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/91/53/915c20e4c11b104d7bcf9d3457304c53.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("为什么在执行kill query命令时，这条语句不像第一个例子的update语句一样退出呢？")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("把12号线程状态设置为KILL_CONNECTION；")])]),this._v(" "),e("li",[e("p",[this._v("关掉12号线程的网络连接。因为有这个操作，所以你会看到，这时候session C收到了断开连接的提示。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("如果一个线程的状态是KILL_CONNECTION，就把Command列显示成Killed。\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("超大事务执行期间被kill。这时候，回滚操作需要对事务执行期间生成的所有新数据版本做回收操作，耗时很长。")])]),this._v(" "),e("li",[e("p",[this._v("大查询回滚。如果查询过程中生成了比较大的临时文件，加上此时文件系统压力大，删除临时文件可能需要等待IO资源，导致耗时较长。")])]),this._v(" "),e("li",[e("p",[this._v("DDL命令执行到最后阶段，如果被kill，需要删除中间过程的临时文件，也可能受IO资源影响耗时较久。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"另外两个关于客户端的误解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#另外两个关于客户端的误解","aria-hidden":"true"}},[this._v("#")]),this._v(" 另外两个关于客户端的误解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("第一个误解是：如果库里面的表特别多，连接就会很慢。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/7e/83/7e4666bfd580505180c77447d1f44c83.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("执行show databases；")])]),this._v(" "),e("li",[e("p",[this._v("切到db1库，执行show tables；")])]),this._v(" "),e("li",[e("p",[this._v("把这两个命令的结果用于构建一个本地的哈希表。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("也就是说，"),e("strong",[this._v("我们感知到的连接过程慢，其实并不是连接慢，也不是服务端慢，而是客户端慢。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[e("p",[this._v("一种是本地缓存，也就是在本地开一片内存，先把结果存起来。如果你用API开发，对应的就是mysql_store_result 方法。")])]),this._v(" "),e("li",[e("p",[this._v("另一种是不缓存，读一个处理一个。如果你用API开发，对应的就是mysql_use_result方法。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("第一点，就是前面提到的，跳过表名自动补全功能。")]),this._v(" "),e("li",[this._v("第二点，mysql_store_result需要申请本地内存来缓存查询结果，如果查询结果太大，会耗费较多的本地内存，可能会影响客户端本地机器的性能；")]),this._v(" "),e("li",[this._v("第三点，是不会把执行命令记录到本地的命令历史文件。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 小结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"上期问题时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上期问题时间","aria-hidden":"true"}},[this._v("#")]),this._v(" 上期问题时间")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("@苍茫 同学提到了一个例子")]),this._v("，我觉得值得跟大家分享一下。运维的同学直接拷贝文本去执行，SQL语句截断，导致数据库执行出错。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("@linhui0705 同学提到的“四个脚本”的方法，我非常推崇")]),this._v("。这四个脚本分别是：备份脚本、执行脚本、验证脚本和回滚脚本。如果能够坚持做到，即使出现问题，也是可以很快恢复的，一定能降低出现故障的概率。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("@Knight²º¹⁸ 给了一个保护文件的方法")]),this._v("，我之前没有用过这种方法，不过这确实是一个不错的思路。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://static001.geekbang.org/resource/image/09/77/09c1073f99cf71d2fb162a716b5fa577.jpg",alt:""}})])}],!1,null,null,null);e.default=s.exports}}]);