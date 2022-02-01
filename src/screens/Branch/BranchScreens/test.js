import * as React from 'react';

import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Paper sx={{ m: 0 }} elevation={1}>
    <Box component="svg" sx={{ width: '100%', height: "92vh" }}>
     
    </Box>
  </Paper>
);

 function Test() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ height: "100vh" }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange}  
          sx={{
              display:"none"
          }}/>}
          label="Claim Form"
          sx={{
              ml:"2%"
          }}
        />
      <Box sx={{ 
          width:"78vw",
          height:"100vh",
          ml:"20%"
       }}>
        <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
      </Box>
    </Box>
  );
}
export default Test