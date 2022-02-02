import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import Paper from '@mui/material/Paper';
import axios from 'axios';

import Claimdetails from './claimdetails';


const style = {
  position: 'absolute',
  top: '50%',
  left: '45%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '70%',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
};

const instructions = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box sx={{
        display: 'flex',
      }}

      />

    </Box>
  </Paper>
);

function Notes() {
  const [title, settitle] = useState('');
  const [notes, setnotes] = useState('');

  const handletitle = (e) => {
    settitle(e.target.value);
  }

  const handleNotes = (e) => {
    setnotes(e.target.value);
  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/addnote', {
      title: title,
      content: notes
    }
    ).then(resp => {
      console.log(resp.data);
      handleClose();
    }).catch(err => console.log(err.message));
  }

  const [state, setState] = React.useState({
    Jeff: false,
    Brian: false,
    Steph: false,
    Joy: false,
    Chris: false,
    Christine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { Jeff, Brian, Steph, Joy, Chris, Christine } = state;
  const containerRef = React.useRef(null);
  const [checked, setChecked] = React.useState(false);
  const handlechange = () => {
    setChecked((prev) => !prev);
  };

  return <div>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: '80%',
        ml: "-12px",
        height: ''
      }}
    >
      <div>
        <Button
          onClick={handleOpen}
          sx={{ ml: 23 }}
        >+ Add Notes</Button>
        <Box
           sx={{ 
             display: 'flex',
             flexDirection: 'column',
             justifyContent:'flex-start',
             width: '100%',
             height:'300px',
           }}             
        >
          {/* Title */}
          <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:"30%",
            width:"100%",
          }}>
        {/* notes / message */}
          </Box>
          <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height:"70%",
            width:"100%",
          }}>

        {/* notes */}
        
          </Box>

        </Box>

      </div>


    </Box>
    <div style={{ alignItem: 'center', justifyContent: 'center' }}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>
          <Box sx={style}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                width: '60%',
                height: '100%',
              }}>
              <Typography sx={{
                fontWeight: '900',
                fontSize: '20px'
              }}>Add Note</Typography>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  marginTop: '5%',
                }}>
                <TextField fullWidth
                  label="Note Title"
                  id="fullWidth"
                  value={title}
                  onChange={handletitle}
                />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  marginTop: '5%',
                }}>
                <TextareaAutosize
                  fullWidth
                  label="Note"
                  value={notes}
                  onChange={handleNotes}
                  style={{ width: "100%", height: 250, fontSize: '24px' }}
                />
                <Button onClick={handleSubmit} variant="outlined">Attach</Button>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                mt: '45px'

              }}>
              <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Assign responsibility</FormLabel>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox checked={Jeff} onChange={handleChange} name="Jeff" />
                    }
                    label="Jeff"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={Brian} onChange={handleChange} name="Brian" />
                    }
                    label="Brian"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={Steph} onChange={handleChange} name="Steph" />
                    }
                    label="Steph"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={Joy} onChange={handleChange} name="Joy" />
                    }
                    label="Joy"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={Chris} onChange={handleChange} name="Chris" />
                    }
                    label="Chris"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox checked={Christine} onChange={handleChange} name="Christine" />
                    }
                    label="Christine"
                  />
                </FormGroup>
              </FormControl>

            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  </div>;
}

export default Notes;
