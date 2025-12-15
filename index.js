const express = require("express");
const { connectDB } = require("./db");
const friendRouter = require("./route/friendRouter")

const app = express();
app.use(express.json());

connectDB()
app.use("./v1/", friendRouter);

app.listen(3000, () => {
    console.log("FriendAPI is running on port 3000....");
})