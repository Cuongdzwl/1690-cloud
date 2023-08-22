var express = require('express');
const Product = require('../models/product');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
    var products = await Product.find().sort({createdAt : 1}).limit(3);
  res.render("index", {title : "ATN SHOP", products : products});
  
});

module.exports = router;
