import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TermTable from './TermTable';
import { fetchTermList } from '../service/restservice';

function TermList() {
  const [terms, setTerms] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // Fetch the list of terms from the API
     fetchTermList()
     .then(data=> {
      console.log(data)

      setTerms(data.result.Term)
     })
    }, []);
  

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    // You can implement the delete logic here, such as making a DELETE request to the API
    // After successful deletion, you can update the state to remove the deleted term
    // For simplicity, let's just filter it out from the state.
    setTerms(prevTerms => prevTerms.filter(term => term.id !== id));
  };

  return (
    <div>
      <h2>Term List</h2>
      <TermTable
        terms={terms}
        editId={editId}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default TermList;
