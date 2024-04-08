import './App.css'
import Login from '../Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from '../Components/SignUp';
import Home from '../Components/Home'
function App() {
  return (
    <>  
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Home" element={<Home />}></Route>

        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
