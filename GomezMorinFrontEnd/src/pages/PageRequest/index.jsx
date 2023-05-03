import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PageRequest = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("nameRol");
  return (
    <div className="grid grid-cols-6 w-screen h-screen">
      <div className="h-full col-span-1 bg-sideLeftBG bg-cover bg-center bg-no-repeat"></div>
      <div className="col-span-4 h-full flex justify-between pt-16 ">
        <div className="flex flex-col items-center py-10 w-full h-full p-12 ">
          <Header tittle={"Mis solicitudes"} />
          <div className="sm:flex py-12 w-96 h-36 p-12 sm:px-6 ">
            <Button
              text={"Nueva Solicitud"}
              type={"button"}
              colorBg={"bg-light-blue-500"}
              colorHoverBg={"hover:bg-light-blue-700"}
              action={() => {
                if (rol === "Moral") {
                  navigate("/request-formMoral");
                } else if (rol === "Física") {
                  navigate("/request-form");
                }
              }}
            ></Button>
          </div>
        </div>
      </div>
      <div className="h-full col-span-1 bg-sideRightBG bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default PageRequest;
