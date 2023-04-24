import React from 'react';
import { Stack, Typography } from '@mui/material';

export function PageTitle({ title }) {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant='h2' sx={{ color: 'primary.main' , margin:2}}>{title}</Typography>
    </Stack>
  );
}
