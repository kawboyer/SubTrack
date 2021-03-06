var db = require("../models");

module.exports = function (app) {

    app.get("/subscriptions", function(req, res){
        db.Subscription.find(req.query)
        
    })

    //Find the subs of specific ID
    app.get("/subscriptions/:id", function (req, res) {
        // console.log("In SUbs")
        db.User.findOne({ "FbId": req.params.id })
            .populate("subscriptions")
            .then(function (user) {
                res.json(user.subscriptions);
            })

            .catch(function (err) {
                res.json(err);
            });
    });

    app.post("/subscriptions/:id", function (req, res) {
        db.User.findOne({ "FbId": req.params.id })
            .then(function (user) {
                db.Subscription.create(
                    { startdate: req.body.startdate },
                    { nickname: req.body.nickname },
                    { price: req.body.price },
                    { frequency: req.body.frequency },
                    { reminder: req.body.reminder },
                    { text: req.body.text }, function (err, data) {
                        if (err) return handleError(err);
                    }
                )
            })
    })
// ========================


// module.exports = {
//     // Find one subscription
//     find: function (req, res) {
//         db.Subscription.find({ _userId: req.params.id }).then(function (dbSubscription) {
//             res.json(dbSubscription);
//         });
//     },
//     // Create a new subscription
//     create: function (req, res) {
//         db.Subscription.create(req.body).then(function (dbSubscription) {
//             res.json(dbSubscription);
//         });
//     },
//     // Delete a Subscription with a given id
//     delete: function (req, res) {
//         db.Subscription.remove({ _id: req.params.id }).then(function (dbSubscription) {
//             res.json(dbSubscription);
//         });
//     },
//     // Update the specified headline
//     update: function (req, res) {
//         db.Subscription.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function (dbSubscription) {
//             res.json(dbSubscription);
//         });
//     }
 };
