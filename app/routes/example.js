const Router = require('koa-router')
const ExampleController = require('../controllers/Example')

const router = Router({
  prefix: '/examples',
})

// 获取资源列表
router.get('/', ExampleController.index)
// 获取指定资源
router.get('/:id', ExampleController.show)
// 新增资源
router.post('/', ExampleController.store)
// 更新指定资源
router.put('/:id', ExampleController.update)
// 删除指定资源
router.delete('/:id', ExampleController.destroy)

module.exports = router
