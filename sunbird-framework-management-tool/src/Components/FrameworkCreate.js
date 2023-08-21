import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { CreateFramework } from '../service/restservice'; // Import the CreateFramework function

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '90vh',
};

const formContainerStyle = {
  width: '50%', // Set the width of the container to be half of the page
  padding: '2rem',
  backgroundColor: 'white',
};

function FrameworkCreate({existingCodes}) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [nameError, setNameError] = useState('');
  const [codeError, setCodeError] = useState('');
  
  const validateName = (newName) => {
    if (newName.trim() === '') {
      return 'Name is required';
    } else if (newName.includes(' ')) {
      return 'Spaces are not allowed';
    }
    return '';
  };

  const validateCode = (newCode) => {
    if (newCode.trim() === '') {
      return 'Code is required';
    }
    if (existingCodes && existingCodes.includes(newCode.trim())) {
      return 'Code already exists';
    }
    // Add any specific validation for framework codes
    return '';
  };


  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(validateName(newName));
  };

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    setCodeError(validateCode(newCode));
  };

  const handleCreate = async () => {
    const newNameError = validateName(name);
    const newCodeError = validateCode(code);

    if (!newNameError && !newCodeError) {
      const response = await CreateFramework(name, code);
      if (response) {
        // Handle success response
      } else {
        // Handle error response
      }

      // Reset fields
      setName('');
      setCode('');
      setNameError('');
      setCodeError('');
    } else {
      setNameError(newNameError);
      setCodeError(newCodeError);
    }
  };

  const handleCancel = () => {
    // Reset the fields without saving the data
    setName('');
    setCode('');
    setNameError('');
    setCodeError('');
  };

  return (
    <div style={formStyle}>
      <div style={formContainerStyle}>
        <h2 style={{ color: '#3b5998' }}>Create New Framework</h2>
        <TextField
          label="Name*"
          value={name}
          onChange={handleNameChange}
          fullWidth
          error={nameError !== ''}
          helperText={nameError}
          style={{ marginBottom: '1rem' }}
        />
        <TextField
          label="Code*"
          value={code}
          onChange={handleCodeChange}
          fullWidth
          error={codeError !== ''}
          helperText={codeError}
          style={{ marginBottom: '1rem' }}
        />
        <Button onClick={handleCreate} variant="contained" backgroundColor=" #3b5998" style={{ marginRight: '1rem' }}>
          Create
        </Button>
        <Button onClick={handleCancel} variant="contained" backgroundColor=" #3b5998">
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default FrameworkCreate;

