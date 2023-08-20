import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchFrameworkList } from '../service/restservice';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

const ErrorBoundary = ({ children, onRetry }) => {
  return (
    <div>
      {children}
      <div style={{ marginTop: '1rem' }}>
        <Button variant="contained" color="primary" onClick={onRetry}>
          Retry
        </Button>
      </div>
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
      prevFrameworks.filter(frameworks => frameworks.id !== id)
    );
  };


  const containerStyle = {
    backgroundColor: 'white',
    padding: '1rem',
  };


  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#3b5998' }}>Framework List</h2>
      <ErrorBoundary onRetry={fetchData}>
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
          />
        )}
      </ErrorBoundary>
    </div>
  );
};

export default FrameworkList;


