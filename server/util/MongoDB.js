const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "config", ".env") });
const db = () => {
  const mongoUri = process.env.MONGO_DB_URL;
  try {
    if (!mongoUri) {
      console.log("enter MONGO URL");
    }
    mongoose
      .connect(mongoUri)
      .then(() => console.log("DB Connected"))
      .catch(() => console.log("Db not Connected"));
  } catch (err) {
    console.log("DB ERR");
  }
};

module.exports = db;
