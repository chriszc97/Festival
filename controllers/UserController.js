const { User, Post } = require('../models');

const createUser = async (req, res) => {
  try {
    let body = {
      ...req.body
    };
    let result = await User.create(body);
    res.send(result);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    let updateUser = await User.update(req.body, {
      where: { id: userId },
      returning: true
    });
    res.send(updateUser);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id);
    await User.destroy({
      where: {
        id: userId
      }
    });
    res.send({ message: `The user was deleteed! id:${id}` });
  } catch (error) {
    throw error;
  }
};

const getUserPost = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.findAll({
      order: [['createdAt', 'DESC']],
      where: { id: id },
      include: [
        {
          model: Post,
          where: { userId: id }
        }
      ]
    });
    res.send(user);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createUser,
  updateUser,
  deleteUser,
  getUserPost
};
