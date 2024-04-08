import React from 'react'
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import axios  from 'axios';
function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    email: email,
    password: password
  }
  const post = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/sign", body).then(e=>{
      if(e.data==="user is created"){
        
        navigate('/Home')
      }
    }).catch((e) => console.log(e))
  }
  return (
    <>
      <div>SignUp</div>
      <form action="post">
        <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        <input type='submit' onClick={(e)=>post(e)}  />
      </form>
      <Link to='/'>Login</Link>

    </>
  )
}

export default SignUp