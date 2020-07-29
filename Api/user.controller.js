const User = require("../models/user.model");
const shorid = require("shortid");

const postRegister = function(req, res) {
    req.body.id = shorid.generate();
    User.create({
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: "default.jpg",              
    });
    console.log(req.body.username);
    console.log(req.body.password);
}

module.exports = {
    postRegister
};