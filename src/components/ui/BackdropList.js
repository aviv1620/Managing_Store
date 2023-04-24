import { Backdrop, Badge, Button, List } from '@mui/material';
import { useState } from 'react';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export function BackdropList({ children, badgeContent, label }) {
    const [open, setOpen] = useState(false);

    const haveContent = badgeContent !== 0;

    return (
        <>
            <Badge badgeContent={badgeContent} color="primary">
                <Button onClick={() => setOpen(!open)} disabled={!haveContent} startIcon={haveContent ? <UnfoldMoreIcon /> : null} size="small"> {haveContent ? label : `No ${label}`}</Button>
            </Badge>

            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={() => setOpen(false)}
            >
                <List sx={{ width: '100%', maxWidth: 350, bgcolor: 'background.paper', color: 'text' }}>

                    {children}
                </List>
            </Backdrop>
        </>
    );
}
