const express=require("express");
require('dotenv').config();
const app=express();
const TeacherRouter=require("./routes/TeacherRouter");
const StudentRouter=require("./routes/StudentRouter");
const mongoose = require('mongoose');
const cors=require("cors");
const cookieParser = require("cookie-parser");
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
  console.log("DB connecte")
})
.catch((err)=>{
  console.log(err)
})


// app.use(bodyParser.json)
app.use(cors());
app.use(express.json()); 
app.use(cookieParser()); 
app.use("/teacher",StudentRouter);
app.use("/admin",TeacherRouter);
app.get("/",(req,res)=>{
  res.send("Server is start");
})
app.listen(process.env.PORT,()=>{
  console.log(`Server is listen to the port ${process.env.PORT}`);
})