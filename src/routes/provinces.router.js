const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const  ProvinceController  = require('../../src/controllers/provinces.controller');

router.get('/provinces', asyncHandler(ProvinceController.getProvinces))
router.get('/provinces/:code', asyncHandler(ProvinceController.getProvinceByCode))
router.get('/provinces/:name', asyncHandler(ProvinceController.getProvinceByName))

module.exports = router