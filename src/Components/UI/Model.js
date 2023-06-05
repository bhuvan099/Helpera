import React from 'react';
import classes from './Model.module.css'
const Modal=(props)=>{

        return <>
        <div className={classes.modalBackGround}>
                <div className={classes.modalContainer}>
                        <div className={classes.title}>
                                <h1>This Going To Be Your Title Field</h1>
                        </div>
                        <hr/>
                        <div className={classes.body}>
                                <p>This The Body Of the Modal</p>
                        </div>
                        <hr/>
                        <div className={classes.footer}>
                                <button onClick={()=>{props.onCloseModal(false)}} className={classes.b1}>Cancel</button>

                                <button className={classes.b2}>continue</button>
                        </div>
                </div>
        </div>
        </>

}

export default Modal;