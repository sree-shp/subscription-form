const express = require("express");
const { json } = require("body-parser");
const app = express();

var plantype = "monthly";
var username = "";
var useremail = "";
var phonenumber = "";

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("pages/step1");
});

app.post("/", function (req, res) {
  username = req.body.name;
  useremail = req.body.email;
  phonenumber = req.body.phonenumber;
  res.redirect("step2");
});

app.get("/step2", function (req, res) {
  res.render("pages/step2");
});

app.post("/step2", function (req, res) {
  if (req.body.plantype === "yearly") {
    plantype = req.body.plantype;
  }

  console.log(req.body);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
