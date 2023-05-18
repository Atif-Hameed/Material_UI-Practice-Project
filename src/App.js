import React, { useState } from "react";
import Random from "./component/Random"
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import { Box, ThemeProvider, Container, Stack, createTheme } from "@mui/material";
import myTheme from "./theme";
import Navbar from "./component/Navbar";
import Add from "./component/Add";
const App = () => {

    const [mode, setMode] = useState("light");

    const darkTheme = createTheme({
        palette:{
            mode: mode
        }
    });

    return (
        <>
            {/* <ThemeProvider theme={myTheme}>
        <Random/>
        </ThemeProvider> */}
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={2} justifyContent="space-between" >
                    <Sidebar setMode={setMode} mode={mode}/>
                    <Feed />
                    <Rightbar />          
                </Stack>
                <Add/>
            </Box>
        </ThemeProvider>
        </>
    )
};

export default App;