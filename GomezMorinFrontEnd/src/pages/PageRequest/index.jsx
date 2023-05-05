import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DataGridComponent from "../../components/DataGridComponent";
import { getForm } from "../../queries/queryRequestForm";

/**
 * The PageRequest component displays the request page, including a header, a button to create a new request,
 * and a data grid component to display existing requests.
 */

const PageRequest = () => {
  const navigate = useNavigate();
  const rol = localStorage.getItem("nameRol");
  const [rows, setRows] = useState([]);
  const userPtr = localStorage.getItem("userPtr");

  function transformarDatos(datos) {
    return datos.map((dato) => ({
      row1: dato.folio,
      row2: dato.startDay,
      row3: dato.email,
      row4: dato.nameEvent,
      row5: dato.status,
    }));
  }

  useEffect(() => {
    async function fetchData() {

      const data = await getForm(userPtr);
      console.log("data");
      const transformedData = transformarDatos(data);
      setRows(transformedData);
    }
    fetchData();
  }, []);

  const columns = [
    { field: "col1", headerName: "Folio", width: 100 },
    { field: "col2", headerName: "Dia de Inicio", width: 140 },
    { field: "col3", headerName: "Tipo", width: 140 },
    { field: "col4", headerName: "Nombre", width: 180 },
    { field: "col5", headerName: "Estatus", width: 140 },
  ];

  /**
   * Render the PageRequest component.
   *
   * @returns The PageRequest component.
   */
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
              /**
               * Navigate to the appropriate form based on the user's role when the button is clicked.
               */
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
