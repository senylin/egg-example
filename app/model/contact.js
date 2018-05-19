'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const ContactSchema = new mongoose.Schema({
    contactId: { type: String },
    contactedId: { type: String },
    contactedStatus: { type: String },
    contactTime: { type: String },
    contactedTime: { type: String },
    contactComment: { type: String },
    contactGood: { type: String },
  });

  return mongoose.model('Contact', ContactSchema);
};
