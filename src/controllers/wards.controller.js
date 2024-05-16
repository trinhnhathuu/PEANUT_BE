'use strict'

const WardService = require('../services/wards.service')

class WardController {

    getWards = async (req, res, next) => {
        const wards = await WardService.getWards()
        res.status(200).json(wards).send();
    }

    getWardByCode = async (req, res, next) => {
        const code = req.params.code
        const ward = await WardService.getWardByCode(code)
        res.status(200).json(ward).send();
    }

    getWardByDistrictCode = async (req, res, next) => {
        const code = req.params.code
        const ward = await WardService.getWardByDistrictCode(code)
        res.status(200).json(ward).send();
    }
}
module.exports = new WardController()