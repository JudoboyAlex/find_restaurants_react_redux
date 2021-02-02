import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSelector } from "reselect";
import { fetchRestaurants } from "../actions/restaurantsActions";
import { setVisibilityFilter } from "../actions/visibilityFilterActions";
import RestaurantList from "../components/RestaurantList";

const filteredRestaurants = createSelector(
  (state) => state.allRestaurants.restaurants,
  (state) => state.visibilityFilter.filters,
  (restaurants, filters) =>
    restaurants.filter((restaurant) => {
      return Object.values(restaurant.restaurant).some((value) => {
        return JSON.stringify(value).toLowerCase().includes(filters.word);
      });
    })
);

const RestaurantsPage = () => {
  const dispatch = useDispatch();
  const restaurants = useSelector(filteredRestaurants);
  const isFailure = useSelector((state) => state.allRestaurants.isFailure);
  const isLoading = useSelector((state) => state.allRestaurants.isLoading);
  const { city } = useParams();
  const [words, setWords] = useState("");

  const handleChange = (event) => {
    setWords(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setVisibilityFilter(words.toLowerCase()));
  };

  useEffect(() => {
    dispatch(fetchRestaurants(city));
  }, [city, dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isFailure) {
    return <div>Failed!</div>;
  }

  return (
    <div className="restaurantsListContainer">
      <h1>
        Here Are The Restaurants in <span>{city}</span>
      </h1>
      <h2>Search Restaurants By Keyword</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword" aria-required="true">      
          <span className="inputLabel">Keyword:</span>
        </label>
        <input
          id="keyword"
          name="keyword"
          placeholder="Search By keyword"
          type="text"
          value={words}
          onChange={handleChange}
        />
        <input className="inputBtn" name="submit" type="Submit" value="Submit" onChange={()=>{}}/>
      </form>
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default RestaurantsPage;
