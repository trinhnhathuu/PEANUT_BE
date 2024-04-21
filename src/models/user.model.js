'use strict'
const e = require('express');
const mongoose = require('mongoose');// Erase if already required
const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'Users';
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    role: {
        type: Array,
        default:[]
    },
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
    address: {
        type: String,
        maxLength: 255,
        trim: true
    },
    avatar: {
        type: String,
        maxLength: 255,
        trim: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verified: {
        type: Boolean,
        default: false
    }
},
    {
        collection: COLLECTION_NAME,
        timestamps: true
    }
);


//Export the model
module.exports = mongoose.model(DOCUMENT_NAME, userSchema);