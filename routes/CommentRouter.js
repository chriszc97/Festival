const Router = require('express').Router();
const controller = require('../controllers/CommentController');
const middleware = require('../middleware');

Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createComment
);
Router.get('/:id', controller.getComment);

module.exports = Router;
