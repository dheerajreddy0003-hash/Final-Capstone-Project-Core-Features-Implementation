
const express=require("express"),jwt=require("jsonwebtoken"),cors=require("cors");
const app=express(); app.use(express.json()); app.use(cors());
let users=[], tasks=[];

app.post("/register",(req,res)=>{users.push(req.body);res.json({message:"Registered"});});
app.post("/login",(req,res)=>{
 const u=users.find(x=>x.email==req.body.email&&x.password==req.body.password);
 if(!u) return res.status(401).json({message:"Invalid"});
 res.json({token:jwt.sign(u,"secret")});
});

app.use((req,res,next)=>{
 try{req.user=jwt.verify(req.headers.authorization,"secret"); next();}
 catch{res.status(401).json({message:"Unauthorized"});}
});

app.get("/tasks",(req,res)=>{
 res.json(req.user.role=="admin"?tasks:tasks.filter(t=>t.email==req.user.email));
});
app.post("/tasks",(req,res)=>{
 tasks.push({...req.body,email:req.user.email});
 res.json({message:"Task added"});
});

app.listen(5000,()=>console.log("Server running"));
