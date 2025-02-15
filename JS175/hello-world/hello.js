let express = require("express");
let morgan = require("morgan");
let app = express();


app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));

app.get('/', (req, res) => {
  res.redirect("/english");
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    "currentLinkIsEnglish": "current"
  });
});

app.get("/french", (req, res) => {
  res.render("hello-word-french", {
    "currentLinkIsFrench": "current"
  });
});


app.get("/pashto", (req, res) => {
  res.render("hello-word-pashto", {
    "currentLinkIsPashto": "current"
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    "currentLinkIsSerbian": "current"
  });
});

app.listen(5000, "localhost", () => {
  console.log("Listeing to port 5000.");
});


