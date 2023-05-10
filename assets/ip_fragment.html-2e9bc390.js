import{_ as a,M as s,p as l,q as t,R as i,t as e,N as d,V as r,a1 as o}from"./framework-5866ffd3.js";const c="/assets/ip_fragment-3553c7f9.png",m={},u=i("h1",{id:"ip-fragment",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#ip-fragment","aria-hidden":"true"},"#"),e(" ip Fragment")],-1),p=i("strong",null,"出方向",-1),v=o('<h3 id="分片实例-以太网为例" tabindex="-1"><a class="header-anchor" href="#分片实例-以太网为例" aria-hidden="true">#</a> 分片实例（以太网为例）</h3><hr><ul><li><p>ip 层 mtu 默认为 1500 字节，去掉 ip 头部 20 字节 ip 层最大载荷是 1480 字节，若超过 1480 字节那么 ip 协议就会将数据包分片传输。</p></li><li><p>ip 层分片对传输层协议透明，假设使用 UDP 协议传输 2000 字节数据，加上 UDP 8 字节的协议头，IP 协议需要传输 2008 字节的数据。如下图所示，ip 协议进行分片。第一个包 udp包头 + payload = 1480 字节 ；第二个包没有 UDP包头，payload = 528 字节。</p></li></ul><p><img src="'+c+`" alt="IP包分片"></p><ul><li>ip 协议分片后，第一个包 flags More fragments = 1 ，第二个包是最后一个包 flags More fragments = 0。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Flags: 0x00
0... .... = Reserved bit: Not set
.0.. .... = Don&#39;t fragment: Not set
..0. .... = More fragments: Not set   // 被分片的包除最后一个均为1。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ping-禁止分片-don-t-fragment-df-df-1-时不允许分片" tabindex="-1"><a class="header-anchor" href="#ping-禁止分片-don-t-fragment-df-df-1-时不允许分片" aria-hidden="true">#</a> ping 禁止分片（Don’t Fragment，DF），DF=1 时不允许分片</h3><hr><ul><li>Linux ：ping -M do 参数用来指定不分片 DF 置位</li><li>MacOS：ping -D 参数用来指定不分片 DF 置位</li><li>imcp 最大 payload：1500 - 20（icmp包头） - 8（icmp包头）= 1472 bytes</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Ubunut
ping -M do www.baidu.com -s 1472
PING www.a.shifen.com (180.101.49.11) 1472(1500) bytes of data.
1480 bytes from 180.101.49.11: icmp_seq=1 ttl=52 time=4.84 ms
1480 bytes from 180.101.49.11: icmp_seq=2 ttl=52 time=4.82 ms

ping -M do www.baidu.com -s 1473
PING www.a.shifen.com (180.101.49.11) 1473(1501) bytes of data.
ping: local error: Message too long, mtu=1500
ping: local error: Message too long, mtu=1500

# MacOS
~&gt; ping -D www.baidu.com -s 1472
PING www.a.shifen.com (182.61.200.7): 1472 data bytes
1480 bytes from 182.61.200.7: icmp_seq=0 ttl=54 time=5.904 ms
1480 bytes from 182.61.200.7: icmp_seq=1 ttl=54 time=5.651 ms

~&gt; ping -D www.baidu.com -s 1473
PING www.a.shifen.com (182.61.200.7): 1473 data bytes
ping: sendto: Message too long
ping: sendto: Message too long
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实例测试" tabindex="-1"><a class="header-anchor" href="#实例测试" aria-hidden="true">#</a> 实例测试</h3><ul><li>场景1：ping 分片测试</li></ul><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3><ul><li><p>如何避免 UDP 过大，造成 ip 层分片？</p><ul><li>QUIC（Quick UDP Internet Connection）</li></ul></li></ul>`,14);function g(b,h){const n=s("RouterLink");return l(),t("div",null,[u,i("blockquote",null,[i("p",null,[e("IP 包大小超过 MTU（网络层）时，IP 层就需要对数据进行分片，否则数据包将被丢弃。分片也就是指 IP 包分片，并且在接口 "),p,e("。 "),d(n,{to:"/nt/chapter2/layer2/mtu.html"},{default:r(()=>[e("MTU")]),_:1}),e(" 参考")])]),v])}const _=a(m,[["render",g],["__file","ip_fragment.html.vue"]]);export{_ as default};
