'use strict'

const DoctorSignUpService = require('../services/doctor_sign_up.service')

class DoctorSignUpController {

    create = async (req, res, next) => {
        const body = req.body
        const doctor = await DoctorSignUpService.getDoctor({ body })
        res.status(201).json(doctor).send()
    }

    getDoctorById = async (req, res, next) => {
        const doctorId = req.params.doctorId
        const doctor = await DoctorSignUpService.getDoctorById({ doctorId })
        res.status(200).json(doctor).send()
    }

    getDoctorByUserId = async (req, res, next) => {
        const userId = req.params.userId
        const doctor = await DoctorSignUpService.getDoctorByUserId({ userId })
        res.status(200).json(doctor).send()
    }
}

module.exports = new DoctorSignUpController()
