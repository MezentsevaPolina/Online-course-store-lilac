const Router = require('express')
const router = new Router()
const courseController = require('../controllers/courseController')
const checkRole = require('../middleware/chekRoleMiddleware')

router.post('/',checkRole('MASTER'), courseController.create)
router.get('/',courseController.getAll)
router.get('/:id', courseController.getOne)

module.exports = router