const JWT = require('jsonwebtoken');
const { NotFoundError, AuthFailureError } = require('../core/error.response');
const {asyncHandler } = require('../helper/fileAsyncHandler.hander');
const HEADER = {
    API_KEY: 'x-api-key',
    CLIENT_ID: 'x-client-id',
    AUTHORIZATION: 'authorization'
}
const {findByUserId} = require('../services/keyToken.service')
const createTokenPair = async(payload, publicKey, privateKey) => {
    try {
        const accessToken = JWT.sign(payload, publicKey, {
            // algorithm: 'RS256',
            expiresIn: '2 days'
            
        });
        const refreshToken = JWT.sign(payload, privateKey, {
            // algorithm: 'RS256',
            expiresIn: '7 days'
            
        });
       
       
        JWT.verify(accessToken, publicKey, (err, decoded) => {
            if(err){
                console.error('Token verification failed', err);
            } else {
                console.log('Token verified successfully', decoded);
            }
        })
        return { accessToken, refreshToken };
    } catch (error) {
        
    }
}

const authentication = asyncHandler(async (req, res, next) => {
    /**
     * 1- check userId missing hay không
     * 2- get accessToken
     * 3 - verifyToken
     * 4 check user id trong db
     * 5 check Keystore with this userId
     * 6 ok all => return next
     */

    const userId = req.headers[HEADER.CLIENT_ID]?.toString();
    if (!userId) throw new AuthFailureError('Invalid request 01');
    console.log( { userId })
    //2
    const keyStore = await findByUserId(userId);
    if (!keyStore) throw new NotFoundError('Not found key');
    console.log( { keyStore })
    //3
    const accessToken = req.headers[HEADER.AUTHORIZATION]
    if(!accessToken) throw new AuthFailureError('Invalid request 02');
    //4
    try {
        const decodedUser = JWT.verify(accessToken, keyStore.publicKey);
        console.log( { decodedUser })
        if(userId !== decodedUser.user_id) throw new AuthFailureError('Invalid request 03');
        req.keyStore = keyStore
        return next();
    } catch (error) {
        throw error
    }
})

const verifyJWT = async (token, keySecret) =>{ 
   return await JWT.verify(token, keySecret)
}
module.exports = {
    createTokenPair,
    authentication,
    verifyJWT: verifyJWT
}