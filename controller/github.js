var db = require("../models");

module.exports = function (app) {

    // app.get("/api/Github", function (req, res) {
    //     // db.Github.find(req.query)
    //     console.log("GITHUB")
    // })
    app.get("/api/Github", function(req, res) {
        // Find all Githubs
        db.Github.find({})
          .then(function(dbGithub) {
            res.json(dbGithub);
          })
          .catch(function(err) {
            res.json(err);
          });
      });
}
