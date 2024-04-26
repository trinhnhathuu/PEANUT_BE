'use strict'

const {asyncHandler } = require('../helper/fileAsyncHandler.hander');
const { findById } = require("../services/apiKey.service");

const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION: 'authorization'
}

const apiKey =  async (req, res, next) => {
    try {
        // kiếm tra xem có key chưa
        const key = req.headers[HEADER.API_KEY]?.toString();  
        if (!key) {
            return res.status(403).json({
                message: 'Forbidden Error 01',
            })
        }
        // check objKey
        const objKey = await findById(key)
        // chưa có key thì báo lỗi
        if (!objKey) {
            return res.status(403).json({
                message: 'Forbidden Error 02',
            })
        }
        req.objKey = objKey
        return next()
        
    } catch (error)
    {

    }
}
const permission = (permission) => {
    return (req, res, next) => {
        if(!req.objKey.permissions) {
            return res.status(403).json({
                message: 'permission dined',
            })
        }
        console.log(`req.objKey.permissions`, req.objKey.permissions)
        const validPermission = req.objKey.permissions.includes(permission)
        if (!validPermission) {
            return res.status(403).json({
                message: 'permission dined',
            })
        }
        return next()
    }
}

module.exports = { apiKey, permission}