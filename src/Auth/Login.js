import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import img from "../Images/HELPERA_ROUND_1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserApi,regExEmail,regExPassword } from "./auth-action";
import { useSelector } from "react-redux";
import { getAuthToken } from "./Auth";
import ForgotPassword from "./ForgotPassword";
import {AiOutlineHome} from 'react-icons/ai';


const Login = () => {
  const dispatch=useDispatch();
  const authError=useSelector(state=>state.auth.authError);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errmessage,setError]=useState();
  const [forgotPassword,setForgotPassword]=useState(false);
  const [message,setMessage]=useState("Login")
  const navigate=useNavigate();
  const onEmailChange=(event)=>{
    if (errmessage==="Invalid Email") {
      setError(null);
    }
    setEmail(event.target.value);
  }
  const onPasswordChange=(event)=>{
    if (errmessage==="Invalid password (should contain atleast 6 characters)") {
      setError(null);
    }
    setPassword(event.target.value);
  }
  const loginUserHandler=async(event)=>{
    event.preventDefault();
    setMessage("Logining in......")
    if ((!regExEmail.test(email) && email!=="")|| email==="") {
      setError("Invalid Email");
      setMessage("Login")
      return;
    }
    if (!regExPassword.test(password || password==="")){
      setError("Invalid password (should contain atleast 6 characters)");
      setMessage("Login")
      return;
    }
    await dispatch(loginUserApi(email,password));
    const token=getAuthToken();
    if(token){
      setMessage("Login")
      navigate('/')
    }
    
}
  return (
    <>
    <AiOutlineHome size='1.7rem' style={{margin:'10px',position:'absolute',cursor:'pointer'}} onClick={()=>{navigate('/')}} />
    {!forgotPassword &&  <div className={classes.b}>
        <div className={classes.i}>
          <img src={img} alt="Logo" />
        </div>
        <div className={classes.c}>
          <h1 className={classes.ch1}>Login</h1>
          <form className={classes.cf}>
            <div className={classes.txt_field}>
              <label>Email</label>
              <input type="text" onChange={onEmailChange} required placeholder="Enter Email"/>
            </div>
            <div className={classes.txt_field}>
              <label>Password</label>
              <input type="password" onChange={onPasswordChange} required placeholder="Enter Password"/>
            </div>
            <Link className={classes.pass} onClick={()=>{setForgotPassword(true)}}>Forgot Password?</Link>
            <input className={classes.in} type="submit" disabled={message==="Logining in......"} value={message} onClick={loginUserHandler}/>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
            Don't have an account? <Link to='/signup'>Register</Link>
          </form>
        </div>
      </div>}
      {forgotPassword && <ForgotPassword/>}
    </>
  );
};

export default Login;
