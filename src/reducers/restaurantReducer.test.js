import rootReducer from './index';
import {
  getRestaurantsLoading,
  getRestaurantsSuccess,
  getRestaurantsFailure,
} from '../actions/restaurantsActions.js';

const DEFAULT_STATE = {
  visibilityFilter: {
    filters: {
      word: '',
    },
  },
  allRestaurants: {
    isFailure: false,
    isLoading: false,
    restaurants: [],
  },
};

describe('Restaurants reducer', () => {
  test('getRestaurantsSuccess with valid restaurant', () => {
    expect(
      rootReducer(
        DEFAULT_STATE,
        getRestaurantsSuccess([{ name: 'Jaan' }])
      )
    ).toEqual({
      ...DEFAULT_STATE,
      allRestaurants: {
        isFailure: false,
        isLoading: false,
        restaurants: [{ name: 'Jaan' }],
      },
    });
  });

  test('setRestaurantLoading', () => {
    expect(rootReducer(DEFAULT_STATE, getRestaurantsLoading(true))).toEqual({
      ...DEFAULT_STATE,
      allRestaurants: {
        isFailure: false,
        isLoading: true,
        restaurants: [],
      },
    });
  });

  test('setRestaurantError', () => {
    expect(rootReducer(DEFAULT_STATE, getRestaurantsFailure(true))).toEqual({
      ...DEFAULT_STATE,
      allRestaurants: {
        isFailure: true,
        isLoading: false,
        restaurants: [],
      },
    });
  });
});
