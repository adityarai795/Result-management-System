import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        
        {/* Left Side - RMS */}
        <Link className="navbar-brand" to="/">RMS Result Management System</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        {/* Right Side - Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login">Teacher</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Student">Student</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  </>
  
  )
}

export default Navbar
