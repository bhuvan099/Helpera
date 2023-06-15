import React,{Fragment} from 'react';
import classes from './FrontEnd.module.css';
const FrontEnd=(props)=>{
    return <Fragment>
        <div className={classes.MainDivFeFa}>  
        <div className={classes.itemFeFa}><p style={{fontWeight:'bold',fontSize:'1.2em',textAlign:'center'}}>{props.dev}</p></div>
        <div className={classes.itemFeFa}>
            Meet {props.dev}, our brilliant front-end developer who brings creativity and expertise to our team. With a passion for crafting visually stunning and intuitive user interfaces, {props.dev} plays a vital role in shaping the digital experiences we deliver
            Equipped with a solid foundation in HTML, CSS, and JavaScript,{props.dev} leverages their deep understanding of web technologies to transform our designs into functional and engaging websites. Their proficiency in front-end frameworks such as React allows them to create dynamic and responsive interfaces that captivate our users.
        </div>
        </div>
    </Fragment>
};

export default FrontEnd;