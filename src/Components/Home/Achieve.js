import React from "react";
import classes from "./Achieve.module.css";
import {AiFillCaretRight} from 'react-icons/ai';
const Achieve = () => {
  return (
      <div className={classes.main}>
        <h2>Achievements</h2>
        <div className={classes.item}>
          <div className={classes.achInfo}>
            <p className={classes.p1}>Register and create your profile</p>
            <p><AiFillCaretRight/> Sign ip with Google/Mobile number or email id</p>
            <p><AiFillCaretRight/> Verfiy your mobile number and email address</p>
            <p>
            <AiFillCaretRight/> Complete your profile i.e..,present className,income,gender and
              other required fields
            </p>
            <p><AiFillCaretRight/> Download Buddy4study app to keep of scholarships</p>
          </div>
          <div className={classes.oval}>
            <span>1000+</span>
            <span>Active users</span>
          </div>
        </div>
        <div className={classes.item}>
        <div className={classes.oval}>
            <span>1000+</span>
            <span>Campaigns</span>
          </div>
          <div className={classes.achInfo2}>
            <p className={classes.p1}>Get notified for matching Campaigns</p>
            <p>
            <AiFillCaretRight/> Based on your profile you will receive matching scholarship
              email/sms/whatsapp/app notification
            </p>
            <p><AiFillCaretRight/> 
              Keep your profile updated to recieve relevant notifications,you
              can unsubscribe if you don't
            </p>
            <p><AiFillCaretRight/> want to receive ntifications anymore</p>
          </div>
       
        </div>
        <div className={classes.item}>
          <div className={classes.achInfo}>
            <p className={classes.p1}>Apply for Campaigns</p>
            <p><AiFillCaretRight/> 
              Apply for scholarship with easy to fill form-most of your
              information will be prefilled
            </p>
            <p><AiFillCaretRight/> Upload high-quapty documents with all the fields visible</p>
            <p>
            <AiFillCaretRight/> Regularly monitor your email/mobile for Buddy4Study notifications
            </p>
            <p><AiFillCaretRight/> Respond to question in telephonic interviews</p>
          </div>
          <div className={classes.oval}>
          <span>1000+</span>
          <span>Campaigns</span>
          </div>
        </div>
      </div>
  );
};
export default Achieve;
