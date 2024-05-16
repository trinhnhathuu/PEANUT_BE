'use strict'
const AccessService = require('../services/access.service')
const {OK, CREATED,SuccessResponse} = require('../core/success.response')

class AccessController{
    handlerRefreshToken = async (req, res, next)=>{
        new SuccessResponse({
            message: 'Get token success',
            metadata: await AccessService.handlerRefreshToken({refreshToken: req.body.refreshToken}),
        }).send(res)
    }
    logout = async (req, res, next)=>{
        new SuccessResponse({
            message: 'đăng xuất',
            metadata: await AccessService.logout({keyStore: req.keyStore}),
        }).send(res)
    }
    login = async (req, res, next) => {
        // const user = await AccessService.login(req.body)
        new SuccessResponse({
            metadata: await AccessService.login(req.body),
        }).send(res)
        // res.status(StatusCode.CREATED).send(user);
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