const mongoose=require("mongoose");

const TeacherSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    unique:true,
    required:true,
  },
  password:{
    type:String,
    required:true,
    min:4,
  }
},{
  timestamps:true
});

const TeacherModel= mongoose.model("Teacher",TeacherSchema);

module.exports=TeacherModel;