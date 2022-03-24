import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// Creating dummy components for this components
const Header = () => {
    // functional component
    return (
       //  Layout  for navigation Bar 
        <AppBar position ="static">

            <Toolbar className={classes.toolbar}>
                {/* every single text element  */}
                <Typography variant="h5" className={classes.title}>
                    Travel Advisor
                </Typography>
                
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places
                </Typography>

                <Autocomplete>
                    < div className={classes.search}>
                        <div className={classes.searchicon}>
                            <searchicon/>
                        </div>
                        <InputBase placeholder="Search..." classes={{root: classes.inputRoot, input: classes.inputinput}}/> {/* classes gonna have double curly brases because we gonna add multiple classes therfore adding an object  */}

                    </div>

                </Autocomplete>
                </Box>

            </Toolbar>


        </AppBar>

    );
}

export default Header;