const { Post, Comment } = require('../models');

const createPost = async (req, res) => {
  try {
    let postBody = req.postBody;
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
      where: {
        id: postId
      },
      returning: true
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
    let id = req.params.id;
    const result = await Comment.findAll({
      where: { postId: id },
      include: [
        {
          model: Post
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
