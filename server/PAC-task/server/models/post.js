'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    text: DataTypes.STRING,
    postedBy: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: 'id',
      sourceKey : 'id'
    });
    Post.hasMany(models.Like, {
      foreignKey: 'id',
      sourceKey : 'id'
    });
  };
  return Post;
};
