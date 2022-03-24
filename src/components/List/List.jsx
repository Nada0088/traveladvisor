import React, {useState} from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem,FormControl, Select, Card } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles';

// Creating dummy components for this components
const List = () => {
    const classes= useStyles();
    const [type, setType] = useState('restaurants'); // the function useState accepte a parametere which is the first initial value
    // value that's going to be put into the variable 
    // functional component of type

    const [Rating, setRating]= useState();
    const places =[ {name : 'Sérénité '},
                    { name : 'Visites culturelles'},
                    { name : 'Les Meilleurs pastas'},
                    { name: 'Les Meilleurs Pizza '},
                    {name : 'Sérénité '},
                    { name : 'Visites culturelles'},
                    { name : 'Les Meilleurs pastas'},
                    { name: 'Les Meilleurs Pizza '},
                    {name : 'Sérénité '},
                    { name : 'Visites culturelles'},
                    { name : 'Les Meilleurs pastas'},
                    { name: 'Les Meilleurs Pizza '},
                  ]; //each place is an object and have a name property

    return (
       <div className={classes.container}>
           < Typography variant="h4">
               Restaurants, Hotels et centre d'attraction prez de chez vous
           </Typography>
           <FormControl className={classes.formControl}>
               < InputLabel >
                  Type
               </InputLabel>
               < Select value={type} onChange={(e => setType(e.target.value))}>  {/*onChange will give us a call back function that has the event as the parametere, e.target.value: is where the value 
               of the clicked element will be  */}
                   < MenuItem value="restaurants">Restaurants</MenuItem>
                   < MenuItem value="hotels">Hotèls</MenuItem>
                   < MenuItem value="atraction">Centre d'atraction</MenuItem>
               </Select>
           </FormControl>

           <FormControl className={classes.formControl}>
               < InputLabel >
                  Le CLassement
               </InputLabel>
               < Select value={Rating} onChange={(e => setRating(e.target.value))}>  
                   < MenuItem value={0}>Tous</MenuItem>
                   < MenuItem value={3}>Au dessus de 3 stars</MenuItem>
                   < MenuItem value={4}>Au dessus de 4 stars</MenuItem>
                   < MenuItem value={4.5}>Au dessus de 4.5 stars</MenuItem>
               </Select>
           </FormControl>

           {/* creating a card for each specific place*/}
           < Grid container spacing={3} className={classes.list}>
               {/* creating a block of code : only if we have places only them map over them 
               map takes a call back function, in each iteration of the call back it has one new place
                we don't need to open this  as a function, we need to instantly return a piece of jsx so we use () */}
               {places?.map((place, i) => (
                   <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                   </Grid>
               ))}
           </Grid>

       </div>
    );
}

export default List;