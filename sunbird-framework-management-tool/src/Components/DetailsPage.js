//it is coming
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchFrameworkDetailsById } from '../service/restservice';

// const labelStyle = {
//   fontWeight: 'bold',
//   marginRight: '10px',
//   color: '#3b5998', // Set label color to #3b5998
//   fontSize: '18px', // Set font size to 18px
// };

// const centeredDivStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// };

// const DetailsPage = () => {
//   const [rowData, setRowData] = useState({});
//   let { id } = useParams();

//   useEffect(() => {
//     fetchFrameworkDetailsById(id)
//       .then((data) => {
//         setRowData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [id]);

//   return (
//     <div style={centeredDivStyle}>
//       <h1 style={{ color: '#3b5998' }}>Details</h1>
//       <div style={{ textAlign: 'left' }}>
//         <p>
//           <span style={labelStyle}>Identifier:</span>
//           {rowData.identifier}
//         </p>
//         <p>
//           <span style={labelStyle}>Name:</span>
//           {rowData.name}
//         </p>
//         <p>
//           <span style={labelStyle}>Description:</span>
//           {rowData.description}
//         </p>
//         <p>
//           <span style={labelStyle}>Channel:</span>
//           {rowData.channel}
//         </p>
//         <p>
//           <span style={labelStyle}>Owner:</span>
//           {rowData.owner}
//         </p>
//         <p>
//           <span style={labelStyle}>Type:</span>
//           {rowData.type}
//         </p>
//         <p>
//           <span style={labelStyle}>Created On:</span>
//           {rowData.createdOn}
//         </p>
//         <p>
//           <span style={labelStyle}>Last Updated On:</span>
//           {rowData.lastUpdatedOn}
//         </p>
//         <p>
//           <span style={labelStyle}>Status:</span>
//           {rowData.status}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;






//only created on and last updated on 
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchFrameworkDetailsById } from '../service/restservice';

// const labelStyle = {
//   fontWeight: 'bold',
//   marginRight: '10px',
//   color: '#3b5998', // Set label color to #3b5998
//   fontSize: '18px', // Set font size to 18px
// };

// const centeredDivStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
// };

// const DetailsPage = () => {
//   const [rowData, setRowData] = useState({});
//   let { id } = useParams();

//   useEffect(() => {
//     fetchFrameworkDetailsById(id)
//       .then((data) => {
//         setRowData(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, [id]);

//   const formatDateString = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleString(); // Adjust formatting options as needed
//   };

//   return (
//     <div style={centeredDivStyle}>
//       <h1 style={{ color: '#3b5998' }}>Details</h1>
//       <div style={{ textAlign: 'left' }}>
//         <p>
//           <span style={labelStyle}>Identifier:</span>
//           {rowData.identifier}
//         </p>
//         <p>
//           <span style={labelStyle}>Name:</span>
//           {rowData.name}
//         </p>
//         <p>
//           <span style={labelStyle}>Description:</span>
//           {rowData.description}
//         </p>
//         <p>
//           <span style={labelStyle}>Channel:</span>
//           {rowData.channel}
//         </p>
//         <p>
//           <span style={labelStyle}>Owner:</span>
//           {rowData.owner}
//         </p>
//         <p>
//           <span style={labelStyle}>Type:</span>
//           {rowData.type}
//         </p>
//         <p>
//           <span style={labelStyle}>Created On:</span>
//           {formatDateString(rowData.createdOn)}
//         </p>
//         <p>
//           <span style={labelStyle}>Last Updated On:</span>
//           {formatDateString(rowData.lastUpdatedOn)}
//         </p>
//         <p>
//           <span style={labelStyle}>Status:</span>
//           {rowData.status}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default DetailsPage;





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFrameworkDetailsById } from '../service/restservice';

const labelStyle = {
  fontWeight: 'bold',
  marginRight: '10px',
  color: '#3b5998', // Set label color to #3b5998
  fontSize: '18px', // Set font size to 18px
};

const centeredDivStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const DetailsPage = () => {
  const [rowData, setRowData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    fetchFrameworkDetailsById(id)
      .then((data) => {
        setRowData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const formatDateString = (dateString) => {
    if (!dateString) {
      return 'Not entered by user';
    }
    const date = new Date(dateString);
    return date.toLocaleString(); // Adjust formatting options as needed
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















