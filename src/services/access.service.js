'user strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const KeyTokenService = require("./keyToken.service");
const { createTokenPair } = require("../auth/authUtils");
const { getInfoData } = require("../utils");
const RoleP = {
    
ROLE_USER : "190c8c60af4c47018037af98e4fca537",
ROLE_DOCTOR : "71151aad9a9b4975a8a68e48f80b0707"
}

class AccessService{
    static signUp = async ({name, email, password})=>{
        try {
            // step : check sự tồn tại của email
            const holderlUser = await userModel.findOne({ email }).lean();
            if (holderlUser) {
                return {
                    code:'xxx',
                    message: 'Email đã đăng ký',
               }
            }
            const passWordHash = await bcrypt.hash(password, 10);
            const newUser = await userModel.create({ name, email, password: passWordHash, role: RoleP.ROLE_USER });
            
            if (newUser) {
                //! ver1
                // step : created private key, public key
                // const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
                //     modulusLength: 4096,
                //     // lưu vào key store
                //     // pkcs: public key CryptoGraphy Standard
                //     // pem : mã hóa nhị phân
                //     publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
                //     privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
                // },
                // )
                //! ver2
                const publickey = crypto.randomBytes(64).toString('hex')
                const privateKey = crypto.randomBytes(64).toString('hex')
                
                console.log({ publickey, privateKey })
                const keyStore = await KeyTokenService.createKeyToken(
                    {
                        userId: newUser._id,
                        publicKey:publickey,
                        privateKey:privateKey
                    }
                )
                
                if (!keyStore) { 
                    return{
                        code: 'xxx01',
                        message: err.message,
                    }
                }
             
                //create tokens
                const tokens = await createTokenPair({ user_id: newUser._id, email },publickey, privateKey);
                console.log('Created key', tokens);
                return {
                    code: 201,
                    metadata: {
                        user:getInfoData({ fileds: ['_id', 'name', 'email'], object: newUser }),
                        tokens
                    }
                }
                
            }    
            return {
                code: 200,
                metadata: null
            }
        } catch (err) {
            return{
                code: 'xxx02',
                message: err.message,
                status:'error'
            } 

        }
        
    }

}
module.exports = AccessService