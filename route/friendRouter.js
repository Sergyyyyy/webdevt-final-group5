const router = require("express").Router();
const friendController = require("../controllers/friendController");

router.route("/friends")
    .get(friendController.getFriends)
    .post(friendController.addFriend);

module.exports = router;