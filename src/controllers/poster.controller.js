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
    getPostersByUserIdWithPage = async (req, res, next) => {
        const userId = req.params.userId
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        try {
            const posters = await PosterService.getPostersByUserIdWithPage(userId, page, limit)
            res.status(200).json(posters).send();
        } catch (error) {
            next(error)
        }
    }
    deletePoster = async (req, res, next) => {
        const id = req.params.id
        const poster = await PosterService.delete(id)
        res.status(200).json(poster).send();
    }
    updatePoster = async (req, res, next) => {
        const id = req.params.id
        const body = req.body
        const poster = await PosterService.update(id, body)
        res.status(200).json(poster).send();
    }


}
module.exports = new PosterController()