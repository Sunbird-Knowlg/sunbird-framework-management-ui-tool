import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFrameworkDetailsById } from '../service/restservice';

function DetailsPage() {
  const [rowData, setRowData] = useState({});
  const location = useLocation();
  const rowDataFromLink = location.state?.rowData || {};
  const identifier = rowDataFromLink.identifier;

  useEffect(() => {
    fetchFrameworkDetailsById(identifier)
      .then((data) => {
        setRowData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [identifier]);

  return (
    <div>
      <h1>Details</h1>
      <p>Identifier: {rowData.identifier}</p>
      <p>name: {rowData.name}</p>
      <p>Description: {rowData.description}</p>
      <p>channel: {rowData.channel}</p>
      <p>owner: {rowData.owner}</p>
      <p>Type: {rowData.type}</p>
      <p>createdOn: {rowData.createdOn}</p>
      <p>lastUpdatedOn: {rowData.lastUpdatedOn}</p>
      <p>status: {rowData.status}</p>
    </div>
  );
}

export default DetailsPage;











