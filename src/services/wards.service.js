'use strict'

const ward = require('../models/wards.model')
class WardService { 

    getWards = async () => {
        return await ward
            .find({})
            .populate('districtCode', 'name')
            .sort({ createdAt: -1 })
            .lean()
    }

    getWardByCode = async (code) => {
        return await ward.findOne({ code }).lean();
    }
    getWardByDistrictCode = async (code) => {
        return await ward.find({ districtCode: code }).lean();
    }
}
module.exports = new WardService()