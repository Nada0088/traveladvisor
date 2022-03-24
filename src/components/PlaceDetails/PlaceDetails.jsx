import React from "react";


// Creating dummy components for this components
const PlaceDetails = ({place}) => {
    // functional component
    return (
        // render places and ther names
        <h1> {place.name}</h1>
    );
}

export default PlaceDetails;