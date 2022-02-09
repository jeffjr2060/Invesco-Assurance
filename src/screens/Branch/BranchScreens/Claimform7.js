import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import FormTextInput from '../Re-usable component/Formtextinput';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import { ListItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import FormFileInput from '../Re-usable component/Formfileinput';
import TextField from "@material-ui/core/TextField";
import { useClaimFormContext } from '../../../context-stores/CliamContext';


import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ClaimForm7() {
  const navigate = useNavigate();
  const { handleSubmit, reset, control } = useForm()

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

          <FormFileInput control={control} name="copy_notice" label="Copy Notice" />
          <FormFileInput control={control} name="police_abstract" label="Police Abstract" />
          <FormFileInput control={control} name="drivers_license" label="Drivers License" />
          <FormFileInput control={control} name="psv_license" label="PSV Lisence" />
          <FormFileInput control={control} name="inspection_report" label="Inspection Report" />

        </form>
        <Box sx={{ ml: "55%", mt: "-2%", flexDirection: "row", }}>
        </Box>

      </div>

      <Box sx={{
        display: "flex",
        width: "100%",
        height: "5vh",
        alignItems: "center",
        justifyContent: 'center',
      }}>
        <ListItemButton onClick={() => navigate("/claimform6")}>
          <ListItemText primary="Previous" />
        </ListItemButton>

        <ListItemButton onClick={() => navigate("/claimform8")}>
          <ListItemText primary="Next" />
        </ListItemButton>

      </Box>

    </Box>







  );
}

export default ClaimForm7
