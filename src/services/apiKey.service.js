const apikeyModel = require("../models/apikey.model")
const crypto = require('crypto');

const findById = async (key) => {
    // tạo mới key
    // const newKey = await apikeyModel.create({ key: crypto.randomBytes(64).toString('hex'), permissions: ['0000'] })
    // console.log(newKey)

    // kiếm tra có key trong csdl hay khong
    const objKey = await apikeyModel.findOne({ key, status: true }).lean()
    return objKey
}

module.exports = { findById }