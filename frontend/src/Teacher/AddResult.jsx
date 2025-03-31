import axios from 'axios';
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'; 

function AddResult() {
  const navigate = useNavigate();
  const [rollno,setRollno]=useState();
  const [subject,setSubject]=useState();
  const [mark,setMark]=useState();

  const handlesubmit=async(e)=>{

    e.preventDefault();
    const res=await axios.put(`http://localhost:4000/teacher/studentResult/${rollno}`,{
      subject: [{ name: subject, mark: Number(mark) }]
    });
    console.log(res.data);
    setRollno("");
    setMark("");
    setSubject("");
    navigate("/Teacher")
  }
  return (
    <div className='container'>
      <h2 className='text-center mt-4 mb-4'>Add Student Result</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
              <label className="form-label">Student Roll number</label>
              <input type="number" className="form-control" value={rollno} onChange={(e)=>setRollno(e.target.value)}/>
        </div>
        <div className="mb-3">
          
        <label className="form-label">Select Subject</label>
        <select class="form-select" aria-label="Default select example" value={subject}  onChange={(e) => setSubject(e.target.value)}>
            <option selected>Subject</option>
            <option value="BIG DATA">Big Data</option>
            <option value="SE">software Engg</option>
            <option value="CD">Compiler Design</option>
          </select>
        </div>
        
        <div className="mb-3">
              <label  className="form-label">Subject marks</label>
              <input type="number" className="form-control" value={mark} onChange={(e)=>setMark(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        </form>
    </div>
  )
}

export default AddResult
