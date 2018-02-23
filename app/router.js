'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.beforeStart(async function() {
    console.log('"hello world"');
  });
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.resources('user', '/api/user', controller.user);
  router.resources('emails', '/api/emails', controller.emails);
  router.post('/api/emails/preview', controller.emails.preview);
  router.post('/api/emails/send', controller.emails.send);
  router.post('/api/emails/sendHtml', controller.emails.sendHtml);
  io.of('/').route('chat', controller.chat.index);
};
