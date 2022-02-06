import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FormTextInput from '../Re-usable component/Formtextinput';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useClaimFormContext } from '../../../context-stores/CliamContext';

function ClaimForm3() {
    const { handleSubmit, reset, control } = useForm()
    const [id, setId] = useState(1)
    const { collateral_damage, setCollateralDamage } = useClaimFormContext();

    const collateral_damage_columns = [
        { field: 'id', headerName: '#', width: 5 },
        { field: 'owners_name', headerName: 'Owner\'s name', width: 200 },
        { field: 'owners_address', headerName: 'Owner\'s address', width: 150, },
        { field: 'reg_no', headerName: 'Reg Number', width: 150, },
        { field: 'insurers_name', headerName: 'Name of Insurer', width: 150, },
        { field: 'other_property_damaged', headerName: 'Other Property Damaged', width: 150, },
    ]

    const collateralDamageSubmit = (data, e) => {
        setCollateralDamage(prevState => [...prevState, { id: id, ...data }]);
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
            >OTHER VEHCLES INVOLVED AND PROPERTY DAMAGED

            </Typography>

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
                    <FormTextInput control={control} name="owners_name" label="Owner\'s name" required />
                    <FormTextInput control={control} name="owners_address" label="Owner\'s address" />
                    <FormTextInput control={control} name="reg_no" label="Registration Number" />
                    <FormTextInput control={control} name="insurers_name" label="Owner\'s name" />
                    <FormTextInput control={control} name="other_property_damaged" label="Other Property damage" />
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
                    <Link to="/claimform2" >Previous</Link>
                    <Link to="/claimform4">Next</Link>
                </Box>

            </div>



        </Box>

    );
}

export default ClaimForm3
