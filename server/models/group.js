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
    title:{ type: Sequelize.STRING },
    description: { type: Sequelize.STRING},
    category:{ type: Sequelize.STRING, defaultValue: 'admin' },
    makeCount: { type: Sequelize.Number, defaultValue: 0 },
    makerIdCount:{ type: Sequelize.Number, defaultValue: 0 },
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
    GroupModel.hasMany(models.MakeModelModel,{
        onDelete: 'cascade'
    })
}
module.exports = GroupModel;
