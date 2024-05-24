'use strict'
const mongodb = require('mongodb');
const { ObjectId } = mongodb;

const DoctorSignUp = require('../models/dang_ky_bac_si.model');

const getDoctor = async({ body }) => {
    return await DoctorSignUp.create(body);
}

const getDoctorById = async({ doctorId }) => {
    return await DoctorSignUp.findOne({ _id: new ObjectId(doctorId) }).lean().populate('userId');
}

const getDoctorByUserId = async({ userId }) => {
    return await DoctorSignUp.findOne({ userId: new ObjectId(userId) }).populate('userId').lean();
}
const getDoctorByHospitalId = async({ idHospital }) => {
    return await DoctorSignUp.find({ idHospital: new ObjectId(idHospital) }).lean().populate('userId').populate('idHospital');
}
const paginate = async (filter, options) => {
    try {
      const result = await DoctorSignUp.paginate(filter, options);
      return result;
    } catch (error) {
      console.error('Error in paginate:', error);
      throw error;
    }
  };
module.exports = {
    getDoctor,
    getDoctorById,
    getDoctorByUserId,
    getDoctorByHospitalId,
    paginate
}