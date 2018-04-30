var db = require("../models");

module.exports = function (app) {

    // app.get("/", function (req, res) {
    //     res.sendFile(path.join(__dirname, "/public/index.html"));
    // });

    app.post("/User/", function (req, res) {
        db.User.create(req.body)
            .then(function (dbUser) {
              return db.User.findOneAndUpdate({ _id: req.params.id }, { subscription: dbSubscription._id }, { unique: true })
            })
            .catch(function (err) {
                console.log(err.message);
            });
    })
}