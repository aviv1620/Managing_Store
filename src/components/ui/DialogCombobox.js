import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Combobox } from "./Combobox";


export const DialogCombobox = ({isOpen,options,title,explanation,setValue,value,handleClose,handleSave}) => {
    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText>{explanation}</DialogContentText>
                
                <Combobox setValue={setValue} value={value} options={options} label={"Product"}/>                
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    )
}
