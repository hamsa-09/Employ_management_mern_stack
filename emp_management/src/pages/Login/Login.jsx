import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'

export default function Login() {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleLogin=(e)=>{
    e.preventDefault();
    if(email==='admin@gmail.com' && password==='admin'){
      navigate('/home');
    }
    else{
      alert('Invalid Email or Password');
    }
  };

  return (
    <div className='login-container'>
     
      <form className='login-form' onSubmit={handleLogin}>
       <div className='login'> <h2>Login</h2></div>
       <div className="label-container">   <label htmlFor='email'>Email</label>
       <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter email' /></div>
       <div className="label-container">
       <label htmlFor="password">Password</label>
       <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
       </div>
   
        <div className='btn-container'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}
