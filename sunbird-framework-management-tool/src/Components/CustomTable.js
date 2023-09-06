import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function CustomTable({ data, dataType, onEdit, onDelete,type }) {
  const columns = [
    { field: 'name', headerName: <strong style={{ color: 'black' }}>Name</strong>, width: 150, flex: 1, align: 'left', editable: true },
    { field: 'channel', headerName: <strong style={{ color: 'black' }}>Channel</strong>, width: 150, flex: 1, align: 'left' },
    // Add more columns as needed for your specific use case

    {
      field: 'edit',
      headerName: <strong>Edit</strong>,
      width: 150,
      flex: 1,
      align: 'left',
      
      renderCell: (params) => {console.log(params);
        return (<Link to={{
          pathname: `/${type}/editdetails/${params.row.id}`,
          state: { rowData: params.row } // Pass the row data as state to the DetailsPage
        }} style={{ textDecoration: 'none' }}>
        <IconButton onClick={() => onEdit(params.id)} style={{ color: 'black', fontSize: '14px' }}>
          <EditIcon fontSize="small" />
        </IconButton>
        </Link>);
        }
        ,
    },
    {
      field: 'delete',
      headerName: <strong>Delete</strong>,
      width: 150,
      flex: 1,
      align: 'left',
      renderCell: (params) => (
        <div>
          <IconButton onClick={() => handleDeleteClick(params.id)} style={{ color: 'black', padding: '6px', fontSize: '14px' }}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      ),
    },
    {
      field: 'view',
      headerName: <strong>View</strong>,
      width: 150,
      flex: 1,
      align: 'left',
      renderCell: (params) => {
        console.log(params);
        return (<Link to={{
          pathname: `/${type}/details/${params.row.id}`,
          state: { rowData: params.row } // Pass the row data as state to the DetailsPage
        }} style={{ textDecoration: 'none' }}>
          <IconButton style={{ color: 'black', padding: '6px', fontSize: '14px' }}>
            <VisibilityIcon fontSize="small" />
          </IconButton>
        </Link>);
      }
      ,
    },
  ];

  // State to handle the dialog visibility
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState(null);

  // Function to open the delete confirmation dialog
  const handleDeleteClick = (id) => {
    setSelectedRowId(id);
    setIsDeleteDialogOpen(true);
  };

  // Function to handle delete confirmation
  const handleDeleteConfirm = () => {
    onDelete(selectedRowId);
    setIsDeleteDialogOpen(false);
  };

  // Function to handle delete cancellation
  const handleDeleteCancel = () => {
    setIsDeleteDialogOpen(false);
  };

  const rows = data.map((item) => ({
    id: item.identifier,
    name: item.name,
    channel: item.channel,
    // Add more row data as needed for your specific use case
  }));

  const containerStyle = {
    height: 700,
    width: '90%',
    backgroundColor: '#FFFFFF', // Set the background color of the table to white
    color: 'black',
  };

  const tableStyle = `
    .MuiDataGrid-root {
      font-family: gothvetica;
      font-size: 18px;
    }

    .MuiDataGrid-root .MuiDataGrid-cell {
      text-align: left;
    }

    .MuiDataGrid-root .MuiDataGrid-row {
      transition: background-color 0.3s;
    }

    .MuiDataGrid-root .MuiDataGrid-row:hover {
      background-color: #0059b3 !important;
      color: white; /* Change the text color to white on hover */
    }

    .MuiDataGrid-root .MuiDataGrid-row:not(:hover) {
      color: black; /* Restore the text color to black when not hovering */
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{tableStyle}</style>
      <DataGrid rows={rows} columns={columns} />
      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this selected row?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirm} color="primary">
            Yes
          </Button>
          <Button onClick={handleDeleteCancel} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CustomTable;













