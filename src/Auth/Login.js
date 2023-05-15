import React, { useEffect, useState } from "react";
import classes from "./Login.module.css";
import img from "../Images/HELPERA_ROUND_1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUserMain } from "./auth-action";
import { useSelector } from "react-redux";
import { getAuthToken } from "./Auth";


const Login = () => {
  const dispatch=useDispatch();
  const authError=useSelector(state=>state.auth.authError);
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [errmessage,setError]=useState();
  const navigate=useNavigate();
  const onEmailChange=(event)=>{
    if (errmessage==="Invalid Email") {
      setError(null);
    }
    setEmail(event.target.value);
  }
  const onPasswordChange=(event)=>{
    if (errmessage==="Invalid password (should contain atleast 8 characters)") {
      setError(null);
    }
    setPassword(event.target.value);
  }
  const loginUserHandler=async(event)=>{
    event.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }
    if (password.trim().length<6){
      setError("Invalid password (should contain atleast 8 characters)");
      return;
    }
    await dispatch(loginUserMain(email,password));
    const token=getAuthToken();
    if(token){
      navigate('/')
    }
    
}
  return (
    <>
      <div className={classes.b}>
        <div className={classes.i}>
          <img src={img} alt="Logo" />
        </div>
        <div className={classes.c}>
          <h1 className={classes.ch1}>Login</h1>
          <form className={classes.cf} method="post">
            <div className={classes.txt_field}>
              <label>Email</label>
              <input type="text" onChange={onEmailChange} required placeholder="Enter Email"/>
            </div>
            <div className={classes.txt_field}>
              <label>Password</label>
              <input type="password" onChange={onPasswordChange} required placeholder="Enter Password"/>
            </div>
            <div className={classes.pass}>Forgot Password?</div>
            {/* <div className={classes.check}>
              <input type="checkbox" id="rem" name="Remember" value="rem" />
              <label htmlFor="rem"> Remember password</label>
              <br />
            </div> */}
            <input className={classes.in} type="submit" value="Login" onClick={loginUserHandler}/>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
            Don't have an account? <Link to='/signup'>Register</Link>
            <div className={classes.r1}>
              <div className="row1">
                <div className="col-md-3">
                  <a
                    className="btn btn-outline-dark"
                    href="/users/googleauth"
                    role="button"
                    //style="text-transform: none"
                  >
                    <img
                      width="20px"
                      //style="margin-bottom: 3px; margin-right: 5px"
                      alt="Google sign-in"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
                    />
                    Continue with Google
                  </a>
                </div>
              </div>
            </div>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
              integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
              crossOrigin="anonymous"
            />
            <br />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
