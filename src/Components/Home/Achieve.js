import React from "react";
import classes from "./Achieve.module.css";
const Achieve=()=>{
    return <>
    <div className={classes.fk}>
        <p className={classes.h}>Achievements</p>
       <div className={classes.b1}>
            <div>
            <p className={classes.p1}>Register and create your profile</p>
                <li>Sign ip  with Google/Mobile number or email id</li>
                <li>Verfiy your mobile number and email address</li>
                <li>Complete your profile i.e..,present className,income,gender and other required fields</li>
                <li>Download Buddy4study app to keep of scholarships</li>
            </div>
            <div className={classes.oval}> 
                <p className={classes.p11}>1000+</p>
                <p className={classes.p112}>Active users</p>
            </div>
        </div>
        <div className={classes.b2}>
            <p className={classes.p1}>Get notified for matching Campaigns</p>
            <ul>
                <li>Based on your profile you will receive matching scholarship email/sms/whatsapp/app notification</li>
                <li>Keep your profile updated to recieve relevant notifications,you can unsubscribe if you don't</li>
                 <li><p className={classes.ss}>want to receive ntifications anymore</p></li>
            </ul>
        </div>
        <div className={classes.oval2}> 
            <p className={classes.p11}>1000+</p>
            <p className={classes.p112}>Campaigns</p>
        </div>

        <div className={classes.b3}>
            <p className={classes.p1}>Apply for Campaigns</p>
            <ul>
                <li>Apply for scholarship with easy to fill form-most of your information will be prefilled</li>
                <li>Upload high-quality documents with all the fields visible</li>
                <li>Regularly monitor your email/mobile for Buddy4Study notifications</li>
                <li>Respond to question in telephonic interviews</li>
            </ul>
        </div>
        <div className={classes.oval3}> 
            <p className={classes.p11}>1000+</p>
            <p className={classes.p112}>Campaigns</p>
        </div>
    </div>    
    </>
}
export default Achieve;
