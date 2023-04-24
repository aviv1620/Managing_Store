import { Typography } from "@mui/material"

export const NoDataInCard = ({title}) => {
  return (
    <Typography variant='overline' sx={{ marginLeft: { lg: 3, xs: 1 } }}>{title}</Typography>
  )
}
