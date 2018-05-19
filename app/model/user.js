'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    clientId: { type: String },
    token: { type: String },
    userName: { type: String },
    password: { type: String },
    phoneNumber: { type: String },
    role: { type: [String] },
    email: { type: String }
  });

  return mongoose.model('User', UserSchema);
};
