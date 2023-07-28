import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';

function PopForm({ open, onClose, onCreate, title, placeholder, existingCodes }) {
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

    // Define the headers with your API key and other required headers
    const headers = {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjdjVVcHZqYXlBREZKZXA0NHRXNVJEbFE2dDlWcW96bCJ9.MotxKvdOVFaeL_26NWUG-GV8ii13ZbPpORW4wffLFaQ', // Replace with your actual API key
      'Content-Type': 'application/json',
      'X-Channel-Id': 'c4gt-test',
    };

    // Define the request data object to match the format in the curl command
    const requestData = {
      request: {
        framework: {
          name: name,
          code: code,
          channels: [
            {
              identifier: 'in.ekstep',
            },
          ],
        },
      },
    };

    // Perform the create action with the name and code
    // Use the correct API endpoint and pass the headers and data object
    axios.post('https://dev.knowlg.sunbird.org/api', requestData, { headers })
      .then(response => {
        console.log('Item created successfully:', response.data);
        onCreate(name, code); // Call the callback function passed from the parent component
        onClose(); // Close the dialog
      })
      .catch(error => {
        console.log('Failed to create item:', error);
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

export default PopForm;
