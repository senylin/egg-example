'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async code() {
    // const response = await app.httpRequest()
    //   .post('/oauth2/access_token')
    //   .set('Content-Type', 'application/x-www-form-urlencoded')
    //   .set('Authorization', 'Basic bXlfYXBwOm15X3NlY3JldA==')
    //   .send({
    //     grant_type: 'password',
    //     username: 'test',
    //     password: '123456',
    //   })
    //   .expect(200);
    // assert(response.body.access_token);
    // this.ctx.body = { result: 'ok' };
    const { ctx } = this;
    const res = '';
    this.ctx.helper.success({ ctx, res });
  }
  async authenticate() {
    // const response = await app.httpRequest()
    //   .post('/oauth2/access_token')
    //   .set('Content-Type', 'application/x-www-form-urlencoded')
    //   .set('Authorization', 'Basic bXlfYXBwOm15X3NlY3JldA==')
    //   .send({
    //     grant_type: 'password',
    //     username: 'test',
    //     password: '123456',
    //   })
    //   .expect(200);
    // assert(response.body.access_token);
    // this.ctx.body = { result: 'ok' };
    const { ctx } = this;
    const res = '';
    this.ctx.helper.success({ ctx, res });
  }
  async index() {
    // GET
    const { ctx } = this;
    let res = '';
    const user = await this.service.user.findUsers(ctx.query);
    res = user;
    console.log(user);
    if (user) {
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.error({ ctx, res });
    }
  }
  async new() {
    // GET /new
    const { ctx } = this;
    let res = '';
    const user = await this.service.user.findUser(ctx.query);
    res = user;
    console.log(user);
    if (user) {
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.error({ ctx, res });
    }
  }
  async show() {
    // GET /:id
    this.ctx.body = await this.ctx.model.User.findById(this.ctx.req.query.id);
  }
  async edit() {
    // GET /:id/edit
    this.ctx.body = await this.ctx.model.User.findById(
      this.ctx.req.query.id,
      async (err, data) => {
        if (err) {
          console.log(err);
        }
        if (data) {
          console.log(data);
          await data.save();
        }
      }
    );
  }
  async create() {
    // POST
    const { ctx } = this;
    let res = '';
    const exist = await this.service.user.findUser({
      userName: ctx.request.body.username
    });
    console.log(exist);
    if (exist) {
      res = 'userName_exist';
      const message = '用户名已存在';
      ctx.helper.error({ ctx, res, message });
    } else {
      const user = await this.service.user.createUser(ctx.request.body);
      res = 'create_success';
      const message = '用户创建成功';
      ctx.helper.success({ ctx, res, message });
    }
  }
  async destroy() {
    // /:id
    this.ctx.model.User.findByIdAndRemove(
      this.ctx.req.query.id,
      (err, data) => {
        console.log(err);
      }
    );
  }
}

module.exports = UserController;
