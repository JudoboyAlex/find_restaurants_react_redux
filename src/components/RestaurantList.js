import React from "react";
import Restaurant from "./Restaurant";

const RestaurantList = ({ restaurants }) => {

  return (
    <div className="restaurantsDetailCardContainer">
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.restaurant.name}
          restaurantName={restaurant.restaurant.name}
          restaurantAddress={restaurant.restaurant.location.address}
          restaurantCuisines={restaurant.restaurant.cuisines}
          restaurantRating={restaurant.restaurant.user_rating.aggregate_rating}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
