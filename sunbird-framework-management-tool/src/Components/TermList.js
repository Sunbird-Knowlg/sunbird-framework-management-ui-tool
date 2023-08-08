import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchTermList } from '../service/restservice';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
};

const TermList = () => {
  const [terms, setTerms] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false); // Define an error state

  useEffect(() => {
    fetchTermList()
      .then(data => {
        setTerms(data.result.Term);
      })
      .catch(error => {
        console.error('Error fetching term list:', error);
        setError(true); // Set the error state to trigger the error boundary
      });
  }, []);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    setTerms(prevTerms => prevTerms.filter(term => term.id !== id));
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#3b5998' }}>Term List</h2>
      <ErrorBoundary>
        {error ? (
          <div>Something went wrong. Please try again later.</div>
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
}

export default TermList;
