require("dotenv").config();

const mongoose = require("mongoose");
const mongoURI = process.env.MONGO_URI;
mongoose.connect(
  "mongodb+srv://azhangyy:Classof2023!@cluster0-lfmt3.mongodb.net/courseData?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.connection.on("connected", function () {
  console.log("Mongoose connected");
});
