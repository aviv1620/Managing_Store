import { DatePicker } from '@mui/x-date-pickers';

export function MyDatePicker({ value, setValue }) {
  return <DatePicker sx={{ maxWidth: 'sm' }} value={value} onChange={(newValue) => setValue(newValue)} />;
}
