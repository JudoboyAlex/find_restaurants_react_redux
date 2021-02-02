import { FILTER } from '../actions/actionTypes';

export const INITIAL_STATE = {
  filters: { word: "" },
};

export const visibilityFilterReducer = (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case FILTER.SET_VISIBILITY_FILTER:
      return {
        ...state,
        filters: action.payload,
      };
    default:
      return state;
  }
};