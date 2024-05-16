'use strict'
const hospital = require('../models/hospital.model')
class HospitalService { 

    getHospitals = async () => {
        return await hospital
            .find({})
            .populate('provinceCode', 'name')
            .sort({ createdAt: -1 })
            .lean()
    }

    getHospitalsByProvinceCode = async (code) => {
        return await hospital.find({ provinceCode: code }).lean();
    }
  
}
module.exports = new HospitalService()