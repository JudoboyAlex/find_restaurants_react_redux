import axios from 'axios';

import { RESTAURANTS } from './actionTypes';
import { ZOMATO_API_KEY, ZOMATO_API } from '../utilities/Constants';

export const getRestaurantsLoading = () => ({
  type: RESTAURANTS.GET_RESTAURANTS_LOADING,
});

export const getRestaurantsSuccess = (restaurants = {}) => ({
  type: RESTAURANTS.GET_RESTAURANTS_SUCCESS,
  payload: restaurants,
});

export const getRestaurantsFailure = () => ({
  type: RESTAURANTS.GET_RESTAURANTS_FAILURE,
});

export const fetchRestaurants = (city) => {
  return async dispatch => {
    dispatch(getRestaurantsLoading())
  
    try {
      const locationDetails = await axios.get(`${ZOMATO_API}/locations?query=${city}&apikey=${ZOMATO_API_KEY}`)
      const locationDetailsData = await locationDetails.data.location_suggestions
      const restaurantDetails = await axios.get(`${ZOMATO_API}/search?entity_id=${locationDetailsData[0].entity_id}&entity_type=${locationDetailsData[0].entity_type}&apikey=${ZOMATO_API_KEY}`)
      const restaurantDetailsData = restaurantDetails.data.restaurants
      dispatch(getRestaurantsSuccess(restaurantDetailsData))
    } catch(error){
      dispatch(getRestaurantsFailure())
    }
  }
};
