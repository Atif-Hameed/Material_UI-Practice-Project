import { AppBar, Toolbar, Typography, styled, Box, InputBase, MenuItem, Menu } from "@mui/material";
import React, { useState } from "react";
import PetsIcon from '@mui/icons-material/Pets';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    padding: "0 10px"
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="sticky">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                        LAMA DEV
                    </Typography>

                    <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />

                    <Search>
                        <InputBase placeholder="search..."/>
                    </Search>

                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <NotificationsIcon />
                        </Badge>
                        <Avatar onClick={e=>{setOpen(true)}} sx={{ height: "30px", width: "30px" }} alt="Cindy Baker" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                    </Icons>

                    <UserBox onClick={e=>{setOpen(true)}}>
                        <Avatar sx={{ height: "30px", width: "30px" }} alt="Cindy Baker" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                        <Typography variant="h6">
                            John Doe
                        </Typography>
                    </UserBox>
                </StyledToolbar>

                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={e=>{setOpen(false)}}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem >My account</MenuItem>
                    <MenuItem >Logout</MenuItem>
                </Menu>
            </AppBar>
        </>
    )
}

export default Navbar;