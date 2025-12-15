
const FriendModel = require("../models/friends");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const safeAttributes = [
    "username",
    "password",
    "firstName",
    "lastName"
]

exports.registerFriend = async (req, res) => {
    const { password, ...safeProps } = req.body;
    // { password, ...safeProps } is a destructor

    const newFriend = await FriendModel.build(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    newFriend.password = hashedPassword;

    await newFriend.save();

    res.status(201).json({
        result: safeProps
    });
}

exports.loginFriend = async (req, res) => {
    const { username, password } = req.body;

    const friend = await FriendModel.findOne({ username });
    if (!friend)
        res.status(400).json({
            "message": "friend not found!"
        });

    const isMatch = await bcrypt.compare(password, friend.password);
    if (!isMatch)
        res.status(400).json({
            "message": "invalid password"
        });

    const token = jwt.sign({username: friend.username}, "webdevt", {expiresIn: "30m"});

    res.json({ token });
}



// exports.getFriends = async (req, res) => {
//     const friends = await FriendModel.findAndCountAll();
//     res.json({ result: friends});
// }

// exports.addFriend = async (req, res) => {
//     const newFriend = await FriendModel.create(req.body);
//     res.status(201).json({
//         message: "Friend added successfully!",
//         result: newFriend
//     });
// }

// exports.getFriendsByUsername = async (req, res) => {
//     const friend = await FriendModel.findByPk(req.params.username);
//     if (friend) res.json({ result: friend});
//     else res.status(404).send({ message: "ERROR: Status 404!"})
// }

// exports.updateFriendByUsername = async (req, res) => {
//     const isFriendUpdated = await FriendModel.update(req.body, {
//         where: {
//             username: req.params.username
//         }
//     });
//     const updatedFriend = await FriendModel.findByPk(req.params.username);
//     res.status(202).json({
//         isFriendUpdated: Boolean(isFriendUpdated[0]),
//         result: updatedFriend
//     });
// }

// exports.deleteFriendByUsername = async (req, res) => {
//     const isFriendDeleted = await FriendModel.destroy({
//         where: {
//             username: req.params.username
//         }
//     });
//     if (!isFriendDeleted) throw new Error("Friend not found!");

//     res.status(204).send();
// }