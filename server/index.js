const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./config/passportConfig");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;
const mongodb = process.env.MONGODB;


mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("Connected to DB"))
  .catch((err) => console.log(err));

if (!fs.existsSync("./public")) {
  fs.mkdirSync("./public");
} else if (!fs.existsSync("./public/resume")) {
  fs.mkdirSync("./public/resume");
} else if (!fs.existsSync("./public/profile")) {
  fs.mkdirSync("./public/profile");
}


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

app.get("/", (req, res) => {
  res.send("Hello!!!");
});
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/apiRoutes"));
app.use("/upload", require("./routes/uploadRoutes"));
app.use("/host", require("./routes/downloadRoutes"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
