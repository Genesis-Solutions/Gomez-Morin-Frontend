/**
 * The RequestAll component displays a table with data that represents incoming requests.
 * It includes an image title, a search bar, and a data grid component.
 */
import React, { useEffect, useState } from "react";
import ImageTitle from "../../components/ImageTitle";
import DataGridComponent from "../../components/DataGridComponent";
import ImageTitleImage from "../../../public/images/ImageTitleImage.png";
import EditModal from "../../components/EditModal";
import { getAllForms } from "../../queries/queryRequestForm";
import { useSelector, useDispatch } from "react-redux";
import { setRows } from "../../states/formSlice";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

const RequestAll = () => {
  const userId = useSelector((state) => state.auth.id);
  const rows = useSelector((state) => state.form.rows) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Define columns to be displayed in the data grid component
  const columns = [
    { field: "fecha", headerName: "Fecha", width: 200 },
    { field: "folio", headerName: "Folio", width: 200 },
    { field: "tipo", headerName: "Tipo", width: 200 },
    { field: "evento", headerName: "Evento", width: 200 },
    { field: "nombre", headerName: "Nombre", width: 200 },
    { field: "estatus", headerName: "Estatus", width: 200 },
    {
      field: "actions",
      headerName: "Editar",
      width: 200,
      renderCell: ({ row }) => (
        <EditModal
          idForm={row.id}
          folio={row.folio}
          estatus={row.estatus}
          userId={userId}
        />
      ),
    },
    {
      field: "details",
      headerName: "Detalles",
      width: 200,
      renderCell: ({ row }) => (
        <button
          onClick={() => {
            navigate(`/requestDetail/${row.id}/${userId}`);
          }}
        >
          {" "}
          <MoreHorizIcon />
        </button>
      ),
    },
  ];

  // Define rows to be displayed in the data grid component

  const transformData = (data) => {
    return data.map((item) => ({
      id: item._id,
      fecha: item.requestDate,
      folio: item.folio,
      tipo: item.membretatedLetterDoc ? "Persona moral" : "Persona física",
      evento: item.membretatedLetterDoc ? "-" : item.typeEvent,
      nombre: item.membretatedLetterDoc
        ? item.membretatedLetterDoc
        : item.nameEvent,
      estatus: item.status,
    }));
  };

  useEffect(() => {
    /**
     * Calls the getAllForms function to fetch data from the server and updates the component's state with the transformed data.
     */
    getAllForms(userId).then((res) => {
      const data = transformData(res);
      dispatch(setRows(data));
    });
  }, []);

  // Render the RequestAll component
  return (
    <div className="flex flex-col items-center gap-9 w-full h-full mb-4 md:mb-10">
      <div className="h-1/6 w-full ">
        {/* Display an image title with the "Bandeja de Entrada" title and an image */}
        <ImageTitle title={"Bandeja de Entrada"} image={ImageTitleImage} />
      </div>
      <div className="flex flex-col justify-center w-full px-6 ">
        {/* Display the data grid component with the columns and rows */}
        <DataGridComponent columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default RequestAll;
