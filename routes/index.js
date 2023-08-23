var express = require('express');
const Product = require('../models/product');
const Subscriber = require('../models/subscriber');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    var products = await Product.find().sort({createdAt : -1}).limit(6);
    var number = await Subscriber.countDocuments();
  res.render("index", {title : "ATN SHOP", products : products, number : number});
});

module.exports = router;
