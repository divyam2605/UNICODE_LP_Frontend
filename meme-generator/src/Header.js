import React, { useState } from 'react'

import App from './App';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ToolBar from '@mui/material/ToolBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { SwipeableDrawer, Box, Divider, ListItem, ListItemButton, ListItemText, List } from '@mui/material';
import { ChevronRightOutlined } from '@mui/icons-material';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const drawerWidth = 240
    const navItems = [
        { link: '/', label: 'Home'},
        { link: '/about', label: 'About' }
    ]
    const drawer = <Box onClick={handleDrawerToggle}>
        <Typography var="h6">Menu</Typography>
        <Divider />
        <List>
        {navItems.map((item) => (
            <ListItem>
                <ListItemButton>
                    <ListItemText primary={item.label}></ListItemText>
                    <IconButton edge="end">
                        <ChevronRightOutlined />
                    </IconButton>
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>


    return ( 
        <>
        <AppBar>
        <ToolBar>
          <IconButton
          onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant='h6'>
            Funny Meme Generator
          </Typography>
          <Button color="inherit">
            Login
          </Button>
        </ToolBar>
      </AppBar>

      <Box component="nav">
        <SwipeableDrawer
        open={mobileOpen}
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        ModalProps={{
            keepMounted: true,
        }}
        sx={{
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            }
        }}
        >
            { drawer }
        </SwipeableDrawer>
        </Box>
        </>
     );
}
 
export default Header;