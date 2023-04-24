import React from 'react';
import { StyledTableRow, StyledTableCell } from "./StyledTable";

export function MainTableRow({ col0, col1, col2 }) {
  return (
    <StyledTableRow>
      <StyledTableCell>{col0}</StyledTableCell>
      <StyledTableCell>{col1}</StyledTableCell>
      <StyledTableCell>{col2}</StyledTableCell>
    </StyledTableRow>
  );
}
