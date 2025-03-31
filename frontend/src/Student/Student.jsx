import React ,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
function Student() {
  const [rollno,setRollno]=useState();

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(rollno)
  }

  return (
    <div>
     <h1 className='text-center mt-4'>Student Result</h1> 
     <form className='container ' onSubmit={handlesubmit}>
          <div className="mb-3">
            <label className="form-label">Enter Roll Number</label>
            <input type="number" className="form-control" value={rollno} onChange={(e)=>setRollno(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control"  />
          </div>
        
          <button type="submit" className="btn btn-secondary"> 
            <Link className="text-decoration-none" to={`/ResultShow/${rollno}`}>Serch</Link>
          </button>
      </form>
     </div>
  )
}

export default Student
