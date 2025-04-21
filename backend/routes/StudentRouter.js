const Router=require("router");
const Student=require("../models/StudentSchema")
const Auth=require("../middleware/auth")
const router=Router();

router.post("/addStudent",async(req,res)=>{
  const {name,rollno,branch,subject}=req.body;
  console.log(req.body);
  try {
    const student=new Student({name,rollno,branch,subject});
    await student.save();
    res.status(201).json({ message: "Student data saved successfully", student });
  } catch (error) {
    res.status(500).json({ message: "Some error occurred", error: error.message });
  }
})

router.get("/getStudentall",async(req,res)=>{
  // res.send("This is Studnet")
  try {
    const all=await Student.find({});
    res.status(200).json(all);
  } catch (error) {
    res.status(500).json({message:"something went wrong"})
  }
})

router.get("/showResult/:rollno",async(req,res)=>{

  try {
    const { rollno } = req.params;  
    const student = await Student.findOne({rollno});
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(500).json({ message: "Some error occurred", error: error.message });
  }
})


router.put("/studentResult/:rollno",async(req,res)=>{
  const {rollno}=req.params;
 
  try {
    const {subject}=req.body;
    const student=await Student.findOneAndUpdate({rollno}, { $set: { subject } })
    
    await student.save()
    if(!student){
      return res.status(404).json({message:'user not founnd'})
    }
    res.status(200).json({message:"Result saved"});
  } catch (error) {
    res.status(500).json({ message: "Some error occurred", error: error.message });
  }
})

module.exports=router
