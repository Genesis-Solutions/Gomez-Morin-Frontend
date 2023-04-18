import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
