import React from 'react';
import { Controller } from "react-hook-form";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import TextField from "@material-ui/core/TextField";

export default function FormTimePicker({ name, control, label }) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                label={label}
                                value={value}
                                onChange={onChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </>
                )}
            />
        </>
    );
}
