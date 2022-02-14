const Router = require('express').Router();
const controller = require('../controllers/UserController');
const middleware = require('../middleware');

Router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createUser
);

Router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updateUser
);
Router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deleteUser
);
Router.get(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getUserPost
);
Router.get('/', controller.getUser);

module.exports = Router;
