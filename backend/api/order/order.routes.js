const express = require('express')
// const {getUser, getUsers, deleteUser, updateUser} = require('./item.controller')
const {addOrder} = require('./order.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.post('/', addOrder)
// router.get('/:id', getShop)
// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router