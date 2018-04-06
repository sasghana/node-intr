'user strict';

//admin controller
var AdminController = {
    index: function(req,res) {
       res.status(200).json({
            message: 'Welcome, Admin Page',
            username: req.user.username,
            email: req.user.email,
            phone: req.user.mobile,
            bio: req.user.bio
        })
    }
}

module.exports = AdminController;
