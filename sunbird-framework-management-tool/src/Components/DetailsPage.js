
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFrameworkDetailsById, fetchCategoryDetailsById, fetchTermDetailsById } from '../service/restservice';

const labelStyle = {
  fontWeight: 'bold',
  marginRight: '10px',
  color: '#3b5998',
  fontSize: '18px',
};

const centeredDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const DetailsPage = () => {
  const [rowData, setRowData] = useState({});
  const { id, type } = useParams(); // Add 'type' parameter to determine item type

  useEffect(() => {
    // Determine the fetch function based on the 'type' parameter
    let fetchFunction;
    if (type === 'framework') {
      fetchFunction = fetchFrameworkDetailsById;
    } else if (type === 'category') {
      fetchFunction = fetchCategoryDetailsById;
    } else if (type === 'term') {
      fetchFunction = fetchTermDetailsById;
    }

    if (fetchFunction) {
      fetchFunction(id)
        .then((data) => {
          console.log('Data fetched successfully:', data); 
          setRowData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
    
  }, [id,type]);

  const formatDateString = (dateString) => {
    if (dateString) {
      const date = new Date(dateString);
      return date.toLocaleString(); // Adjust formatting options as needed
    }
    return '';
  };

  return (
    <div style={centeredDivStyle}>
      <h1 style={{ color: '#3b5998' }}>Details</h1>
       <div style={{ textAlign: 'left' }}>
         <p>
           <span style={labelStyle}>Identifier:</span>
           {rowData.identifier}
         </p>
         <p>
           <span style={labelStyle}>Name:</span>
           {rowData.name}
         </p>
         <p>
           <span style={labelStyle}>Description:</span>
           {rowData.description}
         </p>
         <p>
           <span style={labelStyle}>Channel:</span>
           {rowData.channel}
         </p>
         <p>
           <span style={labelStyle}>Owner:</span>
           {rowData.owner}
         </p>
         <p>
           <span style={labelStyle}>Type:</span>
           {rowData.type}
         </p>
         <p>
           <span style={labelStyle}>Created On:</span>
           {formatDateString(rowData.createdOn)}
         </p>
         <p>
           <span style={labelStyle}>Last Updated On:</span>
           {formatDateString(rowData.lastUpdatedOn)}
         </p>
         <p>
           <span style={labelStyle}>Status:</span>
           {rowData.status}
       </p>
       </div>      
    </div>
  );
};

export default DetailsPage;

