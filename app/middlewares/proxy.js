const { env } = require('../../config/config.js')
const proxy = require('../../config/proxy.js')
const proxyMiddleware = require('http-proxy-middleware')
const c2k = require('koa2-connect')

const proxyConfig = proxy[env]

const proxyOption = {
  target: proxyConfig.origin,
  changeOrigin: true,
  secure: false,
  logLevel: env === 'production' ? 'info' : 'debug',
  onProxyReq: () => {
    console.log('我代理请求啦')
  },
}

module.exports = c2k(
  proxyMiddleware(proxyOption)
)
