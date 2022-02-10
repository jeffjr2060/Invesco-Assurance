import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FormTextInput from '../Re-usable component/Formtextinput';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ClaimForm5() {
    const navigate = useNavigate();
    const [collateral_damage, setCollateralDamage] = useState([]);
    const { handleSubmit, reset, control } = useForm()
    const [id, setId] = useState(1)

    const independent_witnesses_columns = [
        { field: 'id', headerName: '#', width: 5 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'address', headerName: 'Address', width: 200, },

    ]

    const collateralDamageSubmit = (data, e) => {
        setIndependentWitnesses(prevState => [...prevState, { id: id, ...data }]);
        setId(prevState => prevState + 1);
        reset('', {
            keepValues: false,
        })
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

            <Typography
                variant='h6'
                sx={{
                    mt: "5%",
                    ml: "2%"
                }}
            >INDEPENDENT WITNESSES
            </Typography>

            <div style={{
                height: 350,
                width: '60%',
                marginLeft: "20%",
                background: '#ece5dd',
                marginTop: "1%",
            }}>
                {independent_witnesses &&
                    <DataGrid
                        rows={independent_witnesses}
                        columns={independent_witnesses_columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                }
                <form
                    onSubmit={handleSubmit(collateralDamageSubmit)}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <FormTextInput control={control} name="name" label="Name" required />
                    <FormTextInput control={control} name="address" label="Address" />
                    <input
                        type="submit"
                        value="ADD"
                        style={{
                            width: "150px",
                            height: "50px",
                            background: "#000",
                        }} />
                </form>
                <Box sx={{ ml: "55%", mt: "-2%", flexDirection: "row", }}>

                </Box>

            </div>
            <Box sx={{
                display: "flex",
                width: "100%",
                height: "5vh",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'center',
            }}>
                <ListItemButton onClick={() => navigate("/claimform4")}>
                    <ListItemText primary="Previous" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate("/claimform6")}>
                    <ListItemText primary="Next" />
                </ListItemButton>

            </Box>


        </Box>







    );
}

export default ClaimForm5
