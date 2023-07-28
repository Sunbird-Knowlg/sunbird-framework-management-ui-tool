import React, { useState, useEffect } from 'react';
import FrameworkTable from './FrameworkTable';
import { fetchFrameworkList } from '../service/restservice'; // Import the fetchFrameworkList function

function FrameworkList() {
  const [frameworks, setFrameworks] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch the list of frameworks from the API using the fetchFrameworkList function
    fetchFrameworkList()
      .then(data => {
        console.log(data)

        setFrameworks(data.result.frameworks);
      });
  }, []);

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    // You can implement the delete logic here, such as making a DELETE request to the API
    // After successful deletion, you can update the state to remove the deleted framework
    // For simplicity, let's just filter it out from the state.
    setFrameworks(prevFrameworks => prevFrameworks.filter(framework => framework.id !== id));
  };

  return (
    <div>
      <h2>Framework List</h2>
      <FrameworkTable
        frameworks={frameworks}
        editId={editId}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default FrameworkList;

