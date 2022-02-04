import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Tickets from './tickets';
import Status from './status';
import Notes from './notes';
import SideTab from '../subComponent/sidetab';
import Intimationsearch from '../../Intimation/Components/Search';
import DocumentSideTab from '../../Intimation/Components/Documents';
import Claimformtemplate from './claimformtemplate';
import { width } from '@mui/system';


const drawerWidth = 240;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Claimdetails() {
  const [value, setValue] = useState(0);
  const [tab, settab] = useState(0);
  const { id } = useParams();
  const [claim_data, setCliamsData] = useState(null);

  useEffect(() => {
    axios.get('/claimsretrieval').then((response) => {
      console.log(response.data);
      setCliamsData(response.data[0]);
    })
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlechange = (event, newValue) => {
    settab(newValue);
  };
  return <div
    style={{
      display: "flex",
      minWidth: '100vw',
      minHeight: '100vh',
      background: '#ece5dd ',
      overflow: 'hidden'

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
          Claim no <Typography variant='h8' noWrap component="div"
            sx={{
              color: '#000',
              fontSize: '15px'

            }}
          >/256/3940/08/2018 </Typography>
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
          borderTopRightRadius: "8px"
        },
      }}
      variant="permanent"
      anchor="left"
    >

    <Box
      sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        width:"100%",
      }}
     >

    </Box>


    </Drawer>
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        minHeight: '80%',
        minWidth: '95%'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: "100%",
          width: "65%",
          ml: "-15px",
          mt: "28px",
        }}>
        {/*  search */}
        <Box
          sx={{
            display: 'flex',
            width: "100%",
            mt: "55px",
            ml:"-5%",
            
          }}>
          <Intimationsearch />
        </Box>

        <Box sx={{
          maxWidth: "100%",
          minHeight: '100%',
          marginTop: '7%',

        }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"

          >
            <Tab label="Claim Form"  {...a11yProps(0)} />
            <Tab label="Documents"  {...a11yProps(1)} />
            <Tab label="Investigation"  {...a11yProps(2)} />
            <Tab label="Litigation"  {...a11yProps(3)} />
            <Tab label="payment"  {...a11yProps(4)} />

          </Tabs>
          <Divider />
          <TabPanel value={value} index={0}>
             {/* claim info */}
        <Box sx={{
            display: 'flex',
            backgroundColor: '#fff',
            borderRadius: '10px',
            height:"500px",
            overflowY:"auto",
        }}>
            <Claimformtemplate />
        </Box>

          {/*  */}
      </TabPanel>
      <TabPanel value={value} index={1}>

        <Box sx={{
          display: 'flex',
          height: '480px',
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
        }}>
          {/* Documents */}
          <DocumentSideTab />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box sx={{
          display: 'flex',
          height: '480px',
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
        }}>
          <h2>Investigation Reports</h2>

        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box sx={{
          display: 'flex',
          height: '480px',
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '10px',
        }}>
          <h2>Litigation</h2>

        </Box>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Box sx={{
          display: 'flex',
          height: '480px',
          width: '100%',
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContentx: 'center',
          borderRadius: '10px',
        }}>
          <h2>Payments</h2>
        </Box>
      </TabPanel>
    </Box>

  </Box>

  {/**second row on the container */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '35%',
      backgroundColor: '#fff',
    }}
  >
    <Box sx={{
      borderBottom: 1, borderColor: 'divider',
      marginTop: '20%'
    }}>
      <Tabs value={tab} onChange={handlechange} aria-label="basic tabs example">
        <Tab label="Notes 4" {...a11yProps(0)} />
        <Tab label="Status" {...a11yProps(1)} />
        <Tab label="Tickets 3" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={tab} index={0}>
    <Notes />
    </TabPanel>
    <TabPanel value={tab} index={1}>
      
    </TabPanel>
    <TabPanel value={tab} index={2}>
      <Tickets />
    </TabPanel>


  </Box>


    </Container>


  </div>;
}

export default Claimdetails;
