'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  app.beforeStart(async function() {
    console.log('"hello world"');
  });
  const { router, controller, io } = app;
  console.log(111, app.oAuth2Server.token());
  router.get('/', controller.home.index);
  // router.get('/news', controller.news.list);
  router.resources('user', '/api/user', controller.user);
  router.resources('task', '/api/task', controller.task);
  router.resources('plan', '/api/plan', controller.plan);
  router.resources('contact', '/api/contact', controller.contact);
  router.resources('log', '/api/log', controller.log);
  io.of('/').route('chat', controller.chat.index);
  // app.all('/user/token', app.oAuth2Server.token());
  // app.get('/user/authorize', app.oAuth2Server.authorize(), 'user.code');
  // app.get('/user/authenticate', app.oAuth2Server.authenticate(), 'user.authenticate');
};
