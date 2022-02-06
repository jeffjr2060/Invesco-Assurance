import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';




const drawerWidth = 250;

function BranchDocuments() {

const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
         
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
       
        <Divider />
       {/* Drawer List */}
 <Box 
 sx={{
   display:"flex",
   height:"100%",
   background: "#075e54",
 }}>
    <Box
    sx={{
      height:"70%",
      mt:"35%", 
    }}
    >

             {/* list */}
      <List sx={{display:'block',}} >
          {
            ['CLAIM FORM', 'CLAIM NOTIFICATION'  ].map((text, index) => {
              if (text === "CLAIM FORM") {
                return (
                  <ListItem button key={text} onClick={() => navigate("/reportedclaim")} >
                    <ListItemIcon>
                        <NotificationsActiveIcon />
                   </ListItemIcon>
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                    
                  </ListItem>
                )
              
              }else{
              return (
                <ListItem button key={text}  onClick={() => navigate("/claimnotificatioreport")}>
                  <ListItemIcon>
                      <DocumentScannerIcon />
                   </ListItemIcon>
                  <ListItemText primary={text}
                    sx={{
                      color: "#FBCD99",
                    }} />
                </ListItem>
              )
            }
          }
            )
          }
        </List>
         {/*  */}
    </Box>
    </Box>     

      </Drawer>
  <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
          {/* app bar */}
  <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
  <AppBar
      position="fixed"
      sx={{ width: `calc(100% - ${drawerWidth}px)`,
       ml: `${drawerWidth}px` ,
       background:"#fff",
      }}
    >
    <Toolbar>
  <Typography variant="h6" noWrap component="div">
    
  </Typography>
   </Toolbar>
   </AppBar>

   
  </Box>
        {/*  */}
   {/* Searchbar  */}
      <Box sx={{
        display:"flex",
        width:"100%",
      }}>
      
      </Box> 

   </Box>
  </Box>
  );
}

export default BranchDocuments


