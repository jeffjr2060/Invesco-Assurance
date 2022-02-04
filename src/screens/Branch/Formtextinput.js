import React from 'react';
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export default function FormTextInput({ name, control, label}) {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <TextField 
            onChange={onChange} 
            value={value} 
            label={label} 
            sx={{
              display:"flex",
              width:"80%",
            }}
            />
        )}
    />
  );
}
