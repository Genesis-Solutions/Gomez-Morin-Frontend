import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

/**
 * This component is used for the single web application.
 * In order to show all the components in the routes configured in App.jsx.
 */

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
