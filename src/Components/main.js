import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import "react-html5video/dist/styles.css";
import classes from './main.module.css';
import ReactPlayer from 'react-player';
import introVid from './introVid.mp4';


const ReactVideoPlayer = () => {
  return (
     <div className={classes.main}>
    <Video autoplay loop>
      <source src={introVid} type='video/mp4'></source>
    </Video>
    {/* <ReactPlayer
    url='https://www.youtube.com/shorts/cHIlSDckUDU'
    height='720px'
    width= '405px'
    ></ReactPlayer> */}
     </div>
  )
}

export default ReactVideoPlayer;
