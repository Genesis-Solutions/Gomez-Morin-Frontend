import React from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import DataGridComponent from "../../components/DataGridComponent";

const PageRequest = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("nameRol");
  const rows = [
    { id: 1, col1: "06096", col2: "World", col3: "Aceptado" },
  ];
  const columns = [
    { field: "col1", headerName: "Folio", width: 200 },
    { field: "col2", headerName: "Evento", width: 500 },
    { field: "col3", headerName: "Estatus", width: 200 },
  ];
  return (
    <div className="grid grid-cols-6 w-screen h-screen">
      <div className="h-full col-span-1 bg-sideLeftBG bg-cover bg-center bg-no-repeat"></div>
      <div className="col-span-4 h-full flex justify-between">
        <div className="flex flex-col items-center py-10 w-full h-full p-12 ">
          <Header tittle={"Solicitudes"} />
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
          <div className="w-full">
            <DataGridComponent
              rows={rows}
              columns={columns}
            ></DataGridComponent>
          </div>
        </div>
      </div>
      <div className="h-full col-span-1 bg-sideRightBG bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default PageRequest;
