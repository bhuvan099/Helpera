import React,{Fragment} from 'react';
import classes from './BackEnd.module.css';
const FrontEnd=(props)=>{
    return <Fragment>
        <div className={classes.MainDivBeBa}>  
        <div className={classes.itemBeBa}><p style={{fontWeight:'bold',fontSize:'1.2em',textAlign:'center'}}>{props.dev}</p></div>
        <div className={classes.itemBeBa}>
             Introducing {props.dev}, our accomplished backend developer who powers the core functionality and infrastructure of our digital solutions. With a deep understanding of server-side technologies and a passion for efficient and scalable systems, {props.dev} plays a pivotal role in building the backbone of our applications.
             Equipped with expertise in programming languages like Python, Java, or Node.js, {props.dev} is responsible for designing and implementing robust APIs, databases, and server architectures. Their ability to optimize data storage, handle complex algorithms, and ensure data security forms the foundation of our reliable and high-performing systems
        </div>
        </div>
    </Fragment>
};

export default FrontEnd;