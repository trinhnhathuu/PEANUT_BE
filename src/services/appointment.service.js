'use strict'
const mongodb = require('mongodb');
const { ObjectId } = mongodb;

const Appointment = require('../models/appointments.models');

class AppointmentService {
    create = async (body) => {
        const appointment = new Appointment(body);
        return await appointment.save()
    }
    getAppointmentByUserId = async (userId) => {
        return await Appointment
            .find({ userId:new ObjectId(userId)  })
            .populate('doctorId')
            .populate('userId')
            .populate('idHospital')
            .populate('idProvince')
            .lean()
            .sort({ createdAt: -1 })
        
    }
    getAppointmentById = async (id) => {
        return await Appointment
            .findOne({ _id: new ObjectId(id) })
            .populate('doctor_id', 'userId')
            .lean()
            .sort({ createdAt: -1 })
    }
    getAppointmentByDoctorId = async (doctorId) => {
        return await Appointment
            .find({ doctorId:new ObjectId(doctorId) })
            .populate('doctorId')
            .populate('userId')
            .populate('idHospital')
            .populate('idProvince')
            .lean()
            .sort({ createdAt: -1 })
    }
    updateAppointment = async (id, body) => {
        return await Appointment.updateOne({ _id:new ObjectId(id) }, { $set: body })
    }
    getAllAppointment = async () => {
        return await Appointment.find({}).populate('doctorId')
        .populate('userId')
            .sort({ createdAt: -1 })
            .lean()
    }

    paginate = async (filter, options) => {
        return Appointment.paginate(filter, options);
      };
    getAppointmentByUserIdWithPage = async (userId, page, limit) => {
        try {
          const appointments = await Appointment.find({ userId: new ObjectId(userId) })
          .populate('doctorId')
          .populate('userId')
          .populate('idHospital')
          .populate('idProvince')
          .skip((page - 1) * limit)
          .limit(limit)
          .sort({ createdAt: -1 });
          return appointments;
        } catch (error) {
          throw error;
        }
      };
      
}

module.exports = new AppointmentService()