'use strict'

const DoctorSignUpService = require('../services/doctor_sign_up.service')

class DoctorSignUpController {

    create = async (req, res, next) => {
        const body = req.body
        const doctor = await DoctorSignUpService.getDoctor({ body })
        res.status(201).json(doctor).send()
    }

    getDoctorById = async (req, res, next) => {
        const doctorId = req.params.doctorId
        const doctor = await DoctorSignUpService.getDoctorById({ doctorId })
        res.status(200).json(doctor).send()
    }

    getDoctorByUserId = async (req, res, next) => {
        const userId = req.params.userId
        const doctor = await DoctorSignUpService.getDoctorByUserId({ userId })
        res.status(200).json(doctor).send()
    }

    getDoctorByHospitalId = async (req, res, next) => {
        const idHospital = req.params.idHospital
        const doctor = await DoctorSignUpService.getDoctorByHospitalId({ idHospital })
        res.status(200).json(doctor).send()
    }

    paginate = async (req, res) => {
        try {
          const filter = pick(req.query, [
            'idTaiKhoan',
            'idHospital',
            'department',
            'fullName',
            'phoneWork',
            'emailWork',
          ]);
      
          // Chuyển đổi các tham số lọc sang ObjectId nếu cần
          if (filter.idTaiKhoan) {
            filter.idTaiKhoan = new ObjectId(filter.idTaiKhoan);
          }
          if (filter.idHospital) {
            filter.idHospital = new ObjectId(filter.idHospital);
          }
      
          const options = pick(req.query, ['sortBy', 'limit', 'page']);
      
          options.populate = 'userId idHospital';
      
          if (options.sortBy === undefined || options.sortBy === null) {
            options.sortBy = 'createdAt:desc';
          }
      
          const result = await doctorSignUpService.paginate(filter, options);
          res.send(result);
        } catch (error) {
          console.error('Error in paginate:', error);
          res.status(500).json({
            status: 'error',
            code: 500,
            message: error.message,
          });
        }
      };
}

module.exports = new DoctorSignUpController()
