const mongoose = require("mongoose");
require("dotenv").config();
const MONGODBURI = process.env.MONGODBURI;
mongoose.connect(MONGODBURI);
const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB");
});
