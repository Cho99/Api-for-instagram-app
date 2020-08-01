const Post = require("../models/post.model");
const User = require("../models/user.model");
const shorid = require("shortid");

const getPost = async function(req, res) {
    await Post.find().then(
        function(post) {
            res.json(post)
        }
    );
}

const addHeart = async function(req, res) {
    var data_user = req.body.user;
    var user = JSON.parse(data_user);
    console.log(user.username);
    let heartByUserId = user.id;
    let postId = req.body.id;
    console.log(postId)
    let post = await Post.findOne({id: postId});
    let user_heart = post.hearts.find(
        item => item.heartByUserId === heartByUserId
    )
    if(user_heart) {
        user_heart.quantity +=1;
        console.log(user_heart);
        await post.save();
    } else {
        await Post.findByIdAndUpdate({ id : postId }, {
            $push: { hearts : { heartByUserId, quantity : 1 } }
        });
    }
}

module.exports = {
    getPost,
    addHeart
}