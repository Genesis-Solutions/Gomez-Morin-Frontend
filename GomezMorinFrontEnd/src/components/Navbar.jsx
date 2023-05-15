import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import NavbarDropdownItem from "./NavbarDropdownItem";
import { useSelector, useDispatch } from "react-redux";
import { Button as Button2 } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { setSideBarState } from "../states/sideBarSlice";
/**
 * This is the component that will be used as a header of the application.
 *
 * @returns {JSX.Element} The JSX element representing the navbar UI.
 */

const Navbar = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const userName = useSelector((state) => state.auth.userName);
  const rol = useSelector((state) => state.auth.nameRol);
  const open = useSelector((state) => state.sidebar.sideBarState);
  const dispatch = useDispatch();
  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-500">
          <Sidebar />)
        </div>
      )}

      {!open && (
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
          <div className=" flex md:gap-4 ml-auto">
            <div className="flex flex-center md:hidden text-2xl">
              <Button2
                onClick={() => dispatch(setSideBarState())}
                style={{ color: "white" }}
                startIcon={<MenuIcon style={{ width: 30, height: 30 }} />}
              />
            </div>
            <div className="hidden md:flex flex-center">
              <NavbarItem navigation="/">Información</NavbarItem>
            </div>

            {accessToken ? (
              <>
                {rol === "S.P" ? (
                  <div className="hidden md:flex flex-center">
                    <NavbarItem navigation="/requestAll">
                      Solicitudes
                    </NavbarItem>
                  </div>
                ) : (
                  <div clasName="hidden md:flex flex-center">
                    <NavbarItem navigation="/request">
                      Mis solicitudes
                    </NavbarItem>
                  </div>
                )}
                <div clasName="hidden md:flex flex-center">
                  <NavbarDropdownItem userName={userName} />
                </div>
              </>
            ) : (
              <div className="hidden md:flex flex-center">
                <NavbarItem navigation="/login">Iniciar Sesión</NavbarItem>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
