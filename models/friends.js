const {orm} = require("../db");
const Datatypes = require("sequelize");

const Friend = orm.define("friends", {
    username: {
        primaryKey: true,
        type: Datatypes.TEXT,
        allowNull: false
    },
    password: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    firstName: {
        type: Datatypes.TEXT,
        allowNull: false
    },
    lastName: {
        type: Datatypes.TEXT,
        allowNull: false
    }
})

module.exports = Friend;