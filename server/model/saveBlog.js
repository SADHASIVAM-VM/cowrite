const mongoose = require("mongoose")
const SaveSchema = new mongoose.Schema({
    saveBlogId:{type:String, ref:"blogs"},
    user_id:String,
    star:{type:Boolean, default:"false"}
})

const SaveModel = mongoose.model("saveBlog", SaveSchema);

module.exports = SaveModel;