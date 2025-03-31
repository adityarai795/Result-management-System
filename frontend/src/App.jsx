import React from 'react'
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Admin from './Admin/Admin';
import AddTeacher from './Admin/AddTeacher'
import Student from './Student/Student';
import ResultShow from './Student/ResultShow';
import Teacher from './Teacher/Teacher';
import AddResult from './Teacher/AddResult';
import AddStudent from './Teacher/AddStudent'
import Login from './Login';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/AddTeacher' element={<AddTeacher />}/>
      <Route path='/ResultShow/:id' element={<ResultShow />}/>
      <Route path='/Student' element={<Student />}/>
      <Route path='/Teacher' element={<Teacher />}/>
      <Route path='/AddResult' element={<AddResult />}/>
      <Route path='/AddStudent' element={<AddStudent />}/>
      <Route path='/Login' element={<Login />}/>

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
