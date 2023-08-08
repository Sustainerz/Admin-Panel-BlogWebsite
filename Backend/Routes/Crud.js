const express = require("express");
const multer = require("multer");
const mongoURI = 'mongodb://127.0.0.1:27017/Test';
//const { GridFsStorage } = require('multer-gridfs-storage');
const { Post, Image } = require("../Models/postBlogs");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/upload", upload.fields([{ name: "p_img" }, { name: "sec_img" }]), async function (req, res) {
  console.log("Image uploaded");
console.log(req.files);
  const { title, description } = req.body;
  const p_img = req.files["p_img"][0].filename;
  const sec_img = req.files["sec_img"][0].filename;

  const data = Post.create({
    title: title,
    description: description,
    p_img: p_img,
    sec_img: sec_img,
  });

  try {
    res.json("Data inserted Successfully.");
  } catch (error) {
    res.status(500).json({ error });
  }
});

/*router.post("/post", async function (req, res) {
  
  if (!req.body.title || !req.body.description || !req.body.p_img || !req.body.sec_img) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const data = Post.create({
    title: req.body.title,
    description: req.body.description,
    p_img: req.body.p_img,
    sec_img: req.body.sec_img,
  });

  try {
    res.json("Data inserted Successfully.");
  } catch (error) {
    res.status(500).json({ error });
  }
});*/

router.get("/retrieve", async function (req, res) {
  
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }

});

router.get("/post/:id", async function (req, res) {
  
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.put("/update/:id", upload.fields([{ name: "p_img" }]), async (req, res) => {
  console.log("dsad");
  try {
    const postId = req.params.id;
    console.log("hello");    
    const { title, description, category } = req.body;
    console.log("hello");    
    const p_img = req.files["p_img"][0].filename;
    console.log("hello");    
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title: title,
        description: description,
        category: category,
        p_img: p_img,
      
      },
      { new: true } // Return the updated post
    );

    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
});

router.delete("/delete/:id", async function (req, res) {
console.log("asdfgh");
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    
    res.status(200).json ({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
