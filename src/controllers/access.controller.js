'use strict'

class AccessController{
    signUp = async (req, res, next)=>{
        try{
            console.log(`[P]::signUp: `, req.body);
            /*
            200 ok
            201 created
            */
            return res.status(201).json({
                code:'20001',
                metadata:{userid :1}
            })
        } catch (err) {
            next(err)
        }
    }

}
module.exports = new AccessController()