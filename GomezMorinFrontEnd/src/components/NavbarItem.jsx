import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarItem = ({ children, navigation }) => {
  const navigate = useNavigate();

  const currentLink = navigation === window.location.pathname;

  return (
    <button
      className={
        currentLink
          ? "rounded-full p-1 pointer-events-none"
          : "hover:bg-blue-600 rounded-full p-1"
      }
      onClick={() => {
        navigate(navigation);
      }}
    >
      {children}
    </button>
  );
};

export default NavbarItem;
