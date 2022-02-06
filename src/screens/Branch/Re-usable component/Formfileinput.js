import React from 'react';
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";

export default function FormFileInput({ name, control, label}) {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (  
            <TextField 
            variant="outlined"
            accept="file"
            multiple type="file"
            onChange={onChange} 
            value={value} 
            label={label} 
            
            />
        )}
    />
  );
}
