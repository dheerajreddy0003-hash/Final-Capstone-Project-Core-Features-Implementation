
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const router = express.Router();

router.post("/register", async (req,res)=>{
  const {email,password,role} = req.body;
  const hash = await bcrypt.hash(password,10);
  await User.create({email,password:hash,role});
  res.json({message:"Registered"});
});

router.post("/login", async (req,res)=>{
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.status(400).json({message:"Invalid"});
  const ok = await bcrypt.compare(req.body.password,user.password);
  if(!ok) return res.status(400).json({message:"Invalid"});
  const token = jwt.sign({id:user._id,role:user.role},"secret");
  res.json({token});
});

module.exports = router;
