import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import DataGridComponent from "../../components/DataGridComponent";
import { getForm } from "../../queries/queryRequestForm";
import { useSelector } from "react-redux";


/**
 * The PageRequest component displays the request page, including a header, a button to create a new request,
 * and a data grid component to display existing requests.
 */
const PageRequest = () => {
  const navigate = useNavigate();
  const rol = useSelector((state) => state.auth.nameRol);
  const [rows, setRows] = useState([]);
  const userPtr = useSelector((state) => state.auth.id);

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
    <div className={`grid grid-cols-1 lg:grid-cols-6 ${rows.length === 0 ? 'lg:h-full' : ''}`}>
      <div className="lg:col-span-1 lg:bg-sideLeftBG lg:bg-cover lg:bg-center lg:bg-no-repeat"></div>
      <div className="col-span-1 lg:col-span-4 flex justify-between">
        <div className="flex flex-col items-center py-10 w-full md:p-12">
          <Header tittle={"Solicitudes"} />
          <div className="flex py-12 w-52 h-36 md:w-96 md:h-36 md:p-12 md:px-6 ">
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
          <div className="px-6 w-full md:px-0">
            {rows.length > 0 ? (
              <DataGridComponent
                rows={rows}
                columns={rol === "Moral" ? columnsMoral : columns}
              ></DataGridComponent>
            ) : (
              <div className="flex justify-center items-center w-full">
                <p className="text-base md:text-2xl text-gray-400">
                  No hay solicitudes registradas
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="lg:col-span-1 lg:bg-sideRightBG lg:bg-cover lg:bg-center lg:bg-no-repeat"></div>
    </div>
  );
};

export default PageRequest;
