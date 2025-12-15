
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

exports.getFriendsById = async (res, req) => {
    const friend = await FriendModel.findByPk(req.params.username);
    if (friend) res.json({ result: friend});
    else res.status(404).send({ message: "ERROR: Status 404!"})
}

exports.updateFriendById = async (req, res) => {
    const isFriendUpdated = await FriendModel.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    const updatedFriend = await FriendModel.findByPk(req.params.id);
    res.status(202).json({
        isFriendUpdated: Boolean(isFriendUpdated[0]),
        result: updatedFriend
    });
}

exports.deleteFriendById = async (req, res) => {
    const isFriendDeleted = await FriendModel.destroy({
        where: {
            id: req.params.id
        }
    });
    if (!isFriendDeleted) throw new Error("Friend not found!");

    res.status(204).send();
}