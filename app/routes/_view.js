/**
 * 渲染路由
 * Router
 */
const fs = require('fs')
const path = require('path')
const Router = require('koa-router')

const router = Router({
  prefix: '/',
})

let htmlString = '404'
const htmlPath = path.resolve(__dirname, '../../../public/index.html')

if (fs.existsSync(htmlPath)) {
  htmlString = fs.readFileSync(htmlPath)
}

router.get('*', ctx => {
  ctx.type = 'html'
  ctx.body = htmlString
})

module.exports = router
