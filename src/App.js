import React from 'react'
// import { Router } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Hyper/Home'
import User from './Hyper/User'
import { BrowserRouter as Router  , Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar  />
      <Routes>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/User" element={<User/>}></Route>
      </Routes>
     
      </Router>
      
    </div>
  )
}

export default App
