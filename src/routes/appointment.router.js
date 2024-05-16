'use strict'
const express = require('express')
const router = express.Router()

const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const AppointmentController = require('../../src/controllers/appointment.controller')

router.post('/appointment', asyncHandler(AppointmentController.create))
router.get('/appointment/user/:userId', asyncHandler(AppointmentController.getAppointmentByUserId))
router.get('/appointment/doctor/:doctorId', asyncHandler(AppointmentController.getAppointmentByDoctorId))
router.get('/appointment/:id', asyncHandler(AppointmentController.getAppointmentById))
router.put('/appointment/:id', asyncHandler(AppointmentController.updateAppointment))
module.exports = router