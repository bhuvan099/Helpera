import React from "react";
import classes from "./Org_info.module.css";

const Org_info = (props) => {
  return (
    <>
      <div className={classes.maincls1}>
        <h1>Organization info :</h1>
        <br />
        <p>
          <b>Name of the organization: </b>
          {props.user.name}
          <br />
          <br />
          <b>Username: </b>
          {props.user.username}
          <br />
          <br />
          <b>Email Address: </b>
          {props.user.email}
          <br />
          <br />
          <b>Phone No: </b>
          {props.user.phoneNo}
          <br />
          <br />
          <b>Address: </b>
          {props.user.address}
          <br />
          <br />
          <b>Rating: </b>
          {props.user.rating}
          <br />
          <br />
          <b>Number of Reviews: </b>
          {props.user.reviewCount}
        </p>
      </div>
    </>
  );
};

export default Org_info;
