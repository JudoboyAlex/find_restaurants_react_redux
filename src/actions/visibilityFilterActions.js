  
import { FILTER } from './actionTypes';

export const setVisibilityFilter = (word = {}) => ({
  type: FILTER.SET_VISIBILITY_FILTER,
  payload: { word },
});