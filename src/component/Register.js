import React from 'react';
import '../css/Login.css'
import {Link } from "react-router-dom";

function Register() {
  return (
    <div className='frame'>
    <div className='title'>
        Registeration Panel
      </div>
    <div className='subFrame'>
      <div className='user'>
        <label>Name</label>
        <input type={"text"} placeholder="name" className='text'></input>
      </div>
      <div className='pass'>
        <label>Email</label>
        <input type={"email"} placeholder="email" className='text'></input>
      </div>
      <div className='user'>
        <label>Password</label>
        <input type={"password"} placeholder="password" className='text'></input>
      </div>
      <div className='user'>
        <label>College/School</label>
        <input type={"text"} placeholder="college/school" className='text'></input>
      </div>
      <div className='btnLogin'>
        Register
      </div>
      <hr/>
        <label>Existing User? 
        <Link to="/">
            <label className='btn'>Login</label>
        </Link>
        </label>
    </div>
  </div>
  )
}

export default Register;
