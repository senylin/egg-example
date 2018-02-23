'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const EmailSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    created: { type: String },
    html: { type: String },
    type: { type: String },
    date: { type: String },
    description: { type: String },
  });

  return mongoose.model('Email', EmailSchema);
};
