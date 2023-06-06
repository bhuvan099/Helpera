import React from "react";
import classes from "./OSideb.module.css";
import { Form } from "react-router-dom";
const OSideb = (props) => {

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
            onClick={()=>set2()}
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
          <button className={classes.but1} >
            Feedback
          </button>
        </div>

        <div className={classes.item}>
         <Form action='/logout' method="post"><button className={classes.but1}>
            Logout
          </button></Form>
        </div>

        <div className={classes.item}>
          <button className={classes.but1}>
            Rating: {props.user.rating}
          </button>
        </div>
      </div>
    </>
  );
};
export default OSideb;
