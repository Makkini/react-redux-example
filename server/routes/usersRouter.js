const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController')


router.post('/registration', usersController.registration);

router.post('/login', usersController.login);

router.get('/refresh', usersController.refreshToken);

router.get('/activate/:link', usersController.activateLink);

router.post('/password', usersController.refreshPassword);

module.exports = router;
