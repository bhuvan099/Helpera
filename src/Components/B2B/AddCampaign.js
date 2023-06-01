import React, { useState } from "react";
import classes from "./AddCampaign.module.css";
import { Link } from "react-router-dom";
import img from '../../Images/HELPERA_ROUND_1.png';
import {regExName,regExEmail,regExPhone} from '../../Auth/auth-action';
import { addCampaignHandler } from "../../API/api-action";
import { useDispatch } from "react-redux";


const AddCampaign = () => {
  const [email,setEmail]=useState("");
  const [errmessage,setError]=useState("");
  const [campHead,setCampHead]=useState("");
  const [org,setOrg]=useState("");
  const [VolNo, setVolNo]=useState();
  const [name,setname]=useState("");
  const [type,setType]=useState("");
  const [sdate, setSdate]=useState();
  const [edate, setEdate]=useState();
  const [address,setAddress]=useState("");
  const [phone,setPhone]=useState("");
  const dispatch=useDispatch();

  const onEmailChange=(event)=>{
    if (errmessage==="Invalid Email") {
      setError(null);
    }
    setEmail(event.target.value);
  }
  const onCampHeadChange=(event)=>{
    if (errmessage==="Invalid Campaign Head Name") {
      setError(null);
    }
    setCampHead(event.target.value);
  }
  const onOrgNameChange=(event)=>{
    if (errmessage==="Invalid Organization") {
      setError(null);
    }
    setOrg(event.target.value);
  }
  const onVolNoChange=(event)=>{
    if (errmessage==="Invalid No. of Voluteers Needed") {
      setError(null);
    }
     setVolNo(event.target.value);
  }
  const onNameChange=(event)=>{
    if (errmessage==="Enter valid Campaign name") {
      setError(null);
    }
    setname(event.target.value);
  }
  const onTypeChange=(event)=>{
    if (errmessage==="Enter valid Campaign type") {
      setError(null);
    }
    setType(event.target.value);
  }
  const  onSdateChange=(event)=>{
     setSdate(event.target.value);
  }
  const  onEdateChange=(event)=>{
    if (errmessage==="Invalid Start and End date" || errmessage==="Cannot add ended campaign") {
      setError(null);
    }
     setEdate(event.target.value);
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
  const insertCamp=async(event)=>{
    event.preventDefault();
    if (!regExName.test(name)) {
      setError("Enter valid Campaign name");
      return;
    }
    if (!regExName.test(type)) {
      setError("Enter valid Campaign type");
      return;
    }
    if (!regExEmail.test(email)) {
      setError("Invalid Email");
      return;
    }
    if (!regExName.test(org)) {
      setError("Invalid Organization");
      return;
    }
    if (!regExPhone.test(phone)) {
      setError("Invalid Phone number");
      return;
    }
    if (VolNo<=0 || VolNo>100) {
      setError("Invalid No. of Voluteers Needed");
      return;
    }
    const start = new Date(sdate);
    const end = new Date(edate);
    const today=new Date();
    if(end<start){
      setError("Invalid Start and End date");
      return;
    }
    if(end<today){
      setError("Cannot add ended campaign");
      return;
    }
    if (address.trim().length===0){
      setError("Address cannot be empty");
      return;
    }
    if (!regExName.test(campHead)){
      setError("Invalid Campaign Head Name");
      return;
    }

    const newCampaign={
      OrgName:org,
      Email:email,
      CampHeadName:campHead,
      VoluntersNeeded: VolNo,
      CampaignName:name,
      CampaignType:type,
      StartDate:sdate,
      EndDate:edate,
      Address:address,
      ContactNo:phone,
      termsNConditionsFileUrl:"",//will be updated soon
      campaignProfileImageUrl:"" //will be updated soon
    }
    await dispatch(addCampaignHandler(newCampaign));

}
  return (
      <div className={classes.main}>
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
            {/* <div>
              Description File:<input type='file' className={classes.file} style={{width:"55%"}} />
            </div>
            <div>
              Campaign Profile:<input type='file' className={classes.file} style={{width:"55%"}} />
            </div> */}
            <button type="submit" onClick={insertCamp}>Add Campaign</button>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
          </form>
        </div>
      </div>
  );
};

export default AddCampaign;
