var mongoose = require("mongoose");

var schema = mongoose.Schema({
  "name": {
    type: String,
    required: true,
    validate: {
      validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
      message: "Username can only contain letters, numbers, and underscores.",
    },
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
