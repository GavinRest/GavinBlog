import{_ as i,p as e,q as l,a1 as a}from"./framework-5866ffd3.js";const t="/assets/tcp超时重传-e2f5214c.png",r={},T=a('<h1 id="tcp重传机制" tabindex="-1"><a class="header-anchor" href="#tcp重传机制" aria-hidden="true">#</a> tcp重传机制</h1><blockquote><p>TCP 实现可靠传输的方式之一，是通过序列号与确认应答。在 TCP 中，当发送端的数据到达接收主机时，接收端主机会返回一个确认应答消息，表示已收到消息。但在错综复杂的网络，万一数据在传输过程中丢失了呢？所以 TCP 针对数据包丢失的情况，会用重传机制解决。</p></blockquote><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3><hr><ul><li>RTT(Round-Trip Time):往返时延。是指数据从网络一端传到另一端所需的时间。</li><li>RTO(Retransmission Timeout):超时重传时间 <ul><li>RFC6298 建议使用以下的公式计算 RTO： <ul><li>1、首次计算 RTO ，R1 为第一次测量的 RTT <ul><li>SRTT = R1</li><li>DevRTT = R1/2</li><li>RTO = μ * SRTT + ∂ * DevRT = μ * R1 + ∂ * （R1/2）</li></ul></li><li>2、后续计算 RTO，其中 R2 为最新测量的 RTT <ul><li>SRTT = SRTT + α(RTT - SRTT) = R1 + α * (R2 - R1)</li><li>DevRTT = (1-β) * DevRTT + β*(|RTT-SRTT) = (1-β) * (R1/2) + β * (|R2-R1|)</li><li>RTO = μ * SRTT + ∂ * DevRTT</li></ul></li><li>Linux 下，<strong>α = 0.125，β = 0.25， μ = 1，∂ = 4</strong></li></ul></li></ul></li></ul><h2 id="常见重传方式" tabindex="-1"><a class="header-anchor" href="#常见重传方式" aria-hidden="true">#</a> 常见重传方式</h2><ul><li>超时重传</li><li>快速重传</li><li>SACK</li><li>D-SACK</li></ul><h3 id="一、超时重传" tabindex="-1"><a class="header-anchor" href="#一、超时重传" aria-hidden="true">#</a> 一、超时重传</h3><p>超时重传：设定一个定时器，当超过指定的时间后，没有收到对方的 <code>ACK</code> 报文，就会重发该数据，也就是超时重传。</p><p>TCP 会在以下两种情况发生超时重传</p><ul><li>数据包丢失：数据包丢失，超过 RTO 没收到 ACK 就会重传数据包。</li><li>确认应答丢失：ACK丢失，超过 RTO 没收到 ACK 就会重传数据包。</li></ul><p><img src="'+t+'" alt="tcp超时重传"></p><p>每当遇到一次超时重传的时候，都会将下一次 RTO 设为之前<strong>两倍</strong>。</p><p>超时触发重传存在的问题是，超时周期可能相对较长。那是不是可以有更快的方式呢？</p><p>于是就可以用「快速重传」机制来解决超时重发的时间等待。</p><h3 id="一、快速重传" tabindex="-1"><a class="header-anchor" href="#一、快速重传" aria-hidden="true">#</a> 一、快速重传</h3><p>​</p>',17),s=[T];function n(R,c){return e(),l("div",null,s)}const h=i(r,[["render",n],["__file","tcp_retransmission.html.vue"]]);export{h as default};