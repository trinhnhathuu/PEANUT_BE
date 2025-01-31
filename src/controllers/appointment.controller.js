'use strict'
const AppointmentService = require('../services/appointment.service')

class AppointmentController {

    create = async (req, res, next) => {
        const body = req.body
        const appointment = await AppointmentService.create(body)
        res.status(201).json(appointment).send();
    }

    getAppointmentByUserId = async (req, res, next) => {
        const userId = req.params.userId
        const appointments = await AppointmentService.getAppointmentByUserId(userId)
        res.status(200).json(appointments).send();
    }

    getAppointmentById = async (req, res, next) => {
        const id = req.params.id
        const appointment = await AppointmentService.getAppointmentById(id)
        res.status(200).json(appointment).send();
    }

    getAppointmentByDoctorId = async (req, res, next) => {
        const doctorId = req.params.doctorId
        const appointments = await AppointmentService.getAppointmentByDoctorId(doctorId)
        res.status(200).json(appointments).send();
    }

    updateAppointment = async (req, res, next) => {
        const id = req.params.id
        const body = req.body
        const appointment = await AppointmentService.updateAppointment(id, body)
        res.status(200).json(appointment).send();
    }

    getAllAppointment = async (req, res, next) => {
        const posters = await AppointmentService.getAllAppointment()
        res.status(200).json(posters).send();
    }
    getAppointmentByUserIdWithPage = async(req, res, next) => {
        const userId = req.params.userId;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        try {
            const appointments = await AppointmentService.getAppointmentByUserIdWithPage(userId, page, limit);
            res.status(200).json(appointments).send();
        } catch (error) {
            next(error);
        }
    }
    
    
}

module.exports = new AppointmentController()
