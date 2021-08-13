const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const URL = "https://nodejs-bot.34.67.217.211.nip.io";

app.post("/", function (req, res) {
  const states = getOwnState(req);
  const moves = ["F", "T", "L", "R"];
  res.send("T");
});

let getOwnState = (req) => {
  let collections = req.body.arena.state;
  return collections[URL];
};

let moveDown = (meState) => {
  switch (meState.direction) {
    case "N":
      return "R";
    case "E":
      return "R";
    case "S":
      return "F";
    case "W":
      return "L";
    default:
      return "F";
  }
};

let getX = (state) => {
  return state.x;
};
let getY = (state) => {
  return state.y;
};
let getDirection = (state) => {
  return state.direction;
};
app.listen(process.env.PORT || 8080);
