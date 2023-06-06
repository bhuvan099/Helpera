import React,{useState} from 'react';
import Modal from './Model';
import classes from './Sample.module.css'

const Sample=()=>{

    const [visible,setVisible]=useState(false);
    return <>
    <div className={classes.MainDivi}>
        <h1> Click On The Open Button To See Modal</h1>
      <div className={classes.butDiv}>  <button onClick={()=>{setVisible(true)}}>Open</button></div>
        {visible && <Modal onCloseModal={setVisible} title={"Confirmation!!!"} message={"This is the message"} accept={"Continue"} reject={"Cancel"} />}
        </div>
    </>

}


export default Sample;



