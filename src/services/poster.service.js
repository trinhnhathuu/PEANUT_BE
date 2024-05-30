'use strict'
const poster = require('../models/poster.model')
const mongodb = require('mongodb');
const { ObjectId } = mongodb;
class PosterService{
    create = async(body) => {
        return await poster.create(body)
    }

    getPosters = async() => {
      return await poster
          .find({ type: { $ne: 'boyte' } })
          .populate('userId', 'name')
          .sort({ createdAt: -1 })
          .lean()
  }
  getPostersByUserIdWithPage = async(userId, page, limit) => {
      try {
          const posters = await poster
              .find({ 
                  userId: new ObjectId(userId),
                  type: { $ne: 'boyte' }
              })
              .populate('userId', 'name')
              .skip((page - 1) * limit)
              .limit(limit)
              .sort({ createdAt: -1 })
              .lean()
          return posters
      } catch (error) {
          throw error
      }
  }
  getPostersByBYT = async (type) => { 
    return await poster
    .find({ type: 'boyte' })
    .populate('userId', 'name')
    .sort({ createdAt: -1 })
    .lean()
  }


    update = async (id, body) => {
        return await poster
            .updateOne({ _id: new ObjectId(id) }, { $set: body })
    }

    delete = async (id) => {
        return await poster
            .deleteOne({ _id: new ObjectId(id) })
    }
}
module.exports = new PosterService()