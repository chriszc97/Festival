const { Post, Comment } = require('../models');
const comment = require('../models/comment');

const createPost = async (req, res) => {
  try {
    let postBody = req.body;
    let post = await Post.create(postBody);
    res.send(post);
  } catch (error) {
    throw error;
  }
};

const updatePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.id);
    let updatePost = await Post.update(req.body, {
      where: { id: postId }
    });
    res.send(updatePost);
  } catch (error) {
    throw error;
  }
};
const deletePost = async (req, res) => {
  try {
    let postId = parseInt(req.params.id);
    await Post.destroy({ where: { id: postId } });
    res.send({ message: `Deleted post with an id of ${postId}` });
  } catch (error) {
    throw error;
  }
};

const getAllposts = async (req, res) => {
  try {
    const result = await Post.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Comment
        }
      ]
    });
    res.send(result);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost,
  getAllposts
};
