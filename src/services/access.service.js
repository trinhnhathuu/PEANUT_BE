'user strict'

const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const KeyTokenService = require("./keyToken.service");
const { createTokenPair, verifyJWT } = require("../auth/authUtils");
const { getInfoData } = require("../utils");
const { findByEmail } = require("./user.service");
const {BadRequestError, ForbiddenError, AuthFailureError} = require("../core/error.response");
const RoleP = {
    
ROLE_USER : "190c8c60af4c47018037af98e4fca537",
ROLE_DOCTOR : "71151aad9a9b4975a8a68e48f80b0707"
}

class AccessService{
    // check this token used
    static handlerRefreshToken = async ({ refreshToken }) => {
        const foundToken = await KeyTokenService.findByRefreshTokened(refreshToken)
        if (foundToken) {
            // decode token là ai
            console.log('1ss',{ refreshToken })
        const { userId, email } = await verifyJWT(refreshToken, foundToken.privateKey)
            console.log('1st',{ userId, email })
            // console.log({ userId, email })
            // xóa token 
            await KeyTokenService.deleteKeyById(userId)
            throw new ForbiddenError('Error:something wrong happend ')
        }
        // chưa có resfreshToken
        const holderToken = await KeyTokenService.findByRefreshToken(refreshToken)

        if (!holderToken) {
            throw new AuthFailureError('Error: Token không tồn tại')
        }
        // verify token
        const { userId, email } = await verifyJWT(refreshToken, holderToken.privateKey)
        

        console.log('2ss',{ userId, email })

        // check used id
        const foundUser = await findByEmail({email})
        if (!foundUser) {
            throw new AuthFailureError('Error: Email không tồn tại')
        }
        // create 1 cặp mới
        const tokens = await createTokenPair({ user_id: userId, email }, holderToken.publicKey, holderToken.privateKey);

        // update token

        // không sử dụng update mà dùng updateOne
        await holderToken.updateOne({
            $set: {
                refreshToken: tokens.refreshToken,
            },
            $addToSet: {
                refreshTokenUsed: tokens.refreshToken
            }
        });
        return {
            user: { userId, email },
            tokens
        }
    }
    /**
     * 
     * @param {*} param0 
     * 1 check email in dbs
     * 2 match password
     * 3 create AT và RT ( AT là token, RT là refresh token) và lưu
     * 4 generate tokens
     * 5 get data return login
     * 
     */
    static logout = async ({ keyStore }) => {
        const delKey = await KeyTokenService.removeKeyById({ userId: keyStore._id })
        console.log('delKey', { delKey })
        return delKey
    }

    static login = async({email, password, refreshToken = null}) => {
        const foundUser = await findByEmail({email});
        console.log('foundUser', foundUser);
        
        //1
        if (!foundUser) {
            throw new BadRequestError('Error: Email không tồn tại');
        }
        //2
        // kiểm tra xem password có trùng với trong cơ sở dữ liệu không
        if (!password) throw new BadRequestError('Error: Password rỗng 01');
       
        if(!foundUser.password) throw new BadRequestError('Error: Password rỗng 02');
    
        // Await the bcrypt.compare function
        const match = await bcrypt.compare(password, foundUser.password);
        if (!match) throw new AuthFailureError('Authentication failed');
    
        //3 tạo tokens
        const publickey = crypto.randomBytes(64).toString('hex');
        const privateKey = crypto.randomBytes(64).toString('hex');
        const {_id: userId} = foundUser;
        const tokens = await createTokenPair({ user_id: userId, email }, publickey, privateKey);
        await KeyTokenService.createKeyToken({
            userId: userId,
            refreshToken: tokens.refreshToken,
            publicKey: publickey,
            privateKey: privateKey,
        });
    
        return {
            user: getInfoData({ fields: ['_id', 'name', 'email','role'], object: foundUser }),
            tokens
        };
    };
    
    static signUp = async ({name, email, password})=>{
        // try {
            // step : check sự tồn tại của email
            const holderlUser = await userModel.findOne({ email }).lean();
            if (holderlUser) {
                throw new BadRequestError('Error: Email đã được đăng ký');
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
                        user:getInfoData({ fields: ['_id', 'name', 'email'], object: newUser }),
                        tokens
                    }
                }
                
            }    
            return {
                code: 200,
                metadata: null
            }
        // } catch (err) {
        //     return{
        //         code: 'xxx02',
        //         message: err.message,
        //         status:'error'
        //     } 

        // }
        
    }

}
module.exports = AccessService