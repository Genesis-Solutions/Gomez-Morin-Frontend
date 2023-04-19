import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarDropdownItem from "./NavbarDropdownItem";

const Navbar = () => {
  return (
    <nav className="flex gap-6 px-4 bg-[#4F5579] fixed w-full">
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
