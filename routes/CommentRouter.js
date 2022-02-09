const Router = require('express').Router();
const controller = require('../controllers/CommentController');
const middleware = require('../middleware');

Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createComment
);

module.exports = Router;
