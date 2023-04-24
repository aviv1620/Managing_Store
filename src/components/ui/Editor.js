import { Stack } from '@mui/material';

export function Editor({ children }) {
  return (
    <Stack direction='column' spacing={{ lg: 4, xs: 2 }} sx={{ margin: 2 }}>   
      {children}
    </Stack>
  );
}
