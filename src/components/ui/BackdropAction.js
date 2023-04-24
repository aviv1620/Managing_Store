import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export function BackdropAction({ label, icon ,onClick }) {
    return (
        <>
            <ListItem disablePadding>
                <ListItemButton onClick={onClick}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                    <ListItemText primary={label} />
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    );
}
