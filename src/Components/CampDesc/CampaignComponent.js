import React from "react";
import classes from "./CampaignComponent.module.css";
import prof from "../../Images/camp prof.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCampaignByCampaignIdApi } from "../../API/api-action";
import { campaignActions } from "../../redux-store/campaign";
import { authActions } from "../../redux-store/auth";
import Modal from "../UI/Model";


const CampaignComponent = (props) => {
const dispatch=useDispatch();
const user=useSelector(state=>state.auth.user);
const modal=useSelector(state=>state.auth.modal);
const showCampDetails=async()=>{
  dispatch(campaignActions.setCurrentCampaign(props.campaign));
  await dispatch(getCampaignByCampaignIdApi(props.campaign._id));
}
const closeModal=()=>{
  dispatch(authActions.setModal(null));
}
  const joinCampaignHandler=async(event)=>{
    event.preventDefault();
    if(!user){
      const modal={
        type:"LOGIN",
        title:"Authentication Error",
        message:"Please login or signup first to join.",
        accept:"Login",
        reject:"Cancel"
    }
    dispatch(authActions.setModal(modal));
      return;
    }
    if(user && user.role!==16){
      const modal={
        type:"NOT_ALLOWED",
        title:"ROLE MISMATCH",
        message:"You're not allowed as you're not a volunteer.",
        accept:"Return to Home",
        reject:"Ok..!!"
    }
    dispatch(authActions.setModal(modal));
      return;
    }
    const modal={
      type:"JOIN",
      title:"Confirmation...!!",
      message:`Click 'Confirm' to join campaign ${props.campaign.CampaignName}`,
      accept:"Confirm",
      id:props.campaign._id,
      reject:"Cancel"
  }
  dispatch(authActions.setModal(modal)); 
    return;
  }
  return (
    <div className={classes.main}>
        {modal && <Modal onCloseModal={closeModal} modal={modal} />}
      <img src={prof} alt="loading"></img>
      <div className={classes.sp}></div>
      <div className={classes.inf}>
        <p>
          <b>Campaign: </b>
          {props.campaign.CampaignName}
        </p>
        <p>
          <b>Organization: </b>
          {props.campaign.OrgName}
        </p>
        <p>
          <b>Address: </b>
          {props.campaign.Address}
        </p>
        <p>
          <b>Contact: </b>
          {props.campaign.ContactNo}
        </p>
      </div>
      <div className={classes.action}>
          <Link className={classes.det} to={props.campaign._id} onClick={showCampDetails}>Details</Link>
          <button className={classes.join} onClick={joinCampaignHandler}>Join</button>
      </div>
      <div className={classes.ac2}></div>
    </div>
  );
};

export default CampaignComponent;
