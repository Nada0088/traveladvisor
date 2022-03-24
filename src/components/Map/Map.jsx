import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core'; // paper is basicly a div with a bg color, using media query will help with making our map more mobile responsive 
import { LocationOnOutlinedIcon } from '@material-ui/icons/LocationOnOutlined';
import { Rating } from '@material-ui/lab';


import useStyles from './styles';

// Creating dummy components for this components
const Map = () => {

    //Calling the hook
    const classes = useStyles();

    // Call the use media query hook
    // if the device width is larger than 600 px than the variable isMobile will be set to false
    const isMobile = useMediaQuery('(min-width: 600px)');

    const coordinates = {lat: 0, lng: 0};
    // functional component
    return (
       <div className={classes.mapContainer}>
           <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyBQlYBpR3Ih4BfKuAsCXOqQUhdAL32UW1Y'}} // we specify here the google map key that we get from google developers console
            defaultCenter={coordinates}
            center= {coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''} // important for when you change the map
            onChildClick={''} // used when you actually click on a restaurant on the map
           >

           </GoogleMapReact>
       </div>
    );
}

export default Map;