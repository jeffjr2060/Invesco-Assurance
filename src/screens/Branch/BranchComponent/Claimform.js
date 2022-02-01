import React, {useState} from 'react'
import  Container  from '@mui/material/Container'
import  Box  from '@mui/material/Box'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';



//who is reporting
const reporting = [
  {
    value: 'Insured',
    label: 'Insured',
  },
  {
    value: 'ThirdParty',
    label: 'Third Party',
  },
  {
    value: 'Agent',
    label: 'Agent',
  },
];
 
function Claimform() {

  // states
  const [reporting_party, setReportingParty] = useState('');
  const [dol, setDol] = useState('');
  const [carRegistration, setCarRegistration] = useState('');
  const [holder_name, setName] = useState('');
  const [tell_no, setTellno] = useState('');
  const [holders_address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [policy_number, setPolicyno] = useState('');
  const [expiry_date, setExpirydate] = useState(new Date(Date.now()));
  const [hire_purchase_company, setHirePurchaseCompany] = useState('');
  const [make_model, setMake] = useState('');
  const [hp_cc, setCC] = useState('');
  const [manufacture_year, setManufactureYear] = useState(new Date(Date.now()));
  const [vehicle_registration, setVehicleRegistration] = useState('');
  const [vehicle_capacity, setVehicleCapacity] = useState('');
  const [capacity, setCapacity] = useState('');
  const [trailer_registration, setTrailerReg] = useState('');
  const [trailer_capacity, setTrailerCapacity] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [owners_name, setOwnersName] = useState('');
  const [owners_address, setOwnersAddress] = useState('');

  // search
  const arr = [{
    Policyno: '077/084/1/000202/2010/09',
    Carreg: 'KAQ 057C',
    Name: 'Benson Kariuki',
    Address: 'Nakuru',
    Tellno: '0722774531',
    cc: 1500,
    Occupation: 'Businessman',
    Periodfrom: new Date(2022, 1, 1),
    Periodto: new Date(2023, 1, 1),
    Hirepurchase: 'T.B.A',
    Make: 'TOYOTA HIACE',
    Yearofmanufacture: new Date(2005, 1, 1),
    carryingCapacity: 14,
    TrailerRegno: 'N/A',
    chasisno: 'SV30-0169266'
  }];

  //Outofil
  const handleCarRegInput = (e) => {
    setCarRegistration(e.target.value);
    const val = e.target.value
    const policy = arr.find(o => o.Carreg === val);

    if (policy) {
      setName(policy.Name);
      setHirePurchaseCompany(policy.Hirepurchase);
      setTellno(policy.Tellno);
      setAddress(policy.Address);
      setOccupation(policy.Occupation);
      setMake(policy.Make);
      setCC(policy.cc);
      setCapacity(policy.carryingCapacity);
      setTrailerReg(policy.TrailerRegno);
      setTrailerCapacity(0);
      setOwnersName(policy.Name);
      setOwnersAddress(policy.Address);
      setChassisNumber(policy.chasisno);
    } else {
      setName('');
      setHirePurchaseCompany('');
      setTellno('');
      setAddress('');
      setOccupation('');
      setMake('');
      setCC('');
      setCapacity('');
      setTrailerReg('');
      setTrailerCapacity('');
      setOwnersName('');
      setManufactureYear();
      setOwnersAddress('');
      setChassisNumber('');
    }

    console.log(carRegistration);
  }

  
 
  return (
    <React.Fragment>
      <Container
        sx={{
          display:'flex',
          flexDirection: "column",
          justifyContent:'flex-start',
          width:"100vw",
          height:"100%",
         

        }}>
        {/* this box hold the form brand headings */}
         <Box sx={{
           display:"flex",
           flexDirection:"column",
           justifyContent:"flex-start",
           width:"100%",
           height:"380px",
         }}>
           {/* logo and Address */}
            <Box
            sx={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
            }}>
              {/* logo */}
              <Box 
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
                mt:"5%",
                ml:"5%"
              }}>
                <Typography
                sx={{
                  fontSize:"60px",
                  fontWeight:"900",
                  color:"orange",
                }}><ArrowDropUpTwoToneIcon
                    sx={{
                      color:"#075e54",
                      fontSize:"85px",
                      position:"absolute",
                      ml:"-35px",
                      mt:"-32px",
                    }}
                />INVESCO</Typography>
                <Typography
                 sx={{
                   fontSize:"14px",
                   mt:"-11px",
                   ml:"3px",
                   color:"#075e54",
                   fontWeight:'900',
                 }}
                >INVESCO ASSURANCE COMPANY LTD</Typography>
                <Typography
                 sx={{
                  fontSize:"17px",
                  ml:"5px",
                  color:"#000",
                  fontWeight:'900',
                 }}
                >Moving ahead with confidence</Typography>
              </Box>
              <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"flex-start",
              }}>

         </Box>
         {/* Address */}
         <Box 
         sx={{
           display:"flex",
           flexDirection:"column",
           justifyContent:"flex-start",
           width:"400px",
           height:'180px',
           mt:'5%',
         }}>
           <Typography>Head Office: Bishop Magua Centre,3rd Floor</Typography>
           <Typography>George Padmore Lane,Off Ngong Road</Typography>
           <Typography>P.O BOX 52964-00200 Nairobi, Kenya</Typography>
           <Typography>Pilot Line:0719070000</Typography>
           <Typography>Call Center:0719070200/1-10</Typography>
           <Typography>E-mail:invesco@invescoassurance.co.ke</Typography>
           <Typography>Website:www.invescoassurance.co.ke</Typography>
           

         </Box>

            </Box>
            {/* end */}

          {/* Title */}
          <Box 
          sx={{
            display:"flex",
            width:"100%",
            alignItems:"center",
            justifyContent:"center",
            background:"#075e54",
            height:"60px",
            mt:"3%"

          }}>
              <Typography
               sx={{
                 fontSize:"22px",
                 color:"#FFC000",
                 
               }}
              
              >MOTOR ACCIDENT REPORT FORM</Typography>
          </Box>

         </Box>
         {/* brand ends */}

         {/* form itself */}
         <Box
         sx={{
           display:'flex',
           flexDirection:'column',
           justifyContent:'flex-start',
           width:"100%",
           height:"80%",
           mt:"1%"
         }}>

       {/* first details to be captured */}
       <Box
       sx={{
         display:"flex",
         flexDirection:"column",
         justifyContent:'flex-start',
         width:'100%',
         height:'110px',
       }}>  
       
      
        {/* car reg and date of lose */}
        <Box
        sx={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"
        }}>
          <TextField 
          id="standard-basic" 
          label="Enter the Car Registration" 
          variant="standard"
          value={carRegistration}
          onChange={handleCarRegInput}
            sx={{width:"60%",}} />
            {/* date of loss */}
          <TextField
           id="standard-basic" 
           label="Enter the Date of Loss" 
           variant="standard" 
           sx={{width:"35%" }}/>
         {/* text */}
        </Box>

       </Box>



      {/* policy holder */}
           <Box
           sx={{
             display:'flex',
             flexDirection:"column",
             justifyContent:'flex-start',
             width:'100%',
             height:'210px',
           }}>
             <Typography sx={{
            fontWeight:'bold'
          }}>POLICY HOLDER</Typography>
             {/*name& tell no  */}
            <Box
            sx={{
              display:"flex",
              flexDirection:"row",
              justifyContent:"space-between",
              width:'100%',
            }}
            >
       <TextField 
       id="standard-basic" 
       label="Name" 
       variant="standard"
       value={owners_name}
        sx={{width:"60%", }} />
      <TextField
       id="standard-basic"
        label="Tell No" 
        variant="standard" 
        value={tell_no}
       sx={{ width:"35%"}}/>

        </Box>
            {/* ends */}
     <TextField
      id="standard-basic" 
      label="Address"
      value={owners_address}
       variant="standard"
      sx={{width:"100%", }} />
    <TextField 
    id="standard-basic" 
    label="business/Occupation" 
    variant="standard"
    sx={{ width:"100%", }} />
  </Box>
           {/* end */}

   {/* policy */}
   <Box
      sx={{
          display:'flex',
           flexDirection:"column",
           justifyContent:'flex-start',
            width:'100%',
            height:'180px',
      }}>
    <Typography sx={{
        fontWeight:'bold'
      }}>POLICY</Typography>
      <Box sx={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          width:'100%',}}>
    <TextField 
    id="standard-basic"
     label="Number"
      variant="standard"
      sx={{ width:"60%", }} />
     <TextField 
     id="standard-basic" 
     label="Expiry Date"
      variant="standard" 
     sx={{width:"35%"}}/>
     </Box>
      <TextField
       id="standard-basic" 
       label="Name of hire purchase of finance company" 
       value={hire_purchase_company}
       variant="standard"
       sx={{width:"100%"}}/>
    </Box>
           {/* end */}

     {/* Vehicle details */}
         <Box> 
        <Typography sx={{
             fontWeight:'bold',
        }}>VEHICLE</Typography>
     <Box sx={{
           display:"flex",
           flexDirection:"row",
           justifyContent:"space-between",
           width:'100%',

         }}>
      <TextField 
      id="standard-basic" 
      label="Make & Model" 
      value={make_model}
      variant="standard"
       sx={{
      width:"30%"}}/>
      <TextField 
      id="standard-basic" 
      abel="HP/CC"
      value={hp_cc}
      variant="standard"
      sx={{width:"30%"}}/>
      <TextField 
      id="standard-basic" 
      label="Year of Manufacture" 
      value={manufacture_year}
      variant="standard"
     sx={{width:"30%"}}/>
    </Box>
     <Box sx={{
           display:"flex",
           flexDirection:"row",
           justifyContent:"space-between",
           width:'100%', }}>
<TextField 
id="standard-basic" 
label="Reg.No. of Vehicle" 
value={vehicle_registration}
variant="standard"
  sx={{width:"60%"}}/>

 <TextField 
 id="standard-basic" 
 label="Carrying Capacity"
 value={vehicle_capacity}
  variant="standard"
 sx={{width:"35%"}}/>
 </Box>
  <Box 
  sx={{display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:'100%',}}>
  <TextField
   id="standard-basic" 
   label="Reg.No. of Trailer"
   value={trailer_registration}
    variant="standard"
    sx={{width:"60%"}}/>
  <TextField
   id="standard-basic" 
   label="Carrying Capacity" 
   value={vehicle_capacity}
   variant="standard"
   sx={{width:"35%"}}/>
 </Box>
     <Box
      sx={{display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          width:'100%', }}>
  <TextField 
  id="standard-basic" 
  label="Name and Address of Owner" 
  value={owners_address}
  variant="standard"
    sx={{width:"60%"}}/>
  <TextField 
  id="standard-basic" 
  label="Chassis No." 
  value={chassisNumber}
  variant="standard"
   sx={{width:"35%"}}/>
   </Box>
            
<Box sx={{
  display:'flex',
  flexDirection:'column',
  

}}>

</Box>
         
        </Box>
         
         
      </Box>
    
         {/* form ends */}


      </Container>



    </React.Fragment>
  )
}

export default Claimform