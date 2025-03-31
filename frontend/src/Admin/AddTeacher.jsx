import axios from 'axios';
import React ,{useState,useEffect}from 'react'
import { useNavigate } from 'react-router-dom'; 
function AddTeacher() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handlesubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("https://result-management-system-backend.onrender.com/admin/addTeacher", {
      name,
      email,
      password
    });
    console.log(res.data);
    alert("Teacher added successfully! 🎉");
    
    setName('');
    setEmail('');
    setPassword('');
    navigate("/Admin")
  } catch (error) {
    console.error(error);
    alert("Failed to add teacher ❌");
  }

}
  return (
    <div className='container mt-4 mb-6'>
       <form className='container  ' onSubmit={handlesubmit}>
       <div className="mb-3">
              <label  className="form-label">Name </label>
              <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
              <label  className="form-label">Email </label>
              <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
              <label  className="form-label">Password </label>
              <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default AddTeacher
