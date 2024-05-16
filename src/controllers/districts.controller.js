'use strict'

const DistrictService = require('../services/districts.service')

class DistrictController { 

    getDistricts = async (req, res, next) => {
        const districts = await DistrictService.getDistricts()
        res.status(200).json(districts).send();
    }

    getDistrictByCode = async (req, res, next) => {
        const code = req.params.code
        const district = await DistrictService.getDistrictByCode(code)
        res.status(200).json(district).send();
    }
    getDistrictByProvinceCode = async (req, res, next) => {
        const code = req.params.code
        const district = await DistrictService.getDistrictByProvinceCode(code)
        res.status(200).json(district).send();
    }
}
module.exports = new DistrictController()