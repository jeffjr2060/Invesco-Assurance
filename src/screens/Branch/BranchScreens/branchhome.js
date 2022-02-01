import React, {useState} from 'react';
import Container  from '@mui/material/Container';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

import Drawerbranch from '../subComponent/drawer';
import Searchbar from '../subComponent/searchbar';


function Branchhome() {
  return<div>
  <Container
  sx={{
    display:"flex",
    minWidth:'100vw',
    minHeight:'100vh',
    background: '#ece5dd',
  }}>
    <Drawerbranch />

 <Box
 sx={{
   display:"flex",
   width:"100%",
   mt:"40px"

 }}

 >

  <Searchbar />
</Box>
 <TextField 
  label="Filled"
  variant="filled"

  />

  </Container>
  </div>;
}

export default Branchhome;

