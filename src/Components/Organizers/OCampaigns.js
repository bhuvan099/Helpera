import React from "react";
import classes from "./OCampaigns.module.css";
import { getCampaignByCampaignIdApi } from "../../API/api-action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { campaignActions } from "../../redux-store/campaign";
import { authActions } from "../../redux-store/auth";
import Modal from "../UI/Model";

const OCampaigns = (props) => {
  const dispatch=useDispatch();
  const modal=useSelector(state=>state.auth.modal);
const showCampDetails=async()=>{
  dispatch(campaignActions.setCurrentCampaign(props.campaign));
  await dispatch(getCampaignByCampaignIdApi(props.campaign._id));
}
const setEditCampaign=()=>{
  dispatch(campaignActions.setCurrentCampaign(props.campaign));
}
const deleteCampaign=()=>{
  const modal={
    type:"DELETE",
    title:"Confirmation..",
    message:"Are you sure to want to Delete?",
    accept:"Delete",
    id:props.campaign._id,
    reject:"No, wait"
}
dispatch(authActions.setModal(modal));
}
const closeModal=()=>{
  dispatch(authActions.setModal(null));
}
const redirectUrl="/campaigns/"+props.campaign._id;
  return (
      <div className={classes.camps}>
        {modal && <Modal modal={modal} onCloseModal={closeModal}/>}
       <div>
       <p className={classes.name}>{props.campaign.CampaignName}</p>
       <p className={classes.p}>Campaign Head: <span className={classes.org}>{props.campaign.CampHeadName}</span></p>
       <span className={classes.org}>{props.campaign.Email}</span>
       </div>
       <div>
       <Link className={classes.det} to={redirectUrl} onClick={showCampDetails}>Details</Link>
        <Link className={classes.det} onClick={setEditCampaign} style={{backgroundColor:'gray'}} to='/campaign/edit' >Edit</Link>
        <Link className={classes.det} onClick={deleteCampaign} style={{backgroundColor:'red'}}>Delete</Link>
       </div>
      </div>
  );
};

export default OCampaigns;
