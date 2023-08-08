import React, { useState, useEffect } from 'react';
import CustomTable from './CustomTable';
import { fetchFrameworkList } from '../service/restservice';

const FrameworkList = () => {
  const [frameworks, setFrameworks] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchFrameworkList()
      .then(data => {
        // console.log(data)
        setFrameworks(data.result.frameworks);
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
      <CustomTable
        data={frameworks}
        editId={editId}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default FrameworkList;
