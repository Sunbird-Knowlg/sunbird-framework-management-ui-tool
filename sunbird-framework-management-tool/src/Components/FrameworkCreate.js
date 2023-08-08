import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { CreateFramework } from '../service/restservice'; // Import the FrameworkCreate function

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
// const appStyle = {
//   height: '100vh', // Set the height to fill the entire viewport
//   backgroundColor: '#f4f7fc', // Set the background color to #f4f7fc
// };

function FrameworkCreate() {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    setNameError(newName.trim() === '' ? 'Name is required' : newName.includes(' ') ? 'Spaces are not allowed' : '');
  };

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    setCodeError(newCode.trim() === '' ? 'Code is required' : '');
  };

  const handleCreate = async () => {
    if (name.trim() === '') {
      setNameError('Name is required');
      return;
    }

    if (code.trim() === '') {
      setCodeError('Code is required');
      return;
    }

    // Perform the create action with the name and code
    const response = await CreateFramework(name, code);
    if (response) {
      // The framework was successfully created
      console.log('Framework created:', response);
    }

    // Reset the fields
    setName('');
    setCode('');
  };

  const handleCancel = () => {
    // Reset the fields without saving the data
    setName('');
    setCode('');
  };

  return (
    <div style={formStyle}>
      <div style={formContainerStyle}>
        <h2  style={{ color: '#3b5998' }}>Create New Framework</h2>
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
        <Button onClick={handleCancel} variant="contained" backgroundColor=" #3b5998" >
          Cancel
        </Button>
      </div>
      {/* <div style={appStyle}>
      <FrameworkCreate />
    </div> */}
    </div>
    
  );
}

export default FrameworkCreate;
