const Router = require('express').Router();
const controller = require('../controllers/UserController');
const middleware = require('../middleware');

Router.put(
  '/user/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateUser
);
Router.delete(
  '/user/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
);
Router.get(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserPost
);
module.exports = Router;
