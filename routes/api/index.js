var router = require("express").Router();
var subscriptionRoutes = require("./subsciption");


router.use("/subscription", subscriptionRoutes);


module.exports = router;
