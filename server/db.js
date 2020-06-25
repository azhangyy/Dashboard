require("dotenv").config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected");
});
