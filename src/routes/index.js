'use strict'
const express = require('express');
const { apiKey, permission } = require('../auth/checkAuth');
const router = express.Router();
// check apiKey
router.use(apiKey)
router.use(permission('0000'))
router.use('/v1/api', require('./comment.router'))
router.use('/v1/api', require('./appointment.router'))
router.use('/v1/api', require('./hospital.router'))
router.use('/v1/api', require('./wards.router'))
router.use('/v1/api', require('./district.router'))
router.use('/v1/api', require('./provinces.router'))
router.use('/v1/api', require('./doctor_sign_up.router'))
router.use('/v1/api', require('./poster.router'))
router.use('/v1/api', require('../routes/user.router'))
router.use('/v1/api', require('./access'))

module.exports = router