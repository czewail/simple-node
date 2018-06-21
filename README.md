# node层基础框架
由`Koa2`为主实现的node中间层服务

## 框架结构
#### 路由层
负责路由分发，由路由对应的控制器实现逻辑处理
说明：
- 路由文件无需手动引入，会自动引入
- `_` 开头的路由文件规定为私有路由，不会自动引入，如果需要引入，需要手动在`/app/routes/index.js` 中手动引入

#### 控制层
负责逻辑处理，从服务层取对应数据后进行简单的处理或封装

#### 服务层
负责服务调用，从后端接口或数据库获取数据，然后返回给控制器

#### 中间层
定义一些项目的中间件

## 代理器
路由的最后面引入了http代理器，代理器在中间层实现，所有前面未匹配到的路由都会被直接代理到后端，减少重构或新加node层的成本，后期实现所有路由后可将其注释，移除代理器

## 目录结构
```txt
├── __test__ // 测试目录
│   └── example.spec.js // example 控制器测试
├── app // 项目主目录
│   ├── controllers // 控制层
│   │   └── ExampleController.js
│   ├── index.js
│   ├── middlewares // 中间层
│   │   ├── api.js
│   │   └── proxy.js
│   ├── routes // 路由层
│   │   ├── _proxy.js
│   │   ├── _view.js
│   │   ├── example.js
│   │   └── index.js
│   └── services // 服务层
│       └── example.js
├── config // 项目配置目录
│   ├── config.js
│   ├── database.js
│   └── proxy.js
├── log // pm2 运行日志
│   └── questionnaire.log
├── nodemon.json
├── package-lock.json
└── package.json
```

## 使用
#### 开发环境
```bash
// 开启服务
$ npm run dev
```
#### 测试环境
```bash
// 开启服务
$ npm run test-start
// 停止服务
$ npm run test-stop
// 重启服务
$ npm run test-restart
// 查看日志
$ npm run test-logs
// 查看资源使用
$ npm run test-monit
```

#### 生产环境
```bash
// 开启服务
$ npm start
// 停止服务
$ npm run stop
// 重启服务
$ npm run restart
// 查看日志
$ npm run logs
// 查看资源使用
$ npm run monit
```
> 根据项目名称将 pm2 的服务命名 `nodeMiddleware` 改为 自己项目的名称

## 测试
```bash
// 开启服务
$ npm run dev
// 测试
$ npm run test
```