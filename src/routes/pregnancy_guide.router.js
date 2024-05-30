'use strict'
const router = require('express').Router()
const PregnancyGuideController = require('../../src/controllers/pregnancy_guide.controller')
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');

router.get('/pregnancy-guide/user/:userId', asyncHandler(PregnancyGuideController.getPregnancyGuideByWeek))
module.exports = router