'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    AdminController = require('../controllers/adminController'),
    ReprocessController = require('../controllers/reprocessController'),
    NodeMailController = require('../controllers/nodeMailer');
    
var APIRoutes = function(passport) {
    // POST Routes.
    router.post('/signup', AuthController.signUp);
    router.post('/authenticate', AuthController.authenticateUser);
    router.post('/repr', ReprocessController.doMaker);
    // router.post('/repr', passport.authenticate('jwt', { session: false}), allowOnly(config.accessLevels.user, ReprocessController.doMaker));
    router.post('/authorize', ReprocessController.doTransaction);
    router.post('/remove', ReprocessController.removeMaker);
    router.post('/mail', NodeMailController.doPost);

    // GET Routes.
    router.get('/peoples', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AuthController.peoples ));
    router.get('/people/:id', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AuthController.people ));
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));
    router.get('/makers', ReprocessController.doGetAllMaker);

    return router;
};

module.exports = APIRoutes;
