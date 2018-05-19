'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const OauthTokenSchema = new mongoose.Schema({
    accessToken: { type: String },
    expires: { type: String },
    clientId: { type: String },
    user: { type: String },
  });

  return mongoose.model('OauthToken', OauthTokenSchema);
};
