import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FormTextInput from '../Re-usable component/Formtextinput';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import FormFileInput from '../Re-usable component/Formfileinput';
import TextField from "@material-ui/core/TextField";
import { useClaimFormContext } from '../../../context-stores/CliamContext';

function ClaimForm7() {
  const { setCopyNotice,
    setPoliceAbstract,
    setDriversLicense,
    setPsvLicense,
    setInspectionReport,
    submitData
  } = useClaimFormContext()

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          background: "#fff",
        }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">

          </Typography>
        </Toolbar>
      </AppBar>



      <div style={{
        height: 350,
        width: '60%',
        marginLeft: "20%",
        marginTop: "1%",
      }}>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", height: "80%", marginTop: "60px" }}
        >

          <TextField onChange={e => setCopyNotice(e.target.files[0])} type="file" label="Copy notice" />
          <TextField onChange={e => setPoliceAbstract(e.target.files[0])} type="file" label="Police Abstract" />
          <TextField onChange={e => setDriversLicense(e.target.files[0])} type="file" label="Drivers License" />
          <TextField onChange={e => setPsvLicense(e.target.files[0])} type="file" label="PSV license" />
          <TextField onChange={e => setInspectionReport(e.target.files[0])} type="file" label="Inspection Report" />
          <Button type="submit" onClick={submitData}>Submit</Button>
        </form>
        <Box sx={{ ml: "55%", mt: "-2%", flexDirection: "row", }}>
          <Link to="/claimform6" >Previous</Link>
          <Link to="/branchhome">Next</Link>
        </Box>

      </div>



    </Box>







  );
}

export default ClaimForm7
