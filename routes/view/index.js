var router = require("express").Router();

// This route renders the homepage
router.get("/", function(req, res) {
  res.render("home");
});

// We will need a route to the index.html when the user logs out.

// This route renders the saved handledbars page
// router.get("/saved", function(req, res) {
//   res.render("saved");
// });

module.exports = router;