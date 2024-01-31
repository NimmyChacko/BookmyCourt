import React, { useState } from 'react'
import './Authorisation.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../../toolkit/userSlice'
import { useDispatch } from 'react-redux'

function Login({toggleBox}) {
    const [logCred,setLogCred] = useState({email:'',password:''})
    //logCred={email:'',password:''}//
    const navigate= useNavigate();
    const dispatch = useDispatch()
const handleChange=(e)=>{
    setLogCred({...logCred,[e.target.name]:e.target.value})
}
const doLogin=()=>{
    console.log(process.env.REACT_APP_BE_URL);
    axios.post(`${process.env.REACT_APP_BE_URL}/auth/login`,logCred).then((res)=>{
      if (res.data.message==='Login successful'){
         localStorage.setItem('token',res.data.token)
        dispatch(setUser(res.data.userDetails))
        navigate('/home')
      }
    }).catch((res)=>{
      if(res.response.data.message==='invalid credentials'){
     
        alert(res.response.data.message)
      }else{
        alert('something went wrong!')
      }
    })
}
  return (
    <div className='signup-box d-flex flex-column p-3'>
    <h3 className='text-center'>Login</h3>
           
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={logCred.email} onChange={handleChange}/>
    
           
    
            <label htmlFor="">Password</label>
            <input type="password" name='password' value={logCred.password} onChange={handleChange} />
    
           
    
            <button className='btn btn-primary mt-3' onClick={doLogin}>Login</button>

            <p>Not registered yet? <span onClick={()=>toggleBox('signup')}>Sign up</span></p>
          
        </div>
  )
}

export default Login
