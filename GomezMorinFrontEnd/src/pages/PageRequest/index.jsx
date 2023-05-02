import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const PageRequest = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex justify-between pt-16 ">
      <div className="flex flex-col items-center py-10 w-full h-full p-12 ">
        <Header tittle={"Mis solicitudes"} />
        <div className="sm:flex py-12 w-full h-full p-12 sm:px-6 ">
          <Button
            text={"Nueva Solicitud"}
            type={"button"}
            colorBg={"bg-light-blue-500"}
            colorHoverBg={"hover:bg-light-blue-700"}
            action={() => {
              navigate("/request-form");
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default PageRequest;
