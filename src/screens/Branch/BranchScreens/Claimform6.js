import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FormTextInput from '../Re-usable component/Formtextinput';
import { useForm } from "react-hook-form";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useClaimFormContext } from '../../../context-stores/CliamContext';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function ClaimForm6() {
    const navigate = useNavigate();
    const [collateral_damage, setCollateralDamage] = useState([]);
    const { handleSubmit, reset, control } = useForm()
    const [id, setId] = useState(1)

    const passengers_columns = [
        { field: 'id', headerName: '#', width: 5 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'address', headerName: 'Address', width: 200, },

    ]

    const collateralDamageSubmit = (data, e) => {
        setPassengers(prevState => [...prevState, { id: id, ...data }]);
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

            <div style={{
                height: 350,
                width: '60%',
                marginLeft: "20%",
                background: '#ece5dd',
                marginTop: "1%",
            }}>
                {collateral_damage &&
                    <DataGrid
                        rows={collateral_damage}
                        columns={collateral_damage_columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                }
                <form
                    onSubmit={handleSubmit(collateralDamageSubmit)}
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <FormTextInput control={control} name="owners_name" label="Name" required />
                    <FormTextInput control={control} name="owners_address" label="Address" />
                    <input
                        type="submit"
                        value="ADD"
                        style={{
                            width: "150px",
                            height: "50px",
                            background: "#000",
                        }} />
                </form>


            </div>
            <Box sx={{
                display: "flex",
                width: "100%",
                height: "5vh",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'center',
            }}>
                <ListItemButton onClick={() => navigate("/claimform5")}>
                    <ListItemText primary="Previous" />
                </ListItemButton>

                <ListItemButton onClick={() => navigate("/claimform7")}>
                    <ListItemText primary="Next" />
                </ListItemButton>

            </Box>

        </Box>







    );
}

export default ClaimForm6
