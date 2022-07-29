import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { MenuButton } from '../styles/appbar';
import { EasyBankLogo } from '../assets/allSVGicons';




const pages = ['Home', 'About', 'Contact', 'Blog', 'Careers'];


export const AppBarPage = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };



    return (
        <AppBar position="static" elevation={0} sx={{ position: "relative", zIndex: 10 }} >
            <Container maxWidth="lg"   >
                <Toolbar disableGutters sx={{ height: '80px', margin:{md: "0 3.2rem"}, justifyContent: { xs: "space-between" } }}>
                    <EasyBankLogo color={"#2D314D"} sx={{ display: { xs: 'none', md: 'flex' } }} />
                    <Box sx={{ flexGrow: { xs: 0, md: 1 }, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}

                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },

                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} sx={{ justifyContent: 'center'}} >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                        {pages.map((page) => (
                            <MenuButton
                                key={page}
                                onClick={handleCloseNavMenu}
                            >
                                {page}
                            </MenuButton>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        <Tooltip title="request invite">
                            <Button variant='gradient'>
                                request invite
                            </Button>
                        </Tooltip>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

