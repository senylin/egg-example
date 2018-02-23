'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() { // GET
    this.ctx.body = await this.ctx.model.User.find({});
  }
  async new() { // GET /new
    this.ctx.body = await this.ctx.model.User.findOne({ userName: '123' }, (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        console.log(data);
      }
    });
  }
  async show() { // GET /:id
    this.ctx.body = await this.ctx.model.User.findById(this.ctx.req.query.id);
  }
  async edit() { // GET /:id/edit
    this.ctx.body = await this.ctx.model.User.findById(this.ctx.req.query.id, async (err, data) => {
      if (err) {
        console.log(err);
      }
      if (data) {
        console.log(data);
        await data.save();
      }
    });
  }
  async create() { // POST
    const user = new this.ctx.model.User({
      userName: '123',
      password: '1234',
    });
    await user.save(err => {
      if (err) console.log(err);
    });
  }
  async destroy() { // /:id
    this.ctx.model.User.findByIdAndRemove(this.ctx.req.query.id, (err, data) => {
      console.log(err);
    });
  }
}

module.exports = UserController;
