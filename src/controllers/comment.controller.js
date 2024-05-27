'use strict'

const CommentService = require('../services/comment.service')

class CommentController { 
     create = async (req, res, next) => {
        const body = req.body
        const comment = await CommentService.crete(body)
        res.status(201).json(comment).send();
    }

    getCommentByPostId = async (req, res, next) => {
        const postId = req.params.postId
        const comments = await CommentService.getCommentByPostId(postId)
        res.status(200).json(comments).send();
    }

    getCommentByUserId = async (req, res, next) => {
        const userId = req.params.userId
        const comments = await CommentService.getCommentByUserId(userId)
        res.status(200).json(comments).send();
    }

    getCommentById = async (req, res, next) => {
        const id = req.params.id
        const comment = await CommentService.getCommentById(id)
        res.status(200).json(comment).send();
    }

    updateComment = async (req, res, next) => {
        const id = req.params.id
        const body = req.body
        const comment = await CommentService.updateComment(id, body)
        res.status(200).json(comment).send();
    }

}

module.exports = new CommentController()