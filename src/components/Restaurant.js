import React from 'react';

const Restaurant = ({ restaurantName, restaurantAddress, restaurantCuisines, restaurantRating }) => {
  return (
    <div className="restaurantDetailCard">
        <h3>{restaurantName}</h3>
        <p>Address: {restaurantAddress}</p>
        <p>Type of Cuisine: {restaurantCuisines}</p>
        <p>Rating: {restaurantRating}</p>
    </div>
  );
};

export default Restaurant;