import { Stack, Typography } from "@mui/material";

export function ShowProperty({label ,value}){
    return <Stack direction='row'>
      <Typography variant='overline' sx={{marginLeft:1, color:'primary.main'}}>{label }:</Typography>
      <Typography variant='body1' sx={{marginLeft:2}}>{value}</Typography>         
    </Stack>
}