/**
 * Created by hanso on 6/27/2017.
 */

'use strict';
var config = require('../config'),
    request = require('request'),
    nodemailer = require('nodemailer'),
    async = require('async'),
    logger = require("./logger"),
    mailerController = {};

// send maker post to vasapp
mailerController.doPost = function (req, res) {
    var body = req.body;
    logger.info('info','body request >>');
    logger.info('info', body);

    var mailOptions = {
        from: body.fromAddr,
        to: body.toAddr,
        subject: body.subject,
        text: body.body
    };
    
    logger.info('info: ',mailOptions);
    config.transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            logger.log('error: true', 'pushing sending mail >>>',error);
        } else {
            logger.log('error: false','successful response', info);
            console.log('Email sent: ' + info.response);
            res.json(info);
        }
    });

}
module.exports = mailerController;
