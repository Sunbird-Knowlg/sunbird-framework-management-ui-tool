import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchCategoryList } from '../service/restservice';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(null); // Add state for error

  useEffect(() => {
    fetchCategoryList()
      .then(data => {
        setCategories(data.result.Category);
        setError(null); // Clear any previous error
      })
      .catch(error => {
        console.error('Error fetching category list:', error);
        setCategories([]); // Set categories to an empty array
        setError('Error fetching category list'); // Set error message
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
      {error ? (
        <p style={{ color: 'red' }}>{error}</p> // Display error message
      ) : (
        <CustomTable
          data={categories}
          editId={editId}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

export default CategoryList;

