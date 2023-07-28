import React from 'react';
import SideMenu from './Components/Sidemenu';
import Routers from './Routers/routers';
import { Box } from '@mui/material';


function App() {


  return (
    <>
      
      <SideMenu />
      <Box component="main"
        sx={{ display: 'block', margin: "0 auto", ml: '25rem' }}>
        <Routers />
      </Box>
    </>
  );
}

export default App;
