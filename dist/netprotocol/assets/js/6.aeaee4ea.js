(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{207:function(v,_,t){"use strict";t.r(_);var e=t(0),a=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("div",{staticClass:"content"},[t("p",[v._v("前面我们讲到了数据中心，里面很复杂，但是有的公司有多个数据中心，需要将多个数据中心连接起来，或者需要办公室和数据中心连接起来。这该怎么办呢？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("第一种方式是走公网，但是公网太不安全，你的隐私可能会被别人偷窥。")])]),v._v(" "),t("li",[t("p",[v._v("第二种方式是租用专线的方式把它们连起来，这是土豪的做法，需要花很多钱。")])]),v._v(" "),t("li",[t("p",[v._v("第三种方式是用VPN来连接，这种方法比较折中，安全又不贵。")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/9f/68/9f797934cb5cf40543b716d97e214868.jpg",alt:""}})]),v._v(" "),t("p",[t("strong",[v._v("VPN")]),v._v("，全名"),t("strong",[v._v("Virtual Private Network")]),v._v("，"),t("strong",[v._v("虚拟专用网")]),v._v("，就是利用开放的公众网络，建立专用数据传输通道，将远程的分支机构、移动办公人员等连接起来。")]),v._v(" "),t("h2",{attrs:{id:"vpn是如何工作的？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpn是如何工作的？","aria-hidden":"true"}},[v._v("#")]),v._v(" VPN是如何工作的？")]),v._v(" "),t("p",[v._v("VPN通过隧道技术在公众网络上仿真一条点到点的专线，是通过利用一种协议来传输另外一种协议的技术，这里面涉及三种协议："),t("strong",[v._v("乘客协议")]),v._v("、"),t("strong",[v._v("隧道协议")]),v._v("和"),t("strong",[v._v("承载协议")]),v._v("。")]),v._v(" "),t("p",[v._v("我们以IPsec协议为例来说明。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/a7/f1/a7c0a7fd2334d7145d093cf24bc6d7f1.jpg",alt:""}})]),v._v(" "),t("p",[v._v("你知道如何通过自驾进行海南游吗？这其中，你的车怎么通过琼州海峡呢？这里用到轮渡，其实这就用到"),t("strong",[v._v("隧道协议")]),v._v("。")]),v._v(" "),t("p",[v._v("在广州这边开车是有“协议”的，例如靠右行驶、红灯停、绿灯行，这个就相当于“被封装”的"),t("strong",[v._v("乘客协议")]),v._v("。当然在海南那面，开车也是同样的协议。这就相当于需要连接在一起的一个公司的两个分部。")]),v._v(" "),t("p",[v._v("但是在海上坐船航行，也有它的协议，例如要看灯塔、要按航道航行等。这就是外层的"),t("strong",[v._v("承载协议")]),v._v("。")]),v._v(" "),t("p",[v._v("那我的车如何从广州到海南呢？这就需要你遵循开车的协议，将车开上轮渡，所有通过轮渡的车都关在船舱里面，按照既定的规则排列好，这就是"),t("strong",[v._v("隧道协议")]),v._v("。")]),v._v(" "),t("p",[v._v("在大海上，你的车是关在船舱里面的，就像在隧道里面一样，这个时候内部的乘客协议，也即驾驶协议没啥用处，只需要船遵从外层的承载协议，到达海南就可以了。")]),v._v(" "),t("p",[v._v("到达之后，外部承载协议的任务就结束了，打开船舱，将车开出来，就相当于取下承载协议和隧道协议的头。接下来，在海南该怎么开车，就怎么开车，还是内部的乘客协议起作用。")]),v._v(" "),t("p",[v._v("在最前面的时候说了，直接使用公网太不安全，所以接下来我们来看一种十分安全的VPN，"),t("strong",[v._v("IPsec VPN")]),v._v("。这是基于IP协议的"),t("strong",[v._v("安全隧道协议")]),v._v("，为了保证在公网上面信息的安全，因而采取了一定的机制保证安全性。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("机制一："),t("strong",[v._v("私密性")]),v._v("，防止信息泄漏给未经授权的个人，通过加密把数据从明文变成无法读懂的密文，从而确保数据的私密性。"),t("br"),v._v("\n前面讲HTTPS的时候，说过加密可以分为对称加密和非对称加密。对称加密速度快一些。而VPN一旦建立，需要传输大量数据，因而我们采取对称加密。但是同样，对称加密还是存在加密秘钥如何传输的问题，这里需要用到因特网密钥交换（IKE，Internet Key Exchange）协议。")])]),v._v(" "),t("li",[t("p",[v._v("机制二："),t("strong",[v._v("完整性")]),v._v("，数据没有被非法篡改，通过对数据进行hash运算，产生类似于指纹的数据摘要，以保证数据的完整性。")])]),v._v(" "),t("li",[t("p",[v._v("机制三："),t("strong",[v._v("真实性")]),v._v("，数据确实是由特定的对端发出，通过身份认证可以保证数据的真实性。")])])]),v._v(" "),t("p",[v._v("那如何保证对方就是真正的那个人呢？")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("第一种方法就是"),t("strong",[v._v("预共享密钥")]),v._v("，也就是双方事先商量好一个暗号，比如“天王盖地虎，宝塔镇河妖”，对上了，就说明是对的。")])]),v._v(" "),t("li",[t("p",[v._v("另外一种方法就是"),t("strong",[v._v("用数字签名来验证")]),v._v("。咋签名呢？当然是使用私钥进行签名，私钥只有我自己有，所以如果对方能用我的数字证书里面的公钥解开，就说明我是我。")])])]),v._v(" "),t("p",[v._v("基于以上三个特性，组成了"),t("strong",[v._v("IPsec VPN的协议簇")]),v._v("。这个协议簇内容比较丰富。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/34/af/34a952bd1abeec19460b8d5dca5cd0af.jpg",alt:""}})]),v._v(" "),t("p",[v._v("在这个协议簇里面，有两种协议，这两种协议的区别在于封装网络包的格式不一样。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("一种协议称为"),t("strong",[v._v("AH")]),v._v("（"),t("strong",[v._v("Authentication Header")]),v._v("），只能进行数据摘要 ，不能实现数据加密。")])]),v._v(" "),t("li",[t("p",[v._v("还有一种"),t("strong",[v._v("ESP")]),v._v("（"),t("strong",[v._v("Encapsulating Security Payload")]),v._v("），能够进行数据加密和数据摘要。")])])]),v._v(" "),t("p",[v._v("在这个协议簇里面，还有两类算法，分别是"),t("strong",[v._v("加密算法")]),v._v("和"),t("strong",[v._v("摘要算法")]),v._v("。")]),v._v(" "),t("p",[v._v("这个协议簇还包含两大组件，一个用于VPN的双方要进行对称密钥的交换的"),t("strong",[v._v("IKE组件")]),v._v("，另一个是VPN的双方要对连接进行维护的"),t("strong",[v._v("SA（Security Association）组件")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"ipsec-vpn的建立过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipsec-vpn的建立过程","aria-hidden":"true"}},[v._v("#")]),v._v(" IPsec VPN的建立过程")]),v._v(" "),t("p",[v._v("下面来看IPsec VPN的建立过程，这个过程分两个阶段。")]),v._v(" "),t("p",[t("strong",[v._v("第一个阶段，建立IKE自己的SA")]),v._v("。这个SA用来维护一个通过身份认证和安全保护的通道，为第二个阶段提供服务。在这个阶段，通过DH（Diffie-Hellman）算法计算出一个对称密钥K。")]),v._v(" "),t("p",[v._v("DH算法是一个比较巧妙的算法。客户端和服务端约定两个公开的质数p和q，然后客户端随机产生一个数a作为自己的私钥，服务端随机产生一个b作为自己的私钥，客户端可以根据p、q和a计算出公钥A，服务端根据p、q和b计算出公钥B，然后双方交换公钥A和B。")]),v._v(" "),t("p",[v._v("到此客户端和服务端可以根据已有的信息，各自独立算出相同的结果K，就是"),t("strong",[v._v("对称密钥")]),v._v("。但是这个过程，对称密钥从来没有在通道上传输过，只传输了生成密钥的材料，通过这些材料，截获的人是无法算出的。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/28/78/28a3938ab8efaf9fa7f313a46d0e1478.jpg",alt:""}})]),v._v(" "),t("p",[v._v("有了这个对称密钥K，接下来是"),t("strong",[v._v("第二个阶段，建立IPsec SA")]),v._v("。在这个SA里面，双方会生成一个随机的对称密钥M，由K加密传给对方，然后使用M进行双方接下来通信的数据。对称密钥M是有过期时间的，会过一段时间，重新生成一次，从而防止被破解。")]),v._v(" "),t("p",[v._v("IPsec SA里面有以下内容：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("SPI（Security Parameter Index），用于标识不同的连接；")])]),v._v(" "),t("li",[t("p",[v._v("双方商量好的加密算法、哈希算法和封装模式；")])]),v._v(" "),t("li",[t("p",[v._v("生存周期，超过这个周期，就需要重新生成一个IPsec SA，重新生成对称密钥。")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/87/59/87a34817f22ed4a2afb58e8f6496f159.jpg",alt:""}})]),v._v(" "),t("p",[v._v("当IPsec建立好，接下来就可以开始打包封装传输了。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/71/ca/71fa17f5bb21c12aec1234eec85a6dca.jpg",alt:""}})]),v._v(" "),t("p",[v._v("左面是原始的IP包，在IP头里面，会指定上一层的协议为TCP。ESP要对IP包进行封装，因而IP头里面的上一层协议为ESP。在ESP的正文里面，ESP的头部有双方商讨好的SPI，以及这次传输的序列号。")]),v._v(" "),t("p",[v._v("接下来全部是加密的内容。可以通过对称密钥进行解密，解密后在正文的最后，指明了里面的协议是什么。如果是IP，则需要先解析IP头，然后解析TCP头，这是从隧道出来后解封装的过程。")]),v._v(" "),t("p",[v._v("有了IPsec VPN之后，客户端发送的明文的IP包，都会被加上ESP头和IP头，在公网上传输，由于加密，可以保证不被窃取，到了对端后，去掉ESP的头，进行解密。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/df/b5/dfc5a7934added3cc11d9c95a69a9bb5.jpg",alt:""}})]),v._v(" "),t("p",[v._v("这种点对点的基于IP的VPN，能满足互通的要求，但是速度往往比较慢，这是由底层IP协议的特性决定的。IP不是面向连接的，是尽力而为的协议，每个IP包自由选择路径，到每一个路由器，都自己去找下一跳，丢了就丢了，是靠上一层TCP的重发来保证可靠性。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/29/8e/29f4dff1f40a252dda2ac6f9d1d4088e.jpg",alt:""}})]),v._v(" "),t("p",[v._v("因为IP网络从设计的时候，就认为是不可靠的，所以即使同一个连接，也可能选择不同的道路，这样的好处是，一条道路崩溃的时候，总有其他的路可以走。当然，带来的代价就是，不断的路由查找，效率比较差。")]),v._v(" "),t("p",[v._v("和IP对应的另一种技术称为ATM。这种协议和IP协议的不同在于，它是面向连接的。你可以说TCP也是面向连接的啊。这两个不同，ATM和IP是一个层次的，和TCP不是一个层次的。")]),v._v(" "),t("p",[v._v("另外，TCP所谓的面向连接，是不停地重试来保证成功，其实下层的IP还是不面向连接的，丢了就丢了。ATM是传输之前先建立一个连接，形成一个虚拟的通路，一旦连接建立了，所有的包都按照相同的路径走，不会分头行事。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/af/48/afea2a2cecb8bfe6c1c40585000f1c48.jpg",alt:""}})]),v._v(" "),t("p",[v._v("好处是不需要每次都查路由表的，虚拟路径已经建立，打上了标签，后续的包傻傻的跟着走就是了，不用像IP包一样，每个包都思考下一步怎么走，都按相同的路径走，这样效率会高很多。")]),v._v(" "),t("p",[v._v("但是一旦虚拟路径上的某个路由器坏了，则这个连接就断了，什么也发不过去了，因为其他的包还会按照原来的路径走，都掉坑里了，它们不会选择其他的路径走。")]),v._v(" "),t("p",[v._v("ATM技术虽然没有成功，但其屏弃了繁琐的路由查找，改为简单快速的标签交换，将具有全局意义的路由表改为只有本地意义的标签表，这些都可以大大提高一台路由器的转发功力。")]),v._v(" "),t("p",[v._v("有没有一种方式将两者的优点结合起来呢？这就是"),t("strong",[v._v("多协议标签交换")]),v._v("（"),t("strong",[v._v("MPLS")]),v._v("，"),t("strong",[v._v("Multi-Protocol Label Switching")]),v._v("）。MPLS的格式如图所示，在原始的IP头之外，多了MPLS的头，里面可以打标签。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/ab/32/ab77ad0cec6a26f43bacb3f51b0c8d32.jpg",alt:""}})]),v._v(" "),t("p",[v._v("在二层头里面，有类型字段，0x0800表示IP，0x8847表示MPLS Label。")]),v._v(" "),t("p",[v._v("在MPLS头里面，首先是标签值占20位，接着是3位实验位，再接下来是1位栈底标志位，表示当前标签是否位于栈底了。这样就允许多个标签被编码到同一个数据包中，形成标签栈。最后是8位TTL存活时间字段，如果标签数据包的出发TTL值为0，那么该数据包在网络中的生命期被认为已经过期了。")]),v._v(" "),t("p",[v._v("有了标签，还需要设备认这个标签，并且能够根据这个标签转发，这种能够转发标签的路由器称为"),t("strong",[v._v("标签交换路由器")]),v._v("（LSR，Label Switching Router）。")]),v._v(" "),t("p",[v._v("这种路由器会有两个表格，一个就是传统的FIB，也即路由表，另一个就是LFIB，标签转发表。有了这两个表，既可以进行普通的路由转发，也可以进行基于标签的转发。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/78/ee/782742e09ddddcef169c9982b65c69ee.jpg",alt:""}})]),v._v(" "),t("p",[v._v("有了标签转发表，转发的过程如图所示，就不用每次都进行普通路由的查找了。")]),v._v(" "),t("p",[v._v("这里我们区分MPLS区域和非MPLS区域。在MPLS区域中间，使用标签进行转发，非MPLS区域，使用普通路由转发，在边缘节点上，需要有能力将对于普通路由的转发，变成对于标签的转发。")]),v._v(" "),t("p",[v._v("例如图中要访问114.1.1.1，在边界上查找普通路由，发现马上要进入MPLS区域了，进去了对应标签1，于是在IP头外面加一个标签1，在区域里面，标签1要变成标签3，标签3到达出口边缘，将标签去掉，按照路由发出。")]),v._v(" "),t("p",[v._v("这样一个通过标签转换而建立的路径称为LSP，标签交换路径。在一条LSP上，沿数据包传送的方向，相邻的LSR分别叫"),t("strong",[v._v("上游LSR")]),v._v("（"),t("strong",[v._v("upstream LSR")]),v._v("）和"),t("strong",[v._v("下游LSR")]),v._v("（"),t("strong",[v._v("downstream LSR")]),v._v("）。")]),v._v(" "),t("p",[v._v("有了标签，转发是很简单的事，但是如何生成标签，却是MPLS中最难修炼的部分。在MPLS秘笈中，这部分被称为"),t("strong",[v._v("LDP")]),v._v("（"),t("strong",[v._v("Label Distribution Protocol")]),v._v("），是一个动态的生成标签的协议。")]),v._v(" "),t("p",[v._v("其实LDP与IP帮派中的路由协议十分相像，通过LSR的交互，互相告知去哪里应该打哪个标签，称为标签分发，往往是从下游开始的。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/94/84/947e2fece5e3b2750b0b73c9458f3784.jpg",alt:""}})]),v._v(" "),t("p",[v._v("如果有一个边缘节点发现自己的路由表中出现了新的目的地址，它就要给别人说，我能到达一条新的路径了。")]),v._v(" "),t("p",[v._v("如果此边缘节点存在上游LSR，并且尚有可供分配的标签，则该节点为新的路径分配标签，并向上游发出标签映射消息，其中包含分配的标签等信息。")]),v._v(" "),t("p",[v._v("收到标签映射消息的LSR记录相应的标签映射信息，在其标签转发表中增加相应的条目。此LSR为它的上游LSR分配标签，并继续向上游LSR发送标签映射消息。")]),v._v(" "),t("p",[v._v("当入口LSR收到标签映射消息时，在标签转发表中增加相应的条目。这时，就完成了LSP的建立。有了标签，转发轻松多了，但是这个和VPN什么关系呢？")]),v._v(" "),t("p",[v._v("可以想象，如果我们VPN通道里面包的转发，都是通过标签的方式进行，效率就会高很多。所以要想个办法把MPLS应用于VPN。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/ba/ec/bae67c4e3f4a4127bad07de4bb577bec.jpg",alt:""}})]),v._v(" "),t("p",[v._v("在MPLS VPN中，网络中的路由器分成以下几类：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("PE（Provider Edge）：运营商网络与客户网络相连的边缘网络设备；")])]),v._v(" "),t("li",[t("p",[v._v("CE（Customer Edge）：客户网络与PE相连接的边缘设备；")])]),v._v(" "),t("li",[t("p",[v._v("P（Provider）：这里特指运营商网络中除PE之外的其他运营商网络设备。")])])]),v._v(" "),t("p",[v._v("为什么要这样分呢？因为我们发现，在运营商网络里面，也即P Router之间，使用标签是没有问题的，因为都在运营商的管控之下，对于网段，路由都可以自己控制。但是一旦客户要接入这个网络，就复杂得多。")]),v._v(" "),t("p",[v._v("首先是客户地址重复的问题。客户所使用的大多数都是私网的地址(192.168.X.X;10.X.X.X;172.X.X.X)，而且很多情况下都会与其它的客户重复。")]),v._v(" "),t("p",[v._v("比如，机构A和机构B都使用了192.168.101.0/24网段的地址，这就发生了地址空间重叠（Overlapping Address Spaces）。")]),v._v(" "),t("p",[v._v("首先困惑的是BGP协议，既然VPN将两个数据中心连起来，应该看起来像一个数据中心一样，那么如何到达另一端需要通过BGP将路由广播过去，传统BGP无法正确处理地址空间重叠的VPN的路由。")]),v._v(" "),t("p",[v._v("假设机构A和机构B都使用了192.168.101.0/24网段的地址，并各自发布了一条去往此网段的路由，BGP将只会选择其中一条路由，从而导致去往另一个VPN的路由丢失。")]),v._v(" "),t("p",[v._v("所以PE路由器之间使用特殊的MP-BGP来发布VPN路由，在相互沟通的消息中，在一般32位IPv4的地址之前加上一个客户标示的区分符用于客户地址的区分，这种称为VPN-IPv4地址族，这样PE路由器会收到如下的消息，机构A的192.168.101.0/24应该往这面走，机构B的192.168.101.0/24则应该去另外一个方向。")]),v._v(" "),t("p",[v._v("另外困惑的是"),t("strong",[v._v("路由表")]),v._v("，当两个客户的IP包到达PE的时候，PE就困惑了，因为网段是重复的。")]),v._v(" "),t("p",[v._v("如何区分哪些路由是属于哪些客户VPN内的？如何保证VPN业务路由与普通路由不相互干扰？")]),v._v(" "),t("p",[v._v("在PE上，可以通过VRF（VPN Routing&Forwarding Instance）建立每个客户一个路由表，与其它VPN客户路由和普通路由相互区分。可以理解为专属于客户的小路由器。")]),v._v(" "),t("p",[v._v("远端PE通过MP-BGP协议把业务路由放到近端PE，近端PE根据不同的客户选择出相关客户的业务路由放到相应的VRF路由表中。")]),v._v(" "),t("p",[v._v("VPN报文转发采用两层标签方式：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("第一层（外层）标签在骨干网内部进行交换，指示从PE到对端PE的一条LSP。VPN报文利用这层标签，可以沿LSP到达对端PE；")])]),v._v(" "),t("li",[t("p",[v._v("第二层（内层）标签在从对端PE到达CE时使用，在PE上，通过查找VRF表项，指示报文应被送到哪个VPN用户，或者更具体一些，到达哪一个CE。这样，对端PE根据内层标签可以找到转发报文的接口。")])])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/3c/dd/3cd18d212bf76e7151ea73aa65ef48dd.jpg",alt:""}})]),v._v(" "),t("p",[v._v("我们来举一个例子，看MPLS VPN的包发送过程。")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("机构A和机构B都发出一个目的地址为192.168.101.0/24的IP报文，分别由各自的CE将报文发送至PE。")])]),v._v(" "),t("li",[t("p",[v._v("PE会根据报文到达的接口及目的地址查找VPN实例表项VRF，匹配后将报文转发出去，同时打上内层和外层两个标签。假设通过MP-BGP配置的路由，两个报文在骨干网走相同的路径。")])]),v._v(" "),t("li",[t("p",[v._v("MPLS网络利用报文的外层标签，将报文传送到出口PE，报文在到达出口PE 2前一跳时已经被剥离外层标签，仅含内层标签。")])]),v._v(" "),t("li",[t("p",[v._v("出口PE根据内层标签和目的地址查找VPN实例表项VRF，确定报文的出接口，将报文转发至各自的CE。")])]),v._v(" "),t("li",[t("p",[v._v("CE根据正常的IP转发过程将报文传送到目的地。")])])]),v._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[v._v("#")]),v._v(" 小结")]),v._v(" "),t("p",[v._v("好了，这一节就到这里了，我们来总结一下：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("VPN可以将一个机构的多个数据中心通过隧道的方式连接起来，让机构感觉在一个数据中心里面，就像自驾游通过琼州海峡一样；")])]),v._v(" "),t("li",[t("p",[v._v("完全基于软件的IPsec VPN可以保证私密性、完整性、真实性、简单便宜，但是性能稍微差一些；")])]),v._v(" "),t("li",[t("p",[v._v("MPLS-VPN综合和IP转发模式和ATM的标签转发模式的优势，性能较好，但是需要从运营商购买。")])])]),v._v(" "),t("p",[v._v("接下来，给你留两个思考题：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("当前业务的高可用性和弹性伸缩很重要，所以很多机构都会在自建私有云之外，采购公有云，你知道私有云和公有云应该如何打通吗？")])]),v._v(" "),t("li",[t("p",[v._v("前面所有的上网行为，都是基于电脑的，但是移动互联网越来越成为核心，你知道手机上网都需要哪些协议吗？")])])]),v._v(" "),t("p",[v._v("我们的专栏更新到第22讲，不知你掌握得如何？每节课后我留的思考题，你都有没有认真思考，并在留言区写下答案呢？我会从"),t("strong",[v._v("已发布的文章中选出一批认真留言的同学")]),v._v("，赠送学习奖励礼券和我整理的独家网络协议知识图谱。")]),v._v(" "),t("p",[v._v("欢迎你留言和我讨论。趣谈网络协议，我们下期见！")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/b5/fb/b5bc14cb81d3630919fee94a512cc3fb.jpg",alt:""}})])])}],!1,null,null,null);_.default=a.exports}}]);