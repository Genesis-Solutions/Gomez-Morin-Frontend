import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { Button as Button2 } from "@mui/material";
import NavbarItem from "./NavbarItem";
import { disableSideBarState } from "../states/sideBarSlice";
import { logoutUser } from "../queries/queryAuth";
import { clearAccessToken } from "../states/authSlice";

const Sidebar = () => {
  const accessToken = useSelector((state) => state.auth.accessToken);
  const rol = useSelector((state) => state.auth.nameRol);
  const dispatch = useDispatch();

  const onClickHandler = async () => {
    try {
      const response = await logoutUser();
      dispatch(clearAccessToken());
      alert(response.message);
      window.location.href = "/";
    } catch (err) {
      alert(err.response.message);
    }
  };
  return (
    <div className="h-full w-full bg-gray-blue-500 ">
      <Button2
        onClick={() => dispatch(disableSideBarState())}
        style={{ color: "white" }}
        startIcon={<CloseIcon style={{ width: 50, height: 50 }} />}
        className="flex justify-end"
      />

      <div className=" h-full flex flex-col items-center justify-center text-3xl gap-y-9">
        <NavbarItem navigation="/">Información</NavbarItem>

        {accessToken ? (
          <>
            {rol === "S.P" ? (
              <NavbarItem navigation="/requestAll">Solicitudes</NavbarItem>
            ) : (
              <NavbarItem navigation="/request">Mis solicitudes</NavbarItem>
            )}
            <button onClick={onClickHandler} className="text-white">
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavbarItem navigation="/login">Iniciar Sesión</NavbarItem>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
