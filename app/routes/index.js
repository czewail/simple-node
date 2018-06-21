const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

const router = Router()

// 当前模块的文件名
const basename = path.basename(module.filename)

// 代理器路由
const proxyRoute = require('./_proxy')
// 渲染页面路由
const viewRoute = require('./_view')

// 自动加载路由
fs
  .readdirSync(__dirname)
  .filter((file) => {
    // _开头不自动加载
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js' && (file.slice(0, 1) !== '_'))
  })
  .forEach((file) => {
    const route = require(path.join(__dirname, file))
    router.use(route.routes(), route.allowedMethods())
  })

// 加载私有路由
router.use(proxyRoute.routes(), proxyRoute.allowedMethods())
router.use(viewRoute.routes(), viewRoute.allowedMethods())

module.exports = router
