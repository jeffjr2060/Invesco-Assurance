import React from 'react';
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function FormTextAreaInput({ name, control, label }) {
    return (
        <>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextareaAutosize
                        onChange={onChange}
                        value={value}
                        fullWidth
                        label={label}
                        style={{ width: "100%", height: 250, fontSize: '24px' }}
                    />
                )}
            />

            <Controller
                name=" drivers_statement"
                control={control}
                render={({ field: { onChange, value } }) => (
                    <TextareaAutosize
                        fullWidth
                        label="Note"
                        onChange={onChange}
                        value={value}
                        style={{ width: "100%", height: 250, fontSize: '24px' }}
                    />
                )}
            />
        </>
    );
}
