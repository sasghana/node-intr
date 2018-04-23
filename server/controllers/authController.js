/**
 * Created by hanso on 03/9/2018.
 */
'use strict';

var jwt = require('jsonwebtoken'),
    gravatar  = require('gravatar'),
    config = require('../config'),
    db = require('../models/database'),
    User = require('../models/user'),
    AuthController = {}; // The authentication controller.

// Register a user.
AuthController.signUp = function (req, res) {
  console.log("post data ~ ",req.body);
  if (!req.body.username || !req.body.password) {
    res.json({ message: 'Please provide a username and a password.' });
  } else {
    db.sync().then(function () {
      var getGravatar = gravatar.url(req.body.email, {
          s: 40,
          d: 'retro'
      });

      var newUser = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        mobile: req.body.mobile,
        gravatar: getGravatar,
        bio: req.body.bio,
        department: req.body.department,
        position: req.body.position,
        joined: new Date().getTime(),
        email_confirmed: 'false',
        mobile_confirmed: 'false',
        gender: req.body.gender,
        dateOfBirth: req.body.dateOfBirth
      };

      return User.create(newUser).then(function () {
        res.status(201).json({ message: 'Account created successfully!' });
      });
    }).catch(function (error) {
      console.log(error);
      res.status(403).json({ message: 'Username already exists!' });
    });
  }
}
// Authenticate a user.
AuthController.authenticateUser = function (req, res) {
  console.log("login request ~ ",req.body);
  if (!req.body.username || !req.body.password) {
    res.status(404)
       .json({ message: 'Username and password are needed!' });
  } else {
    var username = req.body.username,
        password = req.body.password,
        potentialUser = { where: { username: username } };

    User.findOne(potentialUser).then(function (user) {
      if (!user) {
        res.status(404).json({ message: 'Authentication failed!' });
      } else {
        user.comparePasswords(password, function (error, isMatch) {
          if (isMatch && !error) {
            var token = jwt.sign({ username: user.username }, config.keys.secret, { expiresIn: '24h' });

            res.json({ success: true, token: 'JWT ' + token, profile: user.toProfileJsonFor(), role: user.role });

          } else {
            res.status(404).json({ message: 'Login failed!' });
          }
        });
      }
    }).catch(function (error) {
      res.status(500).json({ message: 'There was an error!' });
    });
  }
}

AuthController.peoples = function (req, res) {
  console.log("all people request ~ ",req.body);
  User.findAll()
      .then(function (users) {
          res.status(200).json(users);
          console.info('all staff ~ ');
      })
      .catch(function (error) {
          res.status(500).json(error);
      });
}

AuthController.people = function (req, res) {
    console.log("people id ~ ",req.body);
    User.findById(req.params.id)
        .then(function (user) {
            res.status(200).json(user);
            console.log('error: false ', 'get staff ~ ', user);
        })
        .catch(function (error) {
            res.status(500).json(error);
        });
}

/**
 * Change a users password
 */
AuthController.changePassword = function(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return validationError(res, err);
        res.send(200);
      });
    } else {
      res.send(403);
    }
  });
};

// reset a users password:

AuthController.resetPassword = function(email) {
  var chars="abcdefghijklmnopqrstuvwxyz123456789"
  var newPass=''

  for (var i = 0; i < 8; i++){
    newPass += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  User.findOne({email: email}, function (err, user) {
    user.password = newPass;
    user.save(function(err) {
      if (err){
        console.log("error saving password");
      }
    });
  });

  return newPass;
};

module.exports = AuthController;
