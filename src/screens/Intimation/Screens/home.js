import React, {useState} from 'react';
import Container  from '@mui/material/Container';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

import DrawerIntimation from '../Components/drawer';
import Intimationsearch from '../Components/Search';
import Intimationtickets from '../Components/tickets'


function Intimationhome() {
  return<div>
  <Container
  sx={{
    display:"flex",
    minWidth:'100vw',
    minHeight:'100vh',
    background: '#ece5dd',
  }}>
    <DrawerIntimation />
{/* search bar */}
 <Box
 sx={{
   display:"flex",
   width:"100%",
   mt:"40px"

 }}>
  <Intimationsearch  />
</Box>

{/* intimation Tickets */}
 <Box
 sx={{
   display:"flex",
   width:"100%",
   mt:"180px",
   ml:"-75%",
 }}>
   <Intimationtickets />

 </Box>
 

  </Container>
  </div>;
}

export default Intimationhome;

