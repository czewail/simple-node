/**
 * 代理器路由
 * Router
 */
const proxy = require('../middlewares/proxy')
const Router = require('koa-router')

const router = Router()

router.all('/*', proxy)

module.exports = router
