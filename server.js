var express = require("express");
var bodyParser = require("body-parser");
var request = require("request");
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");


// Require all models!!
//commented out until we actually have models
var db = require("./models");

var PORT = process.env.PORT || 3001;

//use express
var app = express();

//Dont think we need this right now but its here for later!
app.use(logger("dev"));

//use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

//Get those routes when we have them!
// require("./controller/user-routes.js")(app);
// require("./controller/subscription-routes.js")(app);
// require("./controller/html-routes.js")(app);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/subtracked";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

//move to routes eventually
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });
const usercontroller= require("./controller/user-routes");
usercontroller(app);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
  