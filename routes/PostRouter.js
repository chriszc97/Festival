const Router = require('express').Router();
const controller = require('../controllers/PostController');
const middleware = require('../middleware');

Router.get('/', controller.getAllposts);
Router.post('/', controller.createPost);
Router.put(
  '/:id',

  controller.updatePost
);
Router.delete(
  '/:id',

  controller.deletePost
);

module.exports = Router;
