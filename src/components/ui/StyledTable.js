import { TableCell, tableCellClasses, styled } from '@mui/material';
import TableRow from '@mui/material/TableRow';

/* example take from Material Ii documentation https://mui.com/material-ui/react-table/#customization
 * full guide to customize: https://mui.com/material-ui/customization/how-to-customize/#2-reusable-component */

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.grey.A100,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.grey.A100,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
