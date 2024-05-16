'use strict'
const express = require('express')
const router = express.Router()
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const HospitalController = require('../../src/controllers/hospital.controller')


router.get('/hospitals', asyncHandler(HospitalController.getHospitals))
router.get('/hospitals/province/:code', asyncHandler(HospitalController.getHospitalsByProvinceCode))

module.exports = router