import React, { useState } from "react";
import classes from "./Signup.module.css";
import img from "../Images/tempLogo.png";
import { Link,useNavigate } from "react-router-dom";


const SignUp = () => {
  const [email,setEmail]=useState();
  const [errmessage,setError]=useState();
  const [password,setPassword]=useState();
  const [username,setUsername]=useState();
  const [conpassword,setConPassword]=useState();
  const [fname,setFname]=useState();
  const [lname,setLname]=useState();
  const [dob,setDob]=useState();
  const [address,setAddress]=useState();
  const [phone,setPhone]=useState();
  const navigate=useNavigate();

  const onEmailChange=(event)=>{
    setEmail(event.target.value);
  }
  const onPasswordChange=(event)=>{
    setPassword(event.target.value);
  }
  const onUsernameChange=(event)=>{
    setUsername(event.target.value);
  }
  const onConPasswordChange=(event)=>{
    setConPassword(event.target.value);
  }
  const onFnameChange=(event)=>{
    setFname(event.target.value);
  }
  const onLnameChange=(event)=>{
    setLname(event.target.value);
  }
  const onDobChange=(event)=>{
    setDob(event.target.value);
  }
  const onAddressChange=(event)=>{
    setAddress(event.target.value);
  }
  const onPhoneChange=(event)=>{
    setPhone(event.target.value);
  }
  const SignupUser=async(event)=>{
    event.preventDefault();
    if (fname.trim().length<=2) {
      setError("Enter valid First name");
      return;
    }
    if (lname.trim().length<=2) {
      setError("Enter valid Last name");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }
    if (username.trim().length<=3) {
      setError("Invalid username(should contain at least four characters.)");
      return;
    }
    if (phone.trim().length<=9) {
      setError("Invalid Phone number");
      return;
    }
    const today = new Date();
    let curYear = today.getFullYear();
    const d = new Date(dob);
    let dobYear = d.getFullYear();
    if(curYear-dobYear<18){
      setError("Sorry, you are underAge (age is less than 18)");
      return;
    }
    if (address.trim().length===0){
      setError("Address cannot be empty");
      return;
    }
    if (password.trim().length<8){
      setError("Invalid password (should contain atleast 8 characters)");
      return;
    }
    if(password!==conpassword){
      setError("Password is not matching to confirm password");
      return;
    }
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
    }
    console.log(newUser)
    let response=await fetch('http://127.0.0.1:5000/user/signup',{
        method:'POST',
        headers:{
                'Content-Type':'application/json'
        },
        body:JSON.stringify(newUser)
    }) 
    let data=await response.json()

    if(response.status===200){
        console.log("successfully registered")
        navigate('/')
    }
    else{
        alert('something went wrong')
    }
    console.log(data)
}
  return (
      <div className={classes.main}>
          <img src={img} alt="Logo" />
        <div className={classes.c}>
          <h1>Register</h1>
          <form className={classes.form}>
          <div>
              <input type='text' onChange={onFnameChange} required placeholder="First name"/>
              <input type='text' onChange={onLnameChange} required placeholder="Last name"/>
            </div>
            <div className={classes.single}>
              <input type='email' onChange={onEmailChange} required placeholder="Enter Email"/>
            </div>
            <div className={classes.single}>
              <input type='text' onChange={onUsernameChange} required placeholder="Enter username"/>
            </div>
            <div >
              <input type='text' onChange={onPhoneChange} required placeholder="Phone Number"/> 
              <span>  DOB:<input type='date' onChange={onDobChange} required placeholder="Date of birth"/></span>
            </div>
            <div className={classes.single}>
              <input type='text' onChange={onAddressChange} required placeholder="Enter Address"/>
            </div>
            <div className={classes.single}>
              <input type='file' className={classes.file} />
            </div>
            <div>
              <input type='password' onChange={onPasswordChange} required placeholder="Enter Password"/>
              <input type='password' onChange={onConPasswordChange} required placeholder="Confirm Password"/>
            </div>
            <button type="submit" onClick={SignupUser}>Register</button>
          </form>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
          <p>Already have account? <Link to='/login'>Login</Link></p>
        </div>
      </div>
  );
};

export default SignUp;
