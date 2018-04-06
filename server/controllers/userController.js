'use strict';

// The user controller.
var UserController = {
    index: function (req, res) {
        res.status(200).json({
            message: 'Welcome, User page',
            username: '' + req.user.username,
            email: '' + req.user.email,
            phone: '' +req.user.mobile,
            bio: '' + req.user.bio
        });
    },
    me: function (req,res) {
        res.status().json({
            email:''+req.user.email,
            username:''+req.user.username
        })
    }

};

module.exports = UserController;
