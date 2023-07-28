import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
//import axios from 'axios';

function CategoryCreate({ open, onClose, onCreate, title, placeholder, existingCodes }) {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(newName.trim() === '' ? 'Name is required' : newName.includes(' ') ? 'Spaces are not allowed' : '');
  };

  const handleCreate = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }

    // Perform the create action with the name

    onCreate(name);
    onClose();
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

export default CategoryCreate;
