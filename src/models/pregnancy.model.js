"use strict";
const e = require("express");
const { Schema, model } = require("mongoose");

const DOCUMENT_NAME = "Pregnancy";
const COLLECTION_NAME = "Pregnancies";

const pregnancySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dueDate: { type: Date,
      required: true,
      trim:true
      },
    week: { type: Number, default: 0 },
  },
  {
    collection: COLLECTION_NAME,
    timestamps: true,
  }
);
module.exports = model(DOCUMENT_NAME, pregnancySchema);
