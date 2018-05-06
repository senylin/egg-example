'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const PlanSchema = new mongoose.Schema({
    taskName: { type: String },
    taskType: { type: String },
    taskStatus: { type: String },
    taskBefore: { type: String },
    taskLimit: { type: [String] },
    taskCondition: { type: String },
    taskTime: { type: String },
    taskWarn: { type: String },
    taskPublic: { type: String },
    taskPriority: { type: String },
    taskResult: { type: String },
    taskImg: { type: String },
    planDate: { type: String },
    planHour: { type: String },
    planStatus: { type: String },
    planTask: { type: String },
    userId: { type: String }
  });

  return mongoose.model('Plan', PlanSchema);
};
