const User = require("../models/user.model");
const shortid = require("shortid");
const jwt = require ("jsonwebtoken");

const postRegister = async function(req, res) {
    req.body.id = shortid.generate();
    await User.create({
      id: req.body.id,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: "default.jpg",              
    });
    console.log(req.body.username);
    console.log(req.body.password);
}

const postLogin = async function(req, res) {
  var user = await User.findOne({
    email: req.body.email
  });
  if(!user) {
    return res.status(400).json({ error: "User not found" });
  }
  const data = {
    email: req.body.email,
    password: req.body.password
  } 

  if(user.password !== req.body.password) {
    return res.status(400).json({ error: "Wrong password" });
  }
  console.log("Login success");
  return jwt.sign({ user: data }, "123", { expiresIn: "30s" }, function(err, token){
    res.json({ token, user });
    console.log(res.json({ token, user })); 
   })
  
  if(err) {
    console.log(err)
  }
}

module.exports = {
    postRegister,
    postLogin
};