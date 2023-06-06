import React from 'react';
import classes from '../Organizers/OCampaigns.module.css';
import { Link } from 'react-router-dom';
import { getCampaignByCampaignIdApi } from '../../API/api-action';
import { useDispatch } from 'react-redux';

const Campaigns = (props) =>{
  const dispatch=useDispatch();
      const redirectUrl="/campaigns/"+props.campaign._id;
      const showCampDetails=async()=>{
        await dispatch(getCampaignByCampaignIdApi(props.campaign._id));
      }
    return <div className={classes.camps}>
       <div>
       <p className={classes.name}>{props.campaign.CampaignName}</p>
       <p className={classes.p}>organization: <span className={classes.org}>{props.campaign.OrgName}</span></p>
       <span className={classes.org}>{props.campaign.Email}</span>
       </div>
        <Link className={classes.det} to={redirectUrl} onClick={showCampDetails}>Details</Link>
      </div>
}

export default Campaigns;