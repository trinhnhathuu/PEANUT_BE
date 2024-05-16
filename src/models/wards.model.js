'use strict'
const e = require('express');
const { Schema, model } = require('mongoose');
const DOCUMENT_NAME = 'Ward';
const COLLECTION_NAME = 'wards';
const wardSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    districtCode:{
    type: String,
    required: true
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
}
)
module.exports = model(DOCUMENT_NAME, wardSchema)