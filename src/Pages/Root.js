import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Navbar/Nav";

const Root = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
