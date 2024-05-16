'use strict'
const PosterService = require('../services/poster.service')

class PosterController{
    create = async (req, res, next) => {
        const body = req.body
        const poster = await PosterService.create(body)
        res.status(201).json(poster).send();
    }
    getPosters = async (req, res, next) => {
        const posters = await PosterService.getPosters()
        res.status(200).json(posters).send();
    }
}
module.exports = new PosterController()