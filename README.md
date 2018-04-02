# goldbean

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 静态资源
│   ├── components             // 页面组件
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── App.vue                // 入口页面
│   └── main.js                // 入口js
├── static                     // 不打包资源
├── .babelrc                   // babel-loader 配置
├── index.html                 // html模板
└── package.json               // package.json
```

## 开发进度
``` bash
20180125-20180126
基于 axios 的封装请求，和服务端进行交互
components/views：碎片组件
mint-ui：Indicator(加载提示框)、MessageBox(弹出式提示框)
前端跨域(devServer.proxy)

20180127-20180128
引入vuex管理状态，如用户是否登录
```