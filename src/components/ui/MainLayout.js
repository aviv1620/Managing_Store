import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

/*
    make main layout with main menu, from pages text list and logo.
    the name need of pages need corresponds to page routing.
*/
export const MainLayout = ({ children, pages, LogoIcon, handleDisableLocationPage, handleNavigationButton }) => {

    const [drawerOpen, setDrawerOpen] = useState(false)

    const drawerPage = (page) => (
        <ListItem key={page} disablePadding>
            <ListItemButton
                sx={{ textAlign: 'center' }}
                disabled={handleDisableLocationPage(page)}
                onClick={() => handleNavigationButton(page)}
            >
                <ListItemText primary={capitalized(page)} />
            </ListItemButton>
        </ListItem>
    )

    const drawerContents = (
        <Box onClick={() => setDrawerOpen(!drawerOpen)} sx={{ textAlign: 'center' }}>
            <LogoIcon fontSize="large" />
            <Divider />
            <List>
                {pages.map(drawerPage)}
            </List>
        </Box>
    )

    const buttonPage = (page) => (
        <Button
            key={page}
            sx={{ color: '#fff' }}
            disabled={handleDisableLocationPage(page)}
            onClick={() => handleNavigationButton(page)}
        >
            {page}
        </Button>
    )

    return (
        <Box sx={{position:'absolute',top:'0px',bottom:'0px',left:'0px',right:'0px'}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                        onClick={() => setDrawerOpen(!drawerOpen)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <LogoIcon sx={{ mr: 1 }} />

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Store Manager
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {pages.map(buttonPage)}
                    </Box>

                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                open={drawerOpen}
                onClose={(event) => setDrawerOpen(!drawerOpen)}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                }}
            >
                {drawerContents}
            </Drawer>

            {children}

        </Box>
    );
}

function capitalized(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}