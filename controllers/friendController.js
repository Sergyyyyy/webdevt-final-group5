
const FriendModel = require("../models/friends");

exports.getFriends = async (req, res) => {
    const friends = await FriendModel.findAndCountAll();
    res.json({ result: friends});
}

exports.addFriend = async (req, res) => {
    const newFriend = await FriendModel.create(req.body);
    res.status(201).json({
        message: "Friend added successfully!",
        result: newFriend
    });
}

exports.getFriendsByUsername = async (req, res) => {
    const friend = await FriendModel.findByPk(req.params.username);
    if (friend) res.json({ result: friend});
    else res.status(404).send({ message: "ERROR: Status 404!"})
}

exports.updateFriendByUsername = async (req, res) => {
    const isFriendUpdated = await FriendModel.update(req.body, {
        where: {
            username: req.params.username
        }
    });
    const updatedFriend = await FriendModel.findByPk(req.params.username);
    res.status(202).json({
        isFriendUpdated: Boolean(isFriendUpdated[0]),
        result: updatedFriend
    });
}

exports.deleteFriendByUsername = async (req, res) => {
    const isFriendDeleted = await FriendModel.destroy({
        where: {
            username: req.params.username
        }
    });
    if (!isFriendDeleted) throw new Error("Friend not found!");

    res.status(204).send();
}