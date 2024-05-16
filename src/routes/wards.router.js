'use strict'
const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const wardController = require('../../src/controllers/wards.controller');

router.get('/wards', asyncHandler(wardController.getWards))
router.get('/wards/:code', asyncHandler(wardController.getWardByCode))
router.get('/wards/district/:code', asyncHandler(wardController.getWardByDistrictCode))

module.exports = router