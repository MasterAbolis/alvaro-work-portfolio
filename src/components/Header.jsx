// src/components/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Button,
    Box,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import headerIcon from '../assets/header-icon.svg';

const navItems = [
    { label: 'Inicio',      to: '/' },
    { label: 'Proyectos',   to: '/projects' },
    { label: 'Sobre mí',    to: '/about' },
    { label: 'Contacto',    to: '/contact' },
];

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    const drawer = (
        <Box className="w-64" onClick={toggleDrawer}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.to} disablePadding>
                        <ListItemButton component={Link} to={item.to}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" elevation={0} color="default" className="text-black">
            <Toolbar className="px-4 sm:px-10 min-h-[64px]">
                <img src={headerIcon} alt="icon" />
                {isMobile ? (
                    <IconButton
                        edge="end"
                        onClick={toggleDrawer}
                        sx={{ color: 'inherit', ml: 'auto' }}
                        className="ml-auto text-black"
                    >
                        <MenuIcon />
                    </IconButton>
                ) : (
                    <nav className="ml-auto flex space-x-4">
                        {navItems.map((item) => (
                            <Button
                                key={item.to}
                                component={Link}
                                to={item.to}
                                color="inherit"
                                className="font-medium"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>
                )}
            </Toolbar>
            <Drawer
                anchor="right"
                open={open}
                onClose={toggleDrawer}
                ModalProps={{ keepMounted: true }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}
