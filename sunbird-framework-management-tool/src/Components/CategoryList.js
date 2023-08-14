import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchCategoryList } from '../service/restservice';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  return children;
};
const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false); // Add state for error

  useEffect(() => {
    fetchCategoryList()
      .then(data => {
        setCategories(data.result.Category);
       })
      .catch(error => {
        console.error('Error fetching category list:', error);
        setError(true); // Set error message
      });
  }, []);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
  };

  const containerStyle = {
    backgroundColor: 'white',
    padding: '1rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#3b5998' }}>Category List</h2>
      <ErrorBoundary>
        {error ? (
          <div>Something went wrong. Please try again later.</div>
      
      ) : (
        <CustomTable
          data={categories}
          editId={editId}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      </ErrorBoundary>
    </div>
  );
}

export default CategoryList;

