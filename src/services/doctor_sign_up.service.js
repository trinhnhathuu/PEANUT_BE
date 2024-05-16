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
    return await DoctorSignUp.findOne({ userId: new ObjectId(userId) }).lean();
}

module.exports = {
    getDoctor,
    getDoctorById,
    getDoctorByUserId
}