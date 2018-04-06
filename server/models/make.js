/**
 * Created by hanso on 03/11/2018.
 */
// The Post model.
'use strict';

var Sequelize = require('sequelize'),
    config = require('../config'),
    db = require('./database');

// 1: The model schema.
var modelDefinition = {
  title:{ type: Sequelize.STRING },
  description: { type: Sequelize.STRING},
  body: { type: Sequelize.TEXT},
  reference:{ type: Sequelize.STRING, unique: true },
  makerId:{ type: Sequelize.STRING },
  comment:{ type: Sequelize.STRING },
  favoriteCount: { type: Sequelize.STRING, defaultValue: 0 },
  tagList:{ type: Sequelize.STRING },
  state:{ type: Sequelize.STRING, defaultValue: 'drafting' },
  urLink: { type: Sequelize.STRING },
  fileUpload: { type: Sequelize.TEXT },
  otherInfo:{ type: Sequelize.TEXT },
    views: { type: Sequelize.STRING, defaultValue: 0 },
    upVotes: { type: Sequelize.STRING, defaultValue: 0 }
};

// 2: The model options.
var modelOptions = {
  classMethods:{
    associate: associate
  }
};

// 3: Define the User model.
var MakeModel = db.define('make', modelDefinition, modelOptions);

function associate(models) {
  MakeModel.belongsTo(models.UserModel,{
    onDelete: 'cascade'
  })
}
module.exports = MakeModel;
