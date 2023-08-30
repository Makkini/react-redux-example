const express = require('express');
const router = express.Router();
const answersRouter = require('./answersRouter')
const testsRouter = require('./testsRouter')
const usersRouter = require('./usersRouter')

router.use('/users', usersRouter)
router.use('/tests', testsRouter)
router.use('/answers', answersRouter)



module.exports = router
