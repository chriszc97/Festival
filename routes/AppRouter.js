const Router = require('express').Router();
const AuthRouter = require('./AuthRouter');
const UserRouter = require('./UserRouter');
const PostRouter = require('./PostRouter');
const CommentRouter = require('./CommentRouter');

Router.use('/auth', AuthRouter);
Router.use('/user', UserRouter);
Router.use('/post', PostRouter);
Router.use('/comment', CommentRouter);

module.exports = Router;
