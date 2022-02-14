const { Comment } = require('../models');

const createComment = async (req, res) => {
  try {
    let commentBody = { ...req.body };
    let comment = await Comment.create(commentBody);
    res.send(comment);
  } catch (error) {}
};
const getComment = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    const result = await Comment.findAll({
      where: { postId: id }
    });
    res.send(result);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createComment,
  getComment
};
