import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
function Teacher() {
  const [data,setData]=useState();
useEffect(()=>{
    axios.get("https://result-management-system-backend.onrender.com/teacher/getStudentall")
    .then((res)=>{
      console.log(res.data)
      setData(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
},[])
  return (
    <div className='container'>
      <h1 className='text-center mt-4 mb-4'>Teacher Dashboard</h1>
      <Link to="/AddStudent">Add Student</Link>
      <br />
      <Link to="/AddResult">Upload Result</Link>

      <div className='row mt-4 mb-4'>
          <div className='col-8'>
          <table className='table text-left'>
            <thead>
              <tr>
                <th>Roll no</th>
                <th>Name</th>
                <th>name</th>
                <th>ame</th>
              </tr>
            </thead>
            <tbody>
                    {data?.length > 0 ? (    
                      data.map((a, index) => (
                        <tr key={index}>
                          <td>{a.rollno}</td>
                          <td>{a.name}</td>
                          <td><button><Link to={`/ResultShow/${a.rollno}`}>View</Link></button></td>
                          <td><button>Delete</button></td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="3" className="text-center">Loading...</td>  
                      </tr>
                    )}
            </tbody>

          </table></div>
        </div>
    </div>
  )
}

export default Teacher
