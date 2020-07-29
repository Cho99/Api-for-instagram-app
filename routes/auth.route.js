var express = require("express");
var router = express.Router();

const { postRegister, postLogin } = require("../Api/user.controller");

router.route("/register")
    .post(postRegister);

router.route("/login")
    .post(postLogin);

module.exports = router;