const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("pages/step1");
});

app.post("/", function (req, res) {
  res.redirect("step2");
});

app.get("/step2", function (req, res) {
  res.render("pages/step2");
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
