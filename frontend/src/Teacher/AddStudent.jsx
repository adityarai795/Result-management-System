import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

function AddStudent() {
   const navigate = useNavigate();
  const [name,setName]=useState();
  const [rollno,setRollno]=useState();
  const [branch,setBranch]=useState();
  const handlesubmit=(e)=>{
    e.preventDefault();
    const res =axios.post("http://localhost:4000/teacher/addStudent",{
      name,
      rollno,
      branch
    })
    console.log(res.data);
    setBranch("");
    setName("");
    setRollno("");
    navigate("/Teacher")
  }
  return (
    <div className='container  mt-4 mb-6'>   
              <h2 className='text-center mb-4 mt-4'>Add a new Student</h2>
            <form onSubmit={handlesubmit}>
            <div className="mb-3">
              <label  className="form-label">Name of Student</label>
              <input type="text" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="mb-3">
              <label  className="form-label">Roll Number</label>
              <input type="Number" className="form-control" value={rollno} onChange={(e)=>setRollno(e.target.value)} />
            </div>
            <div className="mb-3">
              <label  className="form-label">Class / Branch</label>
              <input type="text" className="form-control" value={branch} onChange={(e)=>{setBranch(e.target.value)}}/>
            </div>
           
            <button type="submit" className="btn btn-primary">Submit</button>
            
          </form>
    </div>
  )
}

export default AddStudent
