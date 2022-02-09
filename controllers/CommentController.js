const { Comment } = require('../models');

const createComment = async (req, res) => {
  try {
    let commentBody = { ...req.body };
    let comment = await Comment.create(commentBody);
    res.send(comment);
  } catch (error) {}
};

module.exports = {
  createComment
};
