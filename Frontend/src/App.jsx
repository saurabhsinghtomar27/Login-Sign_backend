import { useState } from 'react'
import './App.css'
import Login from '../Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../Components/SignUp';
function App() {
  return (
    <>  
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
