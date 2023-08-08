const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

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


const imageSchema = new mongoose.Schema({
  data: Buffer, 
  contentType: String, 
});

module.exports = {
  Post: mongoose.model("Post", postSchema),
  Image: mongoose.model("Image", imageSchema),
};
