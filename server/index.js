const settings = require("./config").default;
const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose");

mongoose.connect(settings.MONGODB_CONN, { useNewUrlParser: true, useUnifiedTopology: true  }).then(
  () => {
    console.log("Mongo database connection is successful");
  },
  err => {
    console.log("Error when connecting to the mongo database", err);
  }
);

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());
app.use(require("./controllers"));

var port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
