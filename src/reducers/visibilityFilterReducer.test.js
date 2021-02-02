import rootReducer from './index';
import { setVisibilityFilter } from '../actions/visibilityFilterActions.js';

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

describe('Filters reducer', () => {
  test('setVisibilityFilter with valid word', () => {
    expect(rootReducer(DEFAULT_STATE, setVisibilityFilter('Raptors'))).toEqual({
      ...DEFAULT_STATE,
      visibilityFilter: {
        filters: {
          word: 'Raptors',
        },
      },
    });
  });
});