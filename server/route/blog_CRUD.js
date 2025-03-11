const express = require("express");
const postModel = require("../model/postModel");
const router = express.Router();
const joi = require("joi");
const upload  = require("../middleware/multerMiddleware");


router.get("/", async (req, res) => {
  const result = await postModel.find({});
  try {
    if (result) {
      return res.status(200).json({ data: result });
    } else {
      return res.status(501).json({ err: "N0-data" });
    }
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await postModel.find({ _id: id }).populate("user_id");

    if (!result) {
      return res.status(400).json({ msg: "No post Found" });
    }
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(404).json({ err: error.message });
  }
});

router.post("/",upload.single("image") ,  async (req, res) => {
  // Joi schema validation
  const joiSchema = joi.object({
    title: joi.string().required(),
    content: joi.string().required(),
    user_id: joi.string().required(),
    username: joi.string().required(),
    description:joi.string().required()
    //add category:joi.string().required()
  });

  // Add the uploaded image path to the request body for validation

  const { error, value } = joiSchema.validate(req.body);
  console.log(value)
  if (error) return res.status(400).json({ err: error.details[0].message });
// console.log("image uploaded",req.file)
  try {
    const file = req.file
    if (!file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    // Construct image URL
    const imageUrl = `uploads/${file.filename}`;

    const {title, description, content, user_id, username} = req.body
    // Create a new post
    const newPost = new postModel({user_id, username, title, description, content, image:imageUrl});
    await newPost.save();

    res.json({
      success: true,
      message: "blog recorded",
      data: newPost,
    });
  } catch (error) {
    console.error("Error blog recording:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

router.put("/:id",upload.any(), async (req, res) => {
  const file = req.file
    if (!file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    // Construct image URL
    const imageUrl = `uploads/${file.filename}`;
  const { id } = req.params;
 const {user_id,username,title,description, content } = req.body;


  try {
    // Prepare fields to update
    const updateField = {};
    if (user_id !== undefined) updateField.user_id = user_id;
    if (username !== undefined) updateField.username = username;
    if (title !== undefined) updateField.title = title;
    if (description !== undefined) updateField.description = description;
    if (content !== undefined) updateField.content = content;
    if (imageUrl !== undefined) updateField.imageUrl = imageUrl;
    // Check if there are fields to update
    console.log(updateField)
    if (Object.keys(updateField).length === 0) {
      return res.status(400).json({ error: "No fields provided for update" });
    }

    // Check if the post exists
    const postExists = await postModel.findByIdAndUpdate(id ,{
      user_id,username, title,description, content, image:imageUrl
    });
    console.log(postExists.id)
    if (!postExists) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Update the post
    await postModel.updateOne({ _id: id }, { $set: updateField });

    // Fetch updated post
    const updatedPost = await postModel.findById(id);

    res.status(200).json({
      message: "Blog updated successfully!",
      data: updatedPost,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
    const checkDelete = await postModel.findOne({ _id: id });
    if (!checkDelete) {
      return res.status(404).json({ error: "Post not found" });
    }
    const deleted = await postModel.deleteOne({ _id: id });
    res.status(200).json({ msg: "Succesfully deleted", data: deleted });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
