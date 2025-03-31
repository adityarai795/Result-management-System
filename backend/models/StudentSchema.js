const mongoose=require("mongoose");

const StudentSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  rollno:{
    type:Number,
    unique:true,
    required:true
  },
  branch:{
    type:String
  },
  subject:[
    {
      name:{type:String},
      mark:{type:Number},
    }
  ]
})

const StudentModel=mongoose.model("Student",StudentSchema);

module.exports=StudentModel;