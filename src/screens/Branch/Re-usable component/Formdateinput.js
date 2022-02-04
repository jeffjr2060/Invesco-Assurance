import React from 'react';
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Controller } from "react-hook-form";
const DATE_FORMAT = "dd-MMM-yyyy";

export default function FormDateInput({ name, control, label }) {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, value } }) => (
                    <KeyboardDatePicker
                        onChange={onChange}
                        value={value}
                        label={label}
                        format={DATE_FORMAT}
                        showTodayButton={true}
                    />
                )}
            />
        </MuiPickersUtilsProvider>
    );
}
