import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const options = [
  {
    label: "Own Use/Private Use",
    value: "1",
  },
  {
    label: "PSV",
    value: "2",
  },
  {
    label: "Parked",
    value: "3",
  },
  {
    label: "Any Other",
    value: "4",
  },
];

 const FormInputDropdown= ({name,control, label}) => {

  const generateSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select onChange={onChange} value={value}>
          {generateSelectOptions()}
        </Select>
      )}
    />
};

export default FormInputDropdown