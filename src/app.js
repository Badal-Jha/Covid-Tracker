//path core module
const path = require("path");
const hbs = require("hbs");
const request = require("request");
const express = require("express");

const port = process.env.PORT || 3000;
const app = express();

//set path to public
const publicDirectoryPath = path.join(__dirname, "../public");
//path to views
const viewPath = path.join(__dirname, "../templates/views");
//path to template
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");

//set template as new folder for hbs
app.set("views", viewPath);

//register partials
hbs.registerPartials(partialsPath);
//serve static file
app.use(express.static(publicDirectoryPath));

//create route for index.html
app.get("/", (req, res) => {
  res.render("index");
});

//create route for about
app.get("/statewise", (req, res) => {
  res.render("statewise");
});

app.get("/about", (req, res) => {
  res.render("about");
});
//send all data to covid-data route
app.get("/covid-data", function (req, res, next) {
  request({
    uri: "https://api.covid19india.org/v4/min/data.min.json",
  }).pipe(res);
});

//listen to server
app.listen(port, () => {
  console.log("server starts!");
});
