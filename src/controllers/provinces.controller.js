'use strict'
const ProvinceService = require('../services/provinces.service')
const {OK} = require('../core/success.response')

class ProvinceController { 

    getProvinces = async (req, res, next) => {
        const provinces = await ProvinceService.getProvinces()
        res.status(200).json(provinces).send();
    }
    // các truyền parameter code
    // vd: /api/v1/provinces/01

    getProvinceByCode = async (req, res, next) => {
        const code = req.params.code
        const province = await ProvinceService.getProvinceByCode(code)
        res.status(200).json(province).send();
    }
    
    getProvinceByName = async (req, res, next) => {
        const name = req.params.name
        const province = await ProvinceService.getProvinceByName(name)
        res.status(200).json(province).send();
    }
}
module.exports = new ProvinceController()
