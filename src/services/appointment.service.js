'use strict'
const mongodb = require('mongodb');
const { ObjectId } = mongodb;

const Appointment = require('../models/appointments.models');

class AppointmentService {
    create = async (body) => {
        const appointment = new Appointment(body);
        return await appointment.save();
    }
    getAppointmentByUserId = async (userId) => {
        return await Appointment
            .find({ user_id:new ObjectId(userId)  })
            .populate('doctor_id', 'name')
            .lean()
            .sort({ createdAt: -1 })
        
    }
    getAppointmentById = async (id) => {
        return await Appointment
            .findOne({ _id: new ObjectId(id) })
            .populate('doctor_id', 'name')
            .lean()
    }

    getAppointmentByDoctorId = async (doctorId) => {
        return await Appointment
            .find({ doctor_id: ObjectId(doctorId) })
            .populate('user_id', 'name')
            .lean()
            .sort({ createdAt: -1 })
    }
    updateAppointment = async (id, body) => {
        return await Appointment.updateOne({ _id:new ObjectId(id) }, { $set: body })
    }
}

module.exports = new AppointmentService()