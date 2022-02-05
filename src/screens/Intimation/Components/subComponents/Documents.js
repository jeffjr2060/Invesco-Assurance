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
function DocumentSideTab() {
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
            <Tab label="Summons" {...a11yProps(0)} />
            <Tab label="Hearings" {...a11yProps(1)} />
            <Tab label="Judgements" {...a11yProps(2)} />
            <Tab label="Demand Letters" {...a11yProps(3)} />
            <Tab label="Out of Court" {...a11yProps(4)} />
            <Tab label="Statutory notices" {...a11yProps(5)} />
            <Tab label="Warrants" {...a11yProps(6)} />
            <Tab label="Memo of Appearance & Defence" {...a11yProps(7)} />
          </Tabs>
          <TabPanel value={value} index={0}>
          Summons
          </TabPanel>
          <TabPanel value={value} index={1}>
          Hearings
          </TabPanel>
          <TabPanel value={value} index={2}>
          Judgements
          </TabPanel>
          <TabPanel value={value} index={3}>
          Demand Letters
          </TabPanel>
          <TabPanel value={value} index={4}>
          Out of Court
          </TabPanel>
          <TabPanel value={value} index={5}>
          Statutory notices
          </TabPanel>
          <TabPanel value={value} index={6}>
          Warrants
          </TabPanel>
          <TabPanel value={value} index={7}>
          Memo of Appearance & Defence
          </TabPanel>
        </Box>
      );
}
export default DocumentSideTab
