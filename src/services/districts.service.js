'use strict'

const district = require('../models/districts.model')

class DistrictService {

    getDistricts = async () => {
        return await district
            .find({})
            .sort({ createdAt: -1 })
            .lean()
    }

    getDistrictByCode = async (code) => {
        return await district.findOne({ code }).lean()
    }
    getDistrictByProvinceCode = async (code) => {
        return await district.find({ provinceCode:code }).lean()
    }

}
 module.exports = new DistrictService()