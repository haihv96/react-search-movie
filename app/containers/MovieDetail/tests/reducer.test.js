
import { fromJS } from 'immutable';
import movieDetailReducer from '../reducer';

describe('movieDetailReducer', () => {
  it('returns the initial state', () => {
    expect(movieDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
