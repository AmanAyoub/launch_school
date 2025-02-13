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
  res.render("hello-world-english");
});

app.get("/french", (req, res) => {
  res.render("hello-word-french");
});


app.get("/pashto", (req, res) => {
  res.render("hello-word-pashto");
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
});

app.listen(4000, "localhost", () => {
  console.log("Listeing to port 4000.");
});


