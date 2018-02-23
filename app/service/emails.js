'use strict';

const Service = require('egg').Service;

class EmailsService extends Service {
  async findPosts(query) {
    const posts = await this.ctx.model.Post.find(query);
    return posts;
  }
  async findHtmls(query) {
    const htmls = await this.ctx.model.Email.find(query);
    return htmls;
  }
  async findPostByTitle(params) {
    const post = await this.ctx.model.Post.findOne({ title: params.title });
    return post;
  }
  async findHtmlByTitle(params) {
    const html = await this.ctx.model.Email.findOne({ title: params.title });
    return html;
  }
  async createPost(params) {
    // const { title, created, html, post, type, date, description } = params;
    const post = new this.ctx.model.Post({
      title: params.title,
      created: params.created,
      post: params.post,
      type: params.type,
      date: params.date,
      description: params.description,
    });
    return this.ctx.model.Post.create(post);
  }
  async createHtml(params) {
    // const { title, created, html, post, type, date, description } = params;

    const email = new this.ctx.model.Email({
      title: params.title,
      created: params.created,
      html: params.html,
      type: params.type,
      date: params.date,
      description: params.description,
    });
    return this.ctx.model.Email.create(email);
  }
  async updatePost(params) {
    // const { title, created, html, post, type, date, description } = params;
    const update = await this.ctx.model.Post.findOne({ title: params.title });
    update.title = params.title;
    update.created = params.created;
    update.post = params.post;
    update.type = params.type;
    update.date = params.date;
    update.description = params.description;
    const post = this.ctx.model.Post.create(update);
    return post;
  }
  async updateHtml(params) {
    // const { title, created, html, post, type, date, description } = params;
    const update = await this.ctx.model.Email.findOne({ title: params.title });
    update.title = params.title;
    update.created = params.created;
    update.html = params.html;
    update.type = params.type;
    update.date = params.date;
    update.description = params.description;
    const post = this.ctx.model.Email.create(update);
    return post;
  }
  async deletePost(params) {
    const del = await EmailsService.findByIdAndRemove(params.id);
    return del;
  }
  // async create() { // POST
  //   const user = new this.ctx.model.User({
  //     userName: '123',
  //     password: '1234',
  //   });
  //   await user.save(err => {
  //     if (err) console.log(err);
  //   });
  // }
  // async destroy() { // /:id
  //   this.ctx.model.User.findByIdAndRemove(this.ctx.req.query.id, (err, data) => {
  //     console.log(err);
  //   });
  // }
}

module.exports = EmailsService;
