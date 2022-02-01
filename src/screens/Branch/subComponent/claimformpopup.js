import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import CodeIcon from '@mui/icons-material/Code';

import Claimform from '../BranchComponent/Claimform';
import { Box } from '@mui/system';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 function Claimbtn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen}>
         <CodeIcon 
          sx={{
             fontSize:"42px" 
          }}
         /> 
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar 
        sx={{ 
        position: 'relative'}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            
          </Toolbar>
        </AppBar>
          <Box
           sx={{
               display:"flex",
           }}
           >
              <Claimform />
              
          </Box>
          <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
      </Dialog>
    </div>
  );
}
export default Claimbtn