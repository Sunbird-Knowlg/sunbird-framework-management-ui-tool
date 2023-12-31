import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchCategoryList } from '../service/restservice';
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

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = () => {
    fetchCategoryList()
      .then(data => {
        setCategories(data.result.Category);
        setError(false);
      })
      .catch(error => {
        console.error('Error fetching category list:', error);
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
    setCategories(prevCategories =>
      prevCategories.filter(category => category.id !== id)
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Category List</h2>
      <ErrorBoundary onRetry={error ? fetchData : null}>
        {error ? (
          <Alert severity="error">
            Something went wrong. Please try again later.
          </Alert>
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
};

export default CategoryList;
