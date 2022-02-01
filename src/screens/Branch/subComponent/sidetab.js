import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
function SideTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 470, mt:"8px",ml:"5px", }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' , background:"#ece5dd"}}
      >
        <Tab label="Policy Holder's details" {...a11yProps(0)} />
        <Tab label="Vehicle details" {...a11yProps(1)} />
        <Tab label="Commercial details" {...a11yProps(2)} />
        <Tab label="driver's details" {...a11yProps(3)} />
        <Tab label="Accident details" {...a11yProps(4)} />
        <Tab label="Vehicle damages details" {...a11yProps(5)} />
        <Tab label="" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      Policy Holder's details
      </TabPanel>
      <TabPanel value={value} index={1}>
      Vehicle details
      </TabPanel>
      <TabPanel value={value} index={2}>
      Commercial details
      </TabPanel>
      <TabPanel value={value} index={3}>
      driver's details
      </TabPanel>
      <TabPanel value={value} index={4}>
      Accident details
      </TabPanel>
      <TabPanel value={value} index={5}>
      Vehicle damages details
      </TabPanel>
      <TabPanel value={value} index={6}>
      
      </TabPanel>
    </Box>
  );
}
export default SideTab
