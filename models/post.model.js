const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    id: String,
    authorid: String,
    contentPost: String,
    imagePost: String,
    hearts: [
        {
            heartByUserId: String,
            quantity: Number,
        }
    ],
    comments: [
        {
            commentByUseriId: String,
            contentComment: String,
        }
    ]
});

var Post = mongoose.model("Post", postSchema, "posts");
module.exports = Post;