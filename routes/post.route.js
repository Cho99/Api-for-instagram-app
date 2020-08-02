var express = require("express");
var router = express.Router();

const {postAp, getPost, addHeart} = require("../Api/post.controller");
const {
    uploadMulter,
  } = require('../models/multer');

router.route("/")
    .get(getPost);

router.post("/create", uploadMulter.single('imagePost') ,postAp);

router.route("/heart")
    .post(addHeart);

module.exports = router;
