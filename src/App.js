import React from "react";
import Random from "./component/Random"
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import { Box, ThemeProvider, Container, Stack } from "@mui/material";
import myTheme from "./theme";
import Navbar from "./component/Navbar";

const App = () => {
    return (
        <>
            {/* <ThemeProvider theme={myTheme}>
        <Random/>
        </ThemeProvider> */}
            <Box>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between" >
                    <Sidebar />
                    <Feed />
                    <Rightbar />
                </Stack>
            </Box>

        </>
    )
};

export default App;