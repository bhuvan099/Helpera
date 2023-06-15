import React,{Fragment,useState} from 'react';
import classes from './DropDownMenu.module.css'

const DropDownMenu=(props)=>{
    const [drop,setDrop]=useState(false);
    const dropHandler=()=>{
        setDrop(!drop);
    }

    const FrontHandler=()=>{
        props.onCollectVal(0);
        setDrop(!drop);
    }
    const BackHandler=()=>{
        props.onCollectVal(1);
        setDrop(!drop);
    }
    const TestHandler=()=>{
        props.onCollectVal(2);
        setDrop(!drop);
    }
    return <Fragment>
        <div className={classes.dropdown}>
            <div className={classes.dropdownbtn} onClick={dropHandler}>
            Our Team<i className="fas fa-caret-down"></i>
            </div>
                {drop &&( 
                <div className={classes.dropdownContainer}>
                    <div className={classes.dropdownitem} onClick={FrontHandler}>
                           FrontEnd
                    </div>
                    <div className={classes.dropdownitem} onClick={BackHandler}>
                           BackEnd
                    </div>
                    <div className={classes.dropdownitem} onClick={TestHandler}>
                           Testing
                    </div>
                </div>
                )}
            </div>
    </Fragment>
};

export default DropDownMenu;