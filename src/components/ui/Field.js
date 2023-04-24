import { InputAdornment, TextField } from '@mui/material';

export function Field({ label, adornment, setValue, value, isValidValue, validValueText, invalidValueText }) {
  return <TextField
    label={label}
    id={label}
    onChange={(e) => setValue(e.target.value)}
    value={value}
    variant="outlined"
    sx={{ maxWidth: 'sm' }}
    InputProps={{
      endAdornment: <InputAdornment position="end">{adornment}</InputAdornment>,
    }}
    error={!isValidValue}
    helperText={isValidValue ? validValueText : invalidValueText} />;
}
