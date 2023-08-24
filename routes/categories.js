var express = require("express");
const Category = require("../models/category");
var router = express.Router();

/* GET home page. */
router.post("/add", async function (req, res, next) {
  var category = req.body;
  await Category.create(category);
  res.redirect("/products/editor/");
});

module.exports = router;
