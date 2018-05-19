'use strict';

const Controller = require('egg').Controller;

class LogController extends Controller {
  async index() {
    // GET
    const { ctx } = this;
    let res = '';
    const log = await this.service.log.findLog(ctx.query);
    res = log;
    if (log) {
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.error({ ctx, res });
    }
  }
  async destroy() {
    // /:id
    const { ctx } = this;
    let res = '';
    console.log(ctx.params.id);
    const log = await this.service.log.deleteLog(ctx.params);
    res = 1;
    ctx.helper.success({ ctx, res });
  }
}

module.exports = LogController;
