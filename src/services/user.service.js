'use strict'

const User = require('../models/user.model')
const findByEmail = async ({ email, select = {
    email: 1, password: 2, name: 1, status: 1, role: 1
} }) => {
    
    return await User.findOne({email}).select(select).lean()
}
module.exports = {
    findByEmail
}