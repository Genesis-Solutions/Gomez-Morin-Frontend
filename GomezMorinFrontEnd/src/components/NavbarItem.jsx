import React from "react";
import { useNavigate } from "react-router-dom";

/**
 * This is a component for an item of the navbar.
 *
 * @param {string} children - The html element that will be passed through the component.
 * @param {string} navigation - The path that will navigate to.
 * @param {boolean} isLoggedOut - The state that confirms or denies if the user is logged out.
 */
const NavbarItem = ({ children, navigation, isLoggedOut }) => {
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