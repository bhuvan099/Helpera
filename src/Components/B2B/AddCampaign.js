import React, { useState } from "react";
import classes from "./AddCampaign.module.css";
import { Link,useNavigate } from "react-router-dom";
import img from '../../Images/HELPERA_ROUND_1.png';


const AddCampaign = () => {
  const [email,setEmail]=useState();
  const [errmessage,setError]=useState();
  const [campHead,setCampHead]=useState();
  const [org,setOrg]=useState();
  const [ VolNo, setVolNo]=useState();
  const [name,setname]=useState();
  const [type,setType]=useState();
  const [sdate, setSdate]=useState();
  const [edate, setEdate]=useState();
  const [address,setAddress]=useState();
  const [phone,setPhone]=useState();
  const navigate=useNavigate();

  const onEmailChange=(event)=>{
    setEmail(event.target.value);
  }
  const onCampHeadChange=(event)=>{
    setCampHead(event.target.value);
  }
  const onOrgNameChange=(event)=>{
    setOrg(event.target.value);
  }
  const onVolNoChange=(event)=>{
     setVolNo(event.target.value);
  }
  const onNameChange=(event)=>{
    setname(event.target.value);
  }
  const onTypeChange=(event)=>{
    setType(event.target.value);
  }
  const  onSdateChange=(event)=>{
     setSdate(event.target.value);
  }
  const  onEdateChange=(event)=>{
     setEdate(event.target.value);
  }
  const onAddressChange=(event)=>{
    setAddress(event.target.value);
  }
  const onPhoneChange=(event)=>{
    setPhone(event.target.value);
  }
  const insertCamp=async(event)=>{
    event.preventDefault();
    if (name.trim().length<=2) {
      setError("Enter valid Campaign name");
      return;
    }
    if (type.trim().length<=2) {
      setError("Enter valid Campaign type");
      return;
    }
    if (!email.includes("@")) {
      setError("Invalid Email");
      return;
    }
    if (org.trim().length<=3) {
      setError("Invalid Organization");
      return;
    }
    if (phone.trim().length<=9) {
      setError("Invalid Phone number");
      return;
    }
    if (VolNo<=0) {
      setError("Invalid No. of Voluteers Needed");
      return;
    }
    const start = new Date(sdate);
    const end = new Date(edate);
    if(end<start){
      setError("Invalid Start and End date");
      return;
    }
    if (address.trim().length===0){
      setError("Address cannot be empty");
      return;
    }
    if (campHead.trim().length<=2){
      setError("Invalid Campaign Head Name");
      return;
    }

    const newUser={
      organization:org,
      email:email,
      campaignHead:campHead,
      volunteersNeeded: VolNo,
      campaignName:name,
      campaignType:type,
      startDate:sdate,
      endDate:edate,
      address:address,
      contactInfo:phone,
      termsNConditionsFileUrl:"",//will be updated soon
      campaignProfileImageUrl:"" //will be updated soon
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
          <h1>AddCampaign</h1>
          <form className={classes.form}>
          <div>
              <input type='text' onChange={onNameChange} required placeholder="Name of the campaign"/>
            </div>
          <div>
              <input type='text' onChange={onTypeChange} required placeholder="Campaign Type"/>
            </div>
            <div  >
              <input type='email' onChange={onEmailChange} required placeholder="Enter Email"/>
            </div>
            <div  >
              <input type='text' onChange={onOrgNameChange} required placeholder="Organization Name"/>
            </div>
            <div  >
              <input type='text' onChange={onCampHeadChange} required placeholder="Campaign Head Name"/>
            </div>
            <div >
              <input type='text' onChange={onPhoneChange} required placeholder="Contact Number"/> 
            </div>
            <div >
              <input type='number' onChange={onVolNoChange} required placeholder="Volunteers Needed"/> 
            </div>
            <div  >
              <input type='text' onChange={onAddressChange} required placeholder="Enter Address"/>
            </div>
            <div >
              Start Date:<input type='date' onChange={ onSdateChange} style={{width:"55%"}} required/>
            </div>
            <div >
              End Date:<input type='date' onChange={ onEdateChange} style={{width:"55%"}} required/>
            </div>
            <div>
              Description File:<input type='file' className={classes.file} style={{width:"55%"}} />
            </div>
            <div>
              Campaign Profile:<input type='file' className={classes.file} style={{width:"55%"}} />
            </div>
            <button type="submit" onClick={insertCamp}>Add Campaign</button>
          </form>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
        </div>
      </div>
  );
};

export default AddCampaign;
