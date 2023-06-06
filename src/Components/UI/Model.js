import React from 'react';
import classes from './Model.module.css'
const Modal=(props)=>{
        return <>
        <div className={classes.modalBackGround}>
                <div className={classes.modalContainer}>
                        <div className={classes.title}>
                                <p>{props.title}</p>
                        </div>
                        <div className={classes.body}>
                                <p>{props.message}</p>
                        </div>
                        <div className={classes.footer}>
                        <button className={classes.b2} type='submit'>{props.accept}</button>
                        <button onClick={props.onCloseModal} type='reset' className={classes.b1}>{props.reject}</button>
                        </div>
                </div>
        </div>
        </>

}

export default Modal;