'use strict'

const express = require('express');
const accessController = require('../../controllers/access.controller')
const router = express.Router();
const {asyncHandler } = require('../../helper/fileAsyncHandler.hander');
const {authentication} = require('../../auth/authUtils');


// đăng ký
router.post('/user/signup',asyncHandler(accessController.signUp))
router.post('/user/login', asyncHandler(accessController.login))
// authentication
router.use(authentication)
router.post('/user/logout', asyncHandler(accessController.logout))
router.post('/user/handlerRefreshToken', asyncHandler(accessController.handlerRefreshToken))
// findByUserId

   

module.exports = router