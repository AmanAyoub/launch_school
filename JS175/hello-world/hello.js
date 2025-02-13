let express = require("express");
let app = express();

function showEnglishView(req, res) {
  res.render("hello-world-english");
}

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"))

app.get('/', showEnglishView);

app.get("/english", showEnglishView);

app.get("/french", (req, res) => {
  res.render("hello-word-french");
});

app.get("/serbian", (req, res) => {
  res.render("hello-world-serbian");
});

app.listen(5000, "localhost", () => {
  console.log("Listeing to port 5000.");
});


