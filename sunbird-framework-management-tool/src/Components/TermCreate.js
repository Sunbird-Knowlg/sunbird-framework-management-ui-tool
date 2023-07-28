import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';

function TermCreate({ open, onClose, onCreate, title, placeholder }) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(newName.trim() === '' ? 'Name is required' : '');
  };

  const handleCreate = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }

    axios.post('https://api.example.com/terms', {
      name,
    })
    .then(response => {
      console.log('Term created successfully:', response.data);
      onCreate(name);
      onClose();
    })
    .catch(error => {
      console.log('Failed to create term:', error);
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <TextField
          label="Name*"
          value={name}
          onChange={handleNameChange}
          fullWidth
          placeholder={placeholder}
          error={nameError !== ''}
          helperText={nameError}
          style={{ marginBottom: '1rem' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleCreate} disabled={nameError !== ''}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default TermCreate;
