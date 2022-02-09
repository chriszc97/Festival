'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.hasMany(models.Comment, { foreignKey: 'postId' });
      Post.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      img: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE'
        // references: {
        //   model: 'users',
        //   key: 'id'
        // }
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  );
  return Post;
};
