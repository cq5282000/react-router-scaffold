# react-router-scaffold 更新日志

这个项目主要是研究react-router以及按需加载，主要是学习react-router

## 2017年9月25日  

### 项目基础配置

- es6
- 热加载
- react
- redux

## 2017年9月26日  

### react-router

-按需加载的方案require.ensure,

-对于大型应用来说，一个首当其冲的问题是所需加载的javascript的大小。程序应该只加载当前渲染页所需的javascript，有些开发者将这种方式称为代码
拆分 code splitting

### 2017年9月28日

几天的煎熬，工程终于能够跑起来了，最终问题是因为我安装的react-router的版本不对，这个以后一定要注意，版本不一样，写法也不一样，默认会安装4，

- react-router应用场景思考: 首尾都一样的后台。
- 实现界面的无跳转刷新，优化用户体验。
- 实时感受了下，react-router，界面没有任何抖动的界面刷新跳转，做的确实不错。
- router的路径配置部分无法热替换，这是一个问题。

### 2017年9月29日

- 路径配置无法热替换解决方案，首先针对每个入口文件，设置一个container，入口文件去加载container，container去加载对应的路由配置，这样每次
修改组件的时候的时候，就可以热替换，但是配置理由的修改依旧无法热替换。

- react-router设计思想，网站界面无非分为三大类，第一类，详情界面，detail，展示具体信息; 第二类界面: 列表类界面，list，用来展示列表类
数据，第三类，表单页面，用来提交或者展示表单数据。

- 设计思路： 每一类界面对应一个单独的入口文件和一个container文件，同时每一类界面对应一类单独的路由设置，container去加载每类界面对应的路由
配置，入口文件去加载container，

- 入口文件氛围三大类list.js, formRoute.js, index.js,分别对应的container为，ListContainer.js， FormContainer,js, DetailContainer.js
三大类，对应的路由设置分别为listRoutes.js, forRoutes.js, detailRoutes.js

- 但是设计有个很大的问题，就是关于请求部分放在哪里，这个待完善。先规划项目整体

- 为了方便设计和展示，引入antd

- 设置了一个ClassifyRouterComponent组件，用来存放顶部导航栏，或者底部导航栏，总之公共部分都可以用来放置在这个部分

-----------------------------------------------阶段分割线----------------------------------------------------------------

### bug 记录

- 组件内容的热替换和路径的热替换无发同时实现


### 2017年10月7日

react-router适合于单页面应用，针对不同的场景设置不同的container，所以修改工程如下：

- 入口文件只有一个index.js, 入口文件去加载一个BaseContainer，

- BaseContainer去加载所有业务场景的路径配置，

- 每个业务的路由配置按需加载该业务场景下对应的container

- 目前的工程目录结构暂定成这样

- 引入antd以后比那一的时间大大加长，怎么回事


### 注意

按需加载的时候，不要直接import '....'，而要用require，否则模块会直接被webpack打包，而不会打包成单独的异步加载文件

### 问题

container的按需加载已经实现，那么组件的按需加载如何实现。

### 组件的按需加载

### 2017年10月8号

- 引入happypack和commonChunkPlugins以后编译时间反而变长

- 引入commonChunkPlugin的时候每个入口文件必须绑定定义的chunk

### 2017年10月9日

- 单页面应用中引入commonChunkPlugin的意义不大，引入后会加长编译的时间，多页面应用中这个作用才比较大。
- happypack也是一个我比较疑惑的问题，引入之后编译时间反而变长了，跟别人证实了一下，这个去掉了。。。。。。

### code splitting

- 将某些第三方的基础框架模块（ 例如moment，loadash ）或者多个页面的公用模块（js, CSS ）拆分出来独立打包加载，通常这些模块改动频率很低，

- 