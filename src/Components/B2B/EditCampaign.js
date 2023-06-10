import React, { useState } from "react";
import classes from "./EditCampaign.module.css";
import { Link, useNavigate } from "react-router-dom";
import {regExName,regExEmail,regExPhone} from '../../Auth/auth-action';
import { updateCampaignApi } from "../../API/api-action";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../UI/Model";


const EditCampaign = () => {
    const prevCampaign=useSelector(state=>state.campaign.currentCampaign)
    console.log(prevCampaign);
  const [email,setEmail]=useState(prevCampaign.Email);
  const [errmessage,setError]=useState("");
  const [status,setStatus]=useState("Update");
  const [campHead,setCampHead]=useState(prevCampaign.CampHeadName);
  const [org,setOrg]=useState(prevCampaign.OrgName);
  const [VolNo, setVolNo]=useState(prevCampaign.VoluntersNeeded);
  const [name,setname]=useState(prevCampaign.CampaignName);
  const [type,setType]=useState(prevCampaign.CampaignType[0]);
  const [sdate, setSdate]=useState(prevCampaign.StartDate);
  const [edate, setEdate]=useState(prevCampaign.EndDate);
  const [address,setAddress]=useState(prevCampaign.Address);
  const [phone,setPhone]=useState(prevCampaign.ContactNo);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const modal=useSelector(state=>state.auth.modal);
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
  const redirectToHome=()=>{
    navigate('/')
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
    setStatus("Updating...");
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
      VolunteersJoined:prevCampaign.VolunteersJoined,
      comment:prevCampaign.comment,
      image_asset_id:prevCampaign.image_asset_id,
      image_public_id:prevCampaign.image_public_id,
      image_url:prevCampaign.image_url,
      CreatedBYId:prevCampaign.CreatedBYId
    }
    const urlId=prevCampaign._id;
    await dispatch(updateCampaignApi(newCampaign,urlId));
    setStatus("Update")
}
  return (
      <div className={classes.main}>
        {modal && modal.type==="UPDATE_CAMPAIGN" && <Modal onCloseModal={redirectToHome} modal={modal} />}
        <div className={classes.c}>
          <h1>Edit Campaign</h1>
          <form className={classes.form}>
          <div>
             Campaign Name: <input type='text' value={name} onChange={onNameChange} required placeholder="Name of the campaign"/>
            </div>
          <div>
              Campaign Type:<input type='text' value={type} onChange={onTypeChange} required placeholder="Campaign Type"/>
            </div>
            <div  >
             Email: <input type='email' value={email} onChange={onEmailChange} required placeholder="Enter Email"/>
            </div>
            <div  >
             Organization: <input type='text' value={org} onChange={onOrgNameChange} required placeholder="Organization Name"/>
            </div>
            <div  >
            Campaign Head:  <input type='text' value={campHead} onChange={onCampHeadChange} required placeholder="Campaign Head Name"/>
            </div>
            <div >
             Contact: <input type='text' value={phone} onChange={onPhoneChange} required placeholder="Contact Number"/> 
            </div>
            <div >
              Volunters Needed:<input type='number' value={VolNo} onChange={onVolNoChange} required placeholder="Volunteers Needed"/> 
            </div>
            <div  >
             Address: <input type='text' value={address} onChange={onAddressChange} required placeholder="Enter Address"/>
            </div>
            <div >
              Start Date:<input type='date' value={sdate} onChange={ onSdateChange} required/>
            </div>
            <div >
              End Date:<input type='date' value={edate} onChange={ onEdateChange}  required/>
            </div>
            {/* <div>
              Description File:<input type='file' className={classes.file} style={{width:"55%"}} />
            </div>
            <div>
              Campaign Profile:<input type='file' className={classes.file} style={{width:"55%"}} />
            </div> */}
            <button type="submit" onClick={insertCamp}>Update</button>
          {errmessage && <p className={classes.err}>{errmessage}</p>}
          </form>
        </div>
      </div>
  );
};

export default EditCampaign;
