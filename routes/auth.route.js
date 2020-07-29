var express = require("express");
var router = express.Router();

const { postRegister } = require("../Api/user.controller");

router.route("/register")
    .post(postRegister);

module.exports = router;