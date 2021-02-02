import { combineReducers } from 'redux';
import { restaurantsReducer } from './restaurantsReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';

const rootReducer = combineReducers({
  allRestaurants: restaurantsReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default rootReducer;