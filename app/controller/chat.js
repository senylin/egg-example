'use strict';


// module.exports = app => {
//   return function* () {
//     const self = this;
//     const message = this.args[0];
//     console.log('chat 控制器打印', message);
//     this.socket.emit('res', `Hi! I've got your message: ${message}`);
//   };
// };
const Controller = require('egg').Controller;

class ChatController extends Controller {
  async index() {
    const ctx = this.ctx;
    console.log(ctx.args);
    const message = ctx.args[0];
    console.log('chat 控制器打印', message);
    this.ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }
}

module.exports = ChatController;
