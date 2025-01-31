'use strict'
const express = require('express');
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const doctorSignUpController  = require('../../src/controllers/doctor_sign_up.controller');
const router = express.Router();
// check apiKey

router.post('/doctor', asyncHandler(doctorSignUpController.create))
router.get('/doctor/:doctorId', asyncHandler(doctorSignUpController.getDoctorById))
router.get('/doctor/user/:userId', asyncHandler(doctorSignUpController.getDoctorByUserId))
router.get('/doctor/hospital/:idHospital', asyncHandler(doctorSignUpController.getDoctorByHospitalId))
router.get('/doctor/paginate', asyncHandler(doctorSignUpController.paginate))
// ví dụ đường dẫn paginate localhost:3000/doctor/paginate?limit=10&page=1&sortBy=createdAt:desc

module.exports = router