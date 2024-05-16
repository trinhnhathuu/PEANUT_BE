'use strict'
const province = require('../models/provinces.model')

class ProvinceService { 

    getProvinces = async () => { 
        return await province
            .find({})
            .sort({ createdAt: -1 })
            .lean()
    }

    getProvinceByCode = async (code) => {
        return await province.findOne({ code }).lean()
    }

    getProvinceByName = async (name) => {
        return await province.findOne({ name }).lean()
    }

}
module.exports = new ProvinceService()