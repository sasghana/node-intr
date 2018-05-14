'use strict';

// The user controller.
var UserController = {
    index: function (req, res) {
        res.status(200).json({
            message: 'Welcome to Staff Profile',
            username: req.user.username,
            firstName: req.user.firstName,
            middleName: req.user.middleName,
            lastName: req.user.lastName,
            mobile: req.user.mobile,
            email: req.user.email,
            phone: req.user.mobile,
            department: req.user.department,
            position: req.user.position,
            bio: req.user.bio,
            dateOfBirth: req.user.dateOfBirth,
            gravatar: req.user.gravatar,
            following: 'false',
            status: req.user.status,
            joined: req.user.joined,
            country: req.user.country
        });
    }
};

module.exports = UserController;
