import { RESTAURANTS } from '../actions/actionTypes'

export const initialState = {
  isLoading: false,
  isFailure: false,
  restaurants: [],
}

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTAURANTS.GET_RESTAURANTS_LOADING:
      return { ...state, isLoading: true, isFailure: false }
    case RESTAURANTS.GET_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: action.payload, isLoading: false, isFailure: false }
    case RESTAURANTS.GET_RESTAURANTS_FAILURE:
      return { ...state, isLoading: false, isFailure: true }
    default:
      return state
  }
}