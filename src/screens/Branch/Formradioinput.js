import React from 'react';
import { Controller } from "react-hook-form";
import {
    FormControlLabel,
    Radio,
    RadioGroup,
    FormLabel
} from "@material-ui/core";

export default function FormRadioInput({ name, control, label}) {
  return (
    <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
            <RadioGroup
                value={value} onChange={onChange}
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group">
                <FormLabel
                    id="demo-row-radio-buttons-group-label">
                    {label}
                </FormLabel>
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
            </RadioGroup>
        )}
    />
  );
}
