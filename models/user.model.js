const mongoose = require("mongoose");
const authSchema = new mongoose.Schema({
    id: String,
    email: String,
    name: String,
    avatar: String,
    password: String
});

var Auth = mongoose.model("Auth", authSchema, "users");
module.exports = Auth;