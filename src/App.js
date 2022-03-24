import React from "react";
//importing things start creating the layouts
import { CssBaseline,Grid } from "@material-ui/core"; // CssBaseline normalises the style, fix some padding marging and background colors
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App= () => { 
    return (
        // create react fragment
        <> 
        <CssBaseline/>
        <Header/>
        {/* creating an inline style so we create an object by using double curl braces*/}
        <Grid container spacing={3} style={{width: '100%'}}> 
            <Grid item xs={12} md={4}> {/* xs: full width on mobile devices,md : medium devices and larger */}
                <List/>
            </Grid>
            <Grid item xs={12} md={8}>
                <Map/>
            </Grid>

        </Grid>
        </>
    );
}
export default App;