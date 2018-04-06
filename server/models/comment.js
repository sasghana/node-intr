/**
 * Created by hanso on 03/11/2018.
 */
// The Comment model.
'use strict';

var Sequelize = require('sequelize'),
    config = require('../config'),
    db = require('./database');

// 1: The model schema.
var modelDefinition = {
    body: { type: Sequelize.TEX },
    makerId:{ type: Sequelize.STRING },
    makerName: { type: Sequelize.STRING },
    gravatar: { type: Sequelize.BLOB('long') },
    make:{ type: Sequelize.STRING },
    reference:{ type: Sequelize.STRING, unique: true },
    like: { type: Sequelize.Number, defaultValue: 0 },
    otherInfo:{ type: Sequelize.TEXT }
};

// 2: The model options.
var modelOptions = {
    classMethods:{
        associate: associate
    }
};

// 3: Define the User model.
var CommentModel = db.define('comment', modelDefinition, modelOptions);

function associate(models) {
    CommentModel.belongsTo(models.MakeModel,{
        onDelete: 'cascade'
    })
}
module.exports = CommentModel;
