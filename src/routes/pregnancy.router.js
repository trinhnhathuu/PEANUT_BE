'use strict'
const router = require('express').Router()
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const PregnancyController = require('../../src/controllers/pregnancy.controller');

router.post('/pregnancy', asyncHandler(PregnancyController.create))
router.get('/pregnancy/user/:userId', asyncHandler(PregnancyController.getPregnancyByUserId))

module.exports = router