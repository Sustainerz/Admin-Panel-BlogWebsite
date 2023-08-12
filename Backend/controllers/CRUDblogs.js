const { Post } = require("../Models/postBlogs");

//insert
exports.blogUpload =  async function (req, res) {
  console.log("Data inserted Successfully.");
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
}


//retrieveAll
exports.getAllBlogs = async function (req, res) {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error });
  }
}


//Get by ID
exports.getBlog =  async function (req, res) {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
}


//Update
exports.updateBlog = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, description, category } = req.body;
    const p_img = req.files["p_img"][0].filename;
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        title: title,
        description: description,
        category: category,
        p_img: p_img,
      },
      {
         new: true
      }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(updatedPost);
  } 
  catch (error) {
    res.status(500).json({ error: "Error updating post" });
  }
}


//Delete
exports.deleteBlog = async function (req, res) {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }    
    res.status(200).json ({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
}

