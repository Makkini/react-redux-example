const Router = require('express')
const router = new Router()

router.post('/tests') //создать тест
router.get('/tests') //получить все тесты которые созданы текущим пользователем
router.get('/tests/:id') //получить тест по id
router.put('/tests') // обновить тест
router.delete('/tests/:id') //удалить тест по id



module.exports = router
