'user strict'

const e = require('express');
const { Double } = require('mongodb');
const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'DangKyBacSi';
const COLLECTION_NAME = 'DangKyBacSis';
///
/// sẽ có các thuộc tính gồm userId, HovaTen, phone, email, bệnh viện làm việc, khoa công tác, địa chỉ bệnh viện, hình ảnh ngành nghề
///
var doctorSignUpSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phoneWork: {
        type: String,
        required: true
    },
    emailWork: {
        type: String,
        required: true
    },
    hospitalAddress: {
        type: String,
        required: true
    },
    hospitalName: {
        type: String,
        required: true
    },
    appointment: {
        type: String,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    imageCard: {
        type: Array,
        default: []
    }

}, {
    collection: COLLECTION_NAME,
     timestamps: true

}
)
module.exports = model(DOCUMENT_NAME, doctorSignUpSchema);