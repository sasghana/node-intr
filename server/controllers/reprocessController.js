/**
 * Created by hanso on 6/27/2017.
 */

'use strict';
var config = require('../config'),
  request = require('request'),
  db = require('../models/database'),
  Maker = require('../models/post'),
  ReprocessController = {};

// send maker post to vasapp
ReprocessController.doTransaction = function (req, res) {
  var body = req.body,
    otherInfo = req.account + '|' + req.reference + '|' + '0170000010',
    url = config.services.url,
    payload;
  console.log('request body for reprocess >>>');
  console.info(' ~ ' + body);

  payload = {
    "action": "process",
    "product": req.body.product,
    "account": req.body.account,
    "amount": req.body.amountPaid,
    "reference": req.body.reference + '-REP'
  };
  payload.apiId = config.services.apiId;
  payload.apiSecret = config.services.apiSecret;

  console.log("product >>>", payload.product);
  console.log("payload.account >>>", payload.account);
  console.log("payload.reference >>>", payload.reference);
  console.log("payload.amount >>>", payload.amount);
  console.log("payload.action >>>", payload.action);

  if (req.body.product == 'ECG' || req.body.product == 'ecg') {
    payload.otherInfo = otherInfo;
  }

  var options = {
    url: url,
    json: true,
    body: payload,
    method: "POST"
  };
  request(options, function (error, response, body) {
    if (error) {
      console.log("error", "Error in request for service successfully returned 500 Response body>>");
      console.log('catch reprocess error::: ', error);
      res.json(error);
    } else {
      console.log("info", "Service Request successfully returned 200 Response body>>");
      var result = {};
      result.otherInfo = body.otherInfo;
      result.reference = body.reference;
      result.status = body.status;
      console.log("result otherInfo", result.otherInfo);
      console.log("result reference", result.reference);
      console.log("result status", result.status);

      res.json(body);

      if (result.status !== '0' || result.status !== '00') {
        Maker.update(
          {
            otherInfo: result.otherInfo,
            serviceStatus: result.status
          }, {
            where: {
              reference: {
                $like: req.body.reference
              }
            }
          }
        );
      }else{
        Maker.update(
          {
            otherInfo: result.otherInfo,
            serviceStatus: result.status,
            state: 'complete'
          }, {
            where: {
              reference:{
                $like: req.body.reference
              }

            }
          }
        );
      }

    }
  });

}
// create maker post
ReprocessController.doMaker = function (req, res) {
  var body = req.body;
  console.log("maker request post >>>", body);

  db.sync().then(function () {
    var newPost = {
      userId: req.body.userId,
      product: req.body.product,
      account: req.body.account,
      reference: req.body.reference,
      amountPaid: req.body.amountPaid,
      bug: req.body.bug

    };

    return Maker.create(newPost).then(function () {
      res.status(201)
        .json({
          message: 'Maker request persisted successfully'
        });
    });
  }).catch(function (error) {
    console.log(error);
    res.status(403).json({ message: 'An error occured' });
  });
}
// get all maker post
ReprocessController.doGetAllMaker = function (req, res) {
  Maker.findAll()
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
ReprocessController.doGetOneMaker = function (req, res) {
  Maker.findById(req.params.id)
    .then(function (maker) {
      res.status(200)
        .json(maker);
      console.log('error: false ', 'message: read single maker ~', maker);
    })
    .catch(function (error) {
      res.status(500).json(error);
    });
}

ReprocessController.update = function (req, res) {
  Maker.update(req.body, {
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
ReprocessController.removeMaker = function (req, res) {
  Maker.destroy({
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

module.exports = ReprocessController;
