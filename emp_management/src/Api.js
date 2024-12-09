import axios  from 'axios';

const API =axios.create({baseURL:"http://localhost:8000/api/v1"})
    
const api={
    getAllEmployee:()=>API.get("/employees"),
    getEmployee:(employCode)=>API.get(`/employee/${employCode}`),
    createEmployee:(data)=>API.post('/employee',data),
    updateEmployee:(data,employCode)=>API.patch(`/employee/${employCode}`),
    deleteEmployee:(employCode)=>API.delete(`/employee/${employCode}`)
}
export default api;