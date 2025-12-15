const { Sequelize } = require("sequelize");

const orm = new Sequelize({
    dialect: "sqlite",
    host: "./FriendsDB.sqlite"
});

const connectDB = async () => {
    orm.sync();
    await orm.authenticate();
    console.log("Connected to DB...")
}

module.exports = { orm, connectDB }