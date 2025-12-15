const router = require("express").Router();
const friendController = require("../controllers/friendController");

router.route("/friends")
    .get(friendController.getFriends)
    .post(friendController.addFriend);

router.route("/friends/:id")
    .get(friendController.getFriendsById)
    .put(friendController.updateFriendById)
    .delete(friendController.deleteFriendById)

module.exports = router;