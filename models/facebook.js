const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FacebookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: 15,
    },
    message: {
      type: String,
      required: true,
      maxLength: 40,
    },
  },
  { timestamps: true }
);

const FaceBook = mongoose.model("Facebook", FacebookSchema);

module.exports = {
  FaceBook,
};
