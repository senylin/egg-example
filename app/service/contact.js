'use strict';

const Service = require('egg').Service;

class ContactService extends Service {
  async findContact(query) {
    const contact = await this.ctx.model.Contact.find({
      contactId: query.contactId ? query.contactId : new RegExp('^.*.*$'),
      contactedId: query.contactedId ? query.contactedId : new RegExp('^.*.*$'),
      contactedStatus: query.contactedStatus ? query.contactedStatus : new RegExp('^.*.*$'),
    }).sort({ contactedTime: -1 });
    console.log({
      contactId: query.contactId ? query.contactId : '',
      contactedId: query.contactedId ? query.contactedId : '',
      contactedStatus: query.contactedStatus ? query.contactedStatus : '',
    });
    return contact;
  }
  async findContactOne(query) {
    const contact = await this.ctx.model.Contact.findOne(query);
    return contact;
  }
  async createContact(params) {
    const contact = new this.ctx.model.Contact({
      contactId: params.contactId,
      contactName: params.contactName,
      contactedId: params.contactedId,
      contactedName: params.contactedName,
      contactedStatus: 'contact',
      contactTime: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
      contactedTime: '',
      contactComment: [],
      contactGood: 0,
    });
    const log = new this.ctx.model.Log({
      userId: params.contactId,
      byUserId: params.contactedId,
      log: '建立了协助关系',
      status: 'ready',
      time: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
      time2: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
    });
    this.ctx.model.Log.create(log);
    return this.ctx.model.Contact.create(contact);
  }
  async updateContact(params) {
    const update = await this.ctx.model.Contact.findOne({ _id: params.id });
    console.log(update)
    update.contactedStatus = params.contactedStatus;
    update.contactTime = params.contactTime;
    update.contactedTime = params.contactedTime;
    update.contactComment = params.contactComment;
    update.contactGood = params.contactGood;
    if (params.contactedStatus && params.contactedStatus === 'contact') {
      const log = new this.ctx.model.Log({
        userId: update.contactId,
        byUserId: update.contactedId,
        log: '建立了协助关系',
        status: 'ready',
        time: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
        time2: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
      });
      this.ctx.model.Log.create(log);
    }
    if (params.contactedStatus && params.contactedStatus === 'contacted') {
      const log = new this.ctx.model.Log({
        userId: update.contactId,
        byUserId: update.contactedId,
        log: '解除了协助关系',
        status: 'ready',
        time: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
        time2: new Date(new Date().getTime()+8*60*60*1000).toISOString().substr(0,10),
      });
      this.ctx.model.Log.create(log);
    }
    const contact = this.ctx.model.Contact.create(update);
    return contact;
  }
  async deleteContact(params) {
    const del = await this.ctx.model.Contact.findByIdAndRemove(params.id);
    return del;
  }
}

module.exports = ContactService;
