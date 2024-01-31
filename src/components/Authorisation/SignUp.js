import React, { useEffect, useState } from 'react'
import './Authorisation.css'
 import axios from 'axios';
// const axios = require('axios/dist/browser/axios.cjs'); 


function SignUp({toggleBox}) {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[number,setNumber]=useState('')
    const[pass,setPass]=useState('')
    const[confpass,setConfPass]=useState('')

    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handleNumber=(e)=>{
        setNumber(e.target.value)
    }

    const handlePass=(e)=>{
        setPass(e.target.value)
    }

    const handleConfPass=(e)=>{
        setConfPass(e.target.value)
    }
    // const [signUpData,setSignUpData]=useState({
      
    //         name:'',
    //         email:'',
    //         number:'',
    //         password:'',
    //         confirmPassword:'',

    //     }

useEffect(()=>{
    console.log(name,email,number,pass,confpass);
},[name,email,number,pass,confpass])
  
const doSignUp=()=>{
axios.post('http://localhost:5000/auth/signup',{name,email,number,pass,confpass}).then((res)=>{
console.log(res);
})
.catch((err=>{
    console.log(err);
}))
}
  return (
    <div className='signup-box d-flex flex-column p-3'>
<h3 className='text-center'>Sign Up</h3>
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={name} onChange={handleName} />

        <label htmlFor="">Email</label>
        <input type="email" name='email' value={email} onChange={handleEmail}/>

        <label htmlFor="">Mobile number</label>
        <input type="number" name='number' value={number} onChange={handleNumber} />

        <label htmlFor="">Password</label>
        <input type="password" name='pass' value={pass} onChange={handlePass} />

        <label htmlFor="">Confirm Password</label>
        <input type="password" name='confpass' value={confpass} onChange={handleConfPass}/>

        <button className='btn btn-primary mt-3' onClick={doSignUp}>Sign Up</button>
      
      <p>Already registered? <i onClick={()=>toggleBox('login')}>Log in here</i></p>
    </div>
    
  )
  
}


export default SignUp
