const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PostTag extends Model {}

PostTag.init(
  {
    // define columns
    post_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'post_id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'tag_id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post_tag',
  }
);

module.exports = PostTag;
