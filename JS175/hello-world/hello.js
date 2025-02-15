let express = require("express");
let morgan = require("morgan");
let app = express();
const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US flag",
    title: "Go to US english site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  }, 
  {
    path: "/pashto",
    flag: "flag-of-Afghanistan.png",
    alt: "د افغانستان بیرغ",
    title: "د افغانستان پښتو سایټ ته لاړ شئ",
  }
];

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
  pashto: "ps-AF"
};


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

app.get("/:language", (req, res, next) => {
  let language = req.params.language;
  if (! LANGUAGE_CODES[language]) {
    next(new Error(`Language not supported: ${language}`));
  } else {
    res.render(`hello-world-${language}`, {
      "countries": COUNTRY_DATA,
      "currentPath": req.path,
      "language": LANGUAGE_CODES[language]
    });
  }

});

app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
})

app.listen(5000, "localhost", () => {
  console.log("Listeing to port 5000.");
});
