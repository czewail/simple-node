
// 环境
const env = process.env.NODE_ENV || 'development'
// 端口
const port = {
  development: process.env.PORT || 5100,
  test: process.env.PORT || 5100,
  production: process.env.PORT || 5100,
}

const config = {
  env,
  port,
}


module.exports = config
