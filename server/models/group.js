/**
 * Created by hanso on 03/11/2018.
 */
// The Group model.
'use strict';

var Sequelize = require('sequelize'),
    config = require('../config'),
    db = require('./database');

// 1: The model schema.
var modelDefinition = {
    organization: { type: Sequelize.STRING },
    name:{ type: Sequelize.STRING },
    description: { type: Sequelize.STRING},
    category:{ type: Sequelize.STRING, defaultValue: 'admin' },
    postCount: { type: Sequelize.INTEGER, defaultValue: 0 },
    postId:{ type: Sequelize.STRING },
    invite: { type: Sequelize.BOOLEAN, defaultValue: false },
    otherInfo:{ type: Sequelize.TEXT },
};

// 2: The model options.
var modelOptions = {
    classMethods:{
        associate: associate
    }
};

// 3: Define the User model.
var GroupModel = db.define('group', modelDefinition, modelOptions);

function associate(models) {
    GroupModel.belongsTo(models.UserModel,{});
    GroupModel.hasMany(models.PostModel,{onDelete: 'cascade'})
}
module.exports = GroupModel;
