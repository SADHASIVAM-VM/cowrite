const mongoose = require("mongoose")

const IIPsSchema = new mongoose.Schema({
    user_name :String,
    IP:String
})

const IIPsModel = mongoose.model("ips",IIPsSchema);

module.exports = IIPsModel;