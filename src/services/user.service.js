'use strict'
const mongodb = require('mongodb');
const { ObjectId } = mongodb;

const User = require('../models/user.model')
const findByEmail = async ({ email, select = {
    email: 1, password: 2, name: 1, status: 1, role: 1
} }) => {
    
    return await User.findOne({email}).select(select).lean()
}
const findByUsersId = async (userId) => {
    return await User.findOne({ 
      _id: new ObjectId(userId)
    }).lean();
  }

const updateUser = async (id, data) => {
  return await User.findByIdAndUpdate({ _id: new ObjectId(id) }, data).lean();
  
}

module.exports = {
  findByEmail,
  findByUsersId,
  updateUser
}