'use strict'
const express = require('express');
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const doctorSignUpController  = require('../../src/controllers/doctor_sign_up.controller');
const router = express.Router();
// check apiKey

router.post('/doctor', asyncHandler(doctorSignUpController.create))
router.get('/doctor/:doctorId', asyncHandler(doctorSignUpController.getDoctorById))
router.get('/doctor/user/:userId', asyncHandler(doctorSignUpController.getDoctorByUserId))

module.exports = router