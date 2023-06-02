import React from 'react';
import classes from './ForgotPassword.module.css';
import { useRef } from 'react';
import { resetPasswordHandler } from './auth-action';
import { useDispatch } from 'react-redux';
import { useState } from 'react';


const ForgotPassword = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const questionRef=useRef();
    const [message,setMessage]=useState("Reset");
    const dispatch=useDispatch();
    const resetPassword=async(event)=>{
     event.preventDefault();
     setMessage("Reseting....")
     const newPassword={
        email:emailRef.current.value,
        password:passwordRef.current.value,
        securityQuestion:questionRef.current.value
      }
     await dispatch(resetPasswordHandler(newPassword));
     setMessage("Reset");
    }
  return (
    <div className={classes.main}>
    <div className={classes.card}> 
    <h1>Reset Password</h1>
     <div>
      <input type='text' ref={emailRef} placeholder='Enter your email' />
      <input type='text' ref={questionRef} placeholder='Enter answer to your security question'/>
      <input type='password' ref={passwordRef} placeholder='Enter New password'/>
     </div>
    <button onClick={resetPassword} disabled={message==="Reseting...."} >{message}</button>
    </div>
   </div>
  )
}

export default ForgotPassword
