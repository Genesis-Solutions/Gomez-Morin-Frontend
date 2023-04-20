import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Outlet />
    </div>
  );
};

export default Layout;