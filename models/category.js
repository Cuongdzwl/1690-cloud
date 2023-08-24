const { default: mongoose } = require("mongoose");

var schema = mongoose.Schema({
    "categoryName" : {
        type: String,
        required : true,
        unique : true
    }
})

var Category = mongoose.model("category", schema , "categories");

module.exports = Category;