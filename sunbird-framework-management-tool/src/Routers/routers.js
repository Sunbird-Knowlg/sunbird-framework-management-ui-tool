import { Routes, Route } from 'react-router-dom';
import React from 'react';
import CategoryCreate from '../Components/CategoryCreate';
import CategoryList from '../Components/CategoryList';
import FrameworkCreate from '../Components/FrameworkCreate';
import FrameworkList from '../Components/FrameworkList';
import TermList from '../Components/TermList';
import TermCreate from '../Components/TermCreate';
 import DetailsPage from '../Components/DetailsPage';
 import EditDetailsPage from '../Components/EditDetailsPage';
// import CustomTable from '../Components/CustomTable';

const Routers = () => {
  return (
    < Routes>
      <Route path='/category/create' element={<CategoryCreate />} />
      <Route path='/category/list' element={<CategoryList />} />
      <Route path='/framework/create' element={<FrameworkCreate />} />
      <Route path='/framework/list' element={<FrameworkList />} />
      <Route path='/term/create' element={<TermCreate />} />
      <Route path='/term/list' element={<TermList />} />
      <Route path='/details/:id' element={<DetailsPage />} />
      <Route path='/editdetails/:id' element={<EditDetailsPage />} /> 

      {/* <Route path='/details/:id' element={<DetailsPage />} /> */}
      

      
    </Routes>
  );
};

export default Routers;
