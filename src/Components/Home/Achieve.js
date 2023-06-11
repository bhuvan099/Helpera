import React, { useState } from "react";
import classes from "./Achieve.module.css";
import {AiFillCaretRight} from 'react-icons/ai';
import {FaUsers} from 'react-icons/fa';
import {BsFillTrophyFill} from 'react-icons/bs';
import {CgOrganisation} from 'react-icons/cg';
import { useEffect } from "react";
let U=1;
const Achieve = () => {

  return (
      <div className={classes.main}>
        <h2>Achievements</h2>
        <div className={classes.item}>
          <div className={classes.achInfo}>
            <p className={classes.p1}>Register and create your profile</p>
            <p><AiFillCaretRight/> Sign in with email id and password</p>
            <p>
            <AiFillCaretRight/> Complete your profile while signUp. </p>
            <p><AiFillCaretRight/> Create Account on Helpera and volunteer campaigns.</p>
          </div>
          <div className={classes.oval}>
            <FaUsers size='3rem' style={{color:'yellow'}} />
         <b>524+</b>
            <span>Active users</span>
          </div>
        </div>
        <div className={classes.item}>
        <div className={classes.oval}>
        <CgOrganisation size='3rem' style={{color:'yellow'}} />
            <b>75+</b>
            <span>Organizations</span>
          </div>
          <div className={classes.achInfo2}>
            <p className={classes.p1}>Get notified for matching Campaigns</p>
            <p>
            <AiFillCaretRight/> Based on your profile you will receive matching campaign
              email/sms/whatsapp/app notification.
            </p>
            <p><AiFillCaretRight/> 
              Keep your profile updated to recieve relevant notifications,you
              can unsubscribe if you don't.
            </p>
          </div>
       
        </div>
        <div className={classes.item}>
          <div className={classes.achInfo}>
            <p className={classes.p1}>Join Available Campaigns</p>
            <p><AiFillCaretRight/> Join Campaigns with a single button click.
            </p>
            <p>
            <AiFillCaretRight/> Regularly monitor your email/mobile for Helpera notifications
            </p>
            <p><AiFillCaretRight/> Respond to Feedback form based on your experience.</p>
          </div>
          <div className={classes.oval}>
          <BsFillTrophyFill size='3rem' style={{color:'yellow'}} />
          <b>100+</b>
          <span>Campaigns</span>
          </div>
        </div>
      </div>
  );
};
export default Achieve;
