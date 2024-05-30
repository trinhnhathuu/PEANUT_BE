'use strict'
const pregnancy_guide = require('../models/pregnancy_guide.model')
const pregnancyModel = require('../models/pregnancy.model')
const mongodb = require('mongodb');
const { ObjectId } = mongodb;

class PregnancyGuideService {
  //   getByWeekUser = async (userId) => {
  //     try {
  //       const pregnancy = await pregnancyModel.findOne({ userId: new ObjectId(userId) });
  //       console.log('Pregnancy data:', pregnancy);

  //       if (pregnancy) {
  //         // Tính số tuần từ ngày dự sinh
  //         const currentDate = new Date();
  //         const dueDate = new Date(pregnancy.dueDate);
  //         const diffInMs = dueDate - currentDate;
  //         const dueWeek = Math.ceil(diffInMs / (1000 * 60 * 60 * 24 * 7));

  //         // Lấy các guides dựa trên tuần hiện tại của user và tuần dự sinh
  //         const guides = await pregnancy_guide.find({ 
  //           week: { 
  //             $gte: pregnancy.week, 
  //             $lte: dueWeek 
  //           } 
  //         });

  //         console.log('Guides:', guides);
  //         return guides;
  //       } else {
  //         return [];
  //       }
  //     } catch (error) {
  //       console.error('Error fetching pregnancy data:', error);
  //       throw new Error('Unable to fetch pregnancy data.');
  //     }
  //   }
  // }
  getByWeekUser = async (userId) => {
    try {
      const pregnancy = await pregnancyModel.findOne({ userId: new ObjectId(userId) });
      console.log('Pregnancy data:', pregnancy);

      if (pregnancy) {
        // Lấy guide cho tuần hiện tại của user
        const guide = await pregnancy_guide.findOne({ week: pregnancy.week });

        console.log('Guide:', guide);
        return guide;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching pregnancy data:', error);
      throw new Error('Unable to fetch pregnancy data.');
    }
  }
}

module.exports = new PregnancyGuideService()