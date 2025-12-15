const router = require("express").Router();
const friendController = require("../controllers/friendController");

router.route("/friends/register")
    .post(friendController.registerFriend);

router.route("/friends/login")
    .post(friendController.loginFriend);

// router.route("/friends")
//     .get(friendController.getFriends)
//     .post(friendController.addFriend);

// router.route("/friends/:username")
//     .get(friendController.getFriendsByUsername)
//     .put(friendController.updateFriendByUsername)
//     .delete(friendController.deleteFriendByUsername)

module.exports = router;