'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const TaskSchema = new mongoose.Schema({
    taskName: { type: String },
    taskType: { type: String },
    taskBefore: { type: String },
    taskLimit: { type: [String] },
    taskCondition: { type: String },
    taskTime: { type: String },
    taskWarn: { type: String },
    taskPublic: { type: String },
    taskPriority: { type: String },
    taskResult: { type: String },
    taskImg: { type: String }
  });

  return mongoose.model('Task', TaskSchema);
};