const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("app is listen on 3000 port");
});

app.use("/test", (req, res) => {
  res.send("hello for test request");
});

app.use("/", (req, res) => {
  res.send("hello from then server");
});
