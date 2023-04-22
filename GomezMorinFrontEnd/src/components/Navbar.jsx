import React from "react";
import NavbarItem from "./NavbarItem";
import NavbarDropdownItem from "./NavbarDropdownItem";

/**
 * This is the component that will be used as a header of the application.
 *
 */

const Navbar = () => {
  return (
    <nav className="flex gap-6 px-4 bg-[#4F5579] fixed w-full">
      <div className="flex-1 py-1">
        <NavbarItem navigation="/">
          <img
            src="/img/gomez_morin_blanco.png"
            alt="My Image"
            className=" h-full w-16"
          />
        </NavbarItem>
      </div>
      <div className="flex ml-auto">
        <NavbarItem navigation="/" isLogout={true}>
          Cerrar Sesión
        </NavbarItem>
        <NavbarDropdownItem userName={"FERNI"}></NavbarDropdownItem>
      </div>
    </nav>
  );
};

export default Navbar;