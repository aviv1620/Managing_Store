import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

export function DialogConfirm({ open, handleClose, handleBtnNegative, handleBtnPositive, title, description, btnPositive, btnNegative }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby={title}
      aria-describedby={description}>
      <DialogTitle id={title}>
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id={description}>
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleBtnNegative} color="warning" variant='outlined'>{btnNegative}</Button>
        <Button onClick={handleBtnPositive} variant='contained' autoFocus>{btnPositive}</Button>
      </DialogActions>
    </Dialog>
  );

}
