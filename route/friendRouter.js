const router = require("express").Router();
const friendController = require("../controllers/friendController");
const authMiddleware = require("../middleware/studentMiddleware");

router.route("/friends/register")
    .post(friendController.registerFriend);

router.route("/friends/login")
    .post(friendController.loginFriend);

router.route("/friends/view-profile")
    .get(authMiddleware, friendController.viewProfile);

router.route("/friends/update-profile")
    .put(authMiddleware, friendController.updateProfile);

module.exports = router;

// router.route("/friends")
//     .get(friendController.getFriends)
//     .post(friendController.addFriend);

// router.route("/friends/:username")
//     .get(friendController.getFriendsByUsername)
//     .put(friendController.updateFriendByUsername)
//     .delete(friendController.deleteFriendByUsername)