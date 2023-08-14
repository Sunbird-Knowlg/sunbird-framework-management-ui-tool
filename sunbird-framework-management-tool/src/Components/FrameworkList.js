import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchFrameworkList } from '../service/restservice';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
};

const FrameworkList = () => {
  const [frameworks, setFrameworks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false); // Define an error state


  useEffect(() => {
    fetchFrameworkList()
      .then(data => {
        setFrameworks(data.result.frameworks);
      })
      .catch(error => {
        console.error('Error fetching framework list:', error);
        setError(true); // Set the error state to trigger the error boundary
      });
  }, []);
      

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    setFrameworks(prevFrameworks => prevFrameworks.filter(framework => framework.id !== id));
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#3b5998' }}>Framework List</h2>
      <ErrorBoundary>
        {error ? (
          <div>Something went wrong. Please try again later.</div>
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
}

export default FrameworkList;
