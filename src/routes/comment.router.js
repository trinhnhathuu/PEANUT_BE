'use strict'
const router = require('express').Router()
const { asyncHandler } = require('../../src/helper/fileAsyncHandler.hander');
const commentController = require('../../src/controllers/comment.controller')

router.post('/comments', asyncHandler(commentController.create))
router.get('/comments/:id', asyncHandler(commentController.getCommentById))
router.get('/comments/post/:postId', asyncHandler(commentController.getCommentByPostId))
router.get('/comments/user/:userId', asyncHandler(commentController.getCommentByUserId))
router.put('/comments/:id', asyncHandler(commentController.updateComment))

module.exports = router