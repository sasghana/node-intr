/**
 * Created by hanso on 6/27/2017.
 */

'use strict';
var config = require('../config'),
  request = require('request'),
  db = require('../models/database'),
  Post = require('../models/post'),
  PostServiceController = {};

// post content and media intranet
PostServiceController.postContent = function (req, res) {
  var body = req.body;
  console.log("post request body >>>", body);

  db.sync().then(function () {
    var newPost = {
      user: req.body.user,
      title: req.body.title,
      body: req.body.body,
      reference: req.body.reference
    };

    return Post.create(newPost).then(function () {
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
PostServiceController.getAllPosts = function (req, res) {
  Post.findAll()
    .then(function (makers) {
      res.status(200)
        .json(makers);
      console.info('find all makers load ~ ');
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}
//get one maker post
PostServiceController.getPost = function (req, res) {
  Post.findById(req.params.id)
    .then(function (maker) {
      res.status(200)
        .json(maker);
      console.log('error: false ', 'message: read single post ~', maker);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

PostServiceController.updatePost = function (req, res) {
  Post.update(req.body, {
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
PostServiceController.removePost = function (req, res) {
  Post.destroy({
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

module.exports = PostServiceController;
