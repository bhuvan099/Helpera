import React from "react";
import classes from "./OSideb.module.css";
import { getCampaignByCreatorIDApi } from "../../API/api-action";
import { useDispatch } from "react-redux";
const OSideb = (props) => {
  const dispatch=useDispatch();
  const getCampaignByCreatorIDHandler=async()=>{
       await dispatch(getCampaignByCreatorIDApi());
       set2();
  }
  function set1() {
    props.settoggle(() => ({
      t1: true,
    }));
  }
  function set2() {
    props.settoggle(() => ({
      t2: true,
    }));
  }
  function set3() {
    props.settoggle(() => ({
      t3: true,
    }));
  }
  return (
    <>
      <div className={classes.pers}>
        <div className={classes.item}>
          <button
            className={classes.but1}
            onClick={() => set1()}
          >
            Organization Info.
          </button>
        </div>

        <div className={classes.item}>
          <button
            className={classes.but1}
            onClick={getCampaignByCreatorIDHandler}
          >
            Campaigns
          </button>
        </div>

        <div className={classes.item}>
          <button
            className={classes.but1}
            onClick={() => set3()}
          >
            Volunteers
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1}>
            Announcements
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Feedback.html">
            Feedback
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Logout.html">
            Logout
          </button>
        </div>

        <div className={classes.item}>
          <button className={classes.but1} href="Logout.html">
            Rating: {props.user.rating}
          </button>
        </div>
      </div>
    </>
  );
};
export default OSideb;
