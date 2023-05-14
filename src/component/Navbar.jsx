import { AppBar, Toolbar, Typography, styled, Box, InputBase } from "@mui/material";
import React from "react";
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
    display:"none",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const UserBox = styled(Box)(({theme}) => ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

const Navbar = () => {
    return (
        <>

            <AppBar position="sticky">
                <StyledToolbar>
                    <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                        LAMA DEV
                    </Typography>
                    <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                    <Search>
                        <InputBase placeholder="search..." />
                    </Search>
                    <Icons>
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <NotificationsIcon />
                        </Badge>
                        <Avatar sx={{height:"30px", width:"30px"}} alt="Cindy Baker" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    </Icons>
                    <UserBox>
                    <Avatar sx={{height:"30px", width:"30px"}} alt="Cindy Baker" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                        <Typography variant="h6">
                            John Doe
                        </Typography>
                    </UserBox>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default Navbar;