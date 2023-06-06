import React from 'react';
import classes from './Sideb.module.css';
import { Form } from 'react-router-dom';
import Modal from '../UI/Model';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../redux-store/auth';

const Sideb=(props)=>{
    const modal=useSelector(state=>state.auth.modal);
    const dispatch=useDispatch();
    const handlePersonal=()=>{
        props.onCollectInd(1)
    };
    const handleCampaigns=()=>{
        props.onCollectInd(2);
    };
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
    // const handleApplied=()=>{
    //     props.onCollectInd(3)
    // };

    // const handleApproved=()=>{

    //     props.onCollectInd(4)
    // };

    const handleFeedback=()=>{
        props.onCollectInd(5)
    };

    return <>

        <div className={classes.pers}>

            <div className={classes.item}><button className={classes.but} onClick={handlePersonal}>Personal Info.</button></div>

            <div className={classes.item}><button className={classes.but} onClick={handleCampaigns}>Campaigns</button></div>
{/* 
            <div className={classes.item}><button className={classes.but} onClick={handleApplied}>Applied</button></div>

            <div className={classes.item}><button className={classes.but} onClick={handleApproved}>Approved</button></div> */}

            <div className={classes.item}><button className={classes.but} onClick={handleFeedback}>Feedback</button></div>
            <div className={classes.item}><button className={classes.but}>Rating: {props.user.rating}</button></div>

            <div className={classes.item}>
            <button className={classes.but} onClick={logoutHandler}>Logout</button>
            {modal && modal.type==="LOGOUT" && <Form action='/logout' method="post">
               <Modal title={modal.title} onCloseModal={closeModal} message={modal.message} accept={modal.accept} reject={modal.reject} />
                </Form>}
            </div>

       
        </div>

</>
}
export default Sideb;

