import express from 'express';
import mongoose from 'mongoose';
import {User} from './Models/User.models.js';
import cors from 'cors';
import 'dotenv/config';

const app=express();
app.use(express.json())
app.use(cors())
app.post('/',async (req,res)=>{
  const {email,password}=req.body;
  // res.send(req.body).json()
  const result= await User.find({email})
  if(result.length==0){
  res.send("User Does not Exist");
  }
  else{
    if(result[0].password===password){
    res.send("user exits").json();
    }
    else {
      res.send("Password Incorrect").json();
    }
  }
  // console.log(result[0].password);
  
  // console.log(email+" "+password)
})
app.post('/sign',async(req,res)=>{
  const {email,password}=req.body;
  const result= await User.create({email:email,password:password});
 
  res.send("user is created").json()
  
})
app.listen(process.env.PORT,()=>{
    console.log("listening to port")
})
 await mongoose.connect(process.env.MONGODB_URL).then(()=>console.log('mongoDB Connected')).catch((e)=>{
    console.log(e);
  })

console.log(User)