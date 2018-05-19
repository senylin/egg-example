'use strict';

const Controller = require('egg').Controller;

class PlanController extends Controller {
  async index() { // GET
    const { ctx } = this;
    let res = '';
    const plan = await this.service.plan.findPlan(ctx.query);
    res = plan;
    if(plan){
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.error({ ctx,res })
    }
  }
  async new() { // GET /new
    const { ctx } = this;
    let res = '';
    console.log('success')
    ctx.helper.success({ ctx, res });
  }
  async show() { // GET /:id
    this.ctx.body = await this.ctx.model.Plan.findById(this.ctx.req.query.id);
  }
  async update() { // GET /:id
    const { ctx } = this;
    let res = 1;
    await this.service.plan.updatePlan(ctx.request.body);
    ctx.helper.success({ ctx, res });
  }
  async create() { // POST
    const { ctx } = this;
    let res = '';
    const search = await this.service.plan.findPlan(ctx.request.body);
    console.log(111, search)
    if(!search.length) {
      const plan = await this.service.plan.createPlan(ctx.request.body);
      res = 1;
    } else {
      res = 0;
    }
    const message = '任务创建';
    ctx.helper.success({ ctx, res, message })
  }
  async destroy() { // /:id
    const { ctx } = this;
    let res = '';
    console.log(ctx.params.id)
    const plan = await this.service.plan.deletePlan(ctx.params);
    res = 1;
    ctx.helper.success({ ctx, res });
  }
}

module.exports = PlanController;
