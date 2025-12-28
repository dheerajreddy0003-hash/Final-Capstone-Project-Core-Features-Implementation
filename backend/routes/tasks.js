
const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/auth");
const router = express.Router();

router.get("/", auth, async (req,res)=>{
  const tasks = req.user.role==="admin" ? await Task.find() : await Task.find({user:req.user.id});
  res.json(tasks);
});

router.post("/", auth, async (req,res)=>{
  const task = await Task.create({title:req.body.title,user:req.user.id});
  res.json(task);
});

router.put("/:id", auth, async (req,res)=>{
  const task = await Task.findByIdAndUpdate(req.params.id,{title:req.body.title},{new:true});
  res.json(task);
});

router.delete("/:id", auth, async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

module.exports = router;
