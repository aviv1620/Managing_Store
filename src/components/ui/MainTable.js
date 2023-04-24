import React from 'react';
import { TableBody, TableHead } from '@mui/material';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import { StyledTableCell } from "./StyledTable";

export function MainTable({ children, head, label, headSx={} }) {
  return (
    <Table aria-label={label}>
      <TableHead>
        <TableRow>
          <StyledTableCell sx={headSx.col0}>{head.col0}</StyledTableCell>
          <StyledTableCell sx={headSx.col1}>{head.col1}</StyledTableCell>
          <StyledTableCell sx={headSx.col3}>{head.col2}</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>

        {children}

      </TableBody>
    </Table>
  );
}
