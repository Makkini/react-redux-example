const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', usersController.registration);

router.post('/login', usersController.login);

router.get('/refresh', authMiddleware, usersController.refreshToken);

router.get('/activate/:link', usersController.activateLink);

router.post('/password', usersController.refreshPassword);

module.exports = router;
