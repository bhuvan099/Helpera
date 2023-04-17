import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <div className={classes.main}>
      <p>Helpera.in</p>
      <input placeholder='Search Campaigns' type='text'/>
      <a href='google.com'>raghavs124</a>
    </div>
  )
}

export default Nav
