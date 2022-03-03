"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[692],{1593:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-1a802a48",path:"/Back-end/Fastapi.html",title:"Fastapi学习",lang:"zh-CN",frontmatter:{date:"2021/11/12 12:45",categories:["后端"],tag:["Python","后端","接口"]},excerpt:"",headers:[{level:2,title:"运行服务器：",slug:"运行服务器",children:[{level:3,title:"一、命令运行服务器：",slug:"一、命令运行服务器",children:[]},{level:3,title:"二、代码运行服务器调试：",slug:"二、代码运行服务器调试",children:[]}]},{level:2,title:"FastApi提供交互式Api文档一：这很方便我们管理自己的接口",slug:"fastapi提供交互式api文档一-这很方便我们管理自己的接口",children:[]},{level:2,title:"FastApi提供交互式Api文档二：这很方便我们管理自己的接口",slug:"fastapi提供交互式api文档二-这很方便我们管理自己的接口",children:[]},{level:2,title:"如果你想即「get」又「post」同时请求，你可以这么做：",slug:"如果你想即「get」又「post」同时请求-你可以这么做",children:[]},{level:2,title:"何时用「Form」，何时用「Body」，何时用「Header」呢",slug:"何时用「form」-何时用「body」-何时用「header」呢",children:[]},{level:2,title:"如何定制一个返回信息，看代码",slug:"如何定制一个返回信息-看代码",children:[]},{level:2,title:"如何将自己写的html网站动态加载到fastapi（jinja2模板返回Html页面）",slug:"如何将自己写的html网站动态加载到fastapi-jinja2模板返回html页面",children:[{level:3,title:"我们需要安装一些依赖库",slug:"我们需要安装一些依赖库",children:[]},{level:3,title:"废话不多说，看代码",slug:"废话不多说-看代码",children:[]},{level:3,title:"如果你想自定义传参进来，你可以试试这样：",slug:"如果你想自定义传参进来-你可以试试这样",children:[]},{level:3,title:"如果你想实现这样的例子",slug:"如果你想实现这样的例子",children:[]}]},{level:2,title:"关联数据库，将数据存储化",slug:"关联数据库-将数据存储化",children:[{level:3,title:"第一步：我们需要安装依赖库",slug:"第一步-我们需要安装依赖库",children:[]},{level:3,title:"第二步：电脑需要安装mysql，安装调试过程不在赘述",slug:"第二步-电脑需要安装mysql-安装调试过程不在赘述",children:[]},{level:3,title:"第三步：配置数据库",slug:"第三步-配置数据库",children:[]},{level:3,title:"实例一：将数据存储到数据库并返回给前端",slug:"实例一-将数据存储到数据库并返回给前端",children:[]}]}],filePathRelative:"Back-end/Fastapi.md",git:{updatedTime:1645373715e3,contributors:[{name:"冉勇",email:"1311518086@qq.com",commits:2},{name:"luck_baby",email:"67427627+ranyong1997@users.noreply.github.com",commits:1}]}}},7130:(n,a,s)=>{s.r(a),s.d(a,{default:()=>bn});var t=s(6252);const o=(0,t._)("h1",{id:"fastapi学习",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#fastapi学习","aria-hidden":"true"},"#"),(0,t.Uk)(" Fastapi学习")],-1),p={class:"custom-container tip"},e=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),l=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450524-1537517306.png",data:"aurora"},null,-1),c=(0,t.Uk)(" FastAPI 框架，高性能，易于学习，高效编码，生产可用_ 官方文档： "),i={href:"https://fastapi.tiangolo.com/",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("https://fastapi.tiangolo.com"),r=(0,t.Uk)(" FastAPI 是一个用于构建 API 的现代、快速（高性能)的 web 框架，使用 Python 3.6+ 并基于标准的 Python 类型提示。 关键特性:"),g=(0,t._)("strong",null,"快速",-1),d=(0,t.Uk)("：可与 "),m=(0,t._)("strong",null,"NodeJS",-1),k=(0,t.Uk)(" 和 "),b=(0,t._)("strong",null,"Go",-1),h=(0,t.Uk)(" 比肩的极高性能（归功于 Starlette 和 Pydantic）。"),q={href:"https://fastapi.tiangolo.com/zh/#_11",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("最快的 Python web 框架之一"),_=(0,t.Uk)("。"),y=(0,t.uE)("<li><strong>高效编码</strong>：提高功能开发速度约 200％ 至 300％。*</li><li><strong>更少 bug</strong>：减少约 40％ 的人为（开发者）导致错误。*</li><li><strong>智能</strong>：极佳的编辑器支持。处处皆可自动补全，减少调试时间。</li><li><strong>简单</strong>：设计的易于使用和学习，阅读文档的时间更短。</li><li><strong>简短</strong>：使代码重复最小化。通过不同的参数声明实现丰富功能。bug 更少。</li><li><strong>健壮</strong>：生产可用级别的代码。还有自动生成的交互式文档。</li><li><strong>标准化</strong>：基于（并完全兼容）API 的相关开放标准</li>",7),v=(0,t.uE)('<h1 id="安装fastapi" tabindex="-1"><a class="header-anchor" href="#安装fastapi" aria-hidden="true">#</a> 安装FastApi：</h1><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pip3 install fastapi\npip3 install unicorn\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h1 id="开始第一个demo" tabindex="-1"><a class="header-anchor" href="#开始第一个demo" aria-hidden="true">#</a> 开始第一个Demo</h1><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># 创建一个main.py文件</span>\n\n<span class="token keyword">from</span> typing <span class="token keyword">import</span> Optional\n\n<span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI\n\napp <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\n<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">read_root</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;Hello FastApi&quot;</span><span class="token punctuation">}</span>\n\n\n<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/items/{item_id}&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">read_item</span><span class="token punctuation">(</span>item_id<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">,</span> q<span class="token punctuation">:</span> Optional<span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;item_id&quot;</span><span class="token punctuation">:</span> item_id<span class="token punctuation">,</span> <span class="token string">&quot;q&quot;</span><span class="token punctuation">:</span> q<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="运行服务器" tabindex="-1"><a class="header-anchor" href="#运行服务器" aria-hidden="true">#</a> 运行服务器：</h2><h3 id="一、命令运行服务器" tabindex="-1"><a class="header-anchor" href="#一、命令运行服务器" aria-hidden="true">#</a> 一、命令运行服务器：</h3>',6),z=(0,t._)("p",null,[(0,t.Uk)("uvicorn main:app --reload --port 8888 # 更改端口号 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450598-734864684.png",data:"aurora"})],-1),w=(0,t.uE)('<h3 id="二、代码运行服务器调试" tabindex="-1"><a class="header-anchor" href="#二、代码运行服务器调试" aria-hidden="true">#</a> 二、代码运行服务器调试：</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>\n    <span class="token keyword">import</span> uvicorn\n\n    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;main:app&quot;</span><span class="token punctuation">,</span> <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> port<span class="token operator">=</span><span class="token number">5555</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),x=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450681-681889731.png",data:"aurora"})],-1),j=(0,t._)("h2",{id:"fastapi提供交互式api文档一-这很方便我们管理自己的接口",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#fastapi提供交互式api文档一-这很方便我们管理自己的接口","aria-hidden":"true"},"#"),(0,t.Uk)(" FastApi提供交互式Api文档一：这很方便我们管理自己的接口")],-1),F=(0,t.Uk)("现在访问 "),S={href:"http://127.0.0.1:8000/docs",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("http://localhost:8000/docs"),U=(0,t.Uk)(" 就会生成一个Swagger文档 "),A=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450674-1708206194.png",data:"aurora"},null,-1),P=(0,t._)("h2",{id:"fastapi提供交互式api文档二-这很方便我们管理自己的接口",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#fastapi提供交互式api文档二-这很方便我们管理自己的接口","aria-hidden":"true"},"#"),(0,t.Uk)(" FastApi提供交互式Api文档二：这很方便我们管理自己的接口")],-1),R=(0,t.Uk)("现在访问 "),E={href:"http://127.0.0.1:8000/redoc",target:"_blank",rel:"noopener noreferrer"},I=(0,t.Uk)("http://127.0.0.1:8000/redoc"),N=(0,t.Uk)(" 就会生成一个redoc文档 "),H=(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450595-1548758824.png",data:"aurora"},null,-1),J=(0,t.Uk)(" // todo：fastapi中何时用"),O=(0,t._)("strong",null,"Path、Query、Header/Body",-1),B=(0,t.uE)('<h2 id="如果你想即「get」又「post」同时请求-你可以这么做" tabindex="-1"><a class="header-anchor" href="#如果你想即「get」又「post」同时请求-你可以这么做" aria-hidden="true">#</a> 如果你想即「get」又「post」同时请求，你可以这么做：</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>api_route</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">,</span> methods<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;PUT&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">&quot;&quot;&quot;这是一个登陆接口&quot;&quot;&quot;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;login success&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;code&quot;</span><span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',2),C=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450547-1245255746.png",data:"aurora"})],-1),D=(0,t.uE)('<h2 id="何时用「form」-何时用「body」-何时用「header」呢" tabindex="-1"><a class="header-anchor" href="#何时用「form」-何时用「body」-何时用「header」呢" aria-hidden="true">#</a> 何时用「Form」，何时用「Body」，何时用「Header」呢</h2><p><strong>如果你你以表单的形式传递数据，那你就应该用「Form」，看一下代码</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/login1&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">login_form</span><span class="token punctuation">(</span>username<span class="token operator">=</span>Form<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">,</span> password<span class="token operator">=</span>Form<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">:</span> username<span class="token punctuation">,</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">:</span> password<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3),W=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450768-371511405.png",data:"aurora"}),(0,t._)("strong",null,"如果你你以JSON的形式传递数据，那你就应该用「Body」，看一下代码")],-1),M=(0,t.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>post</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>data<span class="token operator">=</span>Body<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">:</span> data<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),G=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450556-1359851886.png",data:"aurora"}),(0,t._)("strong",null,"如果你你想传递「Header」数据，那你就应该用「Header」，看一下代码")],-1),L=(0,t.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token builtin">id</span><span class="token punctuation">,</span> num<span class="token operator">=</span>Header<span class="token punctuation">(</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token builtin">id</span><span class="token punctuation">,</span> <span class="token string">&quot;num&quot;</span><span class="token punctuation">:</span> num<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),Q=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450550-571388114.png",data:"aurora"})],-1),Y=(0,t.uE)('<h2 id="如何定制一个返回信息-看代码" tabindex="-1"><a class="header-anchor" href="#如何定制一个返回信息-看代码" aria-hidden="true">#</a> 如何定制一个返回信息，看代码</h2><p>作用：就是将自己定义好的响应结果返回回来</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI\n<span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>responses <span class="token keyword">import</span> JSONResponse\n\napp <span class="token operator">=</span> FastAPI<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n\n<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>get</span><span class="token punctuation">(</span><span class="token string">&quot;/user&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> JSONResponse<span class="token punctuation">(</span>content<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;msg&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;get user&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment"># 内容</span>\n    status_code<span class="token operator">=</span><span class="token number">202</span><span class="token punctuation">,</span>  <span class="token comment"># 状态码，默认为200</span>\n    headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>\n    <span class="token keyword">import</span> uvicorn\n\n    uvicorn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token string">&quot;04_response:app&quot;</span><span class="token punctuation">,</span> <span class="token builtin">reload</span><span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>',3),Z=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450612-949726432.png",data:"aurora"})],-1),K=(0,t.uE)('<h2 id="如何将自己写的html网站动态加载到fastapi-jinja2模板返回html页面" tabindex="-1"><a class="header-anchor" href="#如何将自己写的html网站动态加载到fastapi-jinja2模板返回html页面" aria-hidden="true">#</a> 如何将自己写的html网站动态加载到fastapi（jinja2模板返回Html页面）</h2><h3 id="我们需要安装一些依赖库" tabindex="-1"><a class="header-anchor" href="#我们需要安装一些依赖库" aria-hidden="true">#</a> 我们需要安装一些依赖库</h3><p>1、jinja2 <code>pip install jinjia2 </code> 2、aiofiles <code>pip install aiofiles</code></p><h3 id="废话不多说-看代码" tabindex="-1"><a class="header-anchor" href="#废话不多说-看代码" aria-hidden="true">#</a> 废话不多说，看代码</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> fastapi <span class="token keyword">import</span> FastAPI<span class="token punctuation">,</span> Request <span class="token keyword">from</span> fastapi<span class="token punctuation">.</span>templating <span class="token keyword">import</span> Jinja2Templates\n<span class="token comment"># 需要进入的库from starlette.staticfiles import StaticFiles</span>\n<span class="token comment"># 引入静态文件库app = FastAPI()</span>\n<span class="token comment"># 指定静态文件存放路径app.mount(&quot;/page&quot;, StaticFiles(directory=&quot;page&quot;), name=&quot;page&quot;)# 指定html 存放目录template = Jinja2Templates(&quot;page&quot;)@app.get(&quot;/home&quot;)def home (req: Request):    return template.TemplateResponse(&quot;index.html&quot;, context={&quot;request&quot;: req})if __name__ == &#39;__main__&#39;:    import uvicorn    uvicorn.run(&quot;d05_templates:app&quot;, reload=True)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',5),V=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450617-993969700.png",data:"aurora"}),(0,t._)("strong",null,"如果你的代码中有引入到css样式，你就可以向我这样，你会发现样式就被引入进来了")],-1),X=(0,t._)("h3",{id:"如果你想自定义传参进来-你可以试试这样",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如果你想自定义传参进来-你可以试试这样","aria-hidden":"true"},"#"),(0,t.Uk)(),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450857-918078377.png",data:"aurora"}),(0,t.Uk)("如果你想自定义传参进来，你可以试试这样：")],-1),$=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450927-414337391.png",data:"aurora"})],-1),nn=(0,t._)("h3",{id:"如果你想实现这样的例子",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如果你想实现这样的例子","aria-hidden":"true"},"#"),(0,t.Uk)(" 如果你想实现这样的例子")],-1),an=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.gif",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450614-453011597.gif",data:"aurora"})],-1),sn=(0,t.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># main.pyfrom fastapi import FastAPI, Request, Formfrom fastapi.responses import RedirectResponsefrom fastapi.templating import Jinja2Templatesapp = FastAPI()template = Jinja2Templates(&quot;pages&quot;)todos = [&quot;写博客&quot;, &quot;看电影&quot;, &quot;玩游戏&quot;]@app.get(&quot;/&quot;)async def index(req: Request):    return template.TemplateResponse(&quot;index.html&quot;, context={&quot;request&quot;: req, &quot;todos&quot;: todos})@app.post(&quot;/todo&quot;)async def todo(todo=Form(None)):    &quot;&quot;&quot;处理用户发送过来的 todolist 数据&quot;&quot;&quot;    todos.insert(0, todo)    return RedirectResponse(&#39;/&#39;, status_code=302)if __name__ == &#39;__main__&#39;:    import uvicorn    uvicorn.run(&quot;main:app&quot;, reload=True)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),tn=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450629-1438946189.png",data:"aurora"}),(0,t.Uk)(" 在这里我说一下为什么要将状态码设置为302，如果你不设置这个status_code，浏览器发送给后端的请求状态码为307，因为307的状态码是不能从post请求跳转到get请求，原因是post请求如果要跳转到get请求不通用，如果想进行跳转，需要将307更改为302。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450621-1105676000.png",data:"aurora"}),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450611-558888954.png",data:"aurora"})],-1),on=(0,t.uE)('<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code># index.html    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>待办事项<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请添加待办事件...<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>添加<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>    {% for todo in todos %}    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{ todo }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>    {% endfor %}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),pn=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450752-450565568.png",data:"aurora"})],-1),en=(0,t.uE)('<h2 id="关联数据库-将数据存储化" tabindex="-1"><a class="header-anchor" href="#关联数据库-将数据存储化" aria-hidden="true">#</a> 关联数据库，将数据存储化</h2><h3 id="第一步-我们需要安装依赖库" tabindex="-1"><a class="header-anchor" href="#第一步-我们需要安装依赖库" aria-hidden="true">#</a> 第一步：我们需要安装依赖库</h3><p><code>pip install tortoise-orm</code><code>pip install aiomysq</code></p><h3 id="第二步-电脑需要安装mysql-安装调试过程不在赘述" tabindex="-1"><a class="header-anchor" href="#第二步-电脑需要安装mysql-安装调试过程不在赘述" aria-hidden="true">#</a> 第二步：电脑需要安装mysql，安装调试过程不在赘述</h3><p>以我为例：先创建一个db为fastapi的库</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">database</span> fastapi<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',6),ln=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450687-144212385.png",data:"aurora"})],-1),cn=(0,t.uE)('<h3 id="第三步-配置数据库" tabindex="-1"><a class="header-anchor" href="#第三步-配置数据库" aria-hidden="true">#</a> 第三步：配置数据库</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> tortoise<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>fastapi <span class="token keyword">import</span> register_tortoise<span class="token comment"># 数据库绑定register_tortoise(app,                  db_url=&quot;mysql://root:Ranyong_520@localhost:3306/fastapi&quot;,                  modules={&quot;models&quot;: []},                  add_exception_handlers=True,                  generate_schemas=True)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),un=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450652-2107100573.png",data:"aurora"})],-1),rn=(0,t.uE)('<h3 id="实例一-将数据存储到数据库并返回给前端" tabindex="-1"><a class="header-anchor" href="#实例一-将数据存储到数据库并返回给前端" aria-hidden="true">#</a> 实例一：将数据存储到数据库并返回给前端</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># d06_templates.pyfrom fastapi import FastAPI, Request, Formfrom fastapi.responses import RedirectResponsefrom fastapi.templating import Jinja2Templatesfrom tortoise.contrib.fastapi import register_tortoisefrom dao.models import Todoapp = FastAPI()template = Jinja2Templates(&quot;pages&quot;)# 数据库绑定register_tortoise(app,                  db_url=&quot;mysql://root:Ranyong_520@localhost:3306/fastapi&quot;,                  modules={&quot;models&quot;: [&#39;dao.models&#39;]},  # 设置模型类                  add_exception_handlers=True,                  generate_schemas=True)@app.get(&quot;/&quot;)async def index(req: Request):    # 从数据库获取 todos 的代码    # ORM,获取所有的 todos    todos = await Todo.all()  # 获取所有的todos    print(todos)    return template.TemplateResponse(&quot;index.html&quot;, context={&quot;request&quot;: req, &quot;todos&quot;: todos})@app.post(&quot;/todo&quot;)async def todo(content=Form(None)):    &quot;&quot;&quot;处理用户发送过来的 todolist 数据&quot;&quot;&quot;    await Todo(content=content).save()    return RedirectResponse(&#39;/&#39;, status_code=302)if __name__ == &#39;__main__&#39;:    import uvicorn    uvicorn.run(&quot;d06_templates:app&quot;, reload=True)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',2),gn=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450873-851989569.png",data:"aurora"}),(0,t.Uk)(" 然后创建一个dao的文件夹里面创建一个models的py文件")],-1),dn=(0,t.uE)('<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> tortoise <span class="token keyword">import</span> Model<span class="token punctuation">,</span> fields\n\n\n<span class="token keyword">class</span> <span class="token class-name">Todo</span><span class="token punctuation">(</span>Model<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token triple-quoted-string string">&quot;&quot;&quot;数据库当中的表 todo&quot;&quot;&quot;</span>\n    <span class="token builtin">id</span> <span class="token operator">=</span> fields<span class="token punctuation">.</span>IntField<span class="token punctuation">(</span>pk<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># id为int类型的 pk:是将id作为主键</span>\n    content <span class="token operator">=</span> fields<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span>max_length<span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">)</span>  <span class="token comment"># todo项里面的内容    例如:todos = [&quot;写博客&quot;, &quot;看电影&quot;, &quot;玩游戏&quot;]</span>\n    created_at <span class="token operator">=</span> fields<span class="token punctuation">.</span>DatetimeField<span class="token punctuation">(</span>auto_now_add<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># auto_now_add 当每次插入新数据的时候会引用本地时间</span>\n    updated_at <span class="token operator">=</span> fields<span class="token punctuation">.</span>DatetimeField<span class="token punctuation">(</span>auto_now<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  <span class="token comment"># auto_now 当每次修改数据后会更新本地时间</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',1),mn=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450706-526128356.png",data:"aurora"}),(0,t.Uk)(" 这时候我们来运行下代码： "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.gif",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450635-1846301692.gif",data:"aurora"}),(0,t.Uk)(" 可以发现返回了，并没有返回添加的数据，那我们再去数据库看,点击数据库更新按钮后，可以发现我们的数据已经存储到了表中表。 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.gif",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450658-625902721.gif",data:"aurora"}),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450637-77645872.png",data:"aurora"}),(0,t.Uk)(" 可以看到数据库已经存了我们提交的数据，现在我们只需要改一下index.html文件一个地方就可以解决 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.png",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450635-22672447.png",data:"aurora"}),(0,t.Uk)(" 最后效果 "),(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image.gif",originSrc:"https://img2020.cnblogs.com/blog/2299022/202107/2299022-20210704210450673-1759991875.gif",data:"aurora"})],-1),kn={},bn=(0,s(3744).Z)(kn,[["render",function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("div",p,[e,(0,t._)("p",null,[l,c,(0,t._)("a",i,[u,(0,t.Wm)(s)]),r]),(0,t._)("ul",null,[(0,t._)("li",null,[g,d,m,k,b,h,(0,t._)("a",q,[f,(0,t.Wm)(s)]),_]),y]),v,z,w,x,j,(0,t._)("p",null,[F,(0,t._)("a",S,[T,(0,t.Wm)(s)]),U,A]),P,(0,t._)("p",null,[R,(0,t._)("a",E,[I,(0,t.Wm)(s)]),N,H,J,O]),B,C,D,W,M,G,L,Q,Y,Z,K,V,X,$,nn,an,sn,tn,on,pn,en,ln,cn,un,rn,gn,dn,mn])],64)}]])}}]);