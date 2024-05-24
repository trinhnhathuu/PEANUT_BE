'use strict'
// *   **id (INT PRIMARY KEY):** ID của cuộc hẹn (tự động tăng)
// *   **user_id (INT):** ID của người đặt lịch (khóa ngoại tới bảng Users)
// *   **doctor_id (INT):** ID của bác sĩ (khóa ngoại tới bảng Users)
// *   **date (DATE):** Ngày hẹn
// *   **time (TIME):** Giờ hẹn
// *   **status (ENUM):** Trạng thái cuộc hẹn ('pending', 'confirmed', 'cancelled')
// *   **created_at (DATETIME):** Thời gian đặt lịch
// *   **updated_at (DATETIME):** Thời gian cập nhật lịch hẹn
const e = require('express');
const { Double } = require('mongodb');
const { Schema, model } = require('mongoose');

const DOCUMENT_NAME = 'Appointment';
const COLLECTION_NAME = 'Appointments';

var appointmentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctorId: {
        type: Schema.Types.ObjectId,
        ref: 'DangKyBacSi',
    },
    // chọn ngày khám
    date: {
        type: String,
        required: true
    },
    // thời gian cụ thể
    time: {
        type: String,
        required: true
    },
    // trạng thái cuộc hẹn (1: 'pending', 2: 'confirmed', 3: 'cancelled')
    status: {
        type: String,
        required: true
    },
    // giới tính 
    gender: {
        type: String,
        required: true
    },
    idProvince: {
        type: Schema.Types.ObjectId,
        ref: 'Province',
        required: true
    },
    idHospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }

},{
    collection: COLLECTION_NAME,
    timestamps: true
})
module.exports = model(DOCUMENT_NAME, appointmentSchema);