(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{202:function(e,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[e._v("今天，我们来一起了解一下JDK中用于监控及诊断工具。本篇中我将使用刚刚发布的Java 11版本的工具进行示范。")]),e._v(" "),e._m(0),e._v(" "),a("p",[e._v("你可能用过"),a("code",[e._v("ps")]),e._v("命令，打印所有正在运行的进程的相关信息。JDK中的"),a("code",[e._v("jps")]),e._v("命令（"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jps.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("帮助文档"),a("OutboundLink")],1),e._v("）沿用了同样的概念：它将打印所有正在运行的Java进程的相关信息。")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("具体的示例如下所示：")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("当获得Java进程的进程ID之后，我们便可以调用接下来介绍的各项监控及诊断工具了。")]),e._v(" "),e._m(4),e._v(" "),a("p",[a("code",[e._v("jstat")]),e._v("命令（"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jstat.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("帮助文档"),a("OutboundLink")],1),e._v("）可用来打印目标Java进程的性能数据。它包括多条子命令，如下所示：")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),a("p",[e._v("当使用默认的G1 GC时，输出结果则有另一些特征：")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),a("p",[e._v("这是因为，当使用G1 GC时，Java虚拟机不再设置Eden区、Survivor区，老年代区的内存边界，而是将堆划分为若干个等长内存区域。")]),e._v(" "),a("p",[e._v("每个内存区域都可以作为Eden区、Survivor区以及老年代区中的任一种，并且可以在不同区域类型之间来回切换。（"),a("a",{attrs:{href:"https://www.oracle.com/technetwork/tutorials/tutorials-1876574.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考链接"),a("OutboundLink")],1),e._v("）")]),e._v(" "),a("p",[e._v("换句话说，逻辑上我们只有一个Survivor区。当需要迁移Survivor区中的数据时（即Copying GC），我们只需另外申请一个或多个内存区域，作为新的Survivor区。")]),e._v(" "),a("p",[e._v("因此，Java虚拟机决定在使用G1 GC时，将所有Survivor内存区域的总容量以及已使用量存放至S1C和S1U中，而S0C和S0U则被设置为0。")]),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("在这种情况下，Java虚拟机会将这块内存区域回收，并标记为可分配的状态。这样子做的结果是，堆中可能完全没有Survivor内存区域，因而相应的S1C和S1U将会是0。")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),a("p",[e._v("我们可以比较Java进程的启动时间以及总GC时间（GCT列），或者两次测量的间隔时间以及总GC时间的增量，来得出GC时间占运行时间的比例。")]),e._v(" "),a("p",[e._v("如果该比例超过20%，则说明目前堆的压力较大；如果该比例超过90%，则说明堆里几乎没有可用空间，随时都可能抛出OOM异常。")]),e._v(" "),e._m(18),e._v(" "),a("p",[e._v("然后，我们每隔一段较长的时间重复一次上述操作，来获得多组OU最小值。如果这些值呈上涨趋势，则说明该Java程序的老年代内存已使用量在不断上涨，这意味着无法回收的对象在不断增加，因此很有可能存在内存泄漏。")]),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),a("p",[e._v("在这种情况下，我们便可以请"),a("code",[e._v("jmap")]),e._v("命令（"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jmap.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("帮助文档"),a("OutboundLink")],1),e._v("）出马，分析Java虚拟机堆中的对象。")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),a("p",[e._v("这里"),a("code",[e._v("format=b")]),e._v("将使"),a("code",[e._v("jmap")]),e._v("导出与"),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/tooldescr008.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hprof"),a("OutboundLink")],1),e._v("（在Java 9中已被移除）、"),a("code",[e._v("-XX:+HeapDumpAfterFullGC")]),e._v("、"),a("code",[e._v("-XX:+HeapDumpOnOutOfMemoryError")]),e._v("格式一致的文件。这种格式的文件可以被其他GUI工具查看，具体我会在下一篇中进行演示。")]),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),a("p",[e._v("关于这种长时间等待的情况，你可以通过下面这段程序来复现：")]),e._v(" "),e._m(29),e._v(" "),a("p",[a("code",[e._v("jmap")]),e._v("（以及接下来的"),a("code",[e._v("jinfo")]),e._v("、"),a("code",[e._v("jstack")]),e._v("和"),a("code",[e._v("jcmd")]),e._v("）依赖于Java虚拟机的"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/docs/api/jdk.attach/com/sun/tools/attach/package-summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Attach API"),a("OutboundLink")],1),e._v("，因此只能监控本地Java进程。")]),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),a("p",[a("code",[e._v("jinfo")]),e._v("命令（"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jinfo.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("帮助文档"),a("OutboundLink")],1),e._v("）可用来查看目标Java进程的参数，如传递给Java虚拟机的"),a("code",[e._v("-X")]),e._v("（即输出中的jvm_args）、"),a("code",[e._v("-XX")]),e._v("参数（即输出中的VM Flags），以及可在Java层面通过"),a("code",[e._v("System.getProperty")]),e._v("获取的"),a("code",[e._v("-D")]),e._v("参数（即输出中的System Properties）。")]),e._v(" "),a("p",[e._v("具体的示例如下所示：")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),a("p",[e._v('你可以通过下述命令查看其他"manageable"虚拟机参数：')]),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),a("p",[a("code",[e._v("jstack")]),e._v("命令（"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jstack.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("帮助文档"),a("OutboundLink")],1),e._v("）可以用来打印目标Java进程中各个线程的栈轨迹，以及这些线程所持有的锁。")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),a("p",[e._v("你还可以直接使用"),a("code",[e._v("jcmd")]),e._v("命令（"),a("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/11/tools/jcmd.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("帮助文档"),a("OutboundLink")],1),e._v("），来替代前面除了"),a("code",[e._v("jstat")]),e._v("之外的所有命令。具体的替换规则你可以参考下表。")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),a("p",[e._v("今天我介绍了JDK中用于监控及诊断的命令行工具。我们再来回顾一下。")]),e._v(" "),e._m(44),e._v(" "),a("hr"),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps","aria-hidden":"true"}},[this._v("#")]),this._v(" jps")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("在默认情况下，"),a("code",[e._v("jps")]),e._v("的输出信息包括Java进程的进程ID以及主类名。我们还可以通过追加参数，来打印额外的信息。例如，"),a("code",[e._v("-l")]),e._v("将打印模块名以及包名；"),a("code",[e._v("-v")]),e._v("将打印传递给Java虚拟机的参数（如"),a("code",[e._v("-XX:+UnlockExperimentalVMOptions -XX:+UseZGC")]),e._v("）；"),a("code",[e._v("-m")]),e._v("将打印传递给主类的参数。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ jps -mlv\n18331 org.example.Foo Hello World\n18332 jdk.jcmd/sun.tools.jps.Jps -mlv -Dapplication.home=/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home -Xms8m -Djdk.module.main=jdk.jcmd\n")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("需要注意的是，如果某Java进程关闭了默认开启的"),a("code",[e._v("UsePerfData")]),e._v("参数（即使用参数"),a("code",[e._v("-XX:-UsePerfData")]),e._v("），那么"),a("code",[e._v("jps")]),e._v("命令（以及下面介绍的"),a("code",[e._v("jstat")]),e._v("）将无法探知该Java进程。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jstat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstat","aria-hidden":"true"}},[this._v("#")]),this._v(" jstat")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ jstat -options\n-class\n-compiler\n-gc\n-gccapacity\n-gccause\n-gcmetacapacity\n-gcnew\n-gcnewcapacity\n-gcold\n-gcoldcapacity\n-gcutil\n-printcompilation\n")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("在这些子命令中，"),a("code",[e._v("-class")]),e._v("将打印类加载相关的数据，"),a("code",[e._v("-compiler")]),e._v("和"),a("code",[e._v("-printcompilation")]),e._v("将打印即时编译相关的数据。剩下的都是以"),a("code",[e._v("-gc")]),e._v("为前缀的子命令，它们将打印垃圾回收相关的数据。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("默认情况下，"),t("code",[this._v("jstat")]),this._v("只会打印一次性能数据。我们可以将它配置为每隔一段时间打印一次，直至目标Java进程终止，或者达到我们所配置的最大打印次数。具体示例如下所示：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("# Usage: jstat -outputOptions [-t] [-hlines] VMID [interval [count]]\n$ jstat -gc 22126 1s 4\nS0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT    CGC    CGCT     GCT   \n17472,0 17472,0  0,0    0,0   139904,0 47146,4   349568,0   21321,0   30020,0 28001,8 4864,0 4673,4     22    0,080   3      0,270   0      0,000    0,350\n17472,0 17472,0 420,6   0,0   139904,0 11178,4   349568,0   21321,0   30020,0 28090,1 4864,0 4674,2     28    0,084   3      0,270   0      0,000    0,354\n17472,0 17472,0  0,0   403,9  139904,0 139538,4  349568,0   21323,4   30020,0 28137,2 4864,0 4674,2     34    0,088   4      0,359   0      0,000    0,446\n17472,0 17472,0  0,0    0,0   139904,0   0,0     349568,0   21326,1   30020,0 28093,6 4864,0 4673,4     38    0,091   5      0,445   0      0,000    0,536\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("当监控本地环境的Java进程时，VMID可以简单理解为PID。如果需要监控远程环境的Java进程，你可以参考jstat的帮助文档。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在上面这个示例中，22126进程是一个使用了CMS垃圾回收器的Java进程。我们利用"),t("code",[this._v("jstat")]),this._v("的"),t("code",[this._v("-gc")]),this._v("子命令，来打印该进程垃圾回收相关的数据。命令最后的"),t("code",[this._v("1s 4")]),this._v("表示每隔1秒打印一次，共打印4次。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在"),t("code",[this._v("-gc")]),this._v("子命令的输出中，前四列分别为两个Survivor区的容量（Capacity）和已使用量（Utility）。我们可以看到，这两个Survivor区的容量相等，而且始终有一个Survivor区的内存使用量为0。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ jstat -gc 22208 1s\nS0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT    CGC    CGCT     GCT   \n0,0   16384,0  0,0   16384,0 210944,0 192512,0  133120,0    5332,5   28848,0 26886,4 4864,0 4620,5     19    0,067   1      0,016   2      0,002    0,084\n0,0   16384,0  0,0   16384,0 210944,0 83968,0   133120,0    5749,9   29104,0 27132,8 4864,0 4621,0     21    0,078   1      0,016   2      0,002    0,095\n0,0    0,0    0,0    0,0   71680,0  18432,0   45056,0    20285,1   29872,0 27952,4 4864,0 4671,6     23    0,089   2      0,063   2      0,002    0,153\n0,0   2048,0  0,0   2048,0 69632,0  28672,0   45056,0    18608,1   30128,0 28030,4 4864,0 4672,4     32    0,093   2      0,063   2      0,002    0,158\n...\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("在上面这个示例中，"),t("code",[this._v("jstat")]),this._v("每隔1s便会打印垃圾回收的信息，并且不断重复下去。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("你可能已经留意到，"),t("code",[this._v("S0C")]),this._v("和"),t("code",[this._v("S0U")]),this._v("始终为0，而且另一个Survivor区的容量（S1C）可能会下降至0。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("当发生垃圾回收时，Java虚拟机可能出现Survivor内存区域内的对象"),t("strong",[this._v("全")]),this._v("被回收或晋升的现象。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("jstat")]),this._v("还有一个非常有用的参数"),t("code",[this._v("-t")]),this._v("，它将在每行数据之前打印目标Java进程的启动时间。例如，在下面这个示例中，第一列代表该Java进程已经启动了10.7秒。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ jstat -gc -t 22407\nTimestamp        S0C    S1C    S0U    S1U      EC       EU        OC         OU       MC     MU    CCSC   CCSU   YGC     YGCT    FGC    FGCT    CGC    CGCT     GCT   \n           10,7  0,0    0,0    0,0    0,0   55296,0  45056,0   34816,0    20267,8   30128,0 27975,3 4864,0 4671,6     33    0,086   3      0,111   2      0,001    0,198\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("jstat")]),this._v("还可以用来判断是否出现内存泄漏。在长时间运行的Java程序中，我们可以运行"),t("code",[this._v("jstat")]),this._v("命令连续获取多行性能数据，并取这几行数据中OU列（即已占用的老年代内存）的最小值。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("上面没有涉及的列（或者其他子命令的输出），你可以查阅帮助文档了解具体含义。至于文档中漏掉的CGC和CGCT，它们分别代表并发GC Stop-The-World的次数和时间。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jmap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmap","aria-hidden":"true"}},[this._v("#")]),this._v(" jmap")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("jmap")]),this._v("同样包括多条子命令。")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("code",[e._v("-clstats")]),e._v("，该子命令将打印被加载类的信息。")]),e._v(" "),a("li",[a("code",[e._v("-finalizerinfo")]),e._v("，该子命令将打印所有待finalize的对象。")]),e._v(" "),a("li",[a("code",[e._v("-histo")]),e._v("，该子命令将统计各个类的实例数目以及占用内存，并按照内存使用量从多至少的顺序排列。此外，"),a("code",[e._v("-histo:live")]),e._v("只统计堆中的存活对象。")]),e._v(" "),a("li",[a("code",[e._v("-dump")]),e._v("，该子命令将导出Java虚拟机堆的快照。同样，"),a("code",[e._v("-dump:live")]),e._v("只保存堆中的存活对象。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("我们通常会利用"),t("code",[this._v("jmap -dump:live,format=b,file=filename.bin")]),this._v("命令，将堆中所有存活对象导出至一个文件之中。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("下面我贴了一段"),t("code",[this._v("-histo")]),this._v("子命令的输出：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ jmap -histo 22574\n num     #instances         #bytes  class name (module)\n-------------------------------------------------------\n   1:        500004       20000160  org.python.core.PyComplex\n   2:        570866       18267712  org.python.core.PyFloat\n   3:        360295       18027024  [B (java.base@11)\n   4:        339394       11429680  [Lorg.python.core.PyObject;\n   5:        308637       11194264  [Ljava.lang.Object; (java.base@11)\n   6:        301378        9291664  [I (java.base@11)\n   7:        225103        9004120  java.math.BigInteger (java.base@11)\n   8:        507362        8117792  org.python.core.PySequence$1\n   9:        285009        6840216  org.python.core.PyLong\n  10:        282908        6789792  java.lang.String (java.base@11)\n  ...\n2281:             1             16  traceback$py\n2282:             1             16  unicodedata$py\nTotal       5151277      167944400\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("由于"),t("code",[this._v("jmap")]),this._v("将访问堆中的所有对象，为了保证在此过程中不被应用线程干扰，"),t("code",[this._v("jmap")]),this._v("需要借助安全点机制，让所有线程停留在不改变堆中数据的状态。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("也就是说，由"),t("code",[this._v("jmap")]),this._v("导出的堆快照必定是安全点位置的。这可能导致基于该堆快照的分析结果存在偏差。举个例子，假设在编译生成的机器码中，某些对象的生命周期在两个安全点之间，那么"),t("code",[this._v(":live")]),this._v("选项将无法探知到这些对象。")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("另外，如果某个线程长时间无法跑到安全点，"),a("code",[e._v("jmap")]),e._v("将一直等下去。上一小节的"),a("code",[e._v("jstat")]),e._v("则不同。这是因为垃圾回收器会主动将"),a("code",[e._v("jstat")]),e._v("所需要的摘要数据保存至固定位置之中，而"),a("code",[e._v("jstat")]),e._v("只需直接读取即可。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("// 暂停时间较长，约为二三十秒，可酌情调整。\n// CTRL+C的SIGINT信号无法停止，需要SIGKILL。\nstatic double sum = 0;\n\npublic static void main(String[] args) {\n  for (int i = 0; i < 0x77777777; i++) { // counted loop\n    sum += Math.log(i); // Math.log is an intrinsic\n  }\n}\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("一旦开启Java虚拟机参数"),t("code",[this._v("DisableAttachMechanism")]),this._v("（即使用参数"),t("code",[this._v("-XX:+DisableAttachMechanism")]),this._v("），基于Attach API的命令将无法执行。反过来说，如果你不想被其他进程监控，那么你需要开启该参数。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jinfo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jinfo","aria-hidden":"true"}},[this._v("#")]),this._v(" jinfo")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("$ jinfo 31185\nJava System Properties:\n\ngopherProxySet=false\nawt.toolkit=sun.lwawt.macosx.LWCToolkit\njava.specification.version=11\nsun.cpu.isalist=\nsun.jnu.encoding=UTF-8\n...\n\nVM Flags:\n-XX:CICompilerCount=4 -XX:ConcGCThreads=3 -XX:G1ConcRefinementThreads=10 -XX:G1HeapRegionSize=2097152 -XX:GCDrainStackTargetSize=64 -XX:InitialHeapSize=536870912 -XX:MarkStackSize=4194304 -XX:MaxHeapSize=8589934592 -XX:MaxNewSize=5152702464 -XX:MinHeapDeltaBytes=2097152 -XX:NonNMethodCodeHeapSize=5835340 -XX:NonProfiledCodeHeapSize=122911450 -XX:ProfiledCodeHeapSize=122911450 -XX:ReservedCodeCacheSize=251658240 -XX:+SegmentedCodeCache -XX:+UseCompressedClassPointers -XX:+UseCompressedOops -XX:+UseG1GC\n\nVM Arguments:\njvm_args: -Xlog:gc -Xmx1024m\njava_command: org.example.Foo\njava_class_path (initial): .\nLauncher Type: SUN_STANDARD\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("jinfo")]),this._v("还可以用来修改目标Java进程的“manageable”虚拟机参数。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("举个例子，我们可以使用"),t("code",[this._v("jinfo -flag +HeapDumpAfterFullGC <PID>")]),this._v("命令，开启"),t("code",[this._v("<PID>")]),this._v("所指定的Java进程的"),t("code",[this._v("HeapDumpAfterFullGC")]),this._v("参数。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('$ java -XX:+PrintFlagsFinal -version | grep manageable   \n     intx CMSAbortablePrecleanWaitMillis           = 100                                    {manageable} {default}\n     intx CMSTriggerInterval                       = -1                                     {manageable} {default}\n     intx CMSWaitDuration                          = 2000                                   {manageable} {default}\n     bool HeapDumpAfterFullGC                      = false                                  {manageable} {default}\n     bool HeapDumpBeforeFullGC                     = false                                  {manageable} {default}\n     bool HeapDumpOnOutOfMemoryError               = false                                  {manageable} {default}\n    ccstr HeapDumpPath                             =                                        {manageable} {default}\n    uintx MaxHeapFreeRatio                         = 70                                     {manageable} {default}\n    uintx MinHeapFreeRatio                         = 40                                     {manageable} {default}\n     bool PrintClassHistogram                      = false                                  {manageable} {default}\n     bool PrintConcurrentLocks                     = false                                  {manageable} {default}\njava version "11" 2018-09-25\nJava(TM) SE Runtime Environment 18.9 (build 11+28)\nJava HotSpot(TM) 64-Bit Server VM 18.9 (build 11+28, mixed mode)\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jstack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jstack","aria-hidden":"true"}},[this._v("#")]),this._v(" jstack")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("jstack")]),this._v("的其中一个应用场景便是死锁检测。这里我用"),t("code",[this._v("jstack")]),this._v("获取一个已经死锁了的Java程序的栈信息。具体输出如下所示：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('$ jstack 31634\n...\n\n"Thread-0" #12 prio=5 os_prio=31 cpu=1.32ms elapsed=34.24s tid=0x00007fb08601c800 nid=0x5d03 waiting for monitor entry  [0x000070000bc7e000]\n   java.lang.Thread.State: BLOCKED (on object monitor)\n at DeadLock.foo(DeadLock.java:18)\n - waiting to lock <0x000000061ff904c0> (a java.lang.Object)\n - locked <0x000000061ff904b0> (a java.lang.Object)\n at DeadLock$$Lambda$1/0x0000000800060840.run(Unknown Source)\n at java.lang.Thread.run(java.base@11/Thread.java:834)\n\n"Thread-1" #13 prio=5 os_prio=31 cpu=1.43ms elapsed=34.24s tid=0x00007fb08601f800 nid=0x5f03 waiting for monitor entry  [0x000070000bd81000]\n   java.lang.Thread.State: BLOCKED (on object monitor)\n at DeadLock.bar(DeadLock.java:33)\n - waiting to lock <0x000000061ff904b0> (a java.lang.Object)\n - locked <0x000000061ff904c0> (a java.lang.Object)\n at DeadLock$$Lambda$2/0x0000000800063040.run(Unknown Source)\n at java.lang.Thread.run(java.base@11/Thread.java:834)\n\n...\n\nJNI global refs: 6, weak refs: 0\n\n\nFound one Java-level deadlock:\n=============================\n"Thread-0":\n  waiting to lock monitor 0x00007fb083015900 (object 0x000000061ff904c0, a java.lang.Object),\n  which is held by "Thread-1"\n"Thread-1":\n  waiting to lock monitor 0x00007fb083015800 (object 0x000000061ff904b0, a java.lang.Object),\n  which is held by "Thread-0"\n\nJava stack information for the threads listed above:\n===================================================\n"Thread-0":\n at DeadLock.foo(DeadLock.java:18)\n - waiting to lock <0x000000061ff904c0> (a java.lang.Object)\n - locked <0x000000061ff904b0> (a java.lang.Object)\n at DeadLock$$Lambda$1/0x0000000800060840.run(Unknown Source)\n at java.lang.Thread.run(java.base@11/Thread.java:834)\n"Thread-1":\n at DeadLock.bar(DeadLock.java:33)\n - waiting to lock <0x000000061ff904b0> (a java.lang.Object)\n - locked <0x000000061ff904c0> (a java.lang.Object)\n at DeadLock$$Lambda$2/0x0000000800063040.run(Unknown Source)\n at java.lang.Thread.run(java.base@11/Thread.java:834)\n\nFound 1 deadlock.\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("我们可以看到，"),t("code",[this._v("jstack")]),this._v("不仅会打印线程的栈轨迹、线程状态（BLOCKED）、持有的锁（locked …）以及正在请求的锁（waiting to lock …），而且还会分析出具体的死锁。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"jcmd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jcmd","aria-hidden":"true"}},[this._v("#")]),this._v(" jcmd")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("至于"),a("code",[e._v("jstat")]),e._v("的功能，虽然"),a("code",[e._v("jcmd")]),e._v("复制了"),a("code",[e._v("jstat")]),e._v("的部分代码，并支持通过"),a("code",[e._v("PerfCounter.print")]),e._v("子命令来打印所有的Performance Counter，但是它没有保留"),a("code",[e._v("jstat")]),e._v("的输出格式，也没有重复打印的功能。因此，感兴趣的同学可以自行整理。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("另外，我们将在下一篇中介绍"),t("code",[this._v("jcmd")]),this._v("中Java Flight Recorder相关的子命令。")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"总结与实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结与实践","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结与实践")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ol",[a("li",[a("code",[e._v("jps")]),e._v("将打印所有正在运行的Java进程。")]),e._v(" "),a("li",[a("code",[e._v("jstat")]),e._v("允许用户查看目标Java进程的类加载、即时编译以及垃圾回收相关的信息。它常用于检测垃圾回收问题以及内存泄漏问题。")]),e._v(" "),a("li",[a("code",[e._v("jmap")]),e._v("允许用户统计目标Java进程的堆中存放的Java对象，并将它们导出成二进制文件。")]),e._v(" "),a("li",[a("code",[e._v("jinfo")]),e._v("将打印目标Java进程的配置参数，并能够改动其中manageabe的参数。")]),e._v(" "),a("li",[a("code",[e._v("jstack")]),e._v("将打印目标Java进程中各个线程的栈轨迹、线程状态、锁状况等信息。它还将自动检测死锁。")]),e._v(" "),a("li",[a("code",[e._v("jcmd")]),e._v("则是一把瑞士军刀，可以用来实现前面除了"),a("code",[e._v("jstat")]),e._v("之外所有命令的功能。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("今天的实践环节，你可以探索"),t("code",[this._v("jcmd")]),this._v("中的下述功能，看看有没有适合你项目的监控项：")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("Compiler.CodeHeap_Analytics\nCompiler.codecache\nCompiler.codelist\nCompiler.directives_add\nCompiler.directives_clear\nCompiler.directives_print\nCompiler.directives_remove\nCompiler.queue\nGC.class_histogram\nGC.class_stats\nGC.finalizer_info\nGC.heap_dump\nGC.heap_info\nGC.run\nGC.run_finalization\nVM.class_hierarchy\nVM.classloader_stats\nVM.classloaders\nVM.command_line\nVM.dynlibs\nVM.flags\nVM.info\nVM.log\nVM.metaspace\nVM.native_memory\nVM.print_touched_methods\nVM.set_flag\nVM.stringtable\nVM.symboltable\nVM.system_properties\nVM.systemdictionary\nVM.unlock_commercial_features\nVM.uptime\nVM.version\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://static001.geekbang.org/resource/image/2a/d5/2a62e58cbdf56a5dc40748567d346fd5.jpg",alt:""}})])}],!1,null,null,null);t.default=r.exports}}]);