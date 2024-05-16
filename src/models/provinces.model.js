'use strict'
const e = require('express');
const { Schema, model } = require('mongoose');
const DOCUMENT_NAME = 'Province';
const COLLECTION_NAME = 'provinces';
const provinceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        unique: true
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true,
    versionKey: false 
}
)
module.exports = model(DOCUMENT_NAME, provinceSchema)