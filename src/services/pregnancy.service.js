'use strict'
const pregnancy = require('../models/pregnancy.model')
const mongodb = require('mongodb');
const cron = require('node-cron');
const { ObjectId } = mongodb;

class PregnancyService { 
    create = async (body) => { 
        return await pregnancy.create(body)
    }

    getPregnancyByUserId = async (userId) => {
        return await pregnancy
            .findOne({ userId: new ObjectId(userId)
            }).populate('userId')
            .lean()
            .sort({ createdAt: -1 })
    }
    updateWeeks = async () => {
        try {
          const pregnancies = await pregnancyModel.find();
          for (let pregnancy of pregnancies) {
            pregnancy.week += 1;
            await pregnancy.save();
            console.log(`Updated week for user ${pregnancy.userId} to ${pregnancy.week}`);
          }
        } catch (error) {
          console.error('Error updating weeks:', error);
        }
      }
    
}

module.exports = new PregnancyService()


cron.schedule('0 0 * * 0', async () => { // Chạy mỗi chủ nhật
    const pregnancyService = require('./path_to_pregnancy_service');
    await pregnancyService.updateWeeks();
  });