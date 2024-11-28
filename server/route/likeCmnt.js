const express = require("express");
const Comments = require("../model/LikeComments"); // Assuming correct path
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Comments.find({});
        if (!data) {
            console.log("No data found");
        }
        res.json({ data });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const {id}= req.params;
    try {
        const check_id = await Comments.find({blog_id : id});
        if (check_id.length === 0) {
            return res.status(404).json({ msg: "Comment not found" });
        }
        return res.status(200).json({ data: check_id });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }
});

router.post('/:id', async (req, res) => {
    const { blog_id, username, comment } = req.body;
    // console.log(req.body)
    try {
      //  reply handle

        // Add a new comment
        const newComment = new Comments({
           blog_id,
            username,
            comment,
        });

        const savedComment = await newComment.save();
        return res.status(201).json({ msg: "Comment added successfully", data: savedComment });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Internal Server Error", error: err.message });
    }
});

module.exports = router;