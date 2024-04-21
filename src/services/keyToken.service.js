'use strict'

const keyTokenModel = require("../models/keytoken.model");

class KeyTokenService { 
    static createKeyToken = async ({ userId, publicKey, privateKey }) => {
        try {
            const tokens = await keyTokenModel.create({
                user: userId,
                publicKey,
                privateKey
            })
            console.log('public key')
            console.log({tokens})
            return tokens ? tokens : null;
        } catch (err) {
            return err
        }
        
    }

}
module.exports = KeyTokenService
