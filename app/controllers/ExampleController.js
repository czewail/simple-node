/**
 * 示例控制器
 */

/** 示例服务层模块 */
const ExampleService = require('../services/example')

/**
 * 示例资源控制器
 * @namespace example
 * @property index 获取资源列表
 * @property show 获取指定资源
 * @property store 创建新的资源
 * @property update 更新指定资源
 * @property destroy 销毁指定资源
 */
class ExampleController {
  /**
   * 获取资源列表
   * 响应Get请求
   */
  static async index(ctx) {
    // 从服务层获取列表数据
    const res = await ExampleService.getItems()
    // 拼装数据
    const locals = res
    ctx.api.success(locals)
  }
  /**
   * 获取指定资源
   * 响应Get请求
   */
  static async show(ctx) {
    const res = await ExampleService.getItemById(ctx.params.id)
    // 拼装数据
    const locals = res
    ctx.api.success(locals)
  }
  /**
   * 创建新的资源
   * 响应Post请求
   */
  static async store(ctx) {
    // 返回资源位置与id
    ctx.api.created('/examples/1', 1)
  }
  /**
   * 更新指定支援
   * 响应Put和Patch请求
   */
  static async update(ctx) {
    // 返回已删除的id
    ctx.api.updated(+ctx.params.id)
  }
  /**
   * 销毁指定支援
   * 响应Delete请求
   */
  static async destroy(ctx) {
    ctx.api.deleted()
  }
}

module.exports = ExampleController
