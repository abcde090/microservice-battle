const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/", function (req, res) {
  console.log("test our service");
  console.log(req.body.state);
  const moves = ["F", "T", "L", "R"];
  res.send("F");
});

app.listen(process.env.PORT || 8080);
