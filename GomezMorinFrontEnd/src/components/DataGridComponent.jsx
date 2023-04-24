import React from "react";
import { DataGrid } from "@mui/x-data-grid";

/**
 * Rows and columns must have this format
 * TODO: Remove this comment when the component is implemented in all its pages
 */
// const rows = [
//   { id: 1, col1: 'Hello', col2: 'World' },
//   { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//   { id: 3, col1: 'MUI', col2: 'is Amazing' },
// ];

// const columns = [
//   { field: 'col1', headerName: 'Column 1', width: 150 },
//   { field: 'col2', headerName: 'Column 2', width: 150 },
// ];

/**
 * This component renders a Material-UI DataGrid component with rows and columns provided as props.
 * @param {Array} rows - The array of rows to be displayed in the grid.
 * @param {Array} columns - The array of columns to be displayed in the grid.
 *
 * @returns {JSX.Element} - The DataGrid component with provided rows and columns.
 */
const DataGridComponent = ({ rows, columns }) => {
  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default DataGridComponent;
