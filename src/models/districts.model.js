'use strict'
const e = require('express');
const { Schema, model } = require('mongoose');
const DOCUMENT_NAME = 'District';
const COLLECTION_NAME = 'districts';
const districtSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    provinceCode:{
    type: String,
    required: true
    }
}, {
    collection: COLLECTION_NAME,
    timestamps: true
}
)
module.exports = model(DOCUMENT_NAME, districtSchema)