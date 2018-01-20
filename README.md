# react-cnode

## 简介

> A react-project

## 构建

``` bash
# 安装npm包
yarn

# 本地启开发服务
yarn start

# 打包
yarn build

```

## 开发

**mock**

本项目未提供mock服务，需要可以加

**接口请求**

封装了axios，只需要在./src/services/urls.js里添加你需要的接口路径，然后在./src/services/services.js里添加接口请求的封装，在你需要请求的地方引入即可，封装例子如下
```
// get /topics 主题首页
topics(options = {}) {
    return new Promise((resolve, reject) => {
        utils.http.request({
            method: 'GET',
            url: urls.topics,
            qs: options
        }, (data) => {
            resolve(data);
        });
    });
},
```

**静态文件**

静态文件放在./src/assets/下公共的css和各页面需要的图片和公共js文件、字体等

**组件**

一些常用公共组件放在./src/components，里面有loading，toast组件例子

**页面**

页面放在./src/routes下，使用jsx，见
https://reactjs.org/

**路由**

使用的是react-router4，使用见
https://reacttraining.com/react-router/web/example/basic

**工具类函数**

工具类函数写在./src/utils/utils.js里，可定义公共函数

**状态管理**

使用redux
https://redux.js.org/

## 效果图

见 https://still-bayou-37837.herokuapp.com/reactcnode/index.html#/home

## 线上地址
https://still-bayou-37837.herokuapp.com/reactcnode/index.html#/home