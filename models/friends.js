const {orm} = require("../db");
const Datatypes = require("sequelize");

const Friend = orm.define("friends", {
    username: {
        primaryKey: true,
        type: Datatypes.TEXT
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

/*
    username (PK, text)
  password (text, not null)
  firstName (text, not null)
  lastName (text, not null)
*/