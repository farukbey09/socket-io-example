import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "../styles.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Avatar } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

const NavBar = () => {
    const { user, logoutUser } = React.useContext(AuthContext);

    const menuItems = [
        { label: "Login", path: "/login", userLoggedIn: false, action: () => { } },
        { label: "Register", path: "/register", userLoggedIn: false, action: () => { } },
        { label: "Home", path: "/", userLoggedIn: true, action: () => { } },
        { label: "Logout", path: "/login", userLoggedIn: true, action: logoutUser },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='info'>
                <Toolbar>
                    <Typography style={{display:"flex",alignItems:"center"}} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Avatar
                            style={{marginRight:"10px"}}
                            sx={{ bgcolor: deepOrange[500] }}
                            alt={user?.name}
                        >
                            {user?.name.charAt(0).toUpperCase()}
                            
                        </Avatar>
                        {user?.name}
                    </Typography>
                    {menuItems.map((item, index) => (
                        (user && item.userLoggedIn) || (!user && !item.userLoggedIn) ? (
                            <Link to={item.path} key={index} className='navbar-item'>
                                <Button onClick={item.action} color="inherit">{item.label}</Button>
                            </Link>
                        ) : null
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
