import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4, mb: 2 }}>
        {/* Body Content */}
        <Typography variant="h4" component="h1" align="center">
          Welcome to My App!
        </Typography>
        <Typography variant="body1" component="p" align="center">
          This is the body content of the app.
        </Typography>
      </Container>
      <footer
        style={{
          backgroundColor: '#f5f5f5',
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        {/* Footer Content */}
        <Typography variant="body2" color="textSecondary">
          This is the footer content of the app.
        </Typography>
      </footer>
    </div>
  );
}

export default App;