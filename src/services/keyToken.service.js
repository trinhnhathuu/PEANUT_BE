'use strict'

const keyTokenModel = require("../models/keytoken.model");
const {Types} = require('mongoose')

class KeyTokenService { 
    static createKeyToken = async ({ userId, publicKey, privateKey,refreshToken }) => {
        try {
        // lv0
            // const tokens = await keyTokenModel.create({
            //     user: userId,
            //     publicKey,
            //     privateKey
            // })
            // console.log('public key')
            // console.log({tokens})
            // return tokens ? tokens : null;
            //lv xxx
            const filter = { user: userId }, update = { publicKey, privateKey, refreshTokensUsed:[], refreshToken}, options = { upsert: true, new: true }
            const tokens = await keyTokenModel.findOneAndUpdate(filter, update, options)
            return tokens ? tokens.publicKey : null
        } catch (err) {
            return err
        }
        
    }

    static findByUserId = async ( userId) => {
        return await keyTokenModel.findOne({ user: new Types.ObjectId(userId)}).lean()
    }
    static removeKeyById = async (id ) => {
        return await keyTokenModel.deleteMany(id)
    }
    static findByRefreshTokened = async (refreshToken ) => {
        return await keyTokenModel.findOne({ refreshTokensUsed: refreshToken }).lean()
    }
    static findByRefreshToken= async (refreshToken ) => {
        return await keyTokenModel.findOne({refreshToken})
    }
    static deleteKeyById = async (userId) => {
        return await keyTokenModel.deleteOne({ user:Types.ObjectId(userId) })
    }

}
module.exports = KeyTokenService
