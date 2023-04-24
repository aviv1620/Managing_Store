import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export function EditableListItem({ onClick, label1 , label2}) {

    const iconSx = { minWidth: { lg: 56, xs: 0 } };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClick}>
                <ListItemIcon sx={iconSx}>
                    <EditIcon />
                </ListItemIcon>
                <ListItemText primary={label1} secondary={label2}/>
            </ListItemButton>
        </ListItem>
    );
}