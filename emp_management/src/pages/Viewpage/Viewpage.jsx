import React, { useEffect, useState } from 'react'
import './Viewpage.css'
import api from '../../api.js'
import { useNavigate } from 'react-router-dom'

export default function Viewpage() {
  const navigate=useNavigate();
  const handleNavigate=()=>{
    navigate('/edit');
  }

   const [data,setData]=useState([]);


  useEffect(()=>{
    const employee=async()=>{
      try{
        const response= await api.getAllEmployee()
        setData(response.data)
      }
      catch(error){
        console.log(error);
      }
    }
    employee();
  },[])

const handleDelete=async(employCode)=>{
  console.log(employCode)
  if(window.confirm("Are you sure you want to delete this employee?")){
    try{
        await api.deleteEmployee(employCode);
        setData((prevData)=>prevData.filter((employee)=>employee.employCode!==employCode))
    }
    catch(error){
      console.log(error)
    }
}
}

  return (
  <div>
  <div className="table-container">
    <table>
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Department</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {data.map((employee,index)=>{
      return ( 
       <tr key={index}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.department}</td>
        <td>{employee.email}</td>
        <td>
          <span className="btn-container">
            <button>View</button>
            <button onClick={handleNavigate}>Edit</button>
            <button onClick={()=>{handleDelete(employee.employCode)}}>Delete</button>
          </span>
        </td>
      </tr>)})}
    </tbody>
    </table>
  </div>
  
  </div>
  )
}
