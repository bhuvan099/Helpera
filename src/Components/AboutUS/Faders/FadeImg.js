import React,{Fragment} from 'react';
import {Fade} from 'react-reveal';
import imgFile from '../../../Images/Volunteer.jpg';
const FadeImg=()=>{
    return<Fragment>
        <Fade bottom cascade>
            <img src={imgFile} alt=''/>
        </Fade>
    </Fragment>
};

export default FadeImg;