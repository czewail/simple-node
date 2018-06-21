const request = require('request')

describe('RESOURCE RESTAPI TEST', () => {
  // 测试-获取资源列表
  it('REQUEST: GET With Index', () => {
    const p = new Promise((resolve) => {
      request.get('http://localhost:5100/examples', (err, res) => {
        resolve(res)
      })
    })
    return p.then(res => {
      expect(res.statusCode).toBe(200)
    })
  })

  // 测试-获取指定资源
  it('REQUEST: GET With Show', () => {
    const p = new Promise((resolve) => {
      request.get('http://localhost:5100/examples/1', (err, res) => {
        resolve(res)
      })
    })
    return p.then(res => {
      const body = JSON.parse(res.body)
      // 验证状态吗
      expect(res.statusCode).toBe(200)
      // 验证返回数据的id为参数传入的id
      expect(body.data.id).toBe(1)
    })
  })

  // 测试-新增指定资源
  it('REQUEST: POST With Store', () => {
    const p = new Promise((resolve) => {
      request.get('http://localhost:5100/examples', (err, res) => {
        resolve(res)
      })
    })
    return p.then(res => {
      expect(res.statusCode).toBe(200)
    })
  })

  // 测试-更新指定资源
  it('REQUEST: PUT With Update', () => {
    const p = new Promise((resolve) => {
      request.put('http://localhost:5100/examples/1', (err, res) => {
        resolve(res)
      })
    })
    return p.then(res => {
      const body = JSON.parse(res.body)
      // 验证状态吗
      expect(res.statusCode).toBe(200)
      // 验证返回数据的id为参数传入的id
      expect(body.data).toBe(1)
    })
  })


  // 测试-新增指定资源
  it('REQUEST: DELETE With Destory', () => {
    const p = new Promise((resolve) => {
      request.delete('http://localhost:5100/examples/1', (err, res) => {
        resolve(res)
      })
    })
    return p.then(res => {
      expect(res.statusCode).toBe(200)
    })
  })
})

