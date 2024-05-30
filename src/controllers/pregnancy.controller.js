'use strict'

const PregnancyService = require('../services/pregnancy.service')

class PregnancyController {
    create = async (req, res, next) => {
        try {
            const result = await PregnancyService.create(req.body)
            return res.send(result)
        } catch (error) {
            next(error)
        }
    }

    getPregnancyByUserId = async (req, res, next) => {
        const userId = req.params.userId
        try {
            const result = await PregnancyService.getPregnancyByUserId(userId)
            return res.send(result)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = new PregnancyController()