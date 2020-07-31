const Post = require("../models/post.model");
const shorid = require("shortid");

const getPost = async function(req, res) {
    await Post.find().then(
        function(post) {
            res.json(post)
            console(post)
        }
    );
}

module.exports = {
    getPost
}