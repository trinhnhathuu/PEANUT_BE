'use strict'

const HospitalService = require('../services/hospital.service')

class HospitalController {

    getHospitals = async (req, res, next) => {
        const hospitals = await HospitalService.getHospitals()
        res.status(200).json(hospitals).send();
    }

    getHospitalsByProvinceCode = async (req, res, next) => {
        const code = req.params.code
        const hospitals = await HospitalService.getHospitalsByProvinceCode(code)
        res.status(200).json(hospitals).send();
    }
}

module.exports = new HospitalController()