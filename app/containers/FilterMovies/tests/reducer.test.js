
import { fromJS } from 'immutable';
import filterMoviesReducer from '../reducer';

describe('filterMoviesReducer', () => {
  it('returns the initial state', () => {
    expect(filterMoviesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
