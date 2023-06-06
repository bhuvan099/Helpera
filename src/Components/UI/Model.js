import React from 'react';
import classes from './Model.module.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../redux-store/auth';
import { joinCampaignApi } from '../../API/api-action';
const Modal=(props)=>{
        const navigate=useNavigate();
        const dispatch=useDispatch();
        const acceptHandler=async()=>{
                if(props.modal.type==="ADD_CAMPAIGN"){
                    window.location.reload();
                }else if(props.modal.type==="LOGIN"){
                    navigate('/login');
                    dispatch(authActions.setModal(null)); 
                }else if(props.modal.type==="NOT_ALLOWED"){
                    navigate('/');
                    dispatch(authActions.setModal(null)); 
                }else if(props.modal.type==="JOIN"){
                    await dispatch(joinCampaignApi(props.modal.id));
                }else if(props.modal.type==="JOINED"){
                        navigate('/')
                        dispatch(authActions.setModal(null)); 
                 }
                return
        }
        return <>
        <div className={classes.modalBackGround}>
                <div className={classes.modalContainer}>
                        <div className={classes.title}>
                                <p>{props.modal.title}</p>
                        </div>
                        <div className={classes.body}>
                                <p>{props.modal.message}</p>
                        </div>
                        <div className={classes.footer}>
                        <button onClick={acceptHandler} className={classes.b2} type='submit'>{props.modal.accept}</button>
                        <button onClick={props.onCloseModal} type='reset' className={classes.b1}>{props.modal.reject}</button>
                        </div>
                </div>
        </div>
        </>

}

export default Modal;