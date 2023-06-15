import React,{Fragment} from 'react';
import {Fade} from 'react-reveal';

const FadeAni=(props)=>{
    return<Fragment>
        <Fade bottom cascade>
            {props.text}
        </Fade>
    </Fragment>
};

export default FadeAni