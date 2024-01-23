import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../styles.css"
import { Link } from 'react-router-dom';

const menuItems = [
    { label: "Login", path: "/login" },
    { label: "Register", path: "/register" },
    {label:"Home",path:"/"}
]


const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" color='info'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        socket-io-example-app
                    </Typography>
                    {menuItems.map((item,index) =>
                        <Link to={item.path} key={index} className='navbar-item'>
                             <Button color="inherit">{item.label}</Button>
                        </Link>
                           
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar