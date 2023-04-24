import React from 'react';
import { Typography } from '@mui/material';

export function NoDataInCell({ title }) {
  return <Typography variant='overline' sx={{ textAlign: { lg: 'left', xs: 'center' } }} component='div'>{title}</Typography>;


}
