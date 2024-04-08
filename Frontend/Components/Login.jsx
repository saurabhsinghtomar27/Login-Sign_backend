import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
// import SignUp from './SignUp';
import axios  from 'axios';
function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    async function post(e){
      e.preventDefault()
      // alert(email+" "+password)
      try{
         await axios.post("http://localhost:8000/", {email,password}).then(e =>{
          if(e.data==="user exits"){
            alert("succesfully Login")
          }
          else if(e.data=="User Does not Exist"){
            alert(e.data);
          }
          else{
            alert(e.data)
          }
         }).catch((e) => console.log(e))
      }
      catch(e){
        console.log(e);
      }
    }
  return (
    <>
    <div>Login</div>
    <form action="post">
        <input type='email'  placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <input type='submit' onClick={(e) => post(e)} />
    </form>
   <Link to='/SignUp'>SignUP</Link>

    </>
    

  )
}

export default Login