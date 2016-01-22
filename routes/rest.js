var express = require('express');
var router = express.Router();
var userServiceSoap = require('../services/userServiceSoap.js');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user/id', function(req, res, next) {
	var request = req.query.email;
    userServiceSoap.getUserId(request, next, function(response) {
        res.send(response);
    });

});

router.get('/user/data', function(req, res, next) {

    userServiceSoap.getUserData(req.query.user_id, next, function(response) {
        res.send(response);
    });
});

module.exports = router;