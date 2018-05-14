/**
 * Created by hanso on 11/05/2018.
 */
// The Like model.
'use strict';

var Sequelize = require('sequelize'),
  config = require('../config'),
  db = require('./database');

// 1: The model schema.
var modelDefinition = {
  like: { type: Sequelize.BOOLEAN },
  postId:{ type: Sequelize.STRING }
};

// 2: The model options.
var modelOptions = {
  classMethods:{
    associate: associate
  }
};

// 3: Define the User model.
var LikeModel = db.define('like', modelDefinition, modelOptions);

function associate(models) {
  LikeModel.belongsTo(models.UserModel);
  LikeModel.belongsTo(models.PostModel);
}
module.exports = LikeModel;
