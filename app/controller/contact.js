'use strict';

const Controller = require('egg').Controller;

class ContactController extends Controller {
  async index() {
    // GET
    const { ctx } = this;
    let res = '';
    const contact = await this.service.contact.findContact(ctx.query);
    res = contact;
    if (contact) {
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.error({ ctx, res });
    }
  }
  async new() {
    // GET /new
    const { ctx } = this;
    const res = '';
    console.log('success');
    ctx.helper.success({ ctx, res });
  }
  async show() {
    // GET /:id
    const { ctx } = this;
    console.log(ctx.query);
    const res = await this.ctx.model.Contact.findOne({ _id: ctx.query.id });
    ctx.helper.success({ ctx, res });
  }
  async update() {
    // GET /:id
    const { ctx } = this;
    const res = 1;
    await this.service.contact.updateContact(ctx.request.body);
    ctx.helper.success({ ctx, res });
  }
  async create() {
    // POST
    const { ctx } = this;
    let res = '';
    // console.log(ctx.request.body)
    if (ctx.request.body.contactName === '') {
      res = 0;
      const message = '任务创建失败';
      ctx.helper.error({ ctx, res, message });
    } else {
      const contact = await this.service.contact.createContact(ctx.request.body);
      res = 1;
      const message = '任务创建成功';
      ctx.helper.success({ ctx, res, message });
    }
  }
  async destroy() {
    // /:id
    const { ctx } = this;
    let res = '';
    console.log(ctx.params.id);
    const contact = await this.service.contact.deleteContact(ctx.params);
    res = 1;
    ctx.helper.success({ ctx, res });
  }
}

module.exports = ContactController;
