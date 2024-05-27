'use strict'

const Comment = require('../models/comment.model')
const mongodb = require('mongodb');
const { ObjectId } = mongodb;
class CommentService{
    crete = async (body) => {
        const comment = new Comment(body);
        return await comment.save();
    }

    getCommentByPostId = async (postId) => {
        return await Comment
            .find({postId: new ObjectId(postId)})
            .populate('userId')
            .populate('postId')
            .lean()
            .sort({createdAt: -1})
    }

    getCommentByUserId = async (userId) => {
        return await Comment
            .find({userId: new ObjectId(userId)})
            .populate('postId')
            .lean()
            .sort({createdAt: -1})
    }

    getCommentById = async (id) => {
        return await Comment
            .findOne({ _id: new ObjectId(id) })
            .populate('userId')
            .populate('postId')
            .lean()
    }

    updateComment = async (id, body) => {
        return await Comment
            .updateOne({ _id: new ObjectId(id) }, { $set: body })
    }

    deleteComment = async (id) => {
        return await Comment
            .deleteOne({ _id: new ObjectId(id) })
    }

}

module.exports = new CommentService()