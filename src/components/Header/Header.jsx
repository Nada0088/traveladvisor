import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";


import useStyles from './styles'; // Hook

// Creating dummy components for this components
const Header = () => {
    // calling the hook of style
    const classes = useStyles();

    // functional component
    return (
       //  Layout  for navigation Bar 
        <AppBar position ="static">

            <Toolbar className={classes.toolbar}>
                {/* every single text element  */}
                <Typography variant="h5" className={classes.title}>
                    Voyager avec Nous
                </Typography>
                
                <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explorez des Nouvelles Places
                </Typography>

               { /* <Autocomplete> */}
                    < div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase placeholder="Recherchez..." classes={{root: classes.inputRoot, input: classes.inputInput}}/> {/* classes gonna have double curly brases because we gonna add multiple classes therfore adding an object  */}

                    </div>

                {/* </Autocomplete> */} 
                </Box>

            </Toolbar>


        </AppBar>

    );
}

export default Header;