const mongoose = require("mongoose");


const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  category: {
    type: String,
  },
  p_img: {
    type: String,
    ref: "Image",
    required: [true, "Image is required"],
  },
  sec_img: {
    type: String,
    ref: "Image",
  },
});

module.exports = {
  Post: mongoose.model("Post", postSchema)
};
