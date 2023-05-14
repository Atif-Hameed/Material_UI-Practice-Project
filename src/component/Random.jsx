import React from "react";
import { Button, IconButton, Card, Toolbar, AppBar, Container, Typography, CardMedia, CardContent, CssBaseline, Grid, styled, Box } from "@mui/material";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';



const UniqueButton = styled(Button)(({theme})=>({
    backgroundColor:theme.palette.myColor.main
}));


const App = () => {
    
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCameraIcon fontSize="large" />
                    <Typography variant="h4">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div >
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="center" gutterBottom color="GrayText" paragraph>
                            This is a paragraph of photo album section and i want to make it as long as possibe so that it looks good in my web page and the page should look attractive
                        </Typography>
                        <div>
                            <Grid container direction="row" justifyContent="center" spacing={2}>
                                <Grid item>
                                    <Button color="myColor" variant="contained">See All Photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button color="secondary" variant="outlined">See All Photos</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <div>
                    <Grid container justifyContent="center" mt={10} bgcolor="primary">
                        <Grid item >
                            <Button variant="contained" >
                                Press Me
                            </Button>
                        </Grid>
                        <Grid item >
                            <UniqueButton>
                                Unique Button
                            </UniqueButton>
                        </Grid>
                    </Grid>

                </div>
            </main>
            <section>
                <div>
                    <Container sx={{backgroundColor:"yellow"}} maxWidth="xl"  justifyContent="center" mt={10}>
                        <Button variant="contained" sx={{backgroundColor:"green"}} > Button-1 </Button>
                        <Button variant="contained" sx={{backgroundColor:"brown"}} > Button-2 </Button>
                        <Button variant="contained" sx={{backgroundColor:"red"}} > Button-3 </Button>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default App;
