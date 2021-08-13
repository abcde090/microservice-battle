const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const URL = "https://nodejs-bot.34.67.217.211.nip.io";

app.post("/", function (req, res) {
  console.log("test our own service link", getOwnState(req));
  const moves = ["F", "T", "L", "R"];
  res.send("F");
});

let getOwnState = (req) => {
  let collections = req.body.arena.state;
  return collections[URL];
};

app.listen(process.env.PORT || 8080);
