const Koa = require('koa')
const path = require('path')
const koaBody = require('koa-body')
const serve = require('koa-static')
const cors = require('koa2-cors')
const api = require('koa2-api')
const config = require('../config/config')
const router = require('./routes')

const { env, port } = config

const app = new Koa()

// 中间件
app.use(koaBody())
app.use(api())

// 跨域访问
app.use(cors({
  origin: () => {
    return '*'
  },
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
}))

// 静态资源
app.use(serve(path.join(__dirname, '../public/assets')))

// 加载路由
app.use(router.routes(), router.allowedMethods())

// 开启 Httpp 服务
app.listen(port[env] || 3000, () => {
  console.log('Node app is running on port', port[env] || 3000)
})
