// var db =  require("../models");

// module.exports = function(app){

// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// }
// ========================
var db = require("../models");

module.exports = {
  // Find one subscription
  find: function(req, res) {
    db.Subscription.find({ _userId: req.params.id }).then(function(dbSubscription) {
      res.json(dbSubscription);
    });
  },
  // Create a new subscription
  create: function(req, res) {
    db.Subscription.create(req.body).then(function(dbSubscription) {
      res.json(dbSubscription);
    });
  },
  // Delete a Subscription with a given id
  delete: function(req, res) {
    db.Subscription.remove({ _id: req.params.id }).then(function(dbSubscription) {
      res.json(dbSubscription);
    });
  }
};
