'use strict'

const {model, Schema} = require('mongoose'); 

// Declare the Schema of the Mongo model
const DOCUMENT_NAME = 'Poster';
const COLLECTION_NAME = 'Posters';

const posterSchema = new Schema({
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: true,
      maxlength: 255
    },
    content: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    type: {
      type: String,
      required: true
    },
}, {
    collection: COLLECTION_NAME,
    timestamps: true
});
module.exports = model(DOCUMENT_NAME, posterSchema);