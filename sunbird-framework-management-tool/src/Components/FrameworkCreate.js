import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function FrameworkCreate({ open, onClose, onCreate, title, placeholder, existingCodes }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [nameError, setNameError] = useState('');
  const [codeError, setCodeError] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(newName.trim() === '' ? 'Name is required' : newName.includes(' ') ? 'Spaces are not allowed' : '');
  };

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    setCodeError(existingCodes.includes(newCode) ? 'Code is already existed' : '');
  };

  const handleCreate = () => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }
    if (name.includes(' ')) {
      setNameError('Spaces are not allowed');
      return;
    }
    if (existingCodes.includes(code)) {
      setCodeError('Code is already existed');
      return;
    }

    axios.post('https://api.example.com/frameworks', {
      name,
      code,
    })
    .then(response => {
      console.log('Framework created successfully:', response.data);
      onCreate(name, code);
      onClose();
    })
    .catch(error => {
      console.log('Failed to create framework:', error);
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
        <TextField
          label="Code*"
          value={code}
          onChange={handleCodeChange}
          fullWidth
          placeholder="Enter code"
          error={codeError !== ''}
          helperText={codeError}
          style={{ marginBottom: '1rem' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleCreate} disabled={nameError !== '' || codeError !== ''}>Create</Button>
      </DialogActions>
    </Dialog>
  );
}

export default FrameworkCreate;
