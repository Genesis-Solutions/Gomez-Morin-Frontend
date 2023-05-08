/**
 * The RequestAll component displays a table with data that represents incoming requests.
 * It includes an image title, a search bar, and a data grid component.
 */
import React from "react";
import ImageTitle from "../../components/ImageTiTle";
import SearchBar from "../../components/SearchBar";
import DataGridComponent from "../../components/DataGridComponent";
import ImageTitleImage from "../../../public/images/ImageTitleImage.png";
import EditModal from "../../components/EditModal";

const RequestAll = () => {
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
      headerName: "",
      width: 200,
      renderCell: () => <EditModal />,
    },
  ];

  // Define rows to be displayed in the data grid component
  const rows = [
    {
      id: 1,
      fecha: "01/01/2021",
      folio: "1",
      tipo: "Persona física",
      evento: "Evento 1",
      nombre: "Nombre 1",
      estatus: "Estatus 1",
      renderCell: () => <EditModal />,
    },
    {
      id: 2,
      fecha: "01/01/2021",
      folio: "1",
      tipo: "Persona moral",
      evento: "-",
      nombre: "Nombre 1",
      estatus: "Estatus 1",
      renderCell: () => <EditModal />,
    },
  ];

  // Render the RequestAll component
  return (
    <div className="flex flex-col items-center gap-9 w-full h-full">
      <div className="h-1/6 w-full">
        {/* Display an image title with the "Bandeja de Entrada" title and an image */}
        <ImageTitle title={"Bandeja de Entrada"} image={ImageTitleImage} />
      </div>
      <div className="w-3/4">
        {/* Display a search bar */}
        <SearchBar />
      </div>
      <div className="flex flex-col justify-center w-full pl-8 pr-8 ">
        {/* Display the data grid component with the columns and rows */}
        <DataGridComponent columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default RequestAll;
