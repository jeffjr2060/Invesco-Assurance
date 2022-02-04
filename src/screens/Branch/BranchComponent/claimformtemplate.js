import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
function Claimformtemplate() {
  return <div>
        <Box
           sx={{
             display:"flex",
             flexDirection:"column",
             mt:"2%",
            width:"100%",
             height:"100%",

         
           }}>
             
             {/* policy details */}
         <Typography sx={{display:'flex',fontSize:'18px',ml:"5%",fontWeight:"900"}} >POLICY DETAILS</Typography>

              {/* {claim_data &&
                <div styles={{
                  display: 'flex',
                  
                }}>
                  <Typography>{claim_data.policy_number}</Typography>
                  <Typography>{claim_data.car_reg_no}</Typography>
                  <Typography>{claim_data.policy_holders_name}</Typography>
                </div>
              } */}
          <Box
          sx={{
            display:"flex",
            flexDirection:"column",
            width:"100%",
            ml:"7%",
            mt:"1%",
          }}>
        <Typography>Car Reg No: </Typography>
        <Typography>Policy Number: </Typography>   
        <Typography>Policy Holder's Name: </Typography>
        <Typography>Tell no:</Typography>
        <Typography>Address:</Typography>
        <Typography>Business/Occupation:</Typography>
        <Typography>Expiry Date:</Typography>
        <Typography>Name of hire purchase of finance Company:</Typography>
      </Box>

   {/* Vehicle  */}
  <Typography sx={{display:'flex',fontSize:'18px',ml:"5%", fontWeight:"900"}} >Vehicle Details</Typography>
      <Box
       sx={{
         display:"flex",
         flexDirection:"column",
         width:"100%",
         ml:"7%",
         mt:"1%",
       }}>
        <Typography>Make & Model: </Typography>
        <Typography>HP /CC:  </Typography>
        <Typography>Year of Manufacture:</Typography>
        <Typography>Vehicle Reg No: </Typography>
        <Typography>Carrying Capacity: </Typography>
        <Typography>Reg No of Trailer:  Carrying Capacity: </Typography>
        <Typography>Owner Name:   Address: </Typography>
        
    </Box>
   {/*   */}

    {/* Use of vehicle */}
 <Typography sx={{display:'flex',fontSize:'18px',ml:"5%", fontWeight:"900"}} >Use of vehicle</Typography>
      <Box
       sx={{
         display:"flex",
         flexDirection:"column",
         width:"100%",
         ml:"7%",
         mt:"1%",
       }}>
        <Typography>Use: </Typography>
    </Box>
        {/*   */}

  {/* Commercial vehicle details */}
<Typography sx={{display:'flex',fontSize:'18px',ml:"5%",fontWeight:"900"}} >Commercial vehicle details</Typography>
  <Box
    sx={{
      display:"flex",
      flexDirection:"column",
      width:"100%",
      ml:"7%",
      mt:"1%",
    }}>
      <Typography>Description of goods being Carried: </Typography>
      <Typography>Name of Owner of goods: </Typography>
      <Typography>Was a trailer attached: </Typography>
      <Typography>Weight of load on (a) Vehicle: </Typography>
      <Typography>Weight of load on (a) Trailer: </Typography>
  </Box>
        {/*  */}

    {/* Driver details */}
<Typography sx={{display:'flex',fontSize:'18px',ml:"5%",fontWeight:"900"}} >Driver details</Typography>    
<Box
    sx={{
      display:"flex",
      flexDirection:"column",
      width:"100%",
      ml:"7%",
      mt:"1%",
    }}>
      <Typography>Driver's Name: </Typography>
      <Typography>Driver's Occupaton: </Typography>
      <Typography>Actual Date of Birth: </Typography>
      <Typography>P.O Box:  Code:  Tel No: </Typography>
      <Typography>Is he or she employed by you:  How long has he/she been in your service:  </Typography>
      <Typography>Was he/she driving with permission:   </Typography>
      <Typography> Was he/she to blame for the accident:  </Typography>
      <Typography> Did he/she admit liability:  </Typography>
      <Typography> Has he/she had any previous accidents:  </Typography>
      <Typography> Details of previous accidents including dates:  </Typography>
      <Typography> Does he/she hold a full provisional license to drive the vehicle:  </Typography>
      <Typography> Date of first issue: License Number: </Typography>
      <Typography> Does he/she own a motor vehicle:  name of insurer:  address of insurer:</Typography>
      <Typography> Driver's Policy No:  </Typography>
  </Box>

      {/*  */}

  

{/* Statement by driver and owner */}  
<Typography sx={{display:'flex',fontSize:'18px',ml:"5%",fontWeight:"900"}} >Statement by driver and owner</Typography>
      <Box
      sx={{
        display:'flex',
        flexDirection:"column",
        width:"100%",
        ml:"7%",
        mt:"1%",
      }}>
         <Typography>Statement by Driver:</Typography>
      </Box>
      <Box
      sx={{
        display:'flex',
        flexDirection:"column",
        width:"100%",
        ml:"7%",
        mt:"1%",
      }}>
         <Typography>Statement by Owner:</Typography>
      </Box> 
      {/*  */}

{/* Accident details */}
<Typography sx={{display:'flex',fontSize:'18px',ml:"5%",fontWeight:"900"}} >Accident details</Typography>
  <Box
      sx={{
        display:'flex',
        flexDirection:"column",
        width:"100%",
        ml:"7%",
        mt:"1%",
      }}>
      <Typography>Date of Accident:  Time:  Place: </Typography>
      <Typography>Type of road surface:</Typography>
      <Typography>visibility: Wet or Dry:</Typography>
      <Typography>What lights were showing on your vehicle:</Typography>
      <Typography>What warning did your driver give:</Typography>
      <Typography>Estimated speed before accident:</Typography>
      <Typography>Weather Conditions:</Typography>
      <Typography>Did police take particulars: </Typography>
      <Typography>If so ,give officer's,name:  number:  station:</Typography>
   </Box>
      {/*  */}

       {/* Damage to insured Vehicle */}  
   <Typography sx={{display:'flex',fontSize:'18px',ml:"5%",fontWeight:"900"}} >Damage to insured Vehicle</Typography>
     <Box
        sx={{
          display:'flex',
          flexDirection:"column",
          width:"100%",
          ml:"7%",
          mt:"1%",
      }}>
        <Typography>State briefly apparent damage:</Typography>
        <Typography>Nameof the garage of my choice: Address:</Typography>
        <Typography>Tel No:</Typography>
        <Typography>Is the vehicle still in use:</Typography>
        <Typography>When and where can it be inspected:</Typography>

    </Box>
       {/*  */}
      </Box> 
  </div>;
}

export default Claimformtemplate;
