import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate = useNavigate(); 

    const handlesubmit=async(e)=>{
      e.preventDefault();
      try {
      if(email==="raju@gmail.com" && password==="1234" ){
        navigate("/Admin");
      }else{
        const res = await axios.post("http://localhost:4000/admin/login", {
          email,
          password
        });

        if (res.status === 200) {
          navigate("/Teacher");  
        }
      }
    
      } catch (error) {
        console.log(error);
        setError("Invalid email or password");
      }
    }

  return (
    <div className='container'>
        <h1 className='text-center'>Login..</h1>
          <form className='container mt-4 mb-6' onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" 
            className="form-control"
             id="exampleInputEmail1"
              aria-describedby="emailHelp"
               name="username"
               value={email}
                onChange={(e)=>setEmail(e.target.value)

                }/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label  htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password"
             name="password"
             className="form-control" 
            id="exampleInputPassword1" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)

            }/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label"  htmlFor="exampleCheck1">Check me out</label >
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary">Submit</button>
          
        </form>
    </div>
  )
}

export default Login
