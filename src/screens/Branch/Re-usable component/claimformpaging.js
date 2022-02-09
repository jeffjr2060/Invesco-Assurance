import { Container } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

 function Claimformpaging() {
   const navigate = useNavigate ();

  return <div>
  <Container
  sx={{
      display:'flex',
       flexDirection:"row",
       m:'5px',
       alignItems:'center',
  }}>
    <ListItemButton onClick={()=> navigate("/claimform7") }>
       <ListItemText primary="Previous" />
    </ListItemButton>
  
  </Container>

  </div>;
}
export default Claimformpaging