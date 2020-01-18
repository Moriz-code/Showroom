const express = require('express')
// const {getUser, getUsers, deleteUser, updateUser} = require('./item.controller')
const {getItems} = require('./item.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getItems)
// router.get('/:id', getUser)
// router.put('/:id',  requireAuth, updateUser)
// router.delete('/:id',  requireAuth, requireAdmin, deleteUser)

module.exports = router