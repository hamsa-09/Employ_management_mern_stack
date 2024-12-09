import React from 'react'

export default function () {
  return (
 
    <div className="home">
     
      <form className="form">
      <div className='head'>
        <h1>Edit Employee</h1>
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter full name" />
    
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email address" />
    
          <label htmlFor="phone-no">Phone number</label>
          <input type="text" id="phone-number" placeholder="Enter phone no." />
    
          <label htmlFor="department">Department</label>
          <input type="text" id="department" placeholder="Enter department" />
    
         <div className='btn-container'>
          <button>Edit</button>
          </div>
        </div>
      </form>
      </div>
    
    );
    }
    
    
