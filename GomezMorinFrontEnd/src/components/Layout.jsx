import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * This component is used for the single web application.
 * In order to show all the components in the routes configured in App.jsx.
 * 
 * @returns {JSX.Element} The JSX element representing the layout UI.
 */

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col space-y-20">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;