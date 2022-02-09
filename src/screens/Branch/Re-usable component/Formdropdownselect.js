import React from 'react';
import { Controller } from "react-hook-form";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

export default function FormDropdownSelect({ name, control, label }) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                label="Age"
                                onChange={onChange}
                            >
                                <MenuItem value={"Own use/Private use"}>Own use/Private use</MenuItem>
                                <MenuItem value={"PSV"}>PSV</MenuItem>
                                <MenuItem value={"Packed"}>Packed</MenuItem>
                                <MenuItem value={"Any other"}>Any other</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                )}
            />
        </>
    );
}
