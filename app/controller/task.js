'use strict';

const Controller = require('egg').Controller;

class TaskController extends Controller {
  async index() { // GET
    const { ctx } = this;
    let res = '';
    const task = await this.service.task.findTask(ctx.query);
    res = task;
    if(task){
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.error({ ctx,res })
    }
  }
  async new() { // GET /new
    const { ctx } = this;
    let res = '';
    console.log('success');
    ctx.helper.success({ ctx, res });
  }
  async show() { // GET /:id
    const { ctx } = this;
    console.log(ctx.query)
    const res = await this.ctx.model.Task.findOne({_id: ctx.query.id})
    ctx.helper.success({ ctx, res });
  }
  async update() { // GET /:id
    const { ctx } = this;
    let res = 1;
    await this.service.task.updateTask(ctx.request.body);
    ctx.helper.success({ ctx, res });
  }
  async create() { // POST
    const { ctx } = this;
    let res = '';
    // console.log(ctx.request.body)
    if (ctx.request.body.taskName === '') {
      res = 0;
      const message = '任务创建失败';
      ctx.helper.error({ ctx, res, message })
    } else {
      const task = await this.service.task.createTask(ctx.request.body);
      res = 1;
      const message = '任务创建成功';
      ctx.helper.success({ ctx, res, message })
    }
  }
  async destroy() { // /:id
    const { ctx } = this;
    let res = '';
    console.log(ctx.params.id)
    const task = await this.service.task.deleteTask(ctx.params);
    res = 1;
    ctx.helper.success({ ctx, res });
  }
}

module.exports = TaskController;
