import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TermTable({ terms, editId, onEdit, onDelete }) {
  const columns = [
    { field: 'name', headerName: <strong style={{ color: 'black' }}>Name</strong>, width: 150, flex: 1, align: 'left', editable: true },
    { field: 'channel', headerName: <strong style={{ color: 'black' }}>Id</strong>, width: 150, flex: 1, align: 'left' },
    
    {
      field: 'edit',
      headerName: <strong>Edit</strong>,
      width: 150,
      flex: 1,
      align: 'left',
      renderCell: (params) => (
        <Button onClick={() => onEdit(params.id)} style={{ color: 'black' }}>
          <EditIcon />
        </Button>
      ),
    },
    {
      field: 'delete',
      headerName: <strong>Delete</strong>,
      width: 150,
      flex: 1,
      align: 'center',
      renderCell: (params) => (
        <IconButton onClick={() => onDelete(params.id)} style={{ color: 'black' }}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  const rows = terms.map((term) => ({
    id: term.identifier,
    name: term.name,
    channel:term.channel
    // Add more row data as needed for your specific use case
  }
  ))

  return (
    <div style={{ height: 700, width: '80%', backgroundColor: '#e1f5fe', color: 'black' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

export default TermTable;
