'use strict'
const e = require('express');
const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'PregnancyGuide';
const COLLECTION_NAME = 'PregnancyGuides';

const PregnancyGuideSchema = new Schema({
    week: { type: Number, required: true, unique: true },
    pregnancy_info: { type: String, required: true },
    doctor_advice: { type: String, required: true },
    notes: { type: String },
}, {
    collection: COLLECTION_NAME,
    timestamps: true,
   
});
  
module.exports = model(DOCUMENT_NAME, PregnancyGuideSchema);