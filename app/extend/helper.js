'use strict';

const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.success = ({ ctx, res = null, message = '请求成功' }) => {
  ctx.body = {
    code: 0,
    data: res,
    message,
    result: 100,
  };
  ctx.status = 200;
};
