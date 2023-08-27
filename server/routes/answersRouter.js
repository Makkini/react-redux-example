const Router = require('express')
const router = new Router()

router.post('/answers/answer_id') //ответить
router.get('/answers/:test_id') //получить ответы пользователя на тест по ID теста


module.exports = router
