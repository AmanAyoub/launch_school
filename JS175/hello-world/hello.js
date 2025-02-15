let express = require("express");
let morgan = require("morgan");
let app = express();


app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(morgan("common"));
app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : ""
}


app.get('/', (req, res) => {
  res.redirect("/english");
});

app.get("/english", (req, res) => {
  res.render("hello-world-english", {
    "currentPath": req.path,
    "language": "en-US"
  });
});

app.get("/french", (req, res) => {
  res.render("hello-word-french", {
    "currentPath": req.path,
    "language": "fr-FR"
  });
});


app.get("/pashto", (req, res) => {
  res.render("hello-word-pashto", {
    "currentPath": req.path,
    "language": "ps-AF"
  });
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian", {
    "currentPath": req.path,
    "language": "sr-Cyrl-rs"
  });
});

app.listen(5000, "localhost", () => {
  console.log("Listeing to port 5000.");
});
