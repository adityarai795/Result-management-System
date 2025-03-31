
const jwt=require("jsonwebtoken");

const auth=async(req,res,next)=>{

  const token=req.cookies.token;
  if(!token){
    return res.status(401).json({ message: "No token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;   
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }

}
module.exports=auth;