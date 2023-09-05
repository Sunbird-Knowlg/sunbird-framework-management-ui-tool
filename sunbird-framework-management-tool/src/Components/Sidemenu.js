import React from 'react';
import { Drawer, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from '../Styles/styles.module.css';

const drawerWidth = 250;

const menuSections = [
  {
    title: 'Create',
    links: [
      { text: 'Framework', to: '/framework/create' },
      { text: 'Category', to: '/category/create' },
      { text: 'Terms', to: '/term/create' },
    ],
  },
  {
    title: 'List',
    links: [
      { text: 'Framework', to: '/framework/list' },
      { text: 'Category', to: '/category/list' },
      { text: 'Terms', to: '/term/list' },
    ],
  },
];
const headingStyle = {
  fontFamily: 'gothvetica',
  fontSize: '26px',
  color: 'white',
};
function SideMenu({ handleCreateClick, handleListClick }) {
  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      PaperProps={{ style: { width: drawerWidth, backgroundColor: '#D8CFD0', border: '1px inset black' } }}
    >
      {menuSections.map((section, index) => (
        <div key={index}>
          <Accordion expanded={true} onChange={section.title === 'List' ? handleListClick : handleCreateClick}>
            <AccordionSummary className={styles.accordionSummaryStyle}>
              <Typography className={styles.createTitle} style={headingStyle}>
                <strong>{section.title}</strong>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.accordionDetailsStyle}>
              {section.links.map((link, linkIndex) => (
                <Button className={styles.buttonStyle}>
                  <Link to={link.to} className={styles.linkStyle}>
                    {link.text}
                  </Link>
                </Button>
              ))}
            </AccordionDetails>
          </Accordion>
        </div>
      ))}
      <div className={styles.additionalStyle}></div>
    </Drawer>
  );
}

export default SideMenu;




