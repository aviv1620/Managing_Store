import { List, ListSubheader } from '@mui/material';

export function EditableListItems({ children, label }) {
    return (
        <List
            subheader={<ListSubheader id={label}>
                {label}
            </ListSubheader>}>
            {children}
        </List>
    );
}
