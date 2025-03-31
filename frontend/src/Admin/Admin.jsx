import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function Admin() {
  const [data,setData]=useState();
  useEffect(()=>{
      axios.get("https://result-management-system-backend.onrender.com/admin/getTeacher")
      .then((res)=>{
        console.log(res.data)
        setData(res.data);
      })
      .catch((err)=>{
        console.log(err);
      })
  },[])
  return (
    <>
      <div className='container'>
      <h1 className='text-center mt-4'>Admin DashBoard</h1> 
      <Link to="/AddTeacher">Add a teacher</Link>
        <div className='row mt-4'>
          <div className='col-4'>
            <h4>No of teacher : <span>4</span></h4>
            <h4>No of active :<span>5</span></h4>
          </div>
           
        </div>
        <div className='row mt-4 mb-4'>
          <div className='col-8'>
          <table className='table text-left'>
            <thead>
              <tr>
                <th>Teacher Name</th>
                <th>Email</th>
                <th>name</th>
                
                <th>ame</th>
              </tr>
            </thead>
            <tbody>
                    {data?.length > 0 ? (    
                      data.map((a, index) => (
                        <tr key={index}>
                          <td>{a.name}</td>
                          <td>{a.email}</td>
                          <td><button>View</button></td>
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
    </>
  )
}

export default Admin
