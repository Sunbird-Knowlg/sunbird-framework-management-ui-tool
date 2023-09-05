// CategoryCreate.js

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { CreateCategory } from '../service/restservice';
import styles from '../Styles/styles.module.css';

function CategoryCreate({ existingCodes }) {
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
          const response = await CreateCategory(name, code);
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
   // Reset fields without saving data
    setName('');
    setCode('');
    setNameError('');
    setCodeError('');
  };

  return (
    <div className={styles.formStyle}>
      <div className={styles.formContainerStyle}>
        <h2 className={styles.title}>Create New Category</h2>
        <div className={styles.inputContainer}>
          <TextField
            label="Name*"
            value={name}
            onChange={handleNameChange}
            fullWidth
            error={nameError !== ''}
            helperText={nameError}
            className={styles.inputField}
          />
          <div className={styles.space} /> {/* Add space between Name and Code */}
          <TextField
            label="Code*"
            value={code}
            onChange={handleCodeChange}
            fullWidth
            error={codeError !== ''}
            helperText={codeError}
            className={styles.inputField}
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleCreate} variant="contained" className={styles.submitButton}>
            Create
          </Button>
          <Button onClick={handleCancel} variant="contained" className={styles.cancelButton}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CategoryCreate;










