import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";
import { getUserInfoHandler } from "../Auth/auth-action";
import { findAllCampaignApi } from "../API/api-action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Root = () => {
  const dispatch=useDispatch();
useEffect(()=>{
  dispatch(getUserInfoHandler());
  dispatch(findAllCampaignApi());
});
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
