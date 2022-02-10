import React from 'react';
import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";


export default function FormFileInput({ name, control, label }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextField onChange={onChange} value={value} type="file" label={label} />
      )}
    />
  );
}
