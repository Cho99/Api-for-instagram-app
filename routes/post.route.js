var express = require("express");
var router = express.Router();

const {getPost, addHeart} = require("../Api/post.controller");

router.route("/")
    .get(getPost);

router.route("/heart")
    .post(addHeart);

module.exports = router;
