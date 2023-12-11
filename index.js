const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json();
});

app.post("/tasks/add", (res, req) => {
  const { text } = req.body;
  const newTask = { id: tasks.length + 1, text, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

app.listen(port, () => {
  console.log(`The server is listening at ${port}`);
});
