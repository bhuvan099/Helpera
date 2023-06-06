import React from "react";
import classes from "./OSideb.module.css";
import { Form } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux-store/auth";
import Modal from "../UI/Model";
const OSideb = (props) => {
  const modal=useSelector(state=>state.auth.modal);
    const dispatch=useDispatch();
  const logoutHandler=()=>{
    const modal={
        type:"LOGOUT",
        title:"Confirmation..",
        message:"Are you sure ?",
        accept:"Logout",
        reject:"No, wait"
    }
    dispatch(authActions.setModal(modal));
}
const closeModal=()=>{
    dispatch(authActions.setModal(null));
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
            <button className={classes.but1} onClick={logoutHandler}>Logout</button>
            {modal && modal.type==="LOGOUT" && <Form action='/logout' method="post">
               <Modal modal={modal} onCloseModal={closeModal}/>
                </Form>}
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
