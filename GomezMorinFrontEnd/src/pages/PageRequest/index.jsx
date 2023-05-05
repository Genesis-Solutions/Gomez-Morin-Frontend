import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
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
  const userPtr = localStorage.getItem("id");

  /**
   * Transforms the data received from the server into the appropriate format based on the user's role.
   *
   * @param {Array} datos - The data received from the server.
   * @returns {Array} - The transformed data.
   */
  const transformarDatos = (datos) => {
    if (rol === "Moral") {
      return datos.map((dato, index) => ({
        id: index,
        col1: dato.folio,
        col2: dato.membretatedLetterDoc.substring(
          0,
          dato.membretatedLetterDoc.lastIndexOf(".pdf")
        ),
        col3: dato.status,
      }));
    } else {
      return datos.map((dato, index) => ({
        id: index,
        col1: dato.folio,
        col2: dato.startDay,
        col3: dato.typeEvent,
        col4: dato.nameEvent,
        col5: dato.status,
      }));
    }
  };

  useEffect(() => {
    /**
     * Calls the getForm function to fetch data from the server and updates the component's state with the transformed data.
     */
    getForm(userPtr).then((res) => {
      const transformedData = transformarDatos(res);
      setRows(transformedData);
    });
  }, []);

  const columns = [
    { field: "col1", headerName: "Folio", width: 100 },
    { field: "col2", headerName: "Dia de Inicio", width: 140 },
    { field: "col3", headerName: "Tipo", width: 140 },
    { field: "col4", headerName: "Nombre", width: 180 },
    { field: "col5", headerName: "Estatus", width: 140 },
  ];
  const columnsMoral = [
    { field: "col1", headerName: "Folio", width: 100 },
    { field: "col2", headerName: "Documento Enviado", width: 400 },
    { field: "col3", headerName: "Estatus", width: 140 },
  ];

  /**
   * Render the PageRequest component.
   *
   * @returns {JSX.Element} - The PageRequest component.
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
              columns={rol === "Moral" ? columnsMoral : columns}
            ></DataGridComponent>
          </div>
        </div>
      </div>
      <div className="h-full col-span-1 bg-sideRightBG bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
};

export default PageRequest;
