import{_ as a,p as r,q as s,a1 as e}from"./framework-5866ffd3.js";const i="/assets/wireshark_panel-902061c8.png",t="/assets/wireshark_tools_bar-0999aaae.png",p="/assets/wireshark_packet_mark-61f2acf0.png",c="/assets/wireshark_shift-17b28747.png",h="/assets/wireshark_appearance-99d343cd.png",l={},_=e('<h1 id="wireshark-基础" tabindex="-1"><a class="header-anchor" href="#wireshark-基础" aria-hidden="true">#</a> wireshark 基础</h1><blockquote><p>https://www.wireshark.org/download/docs/user-guide.pdf</p></blockquote><h3 id="面板简介" tabindex="-1"><a class="header-anchor" href="#面板简介" aria-hidden="true">#</a> 面板简介</h3><hr><ul><li><p>Packet List(数据包列表):这个最上面的面板用表格显示了当前捕获文件 中的所有数据包，其中包括了数据包序号、数据包被捕获时的相对时间、数据 包的源地址和目标地址、数据包的协议以及在数据包中找到的概况信息等列。</p></li><li><p>Packet Details(数据包细节);这个中间的面板分层次地显示了一个数据包中 的内容，并且可以通过展开或是收缩来显示这个数据包中所捕获到的全部内容。</p></li><li><p>Packet Bytes(数据包字节);这个最下面的面板可能是最令人困惑的，因 为它显示了一个数据包未经处理的原始样子，也就是其在链路上传播时的样子。 这些原始数据看上去一点都不舒服而且不容易理解。</p><p><img src="'+i+'" alt="wireshark_panel"></p></li><li><p>工具栏</p><p><img src="'+t+'" alt="wireshark_tools_bar"></p></li><li><p>数据包标记</p><p><img src="'+p+'" alt="wireshark_packet_mark"></p></li></ul><h3 id="基础设置" tabindex="-1"><a class="header-anchor" href="#基础设置" aria-hidden="true">#</a> 基础设置</h3><hr><ul><li><p>时间显示格式：Wireshark 所捕获的每一个数据包都会由操作系统给予一个时间戳。Wireshark 可以显示这个数据被捕获时的绝对时间戳，也可以是与上一个被捕获的数据包或是捕获开始及结束相关的相对时间戳。</p></li><li><p>时间偏移：所有数据包/指定数据包，设置偏移1分钟（+00:01:00）</p><p><img src="'+c+'" alt="wireshark_shift"></p></li><li><p>外观设置</p><p><img src="'+h+'" alt="wireshark_appearance"></p></li></ul>',8),o=[_];function n(d,k){return r(),s("div",null,o)}const m=a(l,[["render",n],["__file","wireshark_basics.html.vue"]]);export{m as default};