
const FriendModel = require("../models/friends");

exports.getFriends = async (req, res) => {
    const friends = await FriendModel.findAndCountAll();
    res.json({ result: students});
}

exports.addFriend = async (req, res) => {
    const newFriend = await FriendModel.create(req.body);
    res.status(201).json({
        message: "Friend added successfully!",
        result: newFriend
    });
}