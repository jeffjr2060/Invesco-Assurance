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
import OutboxIcon from '@mui/icons-material/Outbox';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import HomeIcon from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';




const drawerWidth = 250;

function  Documentupload () {

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
            ['HOME', 'INBOX',  'ASSIGNED','REPUDIATED'].map((text, index) => {
              if (text === "HOME") {
                return (
                  <ListItem button key={text} onClick={() => navigate("/intimation")} >
                    <ListItemIcon>
                        <HomeIcon />
                   </ListItemIcon>
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                    
                  </ListItem>
                )
               
              } else if (text === "INBOX") {
              
                return (
                  <ListItem button key={text} onClick={() => navigate("/taskinbox")} >

                   <ListItemIcon>
                      <OutboxIcon />
                   </ListItemIcon>
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                  </ListItem>
                )
              
              
              } else if (text === "ASSIGNED")  {
              
              return (
                <ListItem button key={text} onClick={() => navigate("/assigned")}>
                    <ListItemIcon>
                      <OutboxIcon />
                   </ListItemIcon> 
                  <ListItemText primary={text}
                    sx={{
                      color: "#FBCD99",
                    }} />
                </ListItem>
              )
              
            
              }

  
              else{
              return (
                <ListItem button key={text}  onClick={() => navigate("/repudiated")}>
                  <ListItemIcon>
                      <BookmarksIcon />
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
        <h2>Document Upload</h2>
      </Box> 

   </Box>
  </Box>
  );
}

export default Documentupload 