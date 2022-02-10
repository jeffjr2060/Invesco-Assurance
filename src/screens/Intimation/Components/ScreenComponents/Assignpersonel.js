import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button, Container } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  width: "60vw",
  height:"75vh",
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};






function Assignedpersonel() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />

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
      sx={{ width: "100%",
       background:"#fff",
      }}
    >
    <Toolbar 
      sx={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
      }}
    
    >
        <Typography 
            variant="h6"
            sx={{
                display:'flex',
                color:'#000'
            }} 
        >Assign Task</Typography>

        <Typography variant='h7' sx={{color:"#000",display:"flex"}}>signout</Typography>
   </Toolbar>
   </AppBar>
  </Box>
        {/*  */}
<Container>






    
</Container>












   
     <Box>
        
     </Box>
   </Box>
  
  </Box>
  );
}

export default Assignedpersonel

