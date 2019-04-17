'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    postId: DataTypes.INTEGER,
    likedBy: DataTypes.STRING
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.Post, {
      foreignKey: 'id',
      sourceKey : 'id'
    });
  };
  return Like;
};
