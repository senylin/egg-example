'use strict';

const Service = require('egg').Service;

class LogService extends Service {
  async findLog(query) {
    const log = await this.ctx.model.Log.find({
      userId: query.userId,
    }).sort({ time: -1 });
    return log;
  }
  async deleteLog(params) {
    const del = await this.ctx.model.Log.findByIdAndRemove(params.id);
    return del;
  }
}

module.exports = LogService;
