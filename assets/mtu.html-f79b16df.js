import{_ as s,M as a,p as i,q as l,R as t,t as e,N as o,V as c,a1 as h}from"./framework-5866ffd3.js";const d={},u=h('<h1 id="mtu" tabindex="-1"><a class="header-anchor" href="#mtu" aria-hidden="true">#</a> MTU</h1><blockquote><p>MTU：最大传输单元（Maximum Transmission Unit），MTU 通常指 IP MTU，也就是三层的整个包大小。</p></blockquote><h3 id="mtu-基本概念" tabindex="-1"><a class="header-anchor" href="#mtu-基本概念" aria-hidden="true">#</a> MTU 基本概念</h3><hr><ul><li><p>二层 MTU：单位为帧，默认长度范围 64 - 1518 Byte。通常情况不会修改帧最大长度，特殊情况会让接口支持 jumbo(巨型) 帧。</p></li><li><p>三层 MTU：单位为包，默认长度范围 46 - 1500 Byte。</p></li><li><p>路径 MTU：即 <code>path mtu</code> ，在发送方到接收方的路径上所经过链路的最小 MTU 值。</p></li></ul><h3 id="路径-mtu-发现-path-mtu-discovery" tabindex="-1"><a class="header-anchor" href="#路径-mtu-发现-path-mtu-discovery" aria-hidden="true">#</a> 路径 MTU 发现（Path MTU Discovery）</h3><hr>',7),_={href:"https://tools.ietf.org/id/draft-leddy-6man-truncate-00.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://tools.ietf.org/html/rfc1191",target:"_blank",rel:"noopener noreferrer"},p=t("strong",null,"不加选择地丢弃ICMP流量",-1),M=t("code",null,"/proc/sys/net/ipv4/ip_no_pmtu_disc",-1),T={href:"https://datatracker.ietf.org/doc/rfc4821/",target:"_blank",rel:"noopener noreferrer"},f={id:"mss-与-mtu的关系-mss-参考",tabindex:"-1"},U=t("a",{class:"header-anchor",href:"#mss-与-mtu的关系-mss-参考","aria-hidden":"true"},"#",-1),P=t("hr",null,null,-1),k=t("p",null,"MSS 是 MTU 减去 TCP 和 IP Header长度计算而来，提高传输效率避免 IP 分片",-1);function x(b,g){const r=a("ExternalLinkIcon"),n=a("RouterLink");return i(),l("div",null,[u,t("p",null,[e("路径 MTU 发现(确定 PMTU 的过程; 通常依赖于 "),t("a",_,[e("ICMP PTB (Packet Too Big)"),o(r)]),e(" 消息)。")]),t("ul",null,[t("li",null,[e("["),t("a",m,[e("RFC1191"),o(r)]),e("] 推荐一个由 PMTUD 得到的 PMTU 值在10分钟后过时。路径 MTU发现 有时会因为防火墙和网关过滤可能"),p,e("而出现问题，这会损害PMTU发现算法。困为这点，从基于系统范畴或有更好保证来看,可能要关闭PMTU发现。")]),t("li",null,[e("在Linux中,文件"),M,e(" 可以置成1以关闭 PMTU 发现。传统 PMTUD 的替代品已经被开发出来 ["),t("a",T,[e("PLPMTUD RFC4821"),o(r)]),e("]。")])]),t("h3",f,[U,e(" MSS 与 MTU的关系 "),o(n,{to:"/nt/chapter3/layer4/tcp_mss.html"},{default:c(()=>[e("MSS")]),_:1}),e(" 参考")]),P,k])}const v=s(d,[["render",x],["__file","mtu.html.vue"]]);export{v as default};