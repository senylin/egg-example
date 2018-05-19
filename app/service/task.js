'use strict';

const Service = require('egg').Service;

class TaskService extends Service {
  async findTask(query) {
    query.taskName = query.taskName ? query.taskName : '';
    const reg = new RegExp('^.*' + query.taskName + '.*$');
    const sort = {};
    if (query.sort) {
      sort = query.sort;
    }
    const task = await this.ctx.model.Task.find({
      userId: query.userId,
      taskType: query.taskType ? query.taskType : new RegExp('^.*.*$'),
      taskStatus: query.taskStatus ? query.taskStatus : new RegExp('^.*.*$'),
      taskName: { $regex: reg }
    }).sort({ finishTime: -1 });
    return task;
  }
  async findTaskList(query) {
    const task = await this.ctx.model.Task.findOne(query);
    return task;
  }
  async createTask(params) {
    const task = new this.ctx.model.Task({
      userId: params.userId,
      byUserId: params.byUserId,
      taskName: params.taskName,
      taskType: params.taskType,
      taskBefore: params.taskBefore,
      taskLimit: params.taskLimit,
      taskCondition: params.taskCondition,
      taskTime: params.taskTime,
      taskWarn: params.taskWarn,
      taskPublic: params.taskPublic,
      taskPriority: params.taskPriority,
      taskResult: '',
      taskImg: '',
      finishTime: '',
      finishGood: 0,
      taskStatus: 'doing',
    });
    const log = new this.ctx.model.Log({
        userId: params.userId,
        byUserId: params.byUserId,
        log: '创建了' + params.taskName + '任务',
        status: 'ready',
        time: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
        time2: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
    });
    this.ctx.model.Log.create(log);
    return this.ctx.model.Task.create(task);
  }
  async updateTask(params) {
    const update = await this.ctx.model.Task.findOne({ _id: params._id });
    update.taskName = params.taskName;
    update.taskType = params.taskType;
    update.taskBefore = params.taskBefore;
    update.taskLimit = params.taskLimit;
    update.taskCondition = params.taskCondition;
    update.taskTime = params.taskTime;
    update.taskWarn = params.taskWarn;
    update.taskPublic = params.taskPublic;
    update.taskPriority = params.taskPriority;
    update.taskStatus = params.taskStatus;
    update.taskResult = params.taskResult;
    update.finishGood = params.finishGood;
    update.finishTime = params.finishTime;
    let logs = '';
    if (params.taskStatus && params.taskStatus === 'done') {
        logs = '完成了' + params.taskName + '任务';
    } else if (params.taskStatus && params.taskStatus === 'doing') {
        logs = '重新启动了' + params.taskName + '任务';
    } else {
        logs = '修改了' + params.taskName + '任务';
    }
    const log = new this.ctx.model.Log({
        userId: params.userId,
        byUserId: params.byUserId,
        log: logs,
        status: 'ready',
        time: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
        time2: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
    });
    this.ctx.model.Log.create(log);
    const task = this.ctx.model.Task.create(update);
    return task;
  }
  async deleteTask(params) {
    const del = await this.ctx.model.Task.findByIdAndRemove(params.id);
    return del;
  }
}

module.exports = TaskService;
