const express = require('express');
const router = express.Router();
const testsController = require('../controllers/testsController')

router.post('/', testsController.createTest) //создать тест
router.get('/:id', testsController.getTestById); // Параметр :id будет передан в req.params
router.get('/', testsController.getAllTestsByUserId) //получить все тесты которые созданы текущим пользователем
router.put('/', testsController.refreshTest) // обновить тест
router.delete('/:id', testsController.deleteTestById) //удалить тест по id
router.get('/completed', testsController.getCompletedTestByUser) //получить список пройденных тестов текущим пользователем
router.delete('/completed/:id', testsController.getCompletedDetailedTestByUserId) // получить детальную информацию по пройденному тесту (с правильными\неправильными ответами)


module.exports = router
