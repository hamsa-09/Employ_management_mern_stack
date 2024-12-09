import './App.css'
import { BrowserRouter as Router, Routes,Route, useLocation } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Viewpage from './pages/Viewpage/Viewpage';
import Edit from './pages/Edit/Edit';
import Nav from './nav/Nav'

function App() {
  const NavWrapper=()=>{
      const location=useLocation();
      const isLogin=location.pathname==="/";
      return !isLogin?<Nav/>:'';
  }
  return (
    <div >
     <Router>
      <NavWrapper/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/view" element={<Viewpage />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
     </Router>
    </div>
  )
}

export default App
