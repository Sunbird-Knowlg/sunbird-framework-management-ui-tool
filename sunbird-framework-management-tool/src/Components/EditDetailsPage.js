import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFrameworkDetailsById, updateFramework } from '../service/restservice'; // Update the import for updateFramework
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function EditDetailsPage() {
  const { id } = useParams();
  const [rowData, setRowData] = useState({});
  const [editedData, setEditedData] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchFrameworkDetailsById(id)
      .then(data => {
        setRowData(data);
        setEditedData(data);
      })
      .catch(error => {
        console.error('Error fetching framework details:', error);
      });
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(rowData);
  };

  const handleUpdate = () => {
    updateFramework(id, editedData) // Update the API call with editedData
      .then(updatedFramework => {
        setIsEditing(false);
      })
      .catch(error => {
        console.error('Error updating framework details:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Edit Framework</h2>
      {isEditing ? (
        <>
          <TextField
            name="identifier"
            label="Identifier"
            value={editedData.identifier || ''}
            onChange={handleInputChange}
          />
          <TextField
            name="name"
            label="Name"
            value={editedData.name || ''}
            onChange={handleInputChange}
          />
          <TextField
            name="description"
            label="Description"
            value={editedData.description || ''}
            onChange={handleInputChange}
          />
          <TextField
            name="channel"
            label="Channel"
            value={editedData.channel || ''}
            onChange={handleInputChange}
          />
          {/* Add more input fields for other properties */}
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={handleCancel}>Cancel</Button>
        </>
      ) : (
        <>
          <p>
            <span>Identifier:</span> {rowData.identifier}
          </p>
          <p>
            <span>Name:</span> {rowData.name}
          </p>
          <p>
            <span>Description:</span> {rowData.description}
          </p>
          <p>
            <span>Channel:</span> {rowData.channel}
          </p>
          {/* Display other properties */}
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </div>
  );
}

export default EditDetailsPage;

