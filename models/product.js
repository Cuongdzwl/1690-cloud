var mongoose = require("mongoose");

var schema = mongoose.Schema({
  "name": {
    type: String,
    required: true,
  },
  "price": {
    type: Number,
    require: true,
  },
  "image": {
    type: String,
    required : true
  },
  "category": {
    type: String,
    required : true
  },
  "quantity": {
    type:Number,
    required : true
  },
  "description" :{
    type: String,
    required: true
  }
},{
  timestamps: true 
});

const Product = mongoose.model("products", schema, "products");

module.exports = Product;
