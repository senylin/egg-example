'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const PostSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    created: { type: String },
    post: { type: String },
    type: { type: String },
    date: { type: String },
    description: { type: String },
  });

  return mongoose.model('Post', PostSchema);
};
