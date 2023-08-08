import React from 'react';
import { Drawer, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 250; // Set your desired width here

const buttonStyle = {
  marginBottom: '1rem',
  width: '100%',
  backgroundColor: '#3b5998',
  color: 'white',
  transition: 'background-color 0.3s',
  textTransform: 'none',
  fontSize: '17px',
  fontFamily: 'gothvetica',
};

const accordionSummaryStyle = {
  backgroundColor: '#3b5998',
};

const accordionDetailsStyle = {
  backgroundColor: '#3b5998',
};

function SideMenu({ handleCreateClick, handleListClick }) {
  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      PaperProps={{ style: { width: drawerWidth, backgroundColor: '#D8CFD0', border: '1px inset black' } }}
    >
      <div>
        <Accordion expanded={true} onChange={handleCreateClick}>
          <AccordionSummary style={accordionSummaryStyle}>
            <Typography style={{ color: 'white', fontFamily: 'gothvetica', fontSize: 26 }}>
              <strong>Create</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={accordionDetailsStyle}>
            <Link to="/framework/create">
              <Button
                style={{ ...buttonStyle }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#004080')} // Hover effect
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)} // Remove hover effect
              >
                Framework
              </Button>
            </Link>
            <Link to="/category/create">
              <Button
                style={{ ...buttonStyle }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#004080')} // Hover effect
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)} // Remove hover effect
              >
                Category
              </Button>
            </Link>
            <Link to="/term/create">
              <Button
                style={{ ...buttonStyle }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#004080')} // Hover effect
                onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)} // Remove hover effect
              >
                Terms
              </Button>
            </Link>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion expanded={true} onChange={handleListClick}>
          <AccordionSummary style={accordionSummaryStyle}>
            <Typography style={{ color: 'white', fontFamily: 'gothvetica', fontSize: 26 }}>
              <strong>List</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={accordionDetailsStyle}>
            <Button
              style={{ ...buttonStyle }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#004080')} // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)} // Remove hover effect
            >
              <Link to="/framework/list" style={{ color: ' white', textDecoration: 'none' }}>
                Framework
              </Link>
            </Button>
            <Button
              style={{ ...buttonStyle }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#004080')} // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)} // Remove hover effect
            >
              <Link to="/category/list" style={{ color: 'white', textDecoration: 'none' }}>
                Category
              </Link>
            </Button>
            <Button
              style={{ ...buttonStyle }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#004080')} // Hover effect
              onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)} // Remove hover effect
            >
              <Link to="/term/list" style={{ color: 'white', textDecoration: 'none' }}>
                Terms
              </Link>
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ backgroundColor: '#3b5998', height: '100%', border: 'none' }}></div>
    </Drawer>
  );
}

export default SideMenu;
