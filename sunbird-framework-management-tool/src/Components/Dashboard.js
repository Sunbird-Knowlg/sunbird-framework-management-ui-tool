import React, { useState } from 'react';
import SideMenu from './Sidemenu';
import FrameworkList from './FrameworkList';
import CategoryList from './CategoryList';
import TermsList from './TermsList';
import FrameworkCreate from './FrameworkCreate';
import CategoryCreate from './CategoryCreate';
import TermsCreate from './TermsCreate';

function Dashboard() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedCreate, setSelectedCreate] = useState(null);

  const handleSelectTable = (tableName) => {
    setSelectedTable(tableName);
  };

  const handleSelectCreate = (createName) => {
    setSelectedCreate(createName);
  };

  return (
    <div className="dashboard-container">
      <SideMenu
        handleSelectTable={handleSelectTable}
        handleSelectCreate={handleSelectCreate}
        selectedCreate={selectedCreate}
      />
      <div className="main-content">
        {selectedTable === 'framework' && <FrameworkList />}
        {selectedTable === 'category' && <CategoryList />}
        {selectedTable === 'terms' && <TermsList />}
        {selectedCreate === 'framework' && <FrameworkCreate />}
        {selectedCreate === 'category' && <CategoryCreate />}
        {selectedCreate === 'terms' && <TermsCreate />}
      </div>
    </div>
  );
}

export default Dashboard;
