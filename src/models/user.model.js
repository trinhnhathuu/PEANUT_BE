'use strict'
const e = require('express');
const mongoose = require('mongoose');// Erase if already required
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true,
    //     unique: true,
    //     index: true,
    //     autoIncrement: true
    // },
    role: {
        type: String,
        enum: [process.env.ROLE_USER, process.env.ROLE_DOCTOR],
        default: process.env.ROLE_USER},
    name: {
        type: String,
        required: true,
        maxLength: 255,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        maxLength: 255,
        trim: true
    },
    password: {
        type: String,
        required: true,
        maxLength: 255
    },
    phone: {
        type: String,
        maxLength: 20,
        trim: true
    },
    avatar: {
        type: String,
        maxLength: 255,
        trim: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
},
    {
        timestamps: true,
        collection: COLLECTION_NAME
    }
);


//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema);