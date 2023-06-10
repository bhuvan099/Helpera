import React, { useState } from "react";
import classes from "./Signup.module.css";
import img from "../Images/HELPERA_ROUND_1.png";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { regExName ,regExEmail,regExUsername,regExPhone,regExPassword,signupUserApi} from "./auth-action";
import { getAuthToken } from "./Auth";
import PreReg from "./PreReg";
import {AiOutlineHome} from 'react-icons/ai';



const SignUp = () => {
  const dispatch=useDispatch();
  const [message,setMessage]=useState("Register");
  const [email,setEmail]=useState("");
  const [preReg,setPreReg]=useState(true);
  const [errmessage,setError]=useState("");
  const [password,setPassword]=useState("");
  const [username,setUsername]=useState("");
  const [conpassword,setConPassword]=useState("");
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const [dob,setDob]=useState();
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const [sques,setSques]=useState("");
  const [role,setRole]=useState(0);
  const navigate=useNavigate();

  const changePage=(Role)=>{
    setRole(Role);
    setPreReg(false);
  }
  const onEmailChange=(event)=>{
    if (errmessage==="Enter valid Email") {
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
  const onUsernameChange=(event)=>{
    if (errmessage==="Invalid username(should contain at least four characters.)") {
      setError(null);
    }
    setUsername(event.target.value);
  }
  const onConPasswordChange=(event)=>{
    if (errmessage==="Password is not matching to confirm password") {
      setError(null);
    }
    setConPassword(event.target.value);
  }
  const onSquesChange=(event)=>{
    if (errmessage==="Please Answer Security question.") {
      setError(null);
    }
    setSques(event.target.value);
  }
  const onFnameChange=(event)=>{
    if (errmessage==="Enter valid First name" || errmessage==="Enter valid organization name") {
      setError(null);
    }
    setFname(event.target.value);
  }
  const onLnameChange=(event)=>{
    if (errmessage==="Enter valid Last name") {
      setError(null);
    }
    setLname(event.target.value);
  }
  const onDobChange=(event)=>{
    if (errmessage==="Sorry, you are underAge (age is less than 18)") {
      setError(null);
    }
    setDob(event.target.value);
  }
  const onAddressChange=(event)=>{
    if (errmessage==="Address cannot be empty") {
      setError(null);
    }
    setAddress(event.target.value);
  }
  const onPhoneChange=(event)=>{
    if (errmessage==="Invalid Phone number") {
      setError(null);
    }
    setPhone(event.target.value);
  }
  const SignupUserHandler=async(event)=>{
    event.preventDefault();
    setMessage("Registering.....")
    if (!regExName.test(fname) || fname==="") {
      if (role===16) {
      setError("Enter valid First name");
      }else{
      setError("Enter valid organization name");}
      setMessage("Register");
      return;
    }
    if ((!regExName.test(lname) || lname==="") && role===16 ) {
      setError("Enter valid Last name");
      setMessage("Register");
      return;
    }
    if (!regExEmail.test(email) || email==="") {
      setError("Enter valid Email");
      setMessage("Register");
      return;
    }
    if (!regExUsername.test(username) || username===""){
      setError("Invalid username(should contain at least four characters.)");
      setMessage("Register");
      return;
    }
    if (!regExPhone.test(phone) || phone==="") {
      setError("Invalid Phone number");
      setMessage("Register");
      return;
    }
  if (role===16) {
    const today = new Date();
    let curYear = today.getFullYear();
    const d = new Date(dob);
    let dobYear = d.getFullYear();
    console.log(curYear-dobYear)
    if(!(curYear-dobYear>=18)){
      setError("Sorry, you are underAge (age is less than 18)");
      setMessage("Register");
      return;
    }
    if (address.trim().length===0){
      setError("Address cannot be empty");
      setMessage("Register");
      return;
    }
  }
    if (!regExPassword.test(password) || password===""){
      setError("Invalid password (should contain atleast 8 characters)");
      setMessage("Register");
      return;
    }
    if(password!==conpassword){
      setError("Password is not matching to confirm password");
      setMessage("Register");
      return;
    }
    if(sques.trim().length===0){
      setError("Please Answer Security question.");
      setMessage("Register");
      return;
    }
   if(role===16){
    const newUser={
      username:username,
      email:email,
      password:password,
      confirmPassword:conpassword,
      firstName:fname,
      lastName:lname,
      dob:dob,
      address:address,
      phoneno:phone,
      role:role,
      securityQuestion:sques
    }
    await dispatch(signupUserApi(newUser));
   }
   if (role===8) {
    const newOrg={
      username:username,
      email:email,
      password:password,
      confirmPassword:conpassword,
      organizationName:fname,
      address:address,
      phoneno:phone,
      role:role,
      securityQuestion:sques
    }
    await dispatch(signupUserApi(newOrg));
    setMessage("Register");
   }
   const token=getAuthToken();
   if(token){
    setMessage("Register");
     navigate('/')
   }else{
    window.location.reload();
   }
}
  return (
     <>
       <AiOutlineHome size='1.7rem' style={{margin:'10px',position:'absolute',cursor:'pointer'}} onClick={()=>{navigate('/')}} />
     {preReg && <PreReg changePage={changePage} />}
     {!preReg && <div className={classes.main}>
          <img src={img} alt="Logo" />
        <div className={classes.c}>
          <h1>Register</h1>
          <form className={classes.form}>
        {role===8 && <div className={classes.single}>
         <input type='text' onChange={onFnameChange} required placeholder="Organization Name"/>
            </div>}
          {role===16 && <div>
              <input type='text' onChange={onFnameChange} required placeholder="First name"/>
              <input type='text' onChange={onLnameChange} required placeholder="Last name"/>
            </div>}
            <div className={classes.single}>
              <input type='text' onChange={onEmailChange} required placeholder="Enter Email"/>
            </div>
            <div className={classes.single}>
              <input type='text' onChange={onUsernameChange} required placeholder="Enter username"/>
            </div>
            <div >
              <input type='text' onChange={onPhoneChange} required placeholder="Phone Number"/> 
             {role===16 && <span>  DOB:<input type='date' onChange={onDobChange} required placeholder="Date of birth"/></span>}
            </div>
            <div className={classes.single}>
              <input type='text' onChange={onAddressChange} required placeholder="Enter Address"/>
            </div>
            {/* <div className={classes.single}>
              <input type='file' className={classes.file} />
            </div> */}
            <div>
              <input type='password' onChange={onPasswordChange} required placeholder="Enter Password"/>
              <input type='password' onChange={onConPasswordChange} required placeholder="Confirm Password"/>
            </div>
            <div className={classes.single}>
              <input type='text' className={classes.ques} onChange={onSquesChange} required placeholder="What is your favourite vacation place?(Security question)" />
            </div>
            <button type="submit" onClick={SignupUserHandler} disabled={message==="Registering....."}>{message}</button>
          </form>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
          <p>Already have account? <Link to='/login'>Login</Link></p>
        </div>
      </div>}
      </>
  );
};

export default SignUp;
