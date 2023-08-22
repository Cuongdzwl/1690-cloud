var mongoose = require("mongoose");

var schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value) =>
          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value),
        message: "Invalid email format",
      },
    },
  },
  {
    timestamp: true,
  }
);

var Subscriber = mongoose.model("sub", schema, "subscribers");
module.exports = Subscriber;
