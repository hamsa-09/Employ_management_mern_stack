import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import './Nav.css'

export default function Nav() {
 const [isOpen,setIsOpen]=useState(false);
 const handleToggle=()=>{
  setIsOpen(previous=>!previous)
  
 }
  return (
    <div >
      <nav className={isOpen?"active":''}>
        <ul >
        <li>
            <a href='/home'>Home</a>
        </li>
        <li>
            <a href='/view'>View Employee</a>
        </li>
        <li>
            <a href='/'>Logout</a>
        </li>
            </ul> 
      </nav>
      <div className="mobile-header">
          <h1>Employee Management</h1>
          <button className='menu-button' onClick={handleToggle}><RiMenu3Line size={25}  /></button>
      </div>
    </div>
  )
}
