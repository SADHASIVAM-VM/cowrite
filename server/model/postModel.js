const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user_id:String,
    username:String,
    title:String,
    description:String,
    content:Object,
    image:String,
    category:String,
    postAt:{type:Date, default:Date.now}
})
const postmodel = mongoose.model("blogs", postSchema)

module.exports = postmodel