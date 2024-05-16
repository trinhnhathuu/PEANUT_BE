
const express = require('express');
const userController = require('../../src/controllers/user.controller')
const router = express.Router();
const {asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');

router.get('/user', asyncHandler(userController.getUser))
router.put('/user', asyncHandler(userController.updateUser))

module.exports = router