var express = require("express");
var router = express.Router();

const {getPost} = require("../Api/post.controller");

router.route("/")
    .get(getPost);

module.exports = router;
