const express = require("express");

const app = express();

app.listen(3000, () => {
  console.log("app is listen on 3000 port");
});

app.use(
  "/user",
  (req, res, next) => {
    console.log("RH1");
    next();
    res.send("response 1");
  },
  (req, res) => {
    console.log("rh 2");
    res.send("response 2");
  }
);
