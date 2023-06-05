import React from "react";
import classes from "./CampaignComponent.module.css";
import prof from "../../Images/camp prof.jpeg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { joinCampaignApi,getCampaignByCampaignIdApi } from "../../API/api-action";


const CampaignComponent = (props) => {
const dispatch=useDispatch();
const user=useSelector(state=>state.auth.user);
const showCampDetails=async()=>{
  await dispatch(getCampaignByCampaignIdApi(props.id));
}
  const joinCampaignHandler=async(event)=>{
    event.preventDefault();
    if(!user){
      alert("Login first");
      return;
    }
    if(user && user.role!==16){
      alert("You are not allowed to join");
      return;
    }
    const conf=window.confirm("confirm joining");    
    if(conf){
      await dispatch(joinCampaignApi(props.id))
    }
    return;
  }
  return (
    <div className={classes.main}>
      <img src={prof} alt="loading"></img>
      <div className={classes.sp}></div>
      <div className={classes.inf}>
        <p>
          <b>Campaign: </b>
          {props.name}
        </p>
        <p>
          <b>Organization: </b>
          {props.org}
        </p>
        <p>
          <b>Address: </b>
          {props.address}
        </p>
        <p>
          <b>Contact: </b>
          {props.contact}
        </p>
      </div>
      <div className={classes.action}>
          <Link className={classes.det} to={props.id} onClick={showCampDetails}>Details</Link>
          <button className={classes.join} onClick={joinCampaignHandler}>Join</button>
      </div>
      <div className={classes.ac2}></div>
    </div>
  );
};

export default CampaignComponent;
