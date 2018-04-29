var router = require("express").Router();
var subscriptionController = require("../../controllers/subscription");

router.get("/:id", subscriptionController.find);
router.post("/", subscriptionController.create);
router.delete("/:id", subscriptionController.delete);

module.exports = router;