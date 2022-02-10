import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useClaimFormContext } from '../../../context-stores/CliamContext';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import FileDownloadOffIcon from '@mui/icons-material/FileDownloadOff';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Button } from '@mui/material';

import Claimformtemplate from '../BranchComponent/claimformtemplate';
import Claimformpaging from '../Re-usable component/claimformpaging';



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






function  ClaimForm8() {
  const { control, handleSubmit, onSubmit, ref } = useClaimFormContext();
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
    <Toolbar>
  <Typography variant="h6" noWrap component="div">
    
  </Typography>
   </Toolbar>
   </AppBar>

   
  </Box>
        {/*  */}
   {/* Report Table */}
 <Box
 sx={{
   display:"flex",
   width:'100%',
   height:"85vh",
   flexDirection:"row",
   justifyContent:"flex-start",
   m:"6px",
 }}>
   {/* Template */}
   <Box sx={{
     display:'flex',
     width:"60%",
     height:"90%",
     m:"2%",
    overflowY:"scroll",
    scrollBehavior:"smooth",
    boxShadow:10,
    borderRadius:"8px",
    flexDirection:"column",
    justifyContent:"flex-start",
  
    
   }}>
    
     <Typography variant='h6' sx={{ fontWeight:"600", ml:"8px" }}>Confirm Claim form Details :</Typography>  
     <Box 
     sx={{
     display:"flex",
     width:"100%",
     mt:"1%",
     justifyContent:"flex-start",
     }}>
   
     <Claimformtemplate />
     </Box>

     </Box>
      {/* documents */}
    <Box
    sx={{
      display:'flex',
      width:"45%",
      height:"87%",
      overflowY:"scroll",
      scrollBehavior:"smooth",
      flexDirection:"column",
      justifyContent:"flex-start",
      borderRadius:"15px",
      mt:"3%",
      boxShadow:1,
     
    }}>
      <Typography variant='h5' sx={{fontWeight:"700"}}>Documents Uploaded</Typography>
      <Box>
      <List
      sx={{ width: '100%',bgcolor: 'background.paper' }}
    >
      
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <FileDownloadOffIcon />
        </ListItemIcon>
        <ListItemText primary="Police Abstract" />
      </ListItemButton>
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <FileDownloadOffIcon/>
        </ListItemIcon>
        <ListItemText primary="Driver's License" />
      </ListItemButton>
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <FileDownloadOffIcon/>
        </ListItemIcon>
        <ListItemText primary="Copy Notice" />
      </ListItemButton >
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <FileDownloadOffIcon/>
        </ListItemIcon>
        <ListItemText primary="PSV Lisence" />
      </ListItemButton>
      <ListItemButton onClick={handleOpen}>
        <ListItemIcon>
          <FileDownloadOffIcon/>
        </ListItemIcon>
        <ListItemText primary="Inspection Report" />
      </ListItemButton>

      </List>
      </Box>
      {/* notes /Cover letter */}
    <Typography variant='h5' sx={{fontWeight:"700", ml:"5px"}}>ADD Notes</Typography>
    {/* form notes */}
       <form style={{
         display:"flex",
         flexDirection:"column",
         justifyContent:"center",
         alignItems:"center",
         width:"100%",
         height:"280px",
         mt:"15px",
        
       }}>
      <TextField 
        id="outlined-basic" 
        label="Title"
        variant="outlined"
        defaultValue="Cover letter"
        helperText="Note title"
        sx={{width:"90%", mt:"2%"}}

      />

       <TextareaAutosize
          fullWidth
          label="Note"
          placeholder='Type a note'
          style={{ 
          width: "85%",
          height: 250,
          fontSize: '24px',
          marginTop: "15px",
          
        }}/>

        <Button
         sx={{
           display:'flex',
           width:"150px",
           height:"50px",
           mt:"20px",
         }}
         variant="contained"
        >Submit</Button>
       </form>


         {/* Modal */}
       <Modal
        open={open}
        onClose={handleClose}
      >
       <Box sx={style}>
          <Box>

          </Box>
        </Box>
      </Modal>
 
    </Box>
    
 
  <Box>
    {/*  */}
    
  </Box>
 
 </Box>
 <Box sx={{
   display:"flex",
   width:"100%",
   height:"5vh",
   marginTop:"-27px", 
   alignItems:"center",
   justifyContent:'center'
 }}>
 <Claimformpaging />
 </Box>
 
   </Box>
  
  </Box>
  );
}

export default ClaimForm8
