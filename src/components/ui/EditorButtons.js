import { Stack } from '@mui/material';

export function EditorButtons({ children }) {

  return (
    <Stack direction='row' spacing={{ lg: 4, xs: 2 }}>
      {children}
    </Stack>
  );
}
