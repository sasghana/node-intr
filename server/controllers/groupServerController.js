/**
 * Created by hanso on 5/14/2017.
 */

'use strict';
var config = require('../config'),
  request = require('request'),
  db = require('../models/database'),
  Group = require('../models/group'),
  GroupServiceController = {};

// post content and media intranet
GroupServiceController.createGroup = function (req, res) {
  var body = req.body;
  console.log("post request body >>>", body);

  db.sync().then(function () {
    var newPost = {
      user: req.body.user,
      name: req.body.name,
      description: req.body.body
    };

    return Group.create(newPost).then(function () {
      res.status(201)
        .json({
          message: 'Post Content saved successfully'
        });
    });
  }).catch(function (error) {
    console.log(error);
    res.status(403).json({ message: 'An error occured' });
  });
}
// get all maker post
GroupServiceController.getAllGroups = function (req, res) {
  Group.findAll()
    .then(function (groups) {
      res.status(200)
        .json(groups);
      console.info('find all makers load ~ ');
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}
//get one maker post
GroupServiceController.getGroup = function (req, res) {
  Group.findById(req.params.id)
    .then(function (group) {
      res.status(200)
        .json(group);
      console.log('error: false ', 'message: read single post ~', group);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

GroupServiceController.updateGroup = function (req, res) {
  Group.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
      console.log('updateRecords >>', updatedRecords)
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}
//delete maker post
GroupServiceController.removeGroup = function (req, res) {
  Group.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function (deletedRecords) {
      res.status(200)
        .json(deletedRecords);
      console.log('error: false', 'message: deletedRecords ~ ', deletedRecords);
    })
    .catch(function (error) {
      res.status(500)
        .json(error);
      console.log('error: true ', 'message: ', error)
    });
}

module.exports = GroupServiceController;
