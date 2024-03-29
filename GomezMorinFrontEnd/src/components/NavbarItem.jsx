import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { disableSideBarState } from "../states/sideBarSlice";

/**
 * This is a component for an item of the navbar.
 *
 * @param {string} children - The html element that will be passed through the component.
 * @param {string} navigation - The path that will navigate to.
 * @param {boolean} isLoggedOut - The state that confirms or denies if the user is logged out.
 * @returns {JSX.Element} The JSX element displaying a navbar item.
 */

const NavbarItem = ({ children, navigation, isLoggedOut }) => {
  const navigate = useNavigate();

  const currentLink = navigation === window.location.pathname;
  const dispatch = useDispatch();

  return (
    <button
      className={
        currentLink
          ? " text-gray-500 rounded-full p-1 pointer-events-none"
          : "text-white hover:bg-blue-600 rounded-full p-1"
      }
      onClick={() => {
        dispatch(disableSideBarState());
        navigate(navigation);
      }}
    >
      {children}
    </button>
  );
};

export default NavbarItem;
