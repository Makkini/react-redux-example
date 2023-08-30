const express = require('express');
const router = express.Router();
const answersController = require('../controllers/answersController')

router.post('/answer_id', answersController.answerHandler) //ответить
router.get('/:test_id', answersController.getUserAnswersByTestId) //получить ответы пользователя на тест по ID теста


module.exports = router
