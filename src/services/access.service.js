'user strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const crypto = require('crypto');

class AccessService{
    static signUp = async ({name, email, password})=>{
        try {
            // step : check sự tồn tại của email
            const hodelUser = await userModel.findOne({ email }).lean();
            if (hodelUser) {
                return {
                    code:'xxx',
                    message: 'Email đã đăng ký',
                    status:'error'
               }
            }
        const passWordHash = await bcrypt.hash(password, 10);
        const newUser = await userModel.create({ name, email, password: passWordHash });
            if (newUser) {
                // step : created private key, public key
                const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 2048,
                    publicKeyEncoding: {
                        type: 'spki',
                        format: 'pem'
                    },
                    privateKeyEncoding: {
                        type: 'pkcs8',
                        format: 'pem'
                    }
                    // lưu vào key store
                })
                
        }    
        } catch (err) {
            return{
                code: 'xxx',
                message: err.message,
                status:'error'
            } 

        }
        
    }

}
codule.exports = AccessService