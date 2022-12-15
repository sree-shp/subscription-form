const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("pages/step1");
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
