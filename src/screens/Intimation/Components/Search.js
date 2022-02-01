import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

function  Intimationsearch() {
  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField

            {...params}
            label="Search "
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            sx={{
                width:"58vw",
                ml:"42px",
             
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'CLAIM No', },
  { title: 'POLICY No', },
  { title: 'CAR REG', },
  { title: 'POLICY HOLDERS NAME', },
  { title: 'CASE NO', },
  { title: 'CLAIMANT', },

  
];

export default Intimationsearch