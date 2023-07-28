import React from 'react';
import { Drawer, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { blue } from '@mui/material/colors';

// Common button style for all framework, category, and term buttons
const buttonStyle = {
  marginBottom: '1rem',
  width: '100%',
  anchor: "left",
  backgroundColor:'#e1f5fe',
  color:'black'
};

function SideMenu({ handleCreateClick, handleListClick, handleFormOpen }) {
  return (
    // <Drawer anchor="left" open={true} variant="permanent" className="side-menu-drawer">
    <Drawer anchor="left" open={true} variant="permanent" className="side-menu-drawer" sx={{ backgroundColor: '#e1f5fe' }}>
      <div style={{ marginBottom: '1rem' }}>
        <Accordion expanded={true} onChange={handleCreateClick}>
          <AccordionSummary>
            {/* expandIcon={<ExpandMoreIcon />} */}
          
            <Typography style={{ color: <strong>black</strong>}}>Create</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Link to="/framework/create">
              <Button style={buttonStyle}>
              Framework
              </Button>
            </Link>
            <Link to="/category/create">
              <Button style={buttonStyle}>
                Category
              </Button>
            </Link>
            <Link to="/term/create">
              <Button style={buttonStyle}>
                Terms
              </Button>
            </Link>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <Accordion expanded={true} onChange={handleListClick}>
          <AccordionSummary>
          {/* expandIcon={<ExpandMoreIcon />}> */}
           
            <Typography style={{ color: <strong>black</strong>}}>List</Typography> 
          </AccordionSummary>
          <AccordionDetails>
            <Button style={buttonStyle}>
              <Link to="/framework/list" style={{ color: 'black' }}>Framework</Link>
            </Button>
            <Button style={buttonStyle}>
              
              <Link to="/category/list" style={{ color: 'black' }}>Category</Link>
            </Button>
            <Button style={buttonStyle}>
            <Link to="/term/list" style={{ color: 'black' }}>Terms</Link>
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    </Drawer>
  );
}

export default SideMenu;

