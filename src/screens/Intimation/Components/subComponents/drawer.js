import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, Link } from 'react-router-dom';


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Intimationtickets from './tickets';


const drawerWidth = 300;


  

function DrawerIntimation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
    
      <Toolbar 
       sx={{ 
        background:"#fff",
        height:"100px",
        background:"#075e54",

    }}>
        <Typography>Invesco Logo</Typography>
    </Toolbar>
   
    

{/* drawer items */}
 <Box
 sx={{
     display:"block",
     width:"100%",
     height:"90vh",
     background:"#075e54",
 }}>

    {/* list */}
    <List>
          {
            ['INBOX', 'ASSIGNED',  'REPUDIATED', 'CLAIM FILE','UPLOAD DOCUMENT'].map((text, index) => {
              if (text === "INBOX") {
                return (
                  <ListItem button key={text} onClick={() => navigate("/intimation")} >
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                  </ListItem>
                )
               
              } else if (text === "ASSIGNED") {
              
                return (
                  <ListItem button key={text} onClick={() => navigate("/assigned")} >
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                  </ListItem>
                )
              
              
              } else if (text === "REPUDIATED")  {
              
              return (
                <ListItem button key={text} onClick={() => navigate("/repudiated")}>
                  <ListItemText primary={text}
                    sx={{
                      color: "#FBCD99",
                    }} />
                </ListItem>
              )
              
            
              }else if (text === "CLAIM FILE")  {
              
                return (
                  <ListItem button key={text} onClick={() => navigate("/claimfiles")}>
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                  </ListItem>
                )
              }

  
              else{
              return (
                <ListItem button key={text}  onClick={() => navigate("/uploadDocument")}>
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

    

   {/* username and profile */}
   
 
 <Box
 sx={{
     display:"flex",
     width:"100%",
     height:"200px",
     mt:"52vh",
     alignItems:"center",
     justifyContent:"center",
 }}>
<Link to="/branchhome">Branch</Link>
 </Box>
      

 </Box>

  {/*Drawer Items end  */}

   






    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
       
        }}
      >
        <Toolbar 
        sx={{ 
            display:"flex",
            background:"#fff",
            height:"100px",
            elevation: 4,
            alignItems:"center",
            justifyContent:"center",
             }}>
                 
                 
        </Toolbar>
      
             
       
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 },  }}
        aria-label="mailbox folders"
        
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
           
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
           
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* intimation Tickets */}
      <Box
    sx={{
      display:"flex",
      width:"100%",
      mt:"50px",
    }}>
      
   
    </Box>
    </Box>
    
  );
}

DrawerIntimation.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerIntimation;
