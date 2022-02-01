import React, { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';

const vehicleUse = [
  {
    value: 'use_of_vehicle',
    label: 'Own Use/Private Use',
  },
  {
    value: 'use_of_vehicle',
    label: 'PSV',
  },
  {
    value: 'use_of_vehicle',
    label: 'Parked',
  },
  {
    value: 'use_of_vehicle',
    label: 'Any Other',
  },
];



function ClaimNotification() {

  // policy_Holders Details
  const [holders_name, setholders_name] = useState('slldksdlslf');
  const [tell_no, settell_no] = useState('');
  const [holders_address, setholders_address] = useState('');
  const [holders_occupation, setholders_occupation] = useState('');
  const [policy_number, setpolicy_number] = useState('');
  const [expiry_date, setexpiry_date] = useState('');
  const [hire_purchase_company, sethire_purchase_company] = useState('');

  //vehicles details
  const [make_model, setmake_model] = useState('');
  const [hp_cc, sethp_cc] = useState('');
  const [manufacture_year, setmanufacture_year] = useState('');
  const [vehicle_registration, setvehicle_registration] = useState('');
  const [vehicle_capacity, setvehicle_capacity] = useState('');
  const [trailer_registration, settrailer_registration] = useState('');
  const [trailer_capacity, settrailer_capacity] = useState('');
  const [owners_name, setowners_name] = useState('');
  const [owners_address, setowners_address] = useState('');
  const [chasis_no, setchasis_no] = useState('');
  const [use_of_vehicle, setuse_of_vehicle] = useState('');

  //Commercial_Details
  const [owner_of_goods, setowner_of_goods] = useState('');
  const [trailer_attached, settrailer_attached] = useState('');
  const [load_weight, setload_weight] = useState('');
  const [trailer_weight, settrailer_weight] = useState('');
  const [goods_carried, setgoods_carried] = useState('');
  // driver_details states  

  const [drivers_name, setdrivers_name] = useState('');
  const [drivers_occupation, setdrivers_occupation] = useState('');
  const [drivers_dob, setdrivers_dob] = useState('');
  // add to back end
  const [drivers_po_box, setdrivers_po_box] = useState('');
  const [drivers_postal_code, setdrivers_postal_code] = useState('');
  const [drivers_tell_no, setdrivers_tell_no] = useState('');
  // 

  const [employed_by_policyholder, setemployed_by_policyholder] = useState('');
  const [service_duration, setservice_duration] = useState('');
  const [permission, setpermission] = useState('');
  const [driving_duration, setdriving_duration] = useState('');
  const [drivers_statement, setdrivers_statement] = useState('');
  const [accident_blame, setaccident_blame] = useState('');
  const [accident_liability, setaccident_liability] = useState('');
  const [prev_accidents, setprev_accidents] = useState('');
  const [prev_accident_details, setprev_accident_details] = useState('');
  const [prev_convictions, setprev_convictions] = useState('');
  const [prev_conviction_details, setprev_conviction_details] = useState('');
  const [license_holder, setlicense_holder] = useState('');
  const [date_of_issued, setdate_of_issued] = useState('');
  const [owns_vehicle, setowns_vehicle] = useState('');
  const [insurers_name, setinsurers_name] = useState('');
  const [insurers_address, setinsurers_address] = useState('');
  const [drivers_policy_no, setdrivers_policy_no] = useState('');
  const [date_issue, setdate_issue] = useState('');




  //  Accident_details states

  const [date_of_accident, setdate_of_accident] = useState('');
  const [time_of_accident, settime_of_accident] = useState('');
  const [place, setplace] = useState('');
  const [road_surface, setroad_surface] = useState('');
  const [visibility, setvisibility] = useState('');
  const [conditions, setconditions] = useState('');
  const [lights, setlights] = useState('');
  const [warning, setWarning] = useState('');
  const [estimated_speed, setestimated_speed] = useState('');
  const [weather_condition, setweather_condition] = useState('');
  const [police_investigation, setpolice_investigation] = useState('');
  const [police_officers_no, setpolice_officers_no] = useState('');
  const [police_officers_name, setpolice_officers_name] = useState('');
  const [police_officers_station, setpolice_officers_station] = useState('');
  const [police_stations, setpolice_stations] = useState('');

  // insured_vehicle_damages states
  const [apparent_damages, setapparent_damages] = useState('');
  const [garage_name, setgarage_name] = useState('');
  const [garage_address, setgarage_address] = useState('');
  const [garage_telno, setgarage_telno] = useState('');
  const [vehicle_still_used, setvehicle_still_used] = useState('');
  const [inspection, setinspection] = useState('');
  const [inspection_date, setinspection_date] = useState('');

  // collateral_damage 


  const [reg_no, setreg_no] = useState('');

  const [other_property_damaged, setother_property_damaged] = useState('');

  const claimform = (e) => {
    e.preventDefault();
    axios.post('/newClaim',
      {
        //driver_details
        drivers_name: drivers_name,
        drivers_occupation: drivers_occupation,
        drivers_dob: drivers_dob,
        employed_by_policyholder: employed_by_policyholder,
        service_duration: service_duration,
        permission: permission,
        driving_duration: driving_duration,
        drivers_statement: drivers_statement,
        accident_blame: accident_blame,
        accident_liability: accident_liability,
        prev_accidents: prev_accidents,
        prev_accident_details: prev_accident_details,
        prev_convictions: prev_convictions,
        prev_conviction_details: prev_conviction_details,
        license_holder: license_holder,
        date_of_issued: date_of_issued,
        owns_vehicle: owns_vehicle,
        insurers_name: insurers_name,
        insurers_address: insurers_address,
        drivers_policy_no: drivers_policy_no,

        //  Accident_details states
        date_of_accident: date_of_accident,
        time_of_accident: time_of_accident,
        place: place,
        road_surface: road_surface,
        visibility: visibility,
        conditions: conditions,
        lights: lights,
        estimated_speed: estimated_speed,
        weather_condition: weather_condition,
        police_investigation: police_investigation,
        police_officers_no: police_officers_no,
        police_officers_name: police_officers_name,
        police_officers_station: police_officers_station,
        police_stations: police_stations,

        // insured_vehicle_damages states
        apparent_damages: apparent_damages,
        garage_name: garage_name,
        garage_address: garage_address,
        garage_telno: garage_telno,
        vehicle_still_used: vehicle_still_used,
        inspection: inspection,
        inspection_date: inspection_date,


        // collateral_damage 
        owners_name: owners_name,
        owners_address: owners_address,
        reg_no: reg_no,
        insurers_name: insurers_name,
        other_property_damaged: other_property_damaged,
      }
    );
  }

  // search
  const arr = [
    {
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
    }
  ];

  //Autofill
  const handleCarRegInput = (e) => {
    console.log("Triggered");
    const val = e.target.value
    setvehicle_registration(val);
    const policy = arr.find(o => o.Carreg === val);

    if (policy) {
      setholders_name(policy.Name);
      sethire_purchase_company(policy.Hirepurchase);
      settell_no(policy.Tellno);
      setholders_address(policy.Address);
      setholders_occupation(policy.Occupation);
      setpolicy_number(policy.Policyno)
      setexpiry_date(policy.expiry_date);

      setmake_model(policy.Make);
      sethp_cc(policy.cc);
      setmanufacture_year(policy.Yearofmanufacture);
      setvehicle_registration(policy.Carreg);
      setvehicle_capacity(policy.carryingCapacity);
      settrailer_registration(policy.TrailerRegno);
      settrailer_capacity(0);
      setowners_name(policy.Name);
      setowners_address(policy.Address);
      setchasis_no(policy.chasisno);
    } else {
      setholders_name('');
      sethire_purchase_company('');
      settell_no('');
      setholders_address('');
      setholders_occupation('');
      setpolicy_number('');
      setexpiry_date(new Date());

      setmake_model('');
      sethp_cc('');
      setmanufacture_year('');
      setvehicle_registration('');
      setvehicle_capacity('');
      settrailer_registration('');
      settrailer_capacity(0);
      setowners_name('');
      setowners_address('');
      setchasis_no('');
    }

  }



  return (


    <React.Fragment>
      <Container
        sx={{
          display: 'flex',
          flexDirection: "column",
          justifyContent: 'flex-start',
          width: "100vw",
          height: "100%",
          mb: "15%",

        }}>
        {/* this box hold the form brand headings */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          width: "100%",
          height: "380px",
        }}>
          {/* logo and Address */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            {/* logo */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                mt: "5%",
                ml: "5%"
              }}>
              <Typography
                sx={{
                  fontSize: "60px",
                  fontWeight: "900",
                  color: "orange",
                }}><ArrowDropUpTwoToneIcon
                  sx={{
                    color: "#075e54",
                    fontSize: "85px",
                    position: "absolute",
                    ml: "-30px",
                    mt: "-30px",
                  }}
                />INVESCO</Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  mt: "-11px",
                  ml: "3px",
                  color: "#075e54",
                  fontWeight: '900',
                }}
              >INVESCO ASSURANCE COMPANY LTD</Typography>
              <Typography
                sx={{
                  fontSize: "17px",
                  ml: "5px",
                  color: "#000",
                  fontWeight: '900',
                }}
              >Moving ahead with confidence</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}>

            </Box>
            {/* Address */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "400px",
                height: '180px',
                mt: '2%',
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
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              background: "#075e54",
              height: "60px",
              mt: "3%"

            }}>
            <Typography
              sx={{
                fontSize: "22px",
                color: "#FFC000",

              }}
            >MOTOR ACCIDENT REPORT FORM</Typography>
          </Box>

        </Box>
        {/* brand ends */}

        {/* form itself */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: "100%",
            height: "80%",
            mt: "1%"
          }}>

          {/* first details to be captured */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: 'flex-start',
              width: '100%',
              height: '110px',
            }}>
            {/* car reg and date of lose */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}>
              {/* car_Registration */}
              <TextField
                id="standard-basic"
                label="Enter the Car Registration"
                variant="standard"
                value={vehicle_registration}
                onChange={e => setvehicle_registration(e.target.value)}
                sx={{ width: "60%", }} />
              {/* date of loss */}
              <TextField
                id="standard-basic"
                label="Enter the Date of Loss"
                variant="standard"
                sx={{ width: "35%" }} />
              {/* text */}
            </Box>

          </Box>
          {/* policy holder's Details */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'flex-start',
              width: '100%',
              height: '210px',
            }}>
            <Typography sx={{ fontWeight: 'bold' }}>POLICY HOLDER</Typography>

            {/*name& tell no  */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: '100%',
              }}>

              {/* policy holders name */}

              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                value={holders_name}
                onChange={(e) => setholders_name(e.target.value)}
                sx={{
                  width: "60%",
                }} />

              {holders_name && <Typography variant="standard">{holders_name}</Typography>}

              {/* holders tell no */}
              <TextField
                id="standard-basic"
                label="Tell No"
                variant="standard"
                value={tell_no}
                sx={{ width: "35%" }} />
            </Box>


            {/*  Address */}
            <TextField
              id="standard-basic"
              label="Address"
              variant="standard"
              value={holders_address}
              sx={{ width: "100%", }} />

            {/* business/Occupation */}
            <TextField
              id="standard-basic"
              label="business/Occupation"
              value={holders_occupation}
              variant="standard"
              sx={{ width: "100%", }} />
          </Box>



          {/* policy */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'flex-start',
              width: '100%',
              height: '180px',
            }}>

            <Typography sx={{ fontWeight: 'bold' }}>POLICY</Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: '100%',
              }}>

              {/* policy number */}
              <TextField
                id="standard-basic"
                label="Number"
                variant="standard"
                value={policy_number}

                sx={{ width: "60%", }} />

              {/* expiry date */}
              <TextField
                id="standard-basic"
                label="Expiry Date"
                variant="standard"
                value={expiry_date}

                sx={{ width: "35%" }} />

            </Box>
            {/* name of hire purchase of finance company */}

            <TextField
              id="standard-basic"
              label="Name of hire purchase of finance company"
              variant="standard"
              value={hire_purchase_company}

              sx={{ width: "100%" }} />

          </Box>


          <Typography sx={{ fontWeight: 'bold', }}>VEHICLE</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: '100%',
          }}>

          {/* make & Model */}
          <TextField
            id="standard-basic"
            label="Make & Model"
            variant="standard"
            value={make_model}

            sx={{ width: "30%" }} />
          {/* HP/CC */}
          <TextField
            id="standard-basic"
            label="HP/CC"
            variant="standard"
            value={hp_cc}

            sx={{ width: "30%" }} />

          {/* year of manufacture */}
          <TextField
            id="standard-basic"
            label="Year of Manufacture"
            value={manufacture_year}

            variant="standard"
            sx={{ width: "30%" }} />

        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: '100%',
          }}>
          {/* vehicle reg no */}
          <TextField
            id="standard-basic"
            label="Reg.No. of Vehicle"
            value={vehicle_registration}

            variant="standard"
            sx={{ width: "60%" }} />
          {/* carrying capacity */}
          <TextField
            id="standard-basic"
            label="Carrying Capacity"
            value={vehicle_capacity}

            variant="standard"
            sx={{ width: "35%" }} />

        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: '100%',
          }}>
          {/* reg no of trailer */}
          <TextField
            id="standard-basic"
            label="Reg.No. of Trailer"
            variant="standard"
            value={trailer_registration}

            sx={{ width: "60%" }} />
          {/* Trailer Carrying Capacity */}
          <TextField
            id="standard-basic"
            label="Trailer Carrying Capacity"
            variant="standard"
            value={trailer_capacity}

            sx={{ width: "35%" }} />

        </Box>

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: '100%',
        }}>
          {/* Name and address of owner */}
          <TextField
            id="standard-basic"
            label="Name  of Owner"
            variant="standard"
            value={owners_name}

            sx={{ width: "40%" }} />
          {/* owners address */}
          <TextField
            id="standard-basic"
            label="Addres of Owner"
            variant="standard"
            value={owners_address}

            sx={{ width: "30%" }} />
          {/* chasis No */}
          <TextField
            id="standard-basic"
            label="Chassis No."
            variant="standard"
            value={chasis_no}

            sx={{ width: "30%" }} />

        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'flex-start',
            width: '100%',
            height: '180px',
            mt: '25px',
          }}>

          <Typography sx={{ fontWeight: 'bold' }}>USE</Typography>
          {/* use */}

          <TextField
            id="standard-select-currency-native"
            select
            label="State the exact purpose for which the vehicle was being used at time of the accident."
            value={use_of_vehicle}

            SelectProps={{
              native: true,
            }}
            helperText="Please select the exact purpose"
            variant="standard"
            sx={{ mt: "20px" }}>
            {vehicleUse.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>))}
          </TextField>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            mt: '-2%',
          }}>

          <Typography fontWeight={'bold'}>
            COMMERCIAL VEHICLE
          </Typography>
          {/* Description of goods being carried */}
          <TextField
            id="standard-basic"
            label="Description of goods being carried"
            variant="standard" />

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
            {/* Name of Owner of goods */}
            <TextField
              id="standard-basic"
              label="Name of Owner of goods"
              variant="standard"
              value={owner_of_goods}

              sx={{ width: '50%', }} />
            {/* Was a trailer attached */}
            <TextField
              id="standard-basic"
              label="Was a trailer attached"
              value={trailer_attached}

              variant="standard"
              sx={{ width: '40%', }} />

          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          {/* weight of load on trailer Vehicle */}
          <TextField
            id="standard-basic"
            label="Weight of load on (a) Vehicle"
            value={load_weight}

            variant="standard"
            sx={{ width: '50%', }} />

          {/*  */}
          <TextField
            id="standard-basic"
            label="(b)Trailer's"
            variant="standard"
            value={trailer_weight}

            sx={{ width: '40%', }} />

        </Box>

        {/* Driver's Details */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            mt: '2%',
          }}>
          <Typography fontWeight={'bold'}> DRIVER</Typography>

          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>

            {/* driver's Name */}
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              value={drivers_name}

              sx={{ width: "30%" }} />

            {/* Driver's Occupation */}
            <TextField
              id="standard-basic"
              label="Occupation"
              variant="standard"
              value={drivers_occupation}

              sx={{ width: "30%" }} />

            {/* Actual Date of Birth */}
            <TextField
              id="standard-basic"
              label="Actual Date of Birth"
              variant="standard"
              value={drivers_dob}

              sx={{ width: "30%" }} />
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>

            {/* P.O BOX */}
            <TextField
              id="standard-basic"
              label="P.O Box"
              variant="standard"
              value={drivers_po_box}

              sx={{ width: "30%" }} />

            {/* Code */}
            <TextField
              id="standard-basic"
              label="Code"
              variant="standard"
              value={drivers_postal_code}

              sx={{ width: "30%" }} />

            {/* Tel No */}
            <TextField
              id="standard-basic"
              label="Tel No"
              variant="standard"
              value={drivers_tell_no}

              sx={{ width: "30%" }} />
          </Box>
          {/* driver details (qn 16 to 28)  */}

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            {/* is he employed */}
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label">
                Is he or she employed by you?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
            }}>

            {/* how long he has been at the service */}
            <TextField
              id="standard-basic"
              label="How long has he/she been in your service"
              variant="standard"
              sx={{ width: '100%', }} />
          </Box>


          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%',
            }}>

            {/* permission */}
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label">
                Was he/she driving with your permission?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
          }}>
            {/* how long he's been driving */}
            <TextField
              id="standard-basic"
              label="How long has he/she been driving the motor vehicle?"
              variant="standard"
              sx={{ width: '100%', }} />

          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%',
            }}>
            {/* Blame */}
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label">
                Was he/she to blame for the accident?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="Yes" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '2%',
          }}>
            {/* Admit liability */}
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label">
                Did he/she admit liability?
              </FormLabel>

              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="Yes" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>

          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '2%'
          }}>

            {/* had any previous accidents */}
            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label">
                Has he/she had any previous accidents?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="Yes" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>

            {/* details of previous accident */}
            <TextField
              id="standard-basic"
              label="If so ,give details including dates"
              variant="standard"

              sx={{ width: '100%', }} />

          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%',
            }}>

            {/* Hold a license */}

            <FormControl>
              <FormLabel
                id="demo-row-radio-buttons-group-label">
                Does he/she hold a full provisional license to drive the vehicle?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group" >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '2%'
          }}>

            {/* date of issue */}
            <TextField
              id="standard-basic"
              label="If full ,state date of first issue"
              variant="standard"
              value={date_issue}


              sx={{ width: '60%', }} />

            {/* number */}
            <TextField
              id="standard-basic"
              label="Number"
              variant="standard"
              sx={{ width: '40%', }} />
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            mt: '2%'
          }}>
            {/* Does he own a motor vehicle */}
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Does he/she own a motor vehicle?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>

            {/* name and address of insurer */}
            <TextField
              id="standard-basic"
              label="If so,give name of insurer"
              variant="standard"
              value={insurers_name}

              sx={{ width: '40%', }} />

            <TextField
              id="standard-basic"
              label="address of insurer"
              variant="standard"
              value={insurers_address}

              sx={{ width: '25%', }} />


            {/* Driver's policy no */}
            <TextField
              id="standard-basic"
              label="Driver's Policy No"
              variant="standard"
              value={drivers_policy_no}

              sx={{ width: '25%', }} />
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
          }}>

            {/* Accident_Details */}
            <Typography sx={{ fontWeight: 'bold' }}>
              ACCIDENT
            </Typography>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
              {/* date of accident */}
              <TextField
                id="standard-basic"
                label="Date"
                variant="standard"
                value={date_of_accident}

                sx={{ width: "30%" }} />
              {/* time */}
              <TextField
                id="standard-basic"
                label="Time"
                variant="standard"
                value={time_of_accident}

                sx={{ width: "30%" }} />

              {/* place of accident */}
              <TextField
                id="standard-basic"
                label="a.m./p.m. place"
                variant="standard"
                value={place}

                sx={{ width: "30%" }} />
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
              {/* type of road surface */}
              <TextField
                id="standard-basic"
                label="Type of road surface"
                variant="standard"
                value={road_surface}

                sx={{ width: "30%" }} />
              {/* visibility */}
              <TextField
                id="standard-basic"
                label="visibility"
                variant="standard"
                value={visibility}

                sx={{ width: "30%" }} />
              {/* wet or dry */}
              <TextField
                id="standard-basic"
                label="Wet or Dry"
                variant="standard"
                value={conditions}

                sx={{ width: "30%" }} />

            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>
              {/* lights */}
              <TextField
                id="standard-basic"
                label="What lights were showing on your vehicle?"
                variant="standard"
                value={lights}

                sx={{ width: '60%', }} />
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>
              {/* warning */}
              <TextField
                id="standard-basic"
                label="What warning did your driver give?"
                variant="standard"
                value={warning}

                sx={{ width: '60%', }} />
            </Box>

            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
              {/* estimated speed */}
              <TextField
                id="standard-basic"
                label="Estimated speed before accident"
                variant="standard"
                value={estimated_speed}

                sx={{ width: '50%', }} />

              {/* weather */}
              <TextField
                id="standard-basic"
                label="Weather Conditions"
                variant="standard"
                value={weather_condition}

                sx={{ width: '40%', }} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mt: '2%'
              }}>
              {/* particulars taken by police */}
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Did police take particulars?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="female" control={<Radio />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>
              {/* give officer's number ,name and station   */}
              <TextField
                id="standard-basic"
                label="If so ,give officer's,name "
                variant="standard"
                value={police_officers_name}

                sx={{ width: '40%', }} />

              <TextField
                id="standard-basic"
                label="Station"
                variant="standard"
                value={police_officers_station}

                sx={{ width: '40%', }} />
            </Box>

          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>

            {/* station reported */}
            <TextField
              id="standard-basic"
              label="To which police station was the accident reported?"
              variant="standard"
              value={police_stations}

              sx={{ width: '100%', }} />

          </Box>
          {/* 36 */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            width: '100%',
            mt: '2%',

          }}>

            <Typography fontWeight={'bold'}>
              DAMAGE TO INSURED VEHICLE
            </Typography>
            <Box>
              {/* apparent damage */}
              <TextField
                id="standard-basic"
                label="State briefly apparent damage"
                variant="standard"
                value={apparent_damages}

                sx={{ width: '100%', }} />
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              {/* name and address of the garage of choice  */}
              <TextField
                id="standard-basic"
                label="Name and Address of the garage of my choice"
                variant="standard"
                value={garage_name}

                sx={{ width: '60%', }} />

              {/* tel no */}
              <TextField
                id="standard-basic"
                label="Tel No"
                variant="standard"
                value={garage_telno}

                sx={{ width: '30%', }} />
            </Box>

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              mt: '2%'
            }}>
              {/* vehicle still in use */}
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Is the vehicle still in use?</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group" >

                  <FormControlLabel value="female" control={<Radio />} label="Yes" />
                  <FormControlLabel value="male" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box
              sx={{ display: 'flex', }}>

              {/* when can it be inspected */}
              <TextField
                id="standard-basic"
                label="When and where can it be inspected?"
                variant="standard"
                value={inspection}

                sx={{ width: '100%', }} />
            </Box>
          </Box>

        </Box>

        {/* form ends */}
      </Container>
    </React.Fragment>
  )
}

export default ClaimNotification