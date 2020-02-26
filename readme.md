# 目录

-   [启动](#启动)
-   [技术栈](#技术栈)
-   [目录结构](#目录结构)

## 启动

### 安装

> yarn (或者 npm i)

### 运行

> 使用HbuilderX => 运行 -> 运行到小程序模拟器 -> 微信开发者工具

### 查看

> 将unpackage/dev/mp-weixin目录作为微信小程序运行的目录

## 技术栈

-   [vue](https://cn.vuejs.org)
-   [vuex](https://vuex.vuejs.org/zh/)
-   [uni-app](https://uniapp.dcloud.io)
-   [esnext: js的下一代语法，即es6,es7,es8等](http://es6.ruanyifeng.com)
-   [sass](https://www.sass.hk)

[⬆️](#目录)

## 目录结构

```tree
┌── api
│   ├── api.js                      项目的接口地址目录
│   └── request.js                  项目的接口服务配置
├── components
│   ├── common                      公共组件
│   └── page-components             页面组件
├── iconfont                        字体图标
├── pages                           主页面
├── static                          的静态资源
├── stores                          vuex状态管理
├── subpkgs                         子包目录
├── unpackage
│   ├── build                       生产的输出目录
│   └── dev                         开发的输出目录
└── utils
│   └── tools.js                    工具类函数
├── App.vue                         vue的root
├── main.js                         uni-app入口文件
├── manifest.json                   uni-app的多端配置文件
├── package.json                    项目工具npm包下载
├── pages.json                      页面配置信息
├── readme.md                       项目的说明
└── uni.scss                        uni Scss变量
```
