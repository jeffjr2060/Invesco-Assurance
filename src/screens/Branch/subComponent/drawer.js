import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Claimbtn from './claimformpopup';
import { useNavigate, Link  } from 'react-router-dom';


const drawerWidth = 300;




function Drawerbranch(props) {
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
          background: "#fff",
          height: "100px",
          background: "#075e54",

        }}>
        <Typography>Invesco Logo</Typography>
      </Toolbar>



      {/* drawer items */}
      <Box
        sx={{
          display: "block",
          width: "100%",
          height: "90vh",
          background: "#075e54",
        }}>

        {/* list */}
        <List>
          {
            ['CLAIM FORM', 'CLAIM NOTIFICATION',  'UPLOAD DOCUMENTS', 'REPORTS',].map((text, index) => {
              if (text === "CLAIM FORM") {
                return (
                  <ListItem button key={text} onClick={() => navigate("/claimform1")} >
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                  </ListItem>
                )
                // claim Notification
              } else if (text === "CLAIM NOTIFICATION") {
              
                return (
                  <ListItem button key={text} onClick={() => navigate("/claimnotification")} >
                    <ListItemText primary={text}
                      sx={{
                        color: "#FBCD99",
                      }} />
                  </ListItem>
                )
              
              // reported ClaiM
              } else if (text === "UPLOAD DOCUMENTS")  {
              
              return (
                <ListItem button key={text} onClick={() => navigate("/uploadDocument")}>
                  <ListItemText primary={text}
                    sx={{
                      color: "#FBCD99",
                    }} />
                </ListItem>
              )
              
            
              }
              // upload document
              else{
              return (
                <ListItem button key={text}  onClick={() => navigate("/reportedclaim")}>
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


     <Box>
     <Link className="link" to='/intimation'>Intimation</Link>
     </Box>

        {/* username and profile */}

        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "200px",
            mt: "52vh",
            alignItems: "center",
            justifyContent: "center",
          }}>

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
            display: "flex",
            background: "#fff",
            height: "100px",
            elevation: 4,
            alignItems: "center",
            justifyContent: "center",
          }}>


        </Toolbar>



      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, }}
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

    </Box>
  );
}

Drawerbranch.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Drawerbranch;
