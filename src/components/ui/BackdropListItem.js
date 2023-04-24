import { ListItem, ListItemText } from '@mui/material';

export function BackdropListItem({ label1, label2 }) {
    return (
        <ListItem>
            <ListItemText primary={label1} secondary={label2} />
        </ListItem>

    );
}
