const express = require("express");
const multer = require("multer");
const {blogUpload, getAllBlogs, getBlog, updateBlog, deleteBlog} = require("../Controller/CRUDblogs");

const router = express.Router();

//multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

//post
router.post("/upload", upload.fields([{ name: "p_img" }, { name: "sec_img" }]), blogUpload);
//getall
router.get("/retrieve", getAllBlogs);
//getbyid
router.get("/post/:id", getBlog);
//update
router.put("/update/:id", upload.fields([{ name: "p_img" }]), updateBlog);
//delete
router.delete("/delete/:id", deleteBlog);

module.exports = router;
