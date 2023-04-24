import { Box, Paper } from '@mui/material';

export function Page({ children }) {
  return (
    <Box sx={{ backgroundColor: 'grey.400', minHeight: '100%' }}>      
      <Paper elevation={10} sx={{ maxWidth: 'lg', marginLeft: 'auto', marginRight: 'auto' }}>
        {children}
      </Paper>
    </Box>

  );
}
