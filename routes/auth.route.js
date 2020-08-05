var express = require("express");
var router = express.Router();

const { postRegister, postLogin , getLogin} = require("../Api/user.controller");

router.route("/register")
    .post(postRegister);

router.route("/login")
    .post(postLogin)
    .get(getLogin);

module.exports = router;