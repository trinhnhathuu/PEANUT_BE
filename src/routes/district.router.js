'use strict'
const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const DistrictController = require('../../src/controllers/districts.controller');

router.get('/districts', asyncHandler(DistrictController.getDistricts))
router.get('/districts/:code', asyncHandler(DistrictController.getDistrictByCode))
router.get('/districts/province/:code', asyncHandler(DistrictController.getDistrictByProvinceCode))

module.exports = router