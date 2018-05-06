'use strict';

const Service = require('egg').Service;

class TaskService extends Service {
    async findPlan(query) {
        query.taskName = query.taskName ? query.taskName : '';
        const reg = new RegExp("^.*"+query.taskName+".*$");
        const plan = await this.ctx.model.Plan.find({
            planDate: query.planDate,
            planHour: query.planHour ? query.planHour : new RegExp("^.*.*$")
        });
        console.log(query)
        return plan;
    }
    async findPlanOne(query) {
        query.taskName = query.taskName ? query.taskName : '';
        const reg = new RegExp("^.*"+query.taskName+".*$");
        const plan = await this.ctx.model.Plan.findOne({
            planDate: query.planDate,
            planHour: query.planHour
            // taskName: {$regex: reg}
        });
        return plan;
    }
    async createPlan(params) {
        const plan = new this.ctx.model.Plan({
            taskName: params.taskName,
            taskType: params.taskType,
            taskBefore: params.taskBefore,
            taskLimit: params.taskLimit,
            taskCondition: params.taskCondition,
            taskTime: params.taskTime,
            taskWarn: params.taskWarn,
            taskPublic: params.taskPublic,
            taskPriority: params.taskPriority,
            taskResult: params.taskResult,
            taskImg: params.taskImg,
            taskStatus: params.taskStatus,
            planDate: params.planDate,
            planHour: params.planHour,
            planStatus: params.planStatus,
            planTask: params.planTask,
            userId: params.userId
        })
        return this.ctx.model.Plan.create(plan);
    }
    async updateTask(params) {
        const update = await this.ctx.model.Plan.findOne({ _id:params._id });
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
        update.planDate = params.planDate;
        update.planHour = params.planHour;
        update.planStatus = params.planStatus;
        update.planTask = params.planTask;
        update.userId = params.userId;
        const plan = this.ctx.model.Plan.create(update);
        return plan;
    }
    async deletePlan(params) {
        const del = await this.ctx.model.Plan.findByIdAndRemove(params.id);
        return del;
    }
}

module.exports = TaskService;
