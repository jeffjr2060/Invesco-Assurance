import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';


import Table from './claimtable';
const drawerWidth = 240;

function ClaimManager() {
  return <div>
       <Container 
       sx={{
           display: 'flex',
           minWidth:'100vw',
           minHeight:'100vh',
           display:"flex",
           flexDirection:"row",
       }}>
        <CssBaseline />
        <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar
        sx={{
          background: '#fff',
        }}>
          <Typography variant="h6" noWrap component="div"
          sx={{
            color: '#000',
            fontSize: '24px',
          }}>
            Claims
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background: '#075e54',
            borderBottomLeftRadius: "8px",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
           
          },
        }}
        variant="permanent"
        anchor="left" 
      >
        </Drawer>
        <Box sx={{
          dispay: 'flex',
          width:'100%',
          marginTop: '6%'
        }}>
          <Table />
        </Box>
       
       </Container>
  </div>;
}

export default ClaimManager;
