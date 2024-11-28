const mongoose = require("mongoose");

// Define the Reply schema
const ReplySchema = new mongoose.Schema({
  parent_comment_id: { type:String },
  reply_username: { type: String,},
  reply_comment: { type: String, },
  postAt: { type: Date, default: Date.now },
});

// Define the Comment schema
const CommentSchema = new mongoose.Schema({
  blog_id: { type:String },
  username: { type: String},
  likes: { type: Number, default: 0 },
  comment: { type: String},
  postAt: { type: Date, default: Date.now },
  replies: [ReplySchema], // Embed replies for simplicity
});

// Export the models
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
