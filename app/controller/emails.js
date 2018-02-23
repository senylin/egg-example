'use strict';

const Controller = require('egg').Controller;
// const template = '<meta charset="utf-8"><div id="app"><!--vue-ssr-outlet--></div>';
// const ppServerBundle = require('../dist/vue-ssr-server-bundle.json');
const templateServer = require('email-template-vue-pingpong');
const { createBundleRenderer } = require('vue-server-renderer');
// const ppServerBundle = require('../dist/vue-ssr-server-bundle.json');
const template = templateServer.serverRender.template;
const ppServerBundle = templateServer.serverRender.ppServerBundle;
const juice = require('juice');
const nodemailer = require('nodemailer');

class EmailsController extends Controller {
  async preview() {
    const { ctx } = this;
    let res = '';
    // this.ctx.body = await this.ctx.model.User.find({});
    const renderer = createBundleRenderer(ppServerBundle, {
      runInNewContext: false,
      template
    });
    const context = { params: ctx.request.body.params };
    const html = await renderer.renderToString(context);
    if (html) {
      const juiceHtml = juice(html);
      const linkReg = /(<link.*\s+href=(?:"[^"]*"|'[^']*')[^<]*>)/g;
      const scriptReg = /<script.*?>.*?<\/script>/g;
      const cHtml = juiceHtml.replace(scriptReg, '').replace(linkReg, '').replace(/<div id="app">/g, '')
        .replace(/<div data-server-rendered="true">/g, '')
        .replace(/&lt;br&gt;/g, '<br/>');
      const clearHtml = cHtml.substring(0, cHtml.length - 12);
      res = { html: clearHtml };
      ctx.helper.success({ ctx, res });
    } else {
      ctx.helper.success({ ctx });
    }
  }
  async send() {
    const { ctx } = this;
    let res = '';
    const html = await this.service.emails.findHtmlByTitle({ title: ctx.request.body.title });
    if (html) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.partner.outlook.cn',
        port: 587,
        secureConnection: true,
        auth: {
          user: 'linsy@pingpongx.com',
          pass: 'Lofa01917716',
        },
      });
      const mailOptions = {
        from: '"TEST:"' + html.title + ' <linsy@pingpongx.com>',
        to: ctx.request.body.to,
        subject: html.title,
        html: html.html,
      };
      const info = await transporter.sendMail(mailOptions);
      if (info) {
        console.log('Message sent: ' + info.messageId);
        res = ('Message sent: ' + info.messageId);
        ctx.helper.success({ ctx, res });
      }
    } else {
      res = ('title_not_find');
      ctx.helper.success({ ctx, res });
    }
  }
  async sendHtml() {
    const { ctx } = this;
    let res = '';
    const html = ctx.request.body.html;
    if (html) {
      const transporter = nodemailer.createTransport({
        host: 'smtp.partner.outlook.cn',
        port: 587,
        secureConnection: true,
        auth: {
          user: 'linsy@pingpongx.com',
          pass: 'Lofa01917716',
        },
      });
      const mailOptions = {
        from: '"TEST:"' + html.title + ' <linsy@pingpongx.com>',
        to: ctx.request.body.to,
        subject: html.title,
        html: html.html,
      };
      const info = await transporter.sendMail(mailOptions);
      if (info) {
        console.log('Message sent: ' + info.messageId);
        res = ('Message sent: ' + info.messageId);
        ctx.helper.success({ ctx, res });
      }
    } else {
      res = ('title_not_find');
      ctx.helper.success({ ctx, res });
    }
  }
  async index() { // GET
    const { ctx } = this;
    let res = '';
    const posts = await this.service.emails.findPosts();
    res = posts;
    ctx.helper.success({ ctx, res });
  }
  async new() { // GET /new
    const { ctx } = this;
    let res = '';
    const html = await this.service.emails.findHtmlByTitle({ title: ctx.query.title });
    res = html;
    ctx.helper.success({ ctx, res });
  }
  async show() { // GET /:id
    this.ctx.body = await this.ctx.model.User.findById(this.ctx.query.id);
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
    const { ctx, service } = this;
    let res = '';
    // this.ctx.body = await this.ctx.model.User.find({});
    const renderer = createBundleRenderer(ppServerBundle, {
      runInNewContext: false,
      template
    });
    const context = { params: ctx.request.body.params };
    const html = await renderer.renderToString(context);
    if (html) {
      const juiceHtml = juice(html);
      const linkReg = /(<link.*\s+href=(?:"[^"]*"|'[^']*')[^<]*>)/g;
      const scriptReg = /<script.*?>.*?<\/script>/g;
      const cHtml = juiceHtml.replace(scriptReg, '').replace(linkReg, '').replace(/<div id="app">/g, '')
        .replace(/<div data-server-rendered="true">/g, '')
        .replace(/&lt;br&gt;/g, '<br/>');
      const clearHtml = cHtml.substring(0, cHtml.length - 12);
      const email = {
        title: context.params.name,
        created: ctx.request.body.created,
        html: clearHtml,
        post: JSON.stringify(context.params),
        type: context.params.type,
        date: ctx.request.body.date,
        description: ctx.request.body.description,
      };
      const exist = await service.emails.findHtmlByTitle(email);
      if (exist) {
        res = 'email_title_exist';
        ctx.helper.success({ ctx, res });
      } else {
        await service.emails.createPost(email);
        await service.emails.createHtml(email);
        res = 'create_email_success';
        ctx.helper.success({ ctx, res });
      }
    } else {
      res = 'email_template_error';
      ctx.helper.success({ ctx, res });
    }
  }
  async destroy() { // /:id
    const { ctx } = this;
    let res = '';
    ctx.helper.success({ ctx, res });
  }
}

module.exports = EmailsController;
