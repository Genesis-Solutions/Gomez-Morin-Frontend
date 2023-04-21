import React from 'react'
import { DataGrid} from '@mui/x-data-grid';

/**
 * rows y columns deben de tener este formato
 * TODO: Eliminar este comentario cuando se implemente el componente en todas sus páginas
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

const DataGridComponent = ({rows, columns}) => {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
}

export default DataGridComponent