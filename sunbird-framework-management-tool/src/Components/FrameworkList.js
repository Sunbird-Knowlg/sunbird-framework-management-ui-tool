import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchFrameworkList } from '../service/restservice';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import styles from '../Styles/styles.module.css'; // Update the path based on your project structure

const ErrorBoundary = ({ children, onRetry }) => {
  return (
    <div>
      {children}
      {onRetry && ( // Render the Retry button only when onRetry is provided
        <div className={styles.retryButtonContainer}>
          <Button variant="contained" color="primary" onClick={onRetry}>
            Retry
          </Button>
        </div>
      )}
    </div>
  );
};


const FrameworkList = () => {
  const [frameworks, setFrameworks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetchFrameworkList()
      .then(data => {
        setFrameworks(data.result.frameworks);
        setError(false); // Reset the error state on successful fetch
      })
      .catch(error => {
        console.error('Error fetching framework list:', error);
        setError(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = id => {
    setEditId(id);
  };

  const handleDelete = id => {
    setFrameworks(prevFrameworks =>
      [...prevFrameworks.filter(frameworks => frameworks.code !== id)]
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Framework List</h2>
      <ErrorBoundary onRetry={error ? fetchData : null}>
        {error ? (
          <Alert severity="error">
            Something went wrong. Please try again later.
          </Alert>
        ) : (
          <CustomTable
            data={frameworks}
            editId={editId}
            onEdit={handleEdit}
            onDelete={handleDelete}
            type="framework"
          />
        )}
      </ErrorBoundary>
    </div>
  );
};

export default FrameworkList;


