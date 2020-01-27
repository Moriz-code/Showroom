const express = require('express')

const {login,signup} = require('./auth.controller')

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
// router.post('/logout', requireAuth, logout)

module.exports = router