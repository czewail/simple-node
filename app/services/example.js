/* eslint no-unused-vars: [0] */
const superagent = require('superagent')
const Mock = require('mockjs')

const pageSize = 20

class ExampleService {
  // 获取列表
  static async getItems() {
    // 通过 superagent 调用服务接口
    // Example:
    // const response = await superagent
    //   .get('http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E5%85%B3%E9%94%AE%E5%AD%97&bk_length=600')
    // return response && response.body
    const res = Mock.mock({
      'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        name: '@cname',
        city: '@city',
      }],
    })
    return res.list
  }
  // 获取指定id数据
  static async getItemById(id) {
    const res = Mock.mock({
      id: +id,
      name: '@cname',
      city: '@city',
    })
    return res
  }
}

module.exports = ExampleService
