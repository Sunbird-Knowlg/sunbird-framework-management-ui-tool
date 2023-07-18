import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
// import logo from 'C:/react/sunbird-framework-management-ui-tool/sunbird-framework-management-tool/src/logo.png'

const App = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flex: '1 0 auto' }}>
        <Container sx={{ mt: 4, mb: 2 }}>
          {/* Body Content */}
          <Typography variant="h4" component="h1" align="center">
            Welcome to My App!
          </Typography>
          <Typography variant="body1" component="p" align="center">
            This is the body content of the app.
          </Typography>
        </Container>
      </Box>
      <footer style={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
        {/* Footer Content */}
        <Typography variant="body2" color="textSecondary">
          This is the footer content of the app.
        </Typography>
      </footer>
    </Box>
  );
};

export default App;