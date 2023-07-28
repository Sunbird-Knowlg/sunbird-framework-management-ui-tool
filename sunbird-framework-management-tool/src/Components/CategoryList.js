import React, { useState, useEffect } from 'react';
import CategoryTable from './CategoryTable';
import { fetchCategoryList } from '../service/restservice';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch the list of categories from the API
    fetchCategoryList()
      .then(data => {
        console.log(data.result.Category)

        setCategories(data.result.Category );
        
      });
  }, []);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    // You can implement the delete logic here, such as making a DELETE request to the API
    // After successful deletion, you can update the state to remove the deleted category
    // For simplicity, let's just filter it out from the state.
    setCategories(prevCategories => prevCategories.filter(category => category.id !== id));
  };

  return (
    <div>
      <h2>Category List</h2>
      <CategoryTable
        categories={categories}
        editId={editId}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default CategoryList;


