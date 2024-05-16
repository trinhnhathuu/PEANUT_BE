'use strict'
const poster = require('../models/poster.model')

class PosterService{
    create = async(body) => {
        return await poster.create(body)
    }

    getPosters = async() => {
        return await poster
            .find({})
            .populate('userId', 'name')
            .sort({ createdAt: -1 })
            .lean()
    }
}
module.exports = new PosterService()