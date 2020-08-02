const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    id: String,
    authorid: String,
    contentPost: String,
    imagePost: String,
    hearts: [{
        heartByUserId: {
          type: String,
          ref: "User"
        },
        quantity: Number
    }],
    comments: [
        {
        commentByUserId: {
          type: String,
          ref: "User"
        },
        contentComment: String
    }],
});

var Post = mongoose.model("Post", postSchema, "posts");
module.exports = Post;