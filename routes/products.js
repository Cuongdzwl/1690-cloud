var express = require("express");
const Product = require("../models/product");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  var products = await Product.find();
  res.render("products/index", { products: products });
});

router.post("/search", async function (req, res, next) {
  var key = req.body.key;
  var products = await Product.find({ name: new RegExp(key, "i") });
  res.render("products/index", { products: products });
});

router.get("/category/:name", async function (req, res, next) {
  var category = req.params.name;
  var products = await Product.find();
  res.render("products/category ", { products: products });
});

router.get("/detail/:id", async function (req, res, next) {
  var id = req.params.id;
  var products = await Product.findById(id);
  res.render("products/detail ", { products: products });
});

router.get("/editor", async function (req, res, next) {
  var products = await Product.find();
  res.render("products/editor/index", { products: products });
});

router.post("/editor/find", async function (req, res, next) {
  var key = req.body.key;
  console.log(key);
  var products = await Product.find({ name: new RegExp(key, "i") });
  res.render("products/editor/index", { products: products });
});

router.get("/editor/edit/:id", async function (req, res, next) {
  var products = await Product.findById();
  res.render("products/editor/edit", { products: products });
});

router.post("/edit/:id", async function (req, res, next) {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/products/editor/");
});
router.post("/delete/:id", async function (req, res, next) {
  await Product.findByIdAndDelete(req.params.id);
  res.redirect("/products/editor/");
});
router.post("/add", async function (req, res, next) {
  var product = req.body;
  await Product.create(product);
  res.redirect("/products/editor/");
});

module.exports = router;
