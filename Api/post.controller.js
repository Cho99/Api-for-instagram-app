const Post = require("../models/post.model");
const User = require("../models/user.model");
const shorid = require("shortid");
var cloudinary = require('cloudinary').v2
require('dotenv').config();
cloudinary.config({
  cloud_name: 'dog99',
  api_key: "594777246617848",
  api_secret: "IQyz0IfNXdh_hy9lAgtcu2vrZOY" 
});

const getPost = async function(req, res) {
    await Post.find().then(
        function(post) {
            res.json(post)
        }
    );
}

const postAp = async function(req, res) {
    console.log(req.file)
    const file= req.file.path;
    console.log(req.body)
    var data_user = req.body.user;
    var user = JSON.parse(data_user)
  
    const path = await cloudinary.uploader
      .upload(file)
      .then(result => result.url)
      .catch(error => console.log("erro:::>", error));
    Post.create({
      id:shorid.generate(),
      authorid:user.id,
      contentPost:req.body.contentPost,
      imagePost: path
    });
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  return res.json({a:req.body,b:req.file})
};
  

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
        await Post.findOneAndUpdate({ id : postId }, {
            $push: { hearts : { heartByUserId, quantity : 1 } }
        });
    }
}

module.exports = {
    getPost,
    postAp,
    addHeart
}