const JWT = require('jsonwebtoken');
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
module.exports = {
    createTokenPair
}