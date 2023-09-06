import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFrameworkDetailsById, fetchCategoryDetailsById, fetchTermDetailsById, updateFramework, updateCategory, updateTerm } from '../service/restservice';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import styles from '../Styles/styles.module.css'

const EditDetailsPage = () => {
  const [rowData, setRowData] = useState({});
  const [editedData, setEditedData] = useState({});
  const { id, type } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    let fetchFunction;
    if (type === 'framework') {
      fetchFunction = fetchFrameworkDetailsById;
    } else if (type === 'category') {
      fetchFunction = fetchCategoryDetailsById;
    } else if (type === 'term') {
      fetchFunction = fetchTermDetailsById;
    }

    if (fetchFunction) {
      fetchFunction(id)
        .then((data) => {
          console.log('Data fetched successfully:', data);
          setRowData(data);
          setEditedData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id, type]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedData(rowData);
  };

  const handleUpdate = () => {
    let updateFunction;
    if (type === 'framework') {
      updateFunction = updateFramework;
    } else if (type === 'category') {
      updateFunction = updateCategory;
    } else if (type === 'term') {
      updateFunction = updateTerm;
    }

    updateFunction(id, editedData)
      .then((updatedData) => {
        setIsEditing(false);
        console.log('Data updated successfully:', updatedData);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.editContainer}>
      <h1 className={styles.editHeader}>Edit {type.charAt(0).toUpperCase() + type.slice(1)}</h1>
      {isEditing ? (
        <div className={styles.editContainer}>
          <div>
            <p>
              <span className={styles.editLabel}>Identifier:</span>
              <TextField
                className={styles.editTextField}
                name="identifier"
                value={editedData.identifier || ''}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <span className={styles.editLabel}>Name:</span>
              <TextField
                className={styles.editTextField}
                name="name"
                value={editedData.name || ''}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <span className={styles.editLabel}>Description:</span>
              <TextField
                className={styles.editTextField}
                name="description"
                value={editedData.description || ''}
                onChange={handleInputChange}
              />
            </p>
            <p>
              <span className={styles.editLabel}>Channel:</span>
              <TextField
                className={styles.editTextField}
                name="channel"
                value={editedData.channel || ''}
                onChange={handleInputChange}
              />
            </p>
            {/* Add more input fields for other properties */}
          </div>
          <div className={styles.editButtonsContainer}>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>
        </div>
      ) : (
        <div className={styles.detailsContainer}>
          <div>
            <p>
              <span className={styles.detailsLabel}>Identifier:</span>
              <span className={styles.detailsText}>{editedData.identifier}</span>
            </p>
            <p>
              <span className={styles.detailsLabel}>Name:</span>
              <span className={styles.detailsText}>{editedData.name}</span>
            </p>
            <p>
              <span className={styles.detailsLabel}>Description:</span>
              <span className={styles.detailsText}>{editedData.description}</span>
            </p>
            <p>
              <span className={styles.detailsLabel}>Channel:</span>
              <span className={styles.detailsText}>{editedData.channel}</span>
            </p>
            {/* Add more text fields for other properties */}
          </div >
          <Button onClick={handleEdit}>Edit</Button>
        </div>
        
      )
      }
    </div>
  );
};

export default EditDetailsPage;

