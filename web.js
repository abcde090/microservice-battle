const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb" }));
const URL = "https://nodejs-bot.34.67.217.211.nip.io";

app.post("/", function (req, res) {
  const states = getOwnState(req);
  const moves = ["T"];
  let x = getX(states);
  let y = getY(states);
  let action;
  if (y > 4) {
    action = moveUp(states);
  } else if (x > 5) {
    action = moveLeft(states);
  } else if (x < 5) {
    action = moveRight(states);
  } else if (y < 4) {
    action = moveDown(states);
  }
  moves.push(action);
  res.send(moves[Math.floor(Math.random() * moves.length)]);
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

let moveUp = (meState) => {
  switch (meState.direction) {
    case "N":
      return "F";
    case "E":
      return "L";
    case "S":
      return "R";
    case "W":
      return "R";
    default:
      return "F";
  }
};

let moveRight = (meState) => {
  switch (meState.direction) {
    case "N":
      return "R";
    case "E":
      return "F";
    case "S":
      return "L";
    case "W":
      return "R";
    default:
      return "F";
  }
};

let moveLeft = (meState) => {
  switch (meState.direction) {
    case "N":
      return "L";
    case "E":
      return "R";
    case "S":
      return "R";
    case "W":
      return "F";
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
