'use strict'

const {model, Schema} = require('mongoose'); 

const DOCUMENT_NAME = 'Hospital';
const COLLECTION_NAME = 'hospitals';

const hospitalSchema = new Schema({
    code:String,
    name: String,
    provinceCode: {
        type:String,
        // ref: 'Province',
      }
    // provinceCode: String,
}, {
    collection: COLLECTION_NAME,
    timestamps: true
})
module.exports = model(DOCUMENT_NAME, hospitalSchema);