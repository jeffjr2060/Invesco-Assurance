import React from 'react';
import { Container } from '@mui/material';
import  Box  from '@mui/material/Box';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

import Stepper from '../subComponent/stepper';

function Status() {
  return <div style={{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    minHeight:'100vh',
  }}>
    <Container
     sx={{
         display:"flex",
         flexDirection:"column",
         justifyContent:"flex-start",
         height:"100vh",
         width:"100%",
         marginLeft:'-21px'
     }}
     >
        <Box sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            width:'100%',
            height:'300px',
            ml:'-12px',
        }}>
            <div style={{
                display:'flex',
                flexDirection:'column',
                justifyContent: 'flex-start',
                width:'80%',
                height: '30%',
            }}>
                <Stepper />
            </div>

        </Box>
    </Container>
  </div>;
}

export default Status;
