const express = require('express');
const router = express.Router();
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const posterController  = require('../../src/controllers/poster.controller');

router.post('/poster', asyncHandler(posterController.create))
router.get('/poster', asyncHandler(posterController.getPosters))
router.get('/poster/user/:userId/posts/', asyncHandler(posterController.getPostersByUserIdWithPage))
router.delete('/poster/:id', asyncHandler(posterController.deletePoster))
router.put('/poster/:id', asyncHandler(posterController.updatePoster))

module.exports = router