'use strict'
const AccessService = require('../services/access.service')
const {OK, CREATED,SuccessResponse} = require('../core/success.response')

class AccessController{
    logout = async (req, res, next)=>{
        new SuccessResponse({
            message: 'đăng xuất',
            metadata: await AccessService.logout({keyStore: req.keyStore}),
        }).send(res)
    }
    login = async (req, res, next)=>{
        new SuccessResponse({
            metadata: await AccessService.login(req.body),
        }).send(res)
    }
    signUp = async (req, res, next)=>{
    
            // console.log(`[P]::signUp: `, req.body);
            /*
            200 ok
            201 created
            */
        // return res.status(200).json({
        //     message: '',
        //     metadata:
        //      }               
        //    )
        new CREATED({
            message: 'Đăng ký thành công',
            metadata: await AccessService.signUp(req.body),
            options: {
                limit:10
            }
            
        }).send(res)
           
    }

}
module.exports = new AccessController()