'use strict';

const Service = require('egg').Service;

class TaskService extends Service {
    async findTask(query) {
        const task = await this.ctx.model.Task.findOne(query);
        return task;
    }
    async createTask(params) {
        const task = new this.ctx.model.Task({
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
            taskImg: ''
        })
        return this.ctx.model.Task.create(task);
    }
    async updateTask(params) {
        const update = await this.ctx.model.Task.findOne({ id:params.id});
        update.taskName = params.taskName;
        update.taskType = params.taskType;
        update.taskBefore = params.taskBefore;
        update.taskLimit = params.taskLimit;
        update.taskCondition = params.taskCondition;
        update.taskTime = params.taskTime;
        update.taskWarn = params.taskWarn;
        update.taskPublic = params.taskPublic;
        update.taskPriority = params.taskPriority;
        const task = this.ctx.model.Task.create(update);
        return task;
    }
    async deleteTask(params) {
        const del = await this.ctx.model.Task.findByIdAndRemove(params.id);
        return del;
    }
}

module.exports = TaskService;