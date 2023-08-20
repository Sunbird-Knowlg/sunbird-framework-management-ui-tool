import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchTermList } from '../service/restservice';
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

const TermList = () => {
  const [terms, setTerms] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetchTermList()
      .then(data => {
        setTerms(data.result.Term);
        setError(false);
      })
      .catch(error => {
        console.error('Error fetching term list:', error);
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
    setTerms(prevTerms =>
      prevTerms.filter(term => term.id !== id)
    );
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#3b5998' }}>Term List</h2>
      <ErrorBoundary onRetry={fetchData}>
        {error ? (
          <Alert severity="error">
            Something went wrong. Please try again later.
          </Alert>
        ) : (
          <CustomTable
            data={terms}
            editId={editId}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </ErrorBoundary>
    </div>
  );
};

export default TermList;


