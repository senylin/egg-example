'use strict';

module.exports = app => {
  const model = {};
  model.getClient = async (clientId, clientSecret, callback) => {
    console.log(1);
    if (clientId) {
      callback(null, { clientId, clientSecret });
      return;
    }
    callback(null, null);
  };
  model.grantTypeAllowed = (clientId, grantType, callback) => {
    console.log(2);
    let allowed = false;
    if (grantType === 'password') {
      allowed = true;
    }
    callback(null, allowed);
  };
  model.getUser = async (username, password, callback) => {
    console.log(3);
    const user = await app.model.User.findOne({ $or: [
      { userName: username },
    ] });
    if (!user) {
      callback(null, null);
      return;
    }
    if (user.password !== password) {
      callback(null, null);
    } else {
      callback(null, { id: user._id });
    }
  };
  model.saveAccessToken = async (accessToken, clientId, expires, user, callback) => {
    console.log(4);
    await app.model.OauthToken({ accessToken, expires, clientId, user }).save();
    callback(null);
  };
  model.getAccessToken = async (bearerToken, callback) => {
    console.log(5);
    const token = await app.model.OauthToken.findOne({ accessToken: bearerToken });
    callback(null, token);
  };
  return model;
};
