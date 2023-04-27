import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarDropdownItem from "./NavbarDropdownItem";

/**
 * This is the component that will be used as a header of the application.
 * 
 * @returns {JSX.Element} The JSX element representing the navbar UI.
 */

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex gap-6 px-4 bg-gray-blue-500 w-full h-16 z-10">
      <div className="flex-1 py-1">
        <NavbarItem navigation="/">
          <img
            src="/images/logoMorin.png"
            alt="My Image"
            className=" h-full w-16"
          />
        </NavbarItem>
      </div>
      <div className="flex ml-auto">
        <NavbarDropdownItem userName={"FERNI"}></NavbarDropdownItem>
      </div>
    </nav>
  );
};

export default Navbar;