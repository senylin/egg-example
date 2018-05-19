'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const LogSchema = new mongoose.Schema({
    userId: { type: String },
    userName: { type: String },
    byUserId: { type: String },
    byUserName: { type: String },
    log: { type: String },
    status: { type: String },
    time: { type: String },
    time2: { type: String },
  });

  return mongoose.model('Log', LogSchema);
};
