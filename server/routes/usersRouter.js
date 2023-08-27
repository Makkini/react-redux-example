const express = require('express');
const router = express.Router();

router.post('/users/registration', (req, res) => {
    // Обработка регистрации пользователя
});

router.post('/users/login', (req, res) => {
    // Обработка входа пользователя
});

router.get('/users/refresh', (req, res) => {
    res.json({ message: 'working' }); // Отправка JSON-ответа
});

router.get('/users/activate/:link', (req, res) => {
    res.json({ message: 'working' }); // Отправка JSON-ответа
});

router.post('/users/password', (req, res) => {
    // Обработка сброса пароля
});

module.exports = router;
