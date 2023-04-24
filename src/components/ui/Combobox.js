import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

///////ui
/*[option:{
  label: string
  id: number
}]
*/
export function Combobox({ value,setValue, options, label }) {
  return <Autocomplete
    sx={{ maxWidth: 'sm' }}
    onChange={(e, newValue) => {
      setValue(newValue);
    }}
    value={value}
    disablePortal={false}
    options={options}
    renderInput={(params) => <TextField {...params} label={label} />}
    isOptionEqualToValue={(option, value) => option.id === value.id} />;
}
