import React from 'react';
import classes from './ForgotPassword.module.css';
import { useRef } from 'react';


const ForgotPassword = () => {
    const emailRef=useRef();
    const passwordRef=useRef();
    const questionRef=useRef();
    const resetPasswordHandler=()=>{
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        console.log(questionRef.current.value);
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
    <button onClick={resetPasswordHandler} >Reset</button>
    </div>
   </div>
  )
}

export default ForgotPassword
