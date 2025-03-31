var Router = require('router')
const Teacher=require("../models/TeacherSchema");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var router = Router()

router.post("/addTeacher",async(req,res)=>{
  const {name,email,password}=req.body;
  try {
    const findemail = await Teacher.findOne({ email });
    if(findemail){
      throw Error("user already exist")
    }
    const hash = bcrypt.hashSync(password, 10);
    const teacher =new Teacher({name,email,password:hash});
    await teacher.save();
    res.status(200).json({ message: "Data saved successfully" }); 
  } catch (error) {
    res.status(500).json({message: "Error occurred",error: error.message});
  }
})

router.get("/getTeacher",async(req,res)=>{
  const totalteacher=await Teacher.find({})
  res.send(totalteacher);
})

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const teacher = await Teacher.findOne({ email });
    // console.log(teacher)
    if (!teacher) {
      return res.status(404).json({ message: "User not found" });
    }
    const match = await bcrypt.compare(password, teacher.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: teacher._id, email: teacher.email }, "secret", {
      expiresIn: "1h"
    });

    res.cookie("token", token);
    res.status(200).json({ message: "Login Successful", token, teacher });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error" });
  }
});



module.exports=router;