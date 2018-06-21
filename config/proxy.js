/**
 * 代理中间件配置文件
 * @property {string} origin 目标地址
 */
const proxy = {
  development: {
    origin: 'http://192.168.1.22:8838',
  },
  test: {
    origin: 'http://192.168.13.31:8838',
  },
  production: {
    origin: 'http://192.168.13.26:8838',
  }
}

module.exports = proxy