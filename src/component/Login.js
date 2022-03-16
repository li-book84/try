import React from 'react';
import '../css/Login.css';
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className='frame'>
    <div className='title'>
        Login Panel
      </div>

    <div className='subFrame'>
    <form>
      <div className='user'>
        <label>Username</label>
        <input type={"text"} placeholder="username" id='user' className='text'></input>
      </div>
      <div className='user'>
        <label>Password</label>
        <input type={"password"} placeholder="password" id='pass' className='text'></input>
      </div>
      <div className='btnLogin' onClick={loginCred}>
        login
      </div>
      </form>
      <hr/>
        <label>New User? 
        <Link to="/register">
            <label className='btn'>Register yourself</label>
        </Link>
        </label>
    </div>
  </div>
  )
}

function loginCred(){
  var usernameSpeci = 'admin';
  var passwordSpeci = 'admin';
  var fillUser = document.getElementById('user').value;
  var fillPass = document.getElementById('pass').value;
  if(fillUser === usernameSpeci && fillPass === passwordSpeci){
    window.open('/projects','_self');
  }else{
    alert('enter valid credentials.');
  }
}

export default Login;