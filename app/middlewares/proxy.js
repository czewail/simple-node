const proxyMiddleware = require('http-proxy-middleware')
const c2k = require('koa2-connect')
const proxy = require('../../config/proxy.js')
const { env } = require('../../config/config.js')

// 根据当前环境获取代理器配置属性
const proxyConfig = proxy[env]

// 生成代理器配置
const proxyOption = {
  target: proxyConfig.origin,
  changeOrigin: true,
  secure: false,
  logLevel: env === 'production' ? 'info' : 'debug',
}

module.exports = c2k(
  proxyMiddleware(proxyOption)
)
