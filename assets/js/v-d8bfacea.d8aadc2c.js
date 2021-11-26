"use strict";(self.webpackChunkvuepress_shell_stash=self.webpackChunkvuepress_shell_stash||[]).push([[191],{6343:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-d8bfacea",path:"/setup/",title:"Setup",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install",slug:"install",children:[{level:3,title:"Checking the installation",slug:"checking-the-installation",children:[]}]},{level:2,title:"Site configuration",slug:"site-configuration",children:[{level:3,title:"Basic settings",slug:"basic-settings",children:[]},{level:3,title:"Base Directory",slug:"base-directory",children:[]},{level:3,title:"OGP",slug:"ogp",children:[]},{level:3,title:"Twitter Cards",slug:"twitter-cards",children:[]},{level:3,title:"Other Settings",slug:"other-settings",children:[]}]},{level:2,title:"Uninstallation",slug:"uninstallation",children:[]}],filePathRelative:"setup/README.md",git:{updatedTime:1637911201e3,contributors:[{name:"ontheroadjp",email:"dev@ontheroad.jp",commits:1}]}}},8297:(n,s,a)=>{a.r(s),a.d(s,{default:()=>g});var e=a(6252);const t=(0,e.uE)('<h1 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> Setup</h1><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><p>To use it, simply clone this repository and run npm install. You can clone it to any location you like.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/ontheroadjp/Mini-Doc\n$ <span class="token builtin class-name">cd</span> Mini-Doc\n$ <span class="token function">npm</span> <span class="token function">install</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The installation is now complete.</p><h3 id="checking-the-installation" tabindex="-1"><a class="header-anchor" href="#checking-the-installation" aria-hidden="true">#</a> Checking the installation</h3><p>Go to the Mini-Docs directory and run the <code>npm run docs:dev</code> command to start the included web server.</p><p>Launch your web browser and try to access <code>localhost:8080</code>.</p><p>If you see the Mini Doc page, the installation is successful.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> Mini-Docs\n$ <span class="token function">npm</span> run docs:dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="site-configuration" tabindex="-1"><a class="header-anchor" href="#site-configuration" aria-hidden="true">#</a> Site configuration</h2><p>Configuration of the entire site is done in <code>docs/.vuepress/config.js</code>.</p><h3 id="basic-settings" tabindex="-1"><a class="header-anchor" href="#basic-settings" aria-hidden="true">#</a> Basic settings</h3><p>If you want to change the site title, site language, and site description, change the following. The top row <code>(/)</code> is for the English site, and the bottom row <code>(/ja/)</code> is for the Japanese site.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">..</span>.\n    locales: <span class="token punctuation">{</span>\n        <span class="token string">&#39;/&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n            lang: <span class="token string">&#39;en-US&#39;</span>,\n            title: <span class="token string">&#39;Mini Doc&#39;</span>,\n            description: <span class="token string">&#39;Simple and Usuful Application&#39;</span>,\n        <span class="token punctuation">}</span>,\n        <span class="token string">&#39;/ja/&#39;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>\n            lang: <span class="token string">&#39;ja-JP&#39;</span>,\n            title: <span class="token string">&#39;Mini Doc&#39;</span>,\n            description: <span class="token string">&#39;Simple and Usuful Application&#39;</span>,\n        <span class="token punctuation">}</span>,\n    <span class="token punctuation">}</span>,\n    <span class="token punctuation">..</span>.\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="base-directory" tabindex="-1"><a class="header-anchor" href="#base-directory" aria-hidden="true">#</a> Base Directory</h3><p>Change the location of <code>/Mini-Doc/</code> below to a location of your choice. You do not need to change the actual directory structure.</p><p>The contents of the <code>/docs/</code> directory will be displayed with the URL specified in <code>base</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">..</span>.\n    base: <span class="token string">&#39;/Mini-Doc/&#39;</span>\n    <span class="token punctuation">..</span>.\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="ogp" tabindex="-1"><a class="header-anchor" href="#ogp" aria-hidden="true">#</a> OGP</h3><p>To change the OGP settings, change the <code>content</code> section of each of the following</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">..</span>.\n    head: <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:url&#39;</span>, content: <span class="token string">&#39;https://ontheroadjp.github.com/Mini-Doc/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:type&#39;</span>, content: <span class="token string">&#39;website&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:title&#39;</span>, content: <span class="token string">&#39;Mini Doc&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:description&#39;</span>, content: <span class="token string">&#39;Simple and Useful Application&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:image&#39;</span>, content: <span class="token string">&#39;https://ontheroadjp.github.io/Mini-Doc/images/main.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">..</span>.\n    <span class="token punctuation">}</span>,\n    <span class="token punctuation">..</span>.\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="twitter-cards" tabindex="-1"><a class="header-anchor" href="#twitter-cards" aria-hidden="true">#</a> Twitter Cards</h3>',23),p=(0,e.Uk)("To set up "),i={href:"https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("Twitter Cards"),c=(0,e.Uk)(", change the following content."),l=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">..</span>.\n    head: <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:url&#39;</span>, content: <span class="token string">&#39;https://ontheroadjp.github.com/Mini-Doc/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:type&#39;</span>, content: <span class="token string">&#39;website&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:title&#39;</span>, content: <span class="token string">&#39;Mini Doc&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:description&#39;</span>, content: <span class="token string">&#39;Simple and Useful Application&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">[</span><span class="token string">&#39;meta&#39;</span>, <span class="token punctuation">{</span> name: <span class="token string">&#39;og:image&#39;</span>, content: <span class="token string">&#39;https://ontheroadjp.github.io/Mini-Doc/images/main.jpg&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>,\n        <span class="token punctuation">..</span>.\n    <span class="token punctuation">}</span>,\n    <span class="token punctuation">..</span>.\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="other-settings" tabindex="-1"><a class="header-anchor" href="#other-settings" aria-hidden="true">#</a> Other Settings</h3>',2),r=(0,e.Uk)("For other settings, please refer to the official VuePress manual. Official Manual: "),u={href:"https://v2.vuepress.vuejs.org/reference/config.html#base",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("Config | VuePress"),h=(0,e.uE)('<h2 id="uninstallation" tabindex="-1"><a class="header-anchor" href="#uninstallation" aria-hidden="true">#</a> Uninstallation</h2><p>Delete the Mini-Doc directory to complete the uninstallation.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Please note that if you uninstall the software, you will also lose the site data you have created.</p></div><p>Mini-Doc outputs site data to the <code>docs/.vuepress/dist</code> directory.</p><p>If you want to keep the site data you created, copy the <code>docs/.vuepress/dist</code> directory to another location and delete the <code>Mini-Doc</code> directory.</p><p>It&#39;s all done.</p>',6),b={},g=(0,a(3744).Z)(b,[["render",function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",i,[o,(0,e.Wm)(a)]),c]),l,(0,e._)("p",null,[r,(0,e._)("a",u,[d,(0,e.Wm)(a)])]),h],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);