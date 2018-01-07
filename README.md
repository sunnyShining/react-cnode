#A React.js project

> 改写dva-cli出来的脚手架，仿ant-admin改写，支持js文件和img文件和css文件打包存放位置修改

## 一、开发环境

开发系统为mac系统，node >= 6

## 二、开发和打包相关命令

**1.安装相关npm包**

```
$ yarn
或
$ npm i
```

**2.开发本地服务**

```
$ npm run dev
或
$ npm start
或
$ yarn dev
或
$ yarn start
```

**3.打测试环境的包（打包后zip包在./dist/prd里）**

```
$ npm run stg
或
$ npm run build:stg
或
$ yarn stg
或
$ yarn build:stg
```

**4.打生产环境的包（打包后zip包在./dist/prd里）**

```
$ npm run prd
或
$ npm run build:prd
或
$ yarn prd
或
$ yarn build:prd
```

## 三、关于开发

**1.mock**

在./mock新增相关js文件，再导出相应的mock数据，文件夹下有相关例子

**2.接口请求**

在./src/services/urls.js里配置各接口，静态页面等等路径，在./src/services/services.js使用promise异步的方式封装，需要接口请求引入services.js这个文件，使用相应的即可。里面有相关例子

**3.路由**

路由配置放在./src/router/router.jsx里,react-router 4，使用方法见

https://reacttraining.com/react-router/web/example/basic

**4.model**

模型为状态管理，参见redux

http://cn.redux.js.org/

**5.页面**

各路由对应页面放在./src/container/里，页面开发使用Ant Design of React，开发相关见

https://ant.design/docs/react/introduce-cn

**6.组件**

自定义组件放在./src/components里，有组件相关例子作为参考

**7.工具类函数**

工具类函数放在./src/utils里，需要什么公共功能的函数自己定义

**8.相关资源(图片，less，font)**
资源放在./src/assets/下对应文件


## 四、架构相关配置

修改./.roadhogrc.js修改打包，开发的一些相关配置，各配置项在该文件有相关介绍