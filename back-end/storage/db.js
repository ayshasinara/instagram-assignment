const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
//Set up default mongoose connection
const mongoDB = "mongodb://127.0.0.1:27017/instagram";
mongoose.connect(
  mongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("hello");
  }
);

//Get the default connection
module.exports = mongoose.connection;
