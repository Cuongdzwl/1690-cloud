var express = require('express');
const Subscriber = require('../models/subscriber');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
});

router.post("/sub", function (req, res, next) {
  var subscriber = req.body;
  Subscriber.create(subscriber);
  res.redirect("/");
});

module.exports = router;
