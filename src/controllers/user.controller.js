'use strict'
const UserService = require('../services/user.service')
const {SuccessResponse} = require('../core/success.response')
class UserController{
  getUser = async (req, res) => {
    // Lấy userId từ params hoặc body
    const userId = req.query.userId;
    try {
      // Gọi hàm findByUserId để lấy người dùng
      const user = await UserService.findByUsersId(userId);
      
      // Trả về kết quả
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  updateUser = async (req, res) => {
    console.log(req.body)
    const user = await UserService.updateUser(req.body.id, req.body);
    res.status(201).send(user);
  }
  
}
module.exports = new UserController()