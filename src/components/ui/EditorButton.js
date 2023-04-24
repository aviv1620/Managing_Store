import { Button } from '@mui/material';

export function EditorButton({ color, onClick, label }) {

  if (!color)
    color = "primary";

  return <Button variant="contained" color={color} onClick={onClick}>{label}</Button>;
}
