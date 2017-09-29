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
数据，第三类，变单页面，用来提交或者展示表单数据。

- 设计思路： 每一类界面对应一个单独的入口文件和一个container文件，同时每一类界面对应一类单独的路由设置，container去加载每类界面对应的路由
配置，入口文件去加载container，

- 入口文件氛围三大类list.js, formRoute.js, detail.js,分别对应的container为，ListContainer.js， FormContainer,js, DetailContainer.js
三大类，对应的路由设置分别为listRoutes.js, forRoutes.js, detailRoutes.js

- 但是设计有个很大的问题，就是关于请求部分放在哪里，这个待完善。先规划项目整体

- 为了方便设计和展示，引入antd

- 设置了一个ClassifyRouterComponent组件，用来存放顶部导航栏，或者底部导航栏，总之公共部分都可以用来放置在这个部分
