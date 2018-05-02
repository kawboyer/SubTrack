var db = require("../models");

module.exports = function (app) {

    // app.get("/", function (req, res) {
    //     res.sendFile(path.join(__dirname, "/public/index.html"));
    // });

    // app.get("/notes", function(req, res) {
    //     // Find all Notes
    //     db.Note.find({})
    //       .then(function(dbNote) {
    //         res.json(dbNote);
    //       })
    //       .catch(function(err) {
    //         res.json(err);
    //       });
    //   });
    app.get("/api/User", function(req, res){
        db.User.find(req.query)
    })
    app.post("/User/new", function (req, res) {

        db.User.findOne({"FbId": req.body.FbId})
            .then(function (dbUser) {

                if (!dbUser) {

                    db.User.create(req.body)
                        .then(function (dbUser) {
                            // console.log(res.json(req.body.FbId))
                            // return db.User.findOneAndUpdate({ _id: req.params.id }, { subscription: dbSubscription._id }, { unique: true })
                            res.json(dbUser)
                        })
                        .catch(function (err) {
                            console.log(err.message);
                            res.json({ message: "There was an error creating the user." })
                        });
                }
                else {
                    res.end();
                }
            })
    })
}