var express = require("express");
const Product = require("../models/product");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  var products = await Product.find({});
  res.render("products/index", { products: products , title : "Our Products"});
});

router.post("/search", async function (req, res, next) {
  var key = req.body.key;
  var products = await Product.find({ name: new RegExp(key, "i") });
  res.render("products/search", { products: products, title: "Search: " + key});
});

router.get("/category", async function (req, res, next) {
  var categories = await Product.distinct('category');
  res.render("products/category", { categories: categories, title: "Category" });
});
router.get("/category/:name", async function (req, res, next) {
  var name = req.params.name;
  var products = await Product.find({category: name});
  res.render("products/index", { products: products, title: "Category: " + name });
});

router.get("/detail/:id", async function (req, res, next) {
  var id = req.params.id;
  try {
    var products = await Product.findById(id);
  } catch (e) {
    res.redirect("/products");
  }
  res.render("products/detail", { product: products ,title : products.name});
});

router.get("/editor", async function (req, res, next) {
  var products = await Product.find();
  res.render("products/editor/index", {
    products: products,
    title: "Editor",
  });
});

router.post("/editor/find", async function (req, res, next) {
  var key = req.body.key;
  console.log(key);
  var products = await Product.find({ name: new RegExp(key, "i") });
  res.render("products/editor/index", { products: products });
});

router.get("/editor/edit/:id", async function (req, res, next) {
  var id = req.params.id;
  try{
    var products = await Product.findById(id);
  }catch(e){
    res.redirect("/products/editor")
  }
  res.render("products/editor/edit", { product: products });
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
