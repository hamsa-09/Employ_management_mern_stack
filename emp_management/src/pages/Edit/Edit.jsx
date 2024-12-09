import React, { useEffect, useState } from 'react'
import api from '../../api.js'
import './Edit.css'

export default function Edit() {
  
  const [date,setData]=useState([]);

  useEffect(()=>{
      const fetchData = async () => {
        try{
            const response=await api.getEmployee(data,employCode)
            setData(response.data)
        }
       
        catch(error){
         console.log(error);
        }
      }
      fetchData()
  },[])
  return (
<div></div>


);
}

