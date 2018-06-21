/**
 * Koa restAPI middleware
 */

const STATUS = {
  100: 'continue',
  101: 'switching protocols',
  102: 'processing',
  200: 'ok',
  201: 'created',
  202: 'accepted',
  203: 'non-authoritative information',
  204: 'no content',
  205: 'reset content',
  206: 'partial content',
  207: 'multi-status',
  208: 'already reported',
  226: 'im used',
  300: 'multiple choices',
  301: 'moved permanently',
  302: 'found',
  303: 'see other',
  304: 'not modified',
  305: 'use proxy',
  307: 'temporary redirect',
  308: 'permanent redirect',
  400: 'bad request',
  401: 'unauthorized',
  402: 'payment required',
  403: 'forbidden',
  404: 'not found',
  405: 'method not allowed',
  406: 'not acceptable',
  407: 'proxy authentication required',
  408: 'request timeout',
  409: 'conflict',
  410: 'gone',
  411: 'length required',
  412: 'precondition failed',
  413: 'payload too large',
  414: 'uri too long',
  415: 'unsupported media type',
  416: 'range not satisfiable',
  417: 'expectation failed',
  418: 'Im a teapot',
  422: 'unprocessable entity',
  423: 'locked',
  424: 'failed dependency',
  426: 'upgrade required',
  428: 'precondition required',
  429: 'too many requests',
  431: 'request header fields too large',
  500: 'internal server error',
  501: 'not implemented',
  502: 'bad gateway',
  503: 'service unavailable',
  504: 'gateway timeout',
  505: 'http version not supported',
  506: 'variant also negotiates',
  507: 'insufficient storage',
  508: 'loop detected',
  510: 'not extended',
  511: 'network authentication required',
}

class Api {
  constructor(ctx) {
    this.ctx = ctx
    this.code = 200
    this.meta = null
    this.data = null
  }
  /**
   * 新增附加信息
   * @param {string} name 附加信息名称
   * @param {string} value 附加信息值
   */
  addMeta(name, value) {
    this.meta = {
      ...this.meta,
      [`${name}`]: value,
    }
    return this
  }
  /**
   * 设置附加信息
   * @param {object} meta 附加信息
   */
  setMeta(meta) {
    this.meta = meta
    return this
  }
  /**
   * 添加response的header头信息
   * @param {object} meta 附加信息
   */
  addHeader(name = null, value = null) {
    if (name !== null && value !== null) {
      this.ctx.set(name, value)
    }
    return this
  }
  /**
   * 通用错误处理方法
   * @param {mixed} data 返回的成功数据
   * @param {number} code 状态码，默认200
   */
  success(data, code = 200) {
    this.code = code
    this.data = data || STATUS[code]
    this.response()
  }
  /**
   * 通用错误处理方法
   * @param {mixed} msg 返回的错误信息
   * @param {number} code 状态码，默认404
   */
  error(msg, code = 404) {
    const message = msg || STATUS[code]
    this.code = code
    this.data = message
    this.response()
  }
  /**
   * 创建了资源的响应, 状态码为201
   * @param {*} location 资源响应位置
   */
  created(location = null, msg) {
    const code = 201
    const message = msg || STATUS[code]
    this.code = code
    this.data = message
    this.addHeader('Location', location).response()
  }
  /**
   * 更新了资源的响应, 状态码为200
   * success 的别名
   * @param {mixed} data 返回的数据
   */
  updated(data) {
    this.success(data, 200)
  }
  /**
   * 删除了资源的响应, 状态码为200
   * success 的别名
   * @param {mixed} data 返回的数据
   */
  deleted(data) {
    this.success(data, 200)
  }
  /**
   * 无内容响应
   */
  noContent() {
    this.code = 204
    this.response()
  }
  /**
   * bad request 错误, 状态码为400
   * @param {mixed} msg 自定义消息
   */
  errorBadRequest(msg) {
    this.error(msg, 400)
  }
  /**
   * 未认证错误, 状态码为401
   * @param {mixed} msg 自定义消息
   */
  errorUnauthorized(msg) {
    this.error(msg, 401)
  }
  /**
   * 服务器拒绝错误, 状态码为403
   * @param {mixed} msg 自定义消息
   */
  errorForbidden(msg) {
    this.error(msg, 403)
  }
  /**
   * 没有找到资源的错误, 状态码为404
   * @param {mixed} msg 自定义消息
   */
  errorNotFound(msg) {
    this.error(msg, 404)
  }
  /**
   * 方法不允许的错误, 状态码为405
   * @param {mixed} msg 自定义消息
   */
  errorMethodNotAllowed(msg) {
    this.error(msg, 405)
  }
  /**
   * 无法接受的类型, 状态码为406
   * @param {mixed} msg 自定义消息
   */
  errorNotAcceptable(msg) {
    this.error(msg, 406)
  }
  /**
   * 服务当前无法处理请求错误, 状态码为503
   * @param {mixed} msg 自定义消息
   */
  errorUnavailable(msg) {
    this.error(msg, 405)
  }
  /**
   * 根据实例属性响应接口数据
   */
  response() {
    const res = {}
    if (this.meta) {
      res.meta = this.meta
    }
    if (this.data) {
      res.data = this.data
    }
    this.ctx.status = this.code
    this.ctx.body = res
  }
}

const apiMiddleware = async (ctx, next) => {
  const ctxApi = new Api(ctx)
  ctx.api = ctxApi
  await next()
}

module.exports = apiMiddleware
