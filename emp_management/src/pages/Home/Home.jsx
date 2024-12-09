import React, { useState } from 'react';
import api from '../../api.js';
import './Home.css'


export default function Home() {
  const [id,setId]=useState("");
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [department,setDepartment]=useState("")
  const [message,setMessage]=useState("")
  const [messageType, setMessageType] = useState("");
  
  const handleClick=async(e)=>{
    e.preventDefault();
    if (!id || !name || !email || !department) {
      setMessage('All fields are required!');
      setMessageType("error");
      return;
    }
    const data={id,name,email,department};
    try{
        const response=await api.createEmployee(data);
        setMessage('Employee registered')
        setMessageType("success");
        console.log(response.data)
    }
    catch(error){
      setMessage('Failed to register employee');
      console.log(error);
    }
    setId("")
    setName("")
    setEmail("")
    setDepartment("")
   
  }
  return (
    <div>
        <div className="home">
        {message && (
        <p className={`message ${messageType}`}>{message}</p>
      )}
      <form className="form" onSubmit={handleClick}>
      <div className='head'>
        <h1>Register Employee</h1>
        </div>
        <div className="form-group">
          <label htmlFor="id">Id</label>
          <input type="text" id="id" value={id} onChange={(e)=>setId(e.target.value)} placeholder='Enter Id' />
          <label htmlFor="name">Name</label>
          <input type="text" id="name"  value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter full name" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email address" />

          <label htmlFor="department">Department</label>
          <input type="text" id="department" value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder="Enter department" />

         <div className='btn-container'>
          <button type='submit'>Register</button>
          </div>
        </div>
      </form>
      
      </div>
      </div>
    
  );
}
