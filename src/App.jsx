import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router , Routes , Route, Navigate } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './Components/Dashboard';
import About from './Components/About';
import ClassBooking from './Components/ClassBooking';
import Payment from './Components/Payment';



function App() {
  return (
    <div>
      {/* */}
     
      <Router>
      <Navbar/>
        <Routes>
        <Route exact path='/' element={<Home/> }/>
          <Route exact path='/login' element={ <Login/>}/>
          <Route exact path='/signup' element={<Signup/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/booking' element={<ClassBooking/>}/>
          <Route exact path='/payment' element={<Payment/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route path="*" element={<Navigate to="/login" />} />

          
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
